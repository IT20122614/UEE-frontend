import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import { translate } from "../common/translator";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function PostsListItem({ post, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: post.image }} />
      </View>
      <View style={styles.details}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.titleText}>{translate("Date")}</Text>
          <Text style={styles.contentText}>{post.campaign.date}</Text>
        </View>
        <View style={styles.icons}>
          <View style={styles.like}>
            <MaterialCommunityIcons
              name="cards-heart"
              size={30}
              color={colors.primary}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.contentText}>{post.likeCount}</Text>
          </View>
          <View style={styles.comment}>
            <AntDesign
              name="message1"
              size={30}
              color={colors.primary}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.contentText}>{post.commentsCount}</Text>
          </View>
        </View>
      </View>
      <View style={styles.icon}>
        <MaterialIcons
          name={"arrow-forward-ios"}
          size={30}
          color={colors.primary}
          onPress={onPress}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary,
    borderRadius: 5,
    alignItems: "center",
    paddingRight: 5,
    margin: 8,
    marginBottom: 0,
    backgroundColor: colors.lightGreen,
  },
  imageContainer: {},
  image: { width: 120, height: 80 },
  details: {
    flex: 1,
  },
  items: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 0,
  },
  titleText: {
    paddingBottom: 2,
    paddingLeft: 10,
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 18,
    marginRight: 20,
  },
  contentText: { paddingBottom: 2, color: colors.primary, fontSize: 18 },
  icons: {
    flexDirection: "row",
  },
  like: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 10,
  },
  comment: { flexDirection: "row", alignItems: "center" },
  icon: {},
});
