import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

export default function Comment({ comment }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={comment.image} style={styles.image} />
      </View>
      <View style={styles.comment}>
        <Text style={styles.titleText}>{comment.userName}</Text>
        <Text style={styles.contentText}>{comment.comment}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom:15
  },
  comment: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary,
    borderRadius: 10,
    backgroundColor: colors.lightGreen,
    marginLeft: 10,
    padding: 10,
    paddingTop: 0,
    width:290
  },
  titleText: {
    paddingBottom: 5,
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 18,
  },
  contentText: { paddingBottom: 10, color: colors.black, fontSize: 18 },
});