import { getAuth } from "firebase/auth";
import { getFirestore, deleteDoc, doc, setDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";

function Feed(props, { navigation }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (
      props.usersFollowingLoaded == props.following.length &&
      props.following.length !== 0
    ) {
      props.feed.sort(function (a, b) {
        return a.creation - b.creation;
      });
      setPosts(props.feed);
    }
  }, [props.usersFollowingLoaded, props.feed]);

  const onLikePress = async (userId, postId) => {
    const auth = getAuth();
    const db = getFirestore();

    await setDoc(
      doc(
        db,
        "posts",
        userId,
        "userPosts",
        postId,
        "likes",
        auth.currentUser.uid
      ),
      {}
    );
  };

  const onDislikePress = async (userId, postId) => {
    const auth = getAuth();
    const db = getFirestore();

    await deleteDoc(
      doc(
        db,
        "posts",
        userId,
        "userPosts",
        postId,
        "likes",
        auth.currentUser.uid
      )
    );
  };

  console.log(posts);

  return (
    <View style={styles.container}>
      <View style={styles.containerGalley}>
      <Image
        source={require("../../assets/image1.png")}
        style={styles.mainImage}
      ></Image>
        <FlatList
          style={styles.list}
          numColumns={1}
          horizontal={false}
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.form}>
              <View style={styles.containerImage}>
                <Text style={styles.container}>{item.user.name}</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Post", { item })}
                >
                  <Image
                    style={styles.image}
                    source={{ uri: item.downloadURL }}
                  />
                </TouchableOpacity>
                <View style={styles.storeForm}>
                <Text style={styles.storeText}>
                  {item.caption.storeName}
                </Text>
                </View>
                <View style={styles.plantForm}>
                <Text style={styles.plantText}>
                  {item.caption.plantName}
                </Text>
                </View>
                <View style={styles.commentForm}>
                <Text
                style={styles.commentText}
                  onPress={() =>
                    props.navigation.navigate("Comment", {
                      postId: item.id,
                      uid: item.user.uid,
                    })
                  }
                >
                  View Comments...
                </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInfo: {
    margin: 20,
  },
  containerGalley: {
    flex: 1,
    backgroundColor: "#73e24c",
  },
  mainImage: {
    borderRadius: 30,
    marginLeft: "25%",
    marginTop: 10,
    marginLeft: 50,
    height: 130,
    width: 300,
  },
  image: {
    borderRadius: 30,
    marginLeft: "25%",
    marginTop: 10,
    marginLeft: 10,
    height: 170,
    width: 170,
  },
  form: {
    height: 200,
    width: 350,
    backgroundColor: "#b2fc81",
    marginTop: 10,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  storeForm: {
    height: 30,
    width: 150,
    backgroundColor: "#d9d9d9",
    marginTop: -110,
    borderRadius: 20,
    marginLeft: 190,
  },
  storeText: {
    marginTop: 3,
    marginLeft: 20,
    fontWeight: "bold",
  },
  plantForm: {
    height: 30,
    width: 150,
    backgroundColor: "#d9d9d9",
    marginTop: -80,
    borderRadius: 20,
    marginLeft: 190,
  },
  plantText: {
    marginTop: 3,
    marginLeft: 20,
    fontWeight: "bold",
  },
  commentForm: {
    height: 30,
    width: 150,
    backgroundColor: "#d9d9d9",
    marginTop: 100,
    borderRadius: 20,
    marginLeft: 190,
  },
  commentText: {
    marginTop: 3,
    marginLeft: 20,
    fontWeight: "bold",
  },
  containerImage: {
    flex: 1 / 3,
  },
  list: {
    marginTop: 10,
    borderRadius: 20,
    height: 300,
  },

});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  following: store.userState.following,
  feed: store.usersState.feed,
  usersFollowingLoaded: store.usersState.usersFollowingLoaded,
});

export default connect(mapStateToProps, null)(Feed);
