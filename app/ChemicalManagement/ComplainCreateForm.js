import axios from "axios";
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
import MultipleTextField from "./Common/MultipleTextField";

export default function ComplainCreateForm() {
  const [number, onChangeNumber] = React.useState(null);
  const [address, setAddress] = React.useState("");
  const [title, settitle] = React.useState("");
  const [imageUrl, setimageUrl] = React.useState("");

  function addNewComplain() {
    alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

    const eventData = {
      title: title,
      userName: "kavindu",
      imageUrl: imageUrl,
      content: address,
    };

    axios
      .post(`http://10.0.2.2:8081/api/v1/complain/add-new`, eventData)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(eventData);
  }

  return (
    <SafeAreaView style={styles.mainSheet}>
      <View>
        <Text style={styles.createBogHeader}>Create New Complain</Text>
      </View>
      <View style={styles.bodySheet}>
        <View>
          <Text style={styles.titleStyle}>Title</Text>
          <TextInput
            style={styles.input}
            onChangeText={settitle}
            value={title}
            placeholder="Title here"
          />
        </View>
        <View>
          <Text style={styles.titleStyle}>Image URL</Text>
          <TextInput
            style={styles.input}
            onChangeText={setimageUrl}
            value={imageUrl}
            placeholder="Image URL here"
          />
        </View>
        <View>
          <Text style={styles.titleStyle}>Content</Text>
          <MultipleTextField
            multiline
            numberOfLines={4}
            onChangeText={(text) => setAddress(text)}
            value={address}
            style={styles.multiText}
            placeholder="Content here"
          />
        </View>
        <View style={styles.createNewBtnMain}>
          <Button
            title="Create New"
            onPress={addNewComplain}
            style={styles.createNewBtn}
            color="#629c45"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  createBogHeader: {
    color: "#629c45",
    textAlign: "center",
    fontSize: 22,
    marginTop: 40,
    fontWeight: "bold",
  },
  mainSheet: {
    backgroundColor: "white",
    paddingBottom: 200,
  },
  bodySheet: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  titleStyle: {
    color: "#629c45",
    fontSize: 16,
    marginBottom: 15,
    marginTop: 32,
  },
  input: {
    height: 40,
    padding: 10,
    outline: 1,
    borderBottomWidth: 2,
    borderColor: "#629c45",
  },
  multiText: {
    paddingLeft: 10,
    outline: 1,
    borderWidth: 1,
    borderColor: "#629c45",
  },
  createNewBtn: {
    marginTop: 50,
    padding: 15,
    borderRadius: 10,
  },
  createNewBtnMain: {
    marginTop: 50,
  },
});
