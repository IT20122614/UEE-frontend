import React from "react";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import colors from "../../config/colors";
import {translate} from "../common/translator";

export default function CampaignCard({item,onPress}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.body}>
        <View style={styles.image}>
          <Image
            style={{ width: 190, height: 155, borderRadius: 10 }}
            source={item.image}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.items}>
            <Text style={styles.titleText}>{translate("Location")}</Text>
            <Text style={styles.titleText}>{translate("Date")}</Text>
            <Text style={styles.titleText}>{translate("Status")}</Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.contentText}>{item.place}</Text>
            <Text style={styles.contentText}>{item.date}</Text>
            <Text style={styles.contentText}>{item.status}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  body: {
    borderRadius: 10,
    height: 230,
    width: 190,
    display: "flex",
    elevation: 5,
  },
  image: {
    flex: 2,
  },
  details: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.lightGreen,
    paddingBottom:8
  },
  items: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  titleText: {
    paddingBottom:3,
    paddingLeft: 10,
    fontWeight: "bold",
    color: colors.primary,
  },
  contentText: { paddingBottom: 3, color: colors.primary },
});
