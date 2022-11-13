import React, { useEffect, useState } from "react";
import { RefreshControl, StyleSheet, View } from "react-native";
import CampaignCard from "../components/AllShramadanaListScreen/CampaignCard";
import Screen from "../components/common/Screen";
import colors from "../config/colors";
import { FlatGrid } from "react-native-super-grid";
import routes from "../navigation/routes";
import { getAllCampaignsByUserId } from "../api/campaignService";

export default function CampaignYouHostScreen({ route, navigation }) {
  const [campaigns, setCampaigns] = useState();
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    getAllCampaigns();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAllCampaigns();
  }, []);

  const getAllCampaigns = async () => {
    await getAllCampaignsByUserId()
      .then(({ data }) => {
        setCampaigns(data);
        setRefreshing(false);
      })
      .catch((error) => console.log(error.response.data));
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
                navigation.navigate(routes.SELECTED_MY_CAMPAIGN, { item });
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
  text: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    height: "100%",
  },
});
