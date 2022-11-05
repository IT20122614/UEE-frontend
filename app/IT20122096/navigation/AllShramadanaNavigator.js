import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AllShramadanaListScreen from "../screens/AllShramadanaListScreen";
import colors from "../config/colors";
import ContributionFormScreen from "../screens/ContributionFormScreen";
import SelectedCampaignScreen from "../screens/SelectedCampaignScreen";
import {translate} from "../components/common/translator";
const Stack = createStackNavigator();
export default function AllShramadanaNavigator() {
  return (
    <Stack.Navigator presentation="modal">
      <Stack.Screen
        name="All Campaign"
        component={AllShramadanaListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Campaign"
        component={SelectedCampaignScreen}
        options={{
          headerTitle: "",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
      <Stack.Screen
        name="ContributionForm"
        component={ContributionFormScreen}
        options={{
          headerTitle: translate("CYSHeader"),
          headerTitleStyle: { color: colors.primary },
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
    </Stack.Navigator>
  );
}
