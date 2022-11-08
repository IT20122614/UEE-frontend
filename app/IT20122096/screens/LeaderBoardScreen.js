import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../components/common/Screen";
import { translate } from "../components/common/translator";
import PointListItem from "../components/points/PointListItem";
import colors from "../config/colors";

const points = [
  {
    id: "1",
    userId: "123",
    name: "Chamath Kavindya",
    image: require("../assets/avatar.png"),
    points: 110,
    month: "11",
    year: "2022",
  },
  {
    id: "2",
    userId: "123",
    name: "Chamath Kavindya",
    image: require("../assets/avatar.png"),
    points: 130,
    month: "11",
    year: "2022",
  },
  {
    id: "3",
    userId: "123",
    name: "Chamath Kavindya",
    image: require("../assets/avatar.png"),
    points: 150,
    month: "11",
    year: "2022",
  },
];

export default function LeaderBoardScreen() {
  const filterLeaderBoard = () => {
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = (date.getMonth()+1).toString();

    const filterByMonthandYear = points.filter((point)=>point.month===month && point.year===year)
    const sortedPoints = filterByMonthandYear.sort((a, b) =>
      a.points < b.points ? 1 : -1
    );

    return filterByMonthandYear;
  };
  console.log(points);
  return (
    <Screen>
      <ScrollView>
        {/* <View style={styles.header}>
          <Text style={styles.text}>{translate("LeaderBoard")}</Text>
        </View> */}
        <View>
          {filterLeaderBoard().map((point,index) => (
            <PointListItem key={index} index={index} point={point} />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.limeGreen,
    height: 60,
    width: "100%",
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
});
