import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { getAllPoints } from "../api/pointService";
import Screen from "../components/common/Screen";
import PointListItem from "../components/points/PointListItem";

export default function LeaderBoardScreen() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    userPoints();
  }, []);

  const userPoints = async () => {
    await getAllPoints()
      .then(async ({ data }) => {
        filterLeaderBoard(data);
      })
      .catch((error) => console.log(error));
  };

  const filterLeaderBoard = (points) => {
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = date.getMonth();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const filterByMonthandYear = points.filter(
      (point) => point.month === months[month] && point.year === year
    );
    const sortedPoints = filterByMonthandYear.sort((a, b) =>
      a.points < b.points ? 1 : -1
    );
    setPoints(sortedPoints);
  };
  return (
    <Screen>
      <ScrollView>
        <View>
          {points.map((point, index) => (
            <PointListItem key={index} index={index} point={point} />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

