import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";
import { translate } from "../components/common/translator";
import CreateCampaignHost from '../screens/CreateCampaignHost';
const Stack = createStackNavigator();
export default function HostNewCampaignNavigator() {
  return (
    <Stack.Navigator presentation="modal">
      <Stack.Screen
        name="Host"
        component={CreateCampaignHost}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
