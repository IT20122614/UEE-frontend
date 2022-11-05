import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/common/Screen";
import colors from "../config/colors";
import { FlatGrid } from "react-native-super-grid";
import { translate } from "../components/common/translator";
import PostCard from "../components/PostsScreen/PostCard";
import routes from "../navigation/routes";
import AppButton from "../components/common/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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
        id: "1",
        postId: "",
        comment:
          "asfsasgs agasgsa gasgsagsag sfsfasf fasf asfs a fsafsfsafa fsafsafsa fasfasf fsaf ",
        userId: "",
        userName: "Chamath Kavindy",
        image: require("../assets/avatar.png"),
      },
      {
        id: "2",
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
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
      },
      {
        id: "3",
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
        id: "1",
        postId: "",
        comment:
          "asfsasgs agasgsa gasgsagsag sfsfasf fasf asfs a fsafsfsafa fsafsafsa fasfasf fsaf ",
        userId: "",
        userName: "Chamath Kavindy",
        image: require("../assets/avatar.png"),
      },
      {
        id: "2",
        postId: "",
        comment: "asfsasgsagasgsagasgsagsag",
        userId: "",
        userName: "Chamath Kavindy",
        image: require("../assets/avatar.png"),
      },
    ],
    contributors: [
      {
        id: "6",
        userId: "623",
        name: "chamath Kavindya",
      },
      {
        id: "6",
        userId: "623",
        name: "chamath Kavindya",
      },
      {
        id: "6",
        userId: "623",
        name: "chamath Kavindya",
      },
      {
        id: "6",
        userId: "623",
        name: "chamath Kavindya",
      },
      {
        id: "6",
        userId: "623",
        name: "chamath Kavindya",
      },
      {
        id: "6",
        userId: "623",
        name: "chamath Kavindya",
      },
    ],
  },
];

export default function MyPostsScreen({ navigation }) {
  const [isFilterd, SetIsFilterd] = useState(false);
  const filter = () => {
    let filteredPosts = [];
    if (isFilterd) {
      filteredPosts = posts.filter((post) =>
        post.contributors.filter((con) => con.userId === "chamath Kavindya")
      );
    } else {
      filteredPosts = posts;
    }
    return filteredPosts;
  };
  return (
    <Screen>
      <View style={styles.body}>
        <FlatGrid
          itemDimension={130}
          data={filter()}
          spacing={10}
          renderItem={({ item }) => (
            <PostCard
              item={item}
              onPress={() => {
                navigation.navigate(routes.SELECTED_MY_POSTS, { item });
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
  button: {
    width: 170,
    height: 35,
    borderRadius: 5,
    alignSelf: "flex-end",
    margin: 10,
  },
});
