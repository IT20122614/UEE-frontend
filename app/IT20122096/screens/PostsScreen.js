import React, { useEffect, useState } from "react";
import { RefreshControl, StyleSheet, View } from "react-native";
import Screen from "../components/common/Screen";
import colors from "../config/colors";
import { FlatGrid } from "react-native-super-grid";
import { translate } from "../components/common/translator";
import PostCard from "../components/PostsScreen/PostCard";
import routes from "../navigation/routes";
import AppButton from "../components/common/AppButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { getAllPosts } from "../api/postService";
import * as SecureStore from "expo-secure-store";

export default function PostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
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
      filteredPosts = posts.filter((post) => post.userId === userId);
    } else {
      filteredPosts = posts;
    }
    return filteredPosts;
  };

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
    height: "100%",
  },
  button: {
    width: 170,
    height: 35,
    borderRadius: 5,
    alignSelf: "flex-end",
    margin: 10,
  },
});
