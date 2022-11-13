import React, { useEffect, useState } from "react";
import { RefreshControl, StyleSheet, View } from "react-native";
import Screen from "../components/common/Screen";
import colors from "../config/colors";
import { FlatGrid } from "react-native-super-grid";
import PostCard from "../components/PostsScreen/PostCard";
import routes from "../navigation/routes";
import { getAllPostsByUserId } from "../api/postService";

export default function MyPostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getPosts();
  }, []);

  const getPosts = async () => {
    await getAllPostsByUserId()
      .then(({ data }) => {
        setPosts(data);
        setRefreshing(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Screen>
      <View style={styles.body}>
        <FlatGrid
          itemDimension={130}
          data={posts}
          spacing={10}
          renderItem={({ item }) => (
            <PostCard
              item={item}
              onPress={() => {
                navigation.navigate(routes.SELECTED_MY_POSTS, { item });
              }}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{ height: 100 }}
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
