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

export default function ComplainCreateForm() {
  const [number, onChangeNumber] = React.useState(null);

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
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Content here"
            multiline
            numberOfLines={4}
          />
        </View>
        <View style={styles.createNewBtnMain}>
          <Button
            title="Create New"
            onPress={() => Alert.alert("Cannot press this one")}
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
  createNewBtn: {
    marginTop: 50,
    padding: 15,
    borderRadius: 10,
  },
  createNewBtnMain: {
    marginTop: 50,
  },
});
