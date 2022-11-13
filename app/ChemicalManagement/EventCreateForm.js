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
  Alert,
} from "react-native";
import MultipleTextField from "./Common/MultipleTextField";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";

export default function EventCreateForm() {
  const [number, onChangeNumber] = React.useState(null);
  const [address, setAddress] = React.useState(""); //content
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [hour, sethour] = useState("");
  const [minutes, setminutes] = useState("");
  const [daytime, setdaytime] = useState("");

  function addNewEvents() {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
    let timeData = hour + ":" + minutes + " " + daytime;

    const eventData = {
      title: title,
      userName: "kavindu",
      imageUrl: imageURL,
      content: address,
      time: timeData,
      date: date.toDateString(),
    };

    axios
      .post(`http://10.0.2.2:8081/api/v1/event/add-new`, eventData)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(eventData);
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    // for iOS, add a button that closes the picker

    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <SafeAreaView style={styles.mainSheet}>
      <View>
        <Text style={styles.createBogHeader}>Organize New Event</Text>
      </View>
      <ScrollView>
        <View style={styles.bodySheet}>
          <View>
            <Text style={styles.titleStyle}>Title</Text>
            <TextInput
              style={styles.input}
              onChangeText={setTitle}
              value={title}
              placeholder="Title here"
            />
          </View>
          <View>
            <Text style={styles.titleStyle}>Image URL</Text>
            <TextInput
              style={styles.input}
              onChangeText={setimageURL}
              value={imageURL}
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
          <View>
            <Text style={styles.titleStyle}>Event Date</Text>
            <View style={styles.row}>
              <View style={styles.box1}>
                <TextInput
                  style={styles.dateInput}
                  onChangeText={setDate}
                  value={date.toDateString()}
                  placeholder="dd/mm/yyyy"
                />
              </View>
              <View style={[styles.box2]}>
                <Icon
                  name="calendar"
                  size={35}
                  color="#629c45"
                  onPress={showDatepicker}
                />
              </View>

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </View>
          </View>
          <View>
            <Text style={styles.titleStyle}>Event Time</Text>

            <View style={styles.row}>
              <View style={styles.hourBox1}>
                <TextInput
                  style={styles.dateInput}
                  onChangeText={sethour}
                  value={hour}
                  placeholder="hh"
                  keyboardType="numeric"
                  maxLength={2}
                />
              </View>
              <View style={[styles.MinutsBox2]}>
                <TextInput
                  style={styles.dateInput}
                  onChangeText={setminutes}
                  value={minutes}
                  placeholder="mm"
                  maxLength={2}
                />
              </View>
              <View style={[styles.AMPMBox2]}>
                <TextInput
                  style={styles.dateInput}
                  onChangeText={setdaytime}
                  value={daytime}
                  placeholder="AM"
                />
              </View>
            </View>
          </View>
          <View style={styles.createNewBtnMain}>
            <Button
              title="Create New"
              onPress={addNewEvents}
              style={styles.createNewBtn}
              color="#629c45"
            />
          </View>
        </View>
      </ScrollView>
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 5,
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
  hourBox1: {
    paddingLeft: 0,
    paddingTop: 10,
    width: "30%",
  },
  MinutsBox2: {
    padding: 10,
    borderRadius: 10,
    width: "30%",
  },
  AMPMBox2: {
    padding: 10,
    borderRadius: 10,
    width: "30%",
  },
  mainSheet: {
    backgroundColor: "white",
    marginBottom: 40,
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
  dateInput: {
    height: 40,
    padding: 10,
    outline: 1,
    borderWidth: 2,
    borderColor: "#629c45",
  },
  createNewBtn: {
    marginTop: 50,
    padding: 15,
    borderRadius: 10,
    marginLeft: 30,
  },
  createNewBtnMain: {
    marginTop: 50,
    marginBottom: 50,
    paddingBottom: 20,
  },
});
