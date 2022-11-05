import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/IT20122096/navigation/AppNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  AsyncStorage.setItem("locale","en");
  return (
    
    <NavigationContainer>
      
      <AppNavigator />
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
