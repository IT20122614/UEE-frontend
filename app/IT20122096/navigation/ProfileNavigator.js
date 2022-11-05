import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();
export default function ProfileNavigator() {
  return (
    <Stack.Navigator presentation= "modal">
      <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
