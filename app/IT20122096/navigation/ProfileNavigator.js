import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import colors from "../config/colors";
import { translate } from "../components/common/translator";

const Stack = createStackNavigator();
export default function ProfileNavigator() {
  return (
    <Stack.Navigator presentation="modal">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: translate("Profile"),
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 20,
            fontWeight: "bold",
          },
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
