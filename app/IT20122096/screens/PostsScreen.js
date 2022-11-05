import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/common/Screen";
import colors from "../config/colors";
import { FlatGrid } from "react-native-super-grid";
import { translate } from "../components/common/translator";
import PostCard from "../components/PostsScreen/PostCard";
import routes from "../navigation/routes";

const posts = [
  {
    id: "1",
    campaignId: "123456",
    userId: "123456",
    campaign: { place: "Gamapaha", date: "2022-11-04" },
    description: "asfsgsagsagasgasga",
    image: require("../assets/post.jpg"),
    likeCount: 5,
    commentsCount: 5,
    comments: [
      {
        id: "",
        postId: "",
        comment: "asfsasgsagasgsagasgsagsag",
        userId: "",
        userName: "Chamath Kavindy",
        image: require("../assets/avatar.png"),
      },
    ],
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
      },
    ],
  },
];

export default function PostsScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.text}>{translate("Posts")}</Text>
      </View>
      <View style={styles.body}>
        <FlatGrid
          itemDimension={130}
          data={posts}
          spacing={10}
          renderItem={({ item }) => (
            <PostCard
              item={item}
              onPress={() => {
                navigation.navigate(routes.SELECTED_POST, { item });
              }}
            />
          )}
          refreshing={true}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.limeGreen,
    height: 60,
    width: "100%",
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    height: "86%",
  },
});
