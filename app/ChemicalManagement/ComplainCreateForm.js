import React from "react";
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

  function addNewComplain() {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
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
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Title here"
          />
        </View>
        <View>
          <Text style={styles.titleStyle}>Image URL</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
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
