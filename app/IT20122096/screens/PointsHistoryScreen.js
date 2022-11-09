import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../components/common/Screen";
import PointListItem from "../components/Profile/PointListItem";
import colors from "../config/colors";

export default function PointsHistoryScreen({ route }) {
  const points = route.params.points;
  return (
    <Screen>
      <View style={styles.container}>
        {points.map((point, index) => (
          <PointListItem key={index} item={point} />
        ))}
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  pointCard: {
    flexDirection: "row",
    display: "flex",
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary,
    marginLeft: 10,
    marginRight: 10,
  },
  pointText: {
    color: colors.primary,
    fontSize: 20,
  },
});
