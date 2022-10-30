import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { View, Text } from "react-native";

import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAQqRGZ48D299XsHWcvrdIfLw-nQ256K2s",
  authDomain: "uee-project-29d8d.firebaseapp.com",
  databaseURL: "https://uee-project-29d8d-default-rtdb.firebaseio.com",
  projectId: "uee-project-29d8d",
  storageBucket: "uee-project-29d8d.appspot.com",
  messagingSenderId: "861692344816",
  appId: "1:861692344816:web:fa928964c773a8a9118535",
  measurementId: "G-B8TCR2FF64"
};

// Initialize Firebase
initializeApp(firebaseConfig);

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import LoginScreen from "./components/auth/Login";
import MainScreen from "./components/Main";
import AddScreen from "./components/main/Add";
import SaveScreen from "./components/main/Save";
import CommentScreen from "./components/main/Comment";


const Stack = createStackNavigator();

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
    };
  }

  componentDidMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        this.setState({ loggedIn: false, loaded: true });
      } else {
        this.setState({ loggedIn: true, loaded: true });
      }
    });
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Loading</Text>
        </View>
      );
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Main"
              component={MainScreen}
            />
            <Stack.Screen
              name="Add"
              component={AddScreen}
              navigation={this.props.navigation}
            />
            <Stack.Screen
              name="Save"
              component={SaveScreen}
              navigation={this.props.navigation}

            />
            <Stack.Screen
              name="Comment"
              component={CommentScreen}
              navigation={this.props.navigation}

            />
          </Stack.Navigator>
          </NavigationContainer>
      </Provider>
    );
  }
}
