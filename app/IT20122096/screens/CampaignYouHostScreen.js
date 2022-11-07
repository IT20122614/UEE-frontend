import React, { useState } from "react";
import { RefreshControl, StyleSheet, Text, View } from "react-native";
import CampaignCard from "../components/AllShramadanaListScreen/CampaignCard";
import Screen from "../components/common/Screen";
import colors from "../config/colors";
import { FlatGrid } from "react-native-super-grid";
import { translate } from "../components/common/translator";
import routes from "../navigation/routes";

const campaigns1 = [
  {
    id: "1",
    host: "fsafsag",
    place: "Gampaha",
    date: "10/10/2022",
    startTime: "10.00AM",
    endTime: "18.00PM",
    description:
      "fafsaffffffffffffffffffffffffffffffffffffffffffffffffffffsafasfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
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
    image: require("../assets/campaign.jpg"),
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
    image: require("../assets/campaign.jpg"),
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
    image: require("../assets/campaign.jpg"),
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
    image: require("../assets/campaign.jpg"),
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
    image: require("../assets/campaign.jpg"),
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
    image: require("../assets/campaign.jpg"),
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
    image: require("../assets/campaign.jpg"),
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
    image: require("../assets/campaign.jpg"),
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
    image: require("../assets/campaign.jpg"),
    status: "fsafsag",
  },
];

export default function CampaignYouHostScreen({ route, navigation }) { 
  const [campaigns, setCampaigns] = useState(route.params.campaigns);
  const [refreshing, setRefreshing] = React.useState(false);
  
  return (
    <Screen>
      <View style={styles.body}>
        <FlatGrid
          itemDimension={130}
          data={campaigns}
          spacing={10}
          renderItem={({ item }) => (
            <CampaignCard
              item={item}
              onPress={() => {
                navigation.navigate(routes.SELECTED_MY_CAMPAIGN, { item });
              }}
            />
          )}
          refreshing={true}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    height: "100%",
  },
});