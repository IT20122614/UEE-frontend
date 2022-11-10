import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import BlogCreateForm from "./app/ChemicalManagement/BlogCreateForm";
import ComplainCreateForm from "./app/ChemicalManagement/ComplainCreateForm";
import EventCreateForm from "./app/ChemicalManagement/EventCreateForm";
import BlogsPage from "./app/ChemicalManagement/BlogsPage";
import HomePage from "./app/ChemicalManagement/HomePage";
import EventsPage from "./app/ChemicalManagement/EventsPage";
import ComplainsPage from "./app/ChemicalManagement/ComplainsPage";

import BottomNavigationBar from "./app/RecycleApp/BottomNavigationBar";
import ItemView from "./app/RecycleApp/ItemView";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chemical Management" component={HomePage} />
        <Stack.Screen name="Blogs" component={BlogsPage} />
        <Stack.Screen name="Event" component={EventCreateForm} />
        <Stack.Screen name="Events" component={EventsPage} />
        <Stack.Screen name="Complain" component={ComplainCreateForm} />
        <Stack.Screen name="Complains" component={ComplainsPage} />
        <Stack.Screen name="Blog" component={BlogCreateForm} />
        <Stack.Screen
          name="Recycle"
          options={{ headerShown: false }}
          component={BottomNavigationBar}
        />
        <Stack.Screen
          name="SingleView"
          options={{ headerShown: false }}
          component={ItemView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
