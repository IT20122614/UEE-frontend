import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import SectionsScreen from '../screens/SectionsScreen';
import CampaignsNavigator from './CampaignsNavigator';

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sections"
        component={SectionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CampaignsNavigator"
        component={CampaignsNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
