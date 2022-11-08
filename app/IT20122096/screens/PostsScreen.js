import React, { useEffect, useState } from "react";
import { RefreshControl, StyleSheet, Text, View } from "react-native";
import Screen from "../components/common/Screen";
import colors from "../config/colors";
import { FlatGrid } from "react-native-super-grid";
import { translate } from "../components/common/translator";
import PostCard from "../components/PostsScreen/PostCard";
import routes from "../navigation/routes";
import AppButton from "../components/common/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { getAllPosts } from "../api/postService";
import * as SecureStore from "expo-secure-store";

const posts1 = [
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

export default function PostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [contributors,setContributore]=useState([])
  const [isFilterd, SetIsFilterd] = useState(false);
  const [userId, setUserId] = useState("");
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getPosts();
  }, []);

  const getPosts = async () => {
    const userId = await SecureStore.getItemAsync("userId");
    setUserId(userId);
    await getAllPosts()
      .then(({ data }) => {
        setPosts(data);
        setRefreshing(false);
      })
      .catch((error) => console.log(error));
  };

  const filter = () => {
    let filteredPosts = [];
    if (isFilterd) {
      filteredPosts = posts.filter((post) =>
        post.contributors
      );
    } else {
      filteredPosts = posts;
    }
    return filteredPosts;
  };

  // console.log(
  //   posts.filter((post) =>
  //     post.contributors.
  //   )
  // );
  return (
    <Screen>
      <View style={styles.body}>
        <AppButton
          title={translate("MyContributions")}
          style={styles.button}
          icon={
            <MaterialIcons
              name={isFilterd ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={25}
              color={colors.white}
            />
          }
          onPress={() => {
            SetIsFilterd(!isFilterd);
          }}
        />
        <FlatGrid
          itemDimension={130}
          data={filter()}
          spacing={10}
          renderItem={({ item }) => (
            <PostCard
              item={item}
              onPress={() => {
                navigation.navigate(routes.SELECTED_POST, { item });
              }}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
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
