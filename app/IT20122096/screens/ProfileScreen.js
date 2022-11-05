import React, { useState } from "react";
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
import PostsListItem from "../components/Profile/PostsListItem";
translate;

const campaigns = [
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
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
    ],
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
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
    ],
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
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
    ],
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
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
    ],
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
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
    ],
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
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
    ],
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
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
    ],
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
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
    ],
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
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
    ],
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
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image:require("../assets/avatar.png"),
        attendence:true
      },
    ],
  },
];
const posts = [
  {
    id: "1",
    campaignId: "123456",
    userId: "123456",
    campaign: { place: "Gamapaha", date: "2022-11-04" },
    description: "asfsgsagsagasgasga",
    image: require("../assets/post.jpg"),
    likeCount: 5,
    commentsCount: 5,
    comments: [
      {
        id: "1",
        postId: "",
        comment:
          "asfsasgs agasgsa gasgsagsag sfsfasf fasf asfs a fsafsfsafa fsafsafsa fasfasf fsaf ",
        userId: "",
        userName: "Chamath Kavindy",
        image: require("../assets/avatar.png"),
      },
      {
        id: "2",
        postId: "",
        comment: "asfsasgsagasgsagasgsagsag",
        userId: "",
        userName: "Chamath Kavindy",
        image: require("../assets/avatar.png"),
      },
    ],
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
      },
    ],
  },
  {
    id: "1",
    campaignId: "123456",
    userId: "123456",
    campaign: { place: "Gamapaha", date: "2022-11-04" },
    description: "asfsgsagsagasgasga",
    image: require("../assets/post.jpg"),
    likeCount: 5,
    commentsCount: 5,
    comments: [
      {
        id: "1",
        postId: "",
        comment:
          "asfsasgs agasgsa gasgsagsag sfsfasf fasf asfs a fsafsfsafa fsafsafsa fasfasf fsaf ",
        userId: "",
        userName: "Chamath Kavindy",
        image: require("../assets/avatar.png"),
      },
      {
        id: "2",
        postId: "",
        comment: "asfsasgsagasgsagasgsagsag",
        userId: "",
        userName: "Chamath Kavindy",
        image: require("../assets/avatar.png"),
      },
    ],
    contributors: [
      {
        id: "6",
        userId: "623",
        name: "chamath Kavindya",
      },
      {
        id: "6",
        userId: "623",
        name: "chamath Kavindya",
      },
      {
        id: "6",
        userId: "623",
        name: "chamath Kavindya",
      },
      {
        id: "6",
        userId: "623",
        name: "chamath Kavindya",
      },
      {
        id: "6",
        userId: "623",
        name: "chamath Kavindya",
      },
      {
        id: "6",
        userId: "623",
        name: "chamath Kavindya",
      },
    ],
  },
];

export default function ProfileScreen({ navigation }) {
  let [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = { en, sn };
  i18n.locale = locale;
  return (
    <Screen>
      <ScrollView>
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
              <Text style={[styles.name, { marginBottom: 0 }]}>
                {translate("CampaignsYouHost")}
              </Text>
              <Text
                style={[styles.email, { marginBottom: 0 }]}
                onPress={() => {
                  navigation.navigate(routes.CAMPAIGNS_YOU_HOST);
                }}
              >
                {translate("SeeMore")} {">"}
              </Text>
            </View>
            <View>
              {campaigns.map((item, index) =>
                index === 0 || index === 1 ? (
                  <CampaignListItem
                    key={index}
                    campaign={item}
                    onPress={() => {
                      navigation.navigate(routes.SELECTED_MY_CAMPAIGN, {
                        item,
                      });
                    }}
                  />
                ) : null
              )}
            </View>
          </View>
          <View style={styles.posts}>
            <View style={styles.head}>
              <Text style={[styles.name, { marginBottom: 0 }]}>
                {translate("MyPosts")}
              </Text>
              <Text
                style={[styles.email, { marginBottom: 0 }]}
                onPress={() => {
                  navigation.navigate(routes.MY_POST);
                }}
              >
                {translate("SeeMore")} {">"}
              </Text>
            </View>
            <View>
              {posts.map((item, index) =>
                index === 0 || index === 1 ? (
                  <PostsListItem
                    key={index}
                    post={item}
                    onPress={() => {
                      navigation.navigate(routes.SELECTED_MY_POSTS, {
                        item,
                      });
                    }}
                  />
                ) : null
              )}
            </View>
          </View>
          <View style={styles.points}>
            <View style={styles.head}>
              <Text style={styles.name}>{translate("PointHistory")}</Text>
              <Text
                style={styles.email}
                onPress={() => {
                  navigation.navigate(routes.POINTS_HISTORY);
                }}
              >
                {translate("SeeMore")} {">"}
              </Text>
            </View>
            <View>
              <View style={styles.pointCard}>
                <Text style={[styles.pointText, { flex: 1.5 }]}>2022</Text>
                <Text style={[styles.pointText, { flex: 4 }]}>January</Text>
                <Text
                  style={[
                    styles.pointText,
                    { flex: 0.5, alignSelf: "flex-end" },
                  ]}
                >
                  150
                </Text>
              </View>
              <View style={styles.pointCard}>
                <Text style={[styles.pointText, { flex: 1.5 }]}>2022</Text>
                <Text style={[styles.pointText, { flex: 4 }]}>January</Text>
                <Text
                  style={[
                    styles.pointText,
                    { flex: 0.5, alignSelf: "flex-end" },
                  ]}
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
      </ScrollView>
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
    margin: 5,
  },
  avatar: { flex: 1 },
  details: { flex: 2 },
  name: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  email: {
    color: colors.primary,
    marginBottom: 5,
  },
  point: { color: colors.primary, fontSize: 16 },
  campaigns: {
    elevation: 5,
    borderColor: "black",
    display: "flex",
    padding: 5,
    paddingBottom: 10,
  },
  posts: { elevation: 5, borderColor: "black", display: "flex", padding: 5 },
  points: { elevation: 2, borderColor: "black", display: "flex", padding: 5 },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    paddingBottom: 0,
  },
  pointCard: {
    flexDirection: "row",
    display: "flex",
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary,
    marginLeft: 10,
    marginRight: 10,
  },
  pointText: {
    color: colors.primary,
    fontSize: 16,
  },
});
