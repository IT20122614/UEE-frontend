import React, { useEffect, useState } from "react";
import { RefreshControl, StyleSheet, Text, View } from "react-native";
import CampaignCard from "../components/AllShramadanaListScreen/CampaignCard";
import Screen from "../components/common/Screen";
import colors from "../config/colors";
import { FlatGrid } from "react-native-super-grid";
import { translate } from "../components/common/translator";
import routes from "../navigation/routes";
import { en, sn } from "../constants/localization";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { getAllCampaign } from "../api/campaignService";

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

export default function AllShramadanaListScreen({ navigation }) {
  const [campaigns, setCampaigns] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    getAllCampaigns();
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAllCampaigns();
  }, []);

  const getAllCampaigns = async () => {
    await getAllCampaign()
      .then(({ data }) => {
        setCampaigns(data.filter((c) => c.status !== "FINISH"));
        setRefreshing(false);
      })
      .catch((error) => console.log(error));
  };

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
                navigation.navigate(routes.SELECTED_CAMPAIGN, { item });
              }}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
    height: "86%",
  },
});
