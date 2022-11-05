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

export default function EventCreateForm() {
  const [number, onChangeNumber] = React.useState(null);
  const [address, setAddress] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  function addNewEvents() {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
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
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="hh"
                  keyboardType="numeric"
                  maxLength={2}
                />
              </View>
              <View style={[styles.MinutsBox2]}>
                <TextInput
                  style={styles.dateInput}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="mm"
                  maxLength={2}
                />
              </View>
              <View style={[styles.AMPMBox2]}>
                <TextInput
                  style={styles.dateInput}
                  onChangeText={onChangeNumber}
                  value={number}
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
