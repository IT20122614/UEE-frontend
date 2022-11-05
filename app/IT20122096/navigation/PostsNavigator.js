import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";
import { translate } from "../components/common/translator";
import SelectedPost from '../screens/SelectedPost';
import PostsScreen from '../screens/PostsScreen';
import CommentsScreen from '../screens/CommentsScreen';
const Stack = createStackNavigator();
export default function PostsNavigator() {
  return (
    <Stack.Navigator presentation="modal">
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Post"
        component={SelectedPost}
        options={{
          headerTitle: "",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerTitle: translate("Comments"),
          headerTitleAlign: "center",
          headerTitleStyle:{color:colors.primary,fontSize:20,fontWeight:"bold"},
          headerStyle: { backgroundColor: colors.limeGreen },
        }}
      />
    </Stack.Navigator>
  );
}
