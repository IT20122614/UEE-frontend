import React, { Component } from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchUser,
  fetchUserPosts,
  fetchUserFollowing,
  clearData,
} from "../redux/actions/index";

import FeedScreen from "./main/Feed";
import ProfileScreen from "./main/Profile";
import SearchScreen from "./main/Search";
import { getAuth } from "firebase/auth";

const EmptyScreen = () => {
  return null;
};

let search = EmptyScreen;

const Tab = createMaterialBottomTabNavigator();

export class Main extends Component {
  componentDidMount() {
    this.props.clearData();
    this.props.fetchUser();
    this.search();
    this.props.fetchUserPosts();
    this.props.fetchUserFollowing();
  }

  search() {
    if (getAuth().currentUser.uid == "fWoc7UcF7yMD8Gqbf0TUDfe0eJq1") {
      search = (
        <Tab.Screen
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("Add");
            },
          })}
          name="AddContainer"
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-box"
                color={color}
                size={size}
              />
            ),
          }}
        />
      );
    }
  }

  render() {
    console.log(search);

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Tab.Navigator initialRouteName="Feed" labeled={false}>
          <Tab.Screen
            name="Feed"
            component={FeedScreen}
            navigation={this.props.navigation}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            navigation={this.props.navigation}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="magnify"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            listeners={({ navigation }) => ({
              tabPress: (event) => {
                event.preventDefault();
                navigation.navigate("Profile", {
                  uid: getAuth().currentUser.uid,
                });
              },
            })}
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-circle"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          {search}
        </Tab.Navigator>
      </View>
    );
  }
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators(
    { fetchUser, fetchUserPosts, fetchUserFollowing, clearData },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchProps)(Main);
