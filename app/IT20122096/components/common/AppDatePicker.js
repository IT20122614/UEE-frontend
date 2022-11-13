import React, { useState } from "react";
import { Platform, Text, View } from "react-native";
import DatePicker from "@react-native-community/datetimepicker";
import AppButton from "./AppButton";

export default function AppDatePicker({ mode, getDate }) {
  const [date, setDate] = useState(new Date());

  const handleDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    let temDate = new Date(currentDate);
    let fDate =
      temDate.getFullYear() +
      "-" +
      (temDate.getMonth() + 1) +
      "-" +
      temDate.getDate();
    let fTime = temDate.getHours() + ":" + temDate.getMinutes().toLocaleString()
    if (mode === "date") {
      getDate(fDate);
    } else {
      getDate(fTime);
    }
  };

  return (
    <View style={{ margin: 50 }}>
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