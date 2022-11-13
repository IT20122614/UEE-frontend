import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import colors from "../config/colors";
import { translate } from "../components/common/translator";
import CampaignYouHostScreen from "../screens/CampaignYouHostScreen";
import MyPostsScreen from "../screens/MyPostsScreen";
import PointsHistoryScreen from "../screens/PointsHistoryScreen";
import SelectedMyCampaignScreen from "../screens/SelectedMyCampaignScreen";
import SelectedMyPostScreen from "../screens/SelectedMyPostScreen";
import AttendenceScreen from "../screens/AttendenceScreen";
import CreatePostFormScreen from "../screens/CreatePostFormScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

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
          // headerRight: (props) => (
          //   <Ionicons
          //     name="ios-settings"
          //     size={33}
          //     color={colors.primary}
          //     style={{ marginRight: 10 }}
          //     onPress={() => {
          //       console.log("click")
          //     }}
          //   />
          // ),
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 20,
            fontWeight: "bold",
          },
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
      <Stack.Screen
        name="HostCampaigns"
        component={CampaignYouHostScreen}
        options={{
          headerTitle: translate("CampaignsYouHost"),
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 20,
            fontWeight: "bold",
          },
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
      <Stack.Screen
        name="MyPost"
        component={MyPostsScreen}
        options={{
          headerTitle: translate("MyPosts"),
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 20,
            fontWeight: "bold",
          },
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
      <Stack.Screen
        name="PointsHistory"
        component={PointsHistoryScreen}
        options={{
          headerTitle: translate("PointsHistory"),
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 20,
            fontWeight: "bold",
          },
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
      <Stack.Screen
        name="SelectedMyCampaign"
        component={SelectedMyCampaignScreen}
        options={{
          headerTitle: "",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 20,
            fontWeight: "bold",
          },
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
      <Stack.Screen
        name="SelectedMyPosts"
        component={SelectedMyPostScreen}
        options={{
          headerTitle: "",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 20,
            fontWeight: "bold",
          },
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
      <Stack.Screen
        name="Attendence"
        component={AttendenceScreen}
        options={{
          headerTitle: translate("MarkAttendence"),
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 20,
            fontWeight: "bold",
          },
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePostFormScreen}
        options={{
          headerTitle: translate("CreatePost"),
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 20,
            fontWeight: "bold",
          },
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
    </Stack.Navigator>
  );
}
