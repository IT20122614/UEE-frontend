import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/common/AppButton";
import Screen from "../components/common/Screen";
import {translate} from "../components/common/translator";
import colors from "../config/colors";
import routes from "../navigation/routes";

export default function SelectedCampaignScreen({ navigation, route }) {
  const campaign = route.params.item;
  return (
    <Screen>
      <ScrollView verticle>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={campaign.image} style={styles.image} />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.details}>
              <View style={styles.items}>
                <Text style={styles.titleText}>{translate("Place")}</Text>
                <Text style={styles.titleText}>{translate("Date")}</Text>
                <Text style={styles.titleText}>{translate("StartTime")}</Text>
                <Text style={styles.titleText}>{translate("EndTime")}</Text>
                <Text style={styles.titleText}>{translate("Status")}</Text>
                <Text style={styles.titleText}>{translate("Description")}</Text>
              </View>
              <View style={styles.items}>
                <Text style={styles.contentText}>{campaign.place}</Text>
                <Text style={styles.contentText}>{campaign.date}</Text>
                <Text style={styles.contentText}>{campaign.startTime}</Text>
                <Text style={styles.contentText}>{campaign.endTime}</Text>
                <Text style={styles.contentText}>{campaign.status}</Text>
              </View>
            </View>
            <View style={styles.description}>
              <Text>{campaign.description}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                title={translate("Contribute")}
                style={styles.button}
                fontSize={18}
                onPress={() => {
                  navigation.navigate(routes.CONTRIBUTION_FORM)
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: { display: "flex", flexDirection: "column", height: "100%" },
  imageContainer: {
    flex: 1.3,
  },
  image: {
    width: "94%",
    height: 200,
    alignSelf: "center",
    borderRadius: 10,
    margin: 20,
    position: "relative",
  },
  detailsContainer: {
    flex: 2,
    padding: 15,
    paddingTop: 0,
  },
  details: {
    flex: 1,
    flexDirection: "row",
  },
  items: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 8,
  },
  titleText: {
    paddingBottom: 10,
    paddingLeft: 10,
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 18,
  },
  contentText: { paddingBottom: 10, color: colors.black, fontSize: 18 },
  buttonContainer: { flexDirection: "row", justifyContent: "flex-end" },
  description: {
    marginBottom: 20,
    marginLeft: 20,
  },
  button: {
    width: 140,
    height: 45,
    borderRadius: 10,
  },
});
