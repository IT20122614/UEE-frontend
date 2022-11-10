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
import BlogStructure from "./Common/BlogStructure";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "Environmental pollution is unwarranted",
//     content:
//       "Environmental pollution is unwarranted disposal of mass or energy into earth's natural resource pool such as water, land, or air that results in long- or short-term detriment to the atmosphere and its ecological health to negatively impact the living beings and their life both quantitatively and qualitatively",
//     imgURL:
//       "https://www.hatkosoundbarrier.com/wp-content/uploads/2020/02/What-are-the-Types-of-Environmental-Pollution-3.jpg",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//     content:
//       "Environmental pollution is unwarranted disposal of mass or energy into earth's natural resource pool such as water, land, or air that results in long- or short-term detriment to the atmosphere and its ecological health to negatively impact the living beings and their life both quantitatively and qualitatively",
//     imgURL:
//       "https://www.hatkosoundbarrier.com/wp-content/uploads/2020/02/What-are-the-Types-of-Environmental-Pollution-3.jpg",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//     content:
//       "Environmental pollution is unwarranted disposal of mass or energy into earth's natural resource pool such as water, land, or air that results in long- or short-term detriment to the atmosphere and its ecological health to negatively impact the living beings and their life both quantitatively and qualitatively",
//     imgURL:
//       "https://www.hatkosoundbarrier.com/wp-content/uploads/2020/02/What-are-the-Types-of-Environmental-Pollution-3.jpg",
//   },
// ];

export default function BlogsPage({ navigation }) {
  const renderItem = ({ item }) => <BlogStructure title={item} />;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    function getComments() {
      axios
        .get(`http://10.0.2.2:8081/api/v1/blog/display-all-blogs`)
        .then((result) => {
          setBlogs(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getComments();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box1}>
          <Icon
            style={styles.bellStyle}
            name="bell"
            size={22}
            color="#26a303"
          />
        </View>
        <View style={styles.box2}>
          <Icon
            style={styles.bellStyle}
            name="plus"
            size={35}
            color="#26a303"
            onPress={() => navigation.navigate("Blog")}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={blogs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  bellStyle: {
    // marginLeft: "85%",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 5,
  },
  box1: {
    paddingLeft: 0,
    paddingTop: 10,
    marginRight: "40%",
    marginLeft: 20,
  },
  box2: {
    padding: 10,
    borderRadius: 10,
    marginLeft: "30%",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
