import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ProfileNavigator from './ProfileNavigator';
import AllShramadanaNavigator from './AllShramadanaNavigator';
import PostsNavigator from './PostsNavigator';
import HostNewCampaignNavigator from './HostNewCampaignNavigator';
import LeaderBoardNavigator from './LeaderBoardNavigator';

const Tab = createBottomTabNavigator();
export default function CampaignsNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: colors.limeGreen,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="All Campaigns"
        component={AllShramadanaNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="home"
              size={43}
              color={colors.primary}
            />
          ),
          
        }}
      />
      <Tab.Screen
        name="PostsNav"
        component={PostsNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="book"
              size={40}
              color={colors.primary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={HostNewCampaignNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={70}
              color={colors.primary}
              style={{ marginTop: -40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Point"
        component={LeaderBoardNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="star-shooting"
              size={45}
              color={colors.primary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileNavigator}
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name="user-circle-o"
              size={40}
              color={colors.primary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
