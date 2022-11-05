import React, { useState } from "react";
import { Platform, Text, View } from "react-native";
import DatePicker from "@react-native-community/datetimepicker";
import AppButton from "./AppButton";

export default function AppDatePicker({ mode, getDate }) {
  const [date, setDate] = useState(new Date());
 // const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const handleDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    let temDate = new Date(currentDate);
    let fDate =
      temDate.getDate() +
      "/" +
      (temDate.getMonth() + 1) +
      "/" +
      temDate.getFullYear();
    let fTime =
      "Hours" + temDate.getHours() + "| Minutes: " + temDate.getMinutes();
    setText(fDate);
    getDate(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={{ margin: 50 }}>
      {/* <Text>{text}</Text>
      <View>
        <AppButton
          title={"Date"}
          onPress={() => {
            showMode("date");
          }}
          style={{ width: 100, marginBottom: 20, height: 35, marginTop: 20 }}
        />
      </View>
      <View>
        <AppButton
          title={"Time"}
          onPress={() => {
            showMode("time");
          }}
          style={{ width: 100, marginBottom: 50, height: 35 }}
        />
      </View> */}

      <DatePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24hour={true}
          display={"default"}
          onChange={handleDate}
        
        />
    </View>
  );
}
