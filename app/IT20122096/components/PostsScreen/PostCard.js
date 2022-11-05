import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import colors from "../../config/colors";
import { translate } from "../common/translator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function PostCard({ item, onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.body]}>
        <View style={styles.image}>
          <Image
            style={{ width: 190, height: 150, borderRadius: 10 }}
            source={item.image}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.date}>
            <Text style={styles.titleText}>{translate("Date")}</Text>
            <Text style={styles.contentText}>2022-11-04</Text>
          </View>
          <View style={styles.like}>
            <MaterialCommunityIcons
              name="cards-heart"
              size={33}
              color={colors.primary}
            />
            <Text style={[styles.contentText,{fontSize: 13}]}>1000</Text>
          </View>
          <View style={styles.comment}>
            <AntDesign name="message1" size={30} color={colors.primary} />
            <Text style={[styles.contentText,{fontSize: 13}]}>1000</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  body: {
    borderRadius: 10,
    height: 208,
    width: 190,
    display: "flex",
    elevation: 5,
  },
  image: {
    flex: 3,
  },
  details: {
    paddingTop: 5,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.lightGreen,
    paddingBottom:10
  },
  date: { flex: 2 },
  like: { flex: 1, flexDirection: "column", alignItems: "center" },
  comment: { flex: 1, flexDirection: "column", alignItems: "center" },
  titleText: {
    paddingBottom: 5,
    paddingLeft: 10,
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 17,
  },
  contentText: {
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 14,
    color: colors.primary,
  },
});
