import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PointListItem({index,point}) {
  return (
    <View style={styles.container}>
      <View style={styles.number}>
        <Text style={styles.pointtext}>{index + 1}</Text>
      </View>
      <View style={styles.avatar}>
        <Image
          style={styles.image}
          source={point.image}
        />
      </View>
      <View style={styles.name}>
        <Text style={styles.nametext}>
          {point.name}
        </Text>
      </View>
      <View style={styles.point}>
        <Text style={styles.pointtext}>{ point.points}</Text>
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="star-outline"
          size={33}
          color={colors.primary}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary,
    backgroundColor: colors.lightGreen,
    margin:10

  },
  number: {
    flex: 0.5,
    borderRightWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary,
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  avatar: { flex: 1 },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    margin:5
  },
  name: { flex: 3 ,paddingRight:10},
  nametext: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
  point: { flex: 0.5 },
  pointtext: {
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: { flex: 0.5 },
});