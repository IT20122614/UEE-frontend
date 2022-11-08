import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";
import { translate } from "../components/common/translator";
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
const Stack = createStackNavigator();

export default function LeaderBoardNavigator() {
  return (
    <Stack.Navigator presentation="modal">
      <Stack.Screen
        name="Points"
        component={LeaderBoardScreen}
        options={{
          headerTitle: translate("LeaderBoard"),
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 18,
            fontWeight: "bold",
          },
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
    </Stack.Navigator>
  );
}
