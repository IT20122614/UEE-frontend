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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Blogs" component={BlogsPage} />
        <Stack.Screen name="Event" component={EventCreateForm} />
        <Stack.Screen name="Events" component={EventsPage} />
        <Stack.Screen name="Complain" component={ComplainCreateForm} />
        <Stack.Screen name="Complains" component={ComplainsPage} />
        <Stack.Screen name="Blog" component={BlogCreateForm} />
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
