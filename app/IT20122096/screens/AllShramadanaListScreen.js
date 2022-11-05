import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CampaignCard from "../components/AllShramadanaListScreen/CampaignCard";
import Screen from "../components/common/Screen";
import colors from "../config/colors";
import { FlatGrid } from "react-native-super-grid";
import {translate} from "../components/common/translator";
import routes from "../navigation/routes";

const campaigns = [
  {
    id: "1",
    host: "fsafsag",
    place: "Gampaha",
    date: "10/10/2022",
    startTime: "10.00AM",
    endTime: "18.00PM",
    description: "fafsaffffffffffffffffffffffffffffffffffffffffffffffffffffsafasfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    image: require("../assets/campaign.jpg"),
    status: "PENDING",
  },
  {
    id: "2",
    host: "fsafsag",
    place: "fsafsag",
    date: "fsafsag",
    startTime: "fsafsag",
    endTime: "fsafsag",
    description: "fsafsag",
    image:require("../assets/campaign.jpg"),
    status: "fsafsag",
  },
  {
    id: "3",
    host: "fsafsag",
    place: "fsafsag",
    date: "fsafsag",
    startTime: "fsafsag",
    endTime: "fsafsag",
    description: "fsafsag",
    image:require("../assets/campaign.jpg"),
    status: "fsafsag",
  },
  {
    id: "4",
    host: "fsafsag",
    place: "fsafsag",
    date: "fsafsag",
    startTime: "fsafsag",
    endTime: "fsafsag",
    description: "fsafsag",
    image:require("../assets/campaign.jpg"),
    status: "fsafsag",
  },
  {
    id: "5",
    host: "fsafsag",
    place: "fsafsag",
    date: "fsafsag",
    startTime: "fsafsag",
    endTime: "fsafsag",
    description: "fsafsag",
    image:require("../assets/campaign.jpg"),
    status: "fsafsag",
  },
  {
    id: "6",
    host: "fsafsag",
    place: "fsafsag",
    date: "fsafsag",
    startTime: "fsafsag",
    endTime: "fsafsag",
    description: "fsafsag",
    image:require("../assets/campaign.jpg"),
    status: "fsafsag",
  },
  {
    id: "7",
    host: "fsafsag",
    place: "fsafsag",
    date: "fsafsag",
    startTime: "fsafsag",
    endTime: "fsafsag",
    description: "fsafsag",
    image:require("../assets/campaign.jpg"),
    status: "fsafsag",
  },
  {
    id: "8",
    host: "fsafsag",
    place: "fsafsag",
    date: "fsafsag",
    startTime: "fsafsag",
    endTime: "fsafsag",
    description: "fsafsag",
    image:require("../assets/campaign.jpg"),
    status: "fsafsag",
  },
  {
    id: "9",
    host: "fsafsag",
    place: "fsafsag",
    date: "fsafsag",
    startTime: "fsafsag",
    endTime: "fsafsag",
    description: "fsafsag",
    image:require("../assets/campaign.jpg"),
    status: "fsafsag",
  },
  {
    id: "10",
    host: "fsafsag",
    place: "fsafsag",
    date: "fsafsag",
    startTime: "fsafsag",
    endTime: "fsafsag",
    description: "fsafsag",
    image:require("../assets/campaign.jpg"),
    status: "fsafsag",
  },
];

export default function AllShramadanaListScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.text}>{translate("All_Shramadana_Campaigns")}</Text>
      </View>
      <View style={styles.body}>
        <FlatGrid
          itemDimension={130}
          data={campaigns}
          spacing={10}
          renderItem={({ item }) => <CampaignCard item={item} onPress={()=>{navigation.navigate(routes.SELECTED_CAMPAIGN, { item });}} />}
          refreshing={true}
        />
      </View>
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
  body: {
    height:"86%"
  },
});
