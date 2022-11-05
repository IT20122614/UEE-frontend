import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors';
import { translate } from '../common/translator';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default function CampaignListItem() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/campaign.jpg")}
        />
      </View>
      <View style={styles.details}>
        <View style={styles.items}>
          <Text style={styles.titleText}>{translate("Location")}</Text>
          <Text style={styles.titleText}>{translate("Date")}</Text>
          <Text style={styles.titleText}>{translate("Status")}</Text>
        </View>
        <View style={styles.items}>
          <Text style={styles.contentText}>Gampaha</Text>
          <Text style={styles.contentText}>2022-11-04</Text>
          <Text style={styles.contentText}>PENDING</Text>
        </View>
      </View>
      <View style={styles.icon}>
        <MaterialIcons
          name={"arrow-forward-ios"}
          size={30}
          color={colors.primary}
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
    borderRadius:5,
    alignItems: "center",
    paddingRight: 5,
    margin: 8,
    marginBottom: 0,
    backgroundColor:colors.lightGreen
  },
  imageContainer: {},
  image: { width: 100, height: 65 },
  details: {
    flex: 1,
    flexDirection: "row",
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
    fontSize: 11,
  },
  contentText: { paddingBottom: 2, color: colors.primary, fontSize: 11 },
  icon: {},
});