import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SectionsScreen from '../screens/SectionsScreen';
import CampaignsNavigator from './CampaignsNavigator';
import { translate } from '../components/common/translator';
import colors from '../config/colors';

const Stack = createNativeStackNavigator();
export default function SectionNavigator() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Sections"
        component={SectionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CampaignsNavigator"
        component={CampaignsNavigator}
        options={{ headerShown: false }}
        // options={{
        //   headerTitle: translate("All_Shramadana_Campaigns"),
        //   headerTitleAlign: "center",
        //   headerTitleStyle: {
        //     color: colors.primary,
        //     fontSize: 20,
        //     fontWeight: "bold",
        //   },
        //   headerStyle: { backgroundColor: colors.limeGreen },
        // }}
      />
    </Stack.Navigator>
  );
}
