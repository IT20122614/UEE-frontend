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
import HomeEventList from "./Common/HomeEventList";
import axios from "axios";

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     name: "Jhone",
//     title: "Pollution is the introduction of harmful materials",
//     date: "25/02/2022",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     name: "Jhone",
//     title: "Second Item",
//     date: "25/02/2022",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d742",
//     name: "Jhone",
//     title: "Third Item",
//     date: "25/02/2022",
//   },
// ];

export default function HomePage({ navigation }) {
  const renderItem = ({ item }) => <HomeEventList title={item} />;

  const [events, setEvents] = useState([]);

  useEffect(() => {
    function getComments() {
      axios
        .get(`http://10.0.2.2:8081/api/v1/event/display-all-events`)
        .then((result) => {
          setEvents(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getComments();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.headerStyle}>
            Welcome to Chemical Sound Management
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.box1}>
            <TouchableOpacity onPress={() => navigation.navigate("Blogs")}>
              <Text style={styles.categoryText}>Blogs</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box1}>
            <TouchableOpacity onPress={() => navigation.navigate("Complains")}>
              <Text style={styles.categoryText}>Complains</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.eventsCategory}>
          <TouchableOpacity onPress={() => navigation.navigate("Events")}>
            <Text style={styles.categoryText2}>Events</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Text style={styles.subTitle}>New Events</Text>
          </View>
          <View>
            <FlatList
              data={events}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  subTitle: {
    marginTop: 40,
    fontSize: 16,
    marginLeft: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  headerStyle: {
    fontSize: 18,
    color: "#aaaba9",
    textAlign: "center",
    marginTop: 25,
    marginBottom: 20,
  },
  eventsCategory: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26a303",
    borderRadius: 10,
    marginTop: 20,
    width: 280,
    height: 130,
    marginLeft: "18%",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    paddingLeft: 0,
    paddingTop: 10,
    marginLeft: 20,
    width: 130,
    height: 130,
    backgroundColor: "#26a303",
    borderRadius: 10,
  },
  box2: {
    padding: 10,
    borderRadius: 10,
  },
  categoryText: {
    textAlign: "center",
    marginTop: "30%",
    color: "white",
    fontSize: 18,
  },
  categoryText2: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
