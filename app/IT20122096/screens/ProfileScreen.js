import React, { useState } from "react";
import { Image, RefreshControl, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/common/AppButton";
import Screen from "../components/common/Screen";
import { en, sn } from "../constants/localization";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import routes from "../navigation/routes";
import { translate, setLanguage } from "../components/common/translator";
import colors from "../config/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CampaignListItem from "../components/Profile/CampaignListItem";
translate;
export default function ProfileScreen({ navigation }) {
  let [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = { en, sn };
  i18n.locale = locale;
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Image
              source={require("../assets/avatar.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.name}>CHAMATH KAVINDYA</Text>
            <Text style={styles.email}>chamathkavvindya@gmail.com</Text>
            <Text style={styles.point}>150 Points</Text>
          </View>
        </View>
        <View style={styles.campaigns}>
          <View style={styles.head}>
            <Text style={styles.name}>{translate("CampaignsYouHost")}</Text>
            <Text style={styles.email}>
              {translate("SeeMore")} {">"}
            </Text>
          </View>
          <View>
            <CampaignListItem />
            <CampaignListItem />
          </View>
        </View>
        <View style={styles.posts}>
          <View style={styles.head}>
            <Text style={styles.name}>{translate("MyPosts")}</Text>
            <Text style={styles.email}>
              {translate("SeeMore")} {">"}
            </Text>
          </View>
        </View>
        <View style={styles.points}>
          <View style={styles.head}>
            <Text style={styles.name}>{translate("PointHistory")}</Text>
            <Text style={styles.email}>
              {translate("SeeMore")} {">"}
            </Text>
          </View>
          <View>
            <View style={styles.pointCard}>
              <Text style={[styles.pointText, { flex: 1.5 }]}>2022</Text>
              <Text style={[styles.pointText, { flex: 4 }]}>January</Text>
              <Text
                style={[styles.pointText, { flex: 0.5, alignSelf: "flex-end" }]}
              >
                150
              </Text>
            </View>
            <View style={styles.pointCard}>
              <Text style={[styles.pointText, { flex: 1.5 }]}>2022</Text>
              <Text style={[styles.pointText, { flex: 4 }]}>January</Text>
              <Text
                style={[styles.pointText, { flex: 0.5, alignSelf: "flex-end" }]}
              >
                150
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text>{i18n.t("languageSelector")}</Text>
          <AppButton
            title={"English"}
            onPress={() => {
              setLocale("en");
              setLanguage("en");
              //navigation.navigate(routes.ALL_CAMPAIGNS);
            }}
          />
          <AppButton
            title={"සිංහල"}
            onPress={() => {
              setLocale("sn");
              setLanguage("sn");
              //navigation.navigate(routes.ALL_CAMPAIGNS);
            }}
          />
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
  profile: {
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    borderColor: "black",
    display: "flex",
    padding: 5,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: colors.primary,
    borderWidth: 3,
    margin: 10,
  },
  avatar: { flex: 1 },
  details: { flex: 2 },
  name: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  email: {
    color: colors.primary,
    marginBottom: 10,
  },
  point: { color: colors.primary, fontSize: 16 },
  campaigns: {
    elevation: 5,
    borderColor: "black",
    display: "flex",
    padding: 5,
    paddingBottom:10
  },
  posts: { elevation: 5, borderColor: "black", display: "flex", padding: 5 },
  points: { elevation: 5, borderColor: "black", display: "flex", padding: 5 },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    paddingBottom: 0
  },
  pointCard: {
    flexDirection: "row",
    display: "flex",
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary,
    marginLeft: 10,
    marginRight:10
  },
  pointText: {
    color: colors.primary,
    fontSize: 16,
  },
});
