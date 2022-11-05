import React, { useState } from "react";
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

export default function EventStructure({ title }) {
  const [like, setLike] = useState(155);
  const [clickLike, setclickLike] = useState(true);

  function likeThisPost() {
    setclickLike(false);
    setLike(like + 1);
  }
  function disLikeThisPost() {
    setclickLike(true);
    setLike(like - 1);
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
            uri: "https://www.hatkosoundbarrier.com/wp-content/uploads/2020/02/What-are-the-Types-of-Environmental-Pollution-3.jpg",
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
      <View style={styles.row}>
        <View style={styles.TimeDateBox1}>
          <Text style={styles.dateTimeText}>Date 2022-10-02</Text>
        </View>
        <View style={styles.TimeDateBox2}>
          <Text style={styles.dateTimeText}>Time 20:00 PM</Text>
        </View>
      </View>
      <View style={styles.row3}>
        <View style={styles.TimeDateBox3}>
          <Text style={styles.dateTimeText}>Support {like}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  TimeDateBox4: {
    padding: 10,
    borderRadius: 10,
    marginLeft: 180,
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
