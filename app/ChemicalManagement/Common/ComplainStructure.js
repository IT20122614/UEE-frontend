import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import avatarBoy from "../assets/avatarBoy.png";
import Icon from "react-native-vector-icons/AntDesign";
import IconC from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

export default function ComplainStructure({ title }) {
  const [like, setLike] = useState(155);
  const [clickLike, setclickLike] = useState(true);
  const [clickComment, setClickComment] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comment, setComments] = useState([]);
  const id = title.id;
  function getComments() {
    axios
      .get(`http://10.0.2.2:8081/api/v1/complain/get-comment/${id}`)
      .then((result) => {
        setComments(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getComments();
  }, []);

  function likeThisPost() {
    setclickLike(false);
    setLike(like + 1);
  }
  function disLikeThisPost() {
    setclickLike(true);
    setLike(like - 1);
  }
  function commentThisPost() {
    setClickComment(true);
  }
  function uncommentThisPost() {
    setClickComment(false);
  }
  function addComment() {
    const comment = {
      complainId: id,
      userName: "kavindu",
      comment: newComment,
    };

    axios
      .post(`http://10.0.2.2:8081/api/v1/complain/add-comments`, comment)
      .then((result) => {
        console.log(result.data);
        setNewComment("");
        getComments();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <View style={styles.item}>
      <View style={styles.row}>
        <View style={styles.profileBox}>
          <Image source={avatarBoy} style={styles.profileImage} />
        </View>
        <View style={styles.nameBox}>
          <Text>Jhone</Text>
        </View>
      </View>
      <View>
        <Text style={styles.blogTitle}>{title.title}</Text>
      </View>
      <View style={styles.blogImage}>
        <Image
          source={{
            uri: title.imgURL,
          }}
          style={{
            width: "100%",
            height: 320,
            borderWidth: 1,
            borderColor: "black",
          }}
        />
      </View>
      <View>
        <Text style={styles.dateTimeText}>2022-10-02</Text>
      </View>
      <View>
        <Text style={styles.contentStyle}>{title.content}</Text>
      </View>
      {/* <View style={styles.row}>
        <View style={styles.TimeDateBox1}>
          <Text style={styles.dateTimeText}>Date 2022-10-02</Text>
        </View>
        <View style={styles.TimeDateBox2}>
          <Text style={styles.dateTimeText}>Time 20:00 PM</Text>
        </View>
      </View> */}
      <View style={styles.row3}>
        <View style={styles.TimeDateBox3}>
          <Text style={styles.dateTimeText}>Support {like}</Text>
        </View>
        <View style={styles.TimeDateBox4}>
          {clickComment ? (
            <IconC
              style={styles.bellStyle}
              name="comment"
              size={22}
              color="#fff"
              onPress={uncommentThisPost}
            />
          ) : (
            <IconC
              style={styles.bellStyle}
              name="comment-outline"
              size={22}
              color="#fff"
              onPress={commentThisPost}
            />
          )}
        </View>
        <View style={styles.TimeDateBox4}>
          {clickLike ? (
            <Icon
              style={styles.bellStyle}
              name="like2"
              size={22}
              color="#fff"
              onPress={likeThisPost}
            />
          ) : (
            <Icon
              style={styles.bellStyle}
              name="like1"
              size={22}
              color="#fff"
              onPress={disLikeThisPost}
            />
          )}
        </View>
      </View>
      <View>
        {clickComment ? (
          <View style={styles.commentAll}>
            {comment.map((data, index) => {
              return (
                <View style={styles.singleComment} key={index}>
                  <View style={styles.rowComment}>
                    <View style={styles.profileBox}>
                      <Image source={avatarBoy} style={styles.profileImage} />
                    </View>
                    <View style={styles.nameBox}>
                      <Text>{data.userName}</Text>
                    </View>
                  </View>
                  <Text>{data.comment}</Text>
                </View>
              );
            })}
            <View>
              <TextInput
                style={styles.commentInput}
                onChangeText={setNewComment}
                value={newComment}
                placeholder="Comment..."
              />
            </View>
            <TouchableOpacity style={styles.commentBtn} onPress={addComment}>
              <Text>Add Comment</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commentInput: {
    height: 30,
    borderWidth: 2,
    borderColor: "white",
    margin: 3,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 15,
  },
  commentBtn: {
    backgroundColor: "orange",
    width: 100,
    padding: 4,
    marginLeft: "60%",
  },
  singleComment: {
    backgroundColor: "#6BFB74",
    marginTop: 10,
    borderRadius: 10,
    padding: 5,
  },
  commentAll: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
  rowComment: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 5,
  },
  profileImage: {
    width: 26,
    height: 26,
  },
  blogImageContent: {
    width: 300,
  },
  contentStyle: {
    marginLeft: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  dateTimeText: {
    color: "white",
    fontWeight: "bold",
  },
  blogImage: {},
  blogTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 5,
  },
  row3: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box1: {
    paddingLeft: 0,
    paddingTop: 10,
    width: "70%",
  },
  box2: {
    padding: 10,
    borderRadius: 10,
    width: "30%",
  },
  TimeDateBox1: {
    paddingLeft: 0,
    paddingTop: 10,
    marginLeft: 25,
  },
  TimeDateBox2: {
    padding: 10,
    borderRadius: 10,
    marginLeft: 50,
  },
  TimeDateBox3: {
    paddingLeft: 0,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 40,
  },
  TimeDateBox4: {
    padding: 10,
    borderRadius: 10,
    marginLeft: 40,
  },
  profileBox: {
    paddingLeft: 0,
    paddingTop: 10,
  },
  nameBox: {
    padding: 10,
    borderRadius: 10,
  },
  item: {
    backgroundColor: "#26a303",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowOffset: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 32,
  },
});
