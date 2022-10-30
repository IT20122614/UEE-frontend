import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import BlogCreateForm from "./app/ChemicalManagement/BlogCreateForm";
import ComplainCreateForm from "./app/ChemicalManagement/ComplainCreateForm";
import EventCreateForm from "./app/ChemicalManagement/EventCreateForm";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Blogs" component={BlogCreateForm} />
        <Stack.Screen name="Event" component={EventCreateForm} />
        <Stack.Screen name="Complain" component={ComplainCreateForm} />
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
