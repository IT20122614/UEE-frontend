import React, { useEffect, useState } from "react";
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
import CampaignListItem from "../components/Profile/CampaignListItem";
import PostsListItem from "../components/Profile/PostsListItem";
import PointListItem from "../components/Profile/PointListItem";
translate;
import * as SecureStore from "expo-secure-store";
import {
  getAllCampaign,
  getAllCampaignsByUserId,
} from "../api/campaignService";
import { getCurrentUser, logout } from "../api/authService";
import { getUser } from "../api/userService";
import { getAllPostsByUserId } from "../api/postService";
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
    contributors: [
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
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
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
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
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
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
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
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
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
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
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
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
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
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
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
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
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
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
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "2",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "3",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
      {
        id: "1",
        userId: "123",
        name: "chamath Kavindya",
        image: require("../assets/avatar.png"),
        attendence: true,
      },
    ],
  },
];
const posts1 = [
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
const points = [
  {
    year: "2022",
    month: "JANUARY",
    point: 150,
  },
  {
    year: "2022",
    month: "JANUARY",
    point: 150,
  },
  {
    year: "2022",
    month: "JANUARY",
    point: 150,
  },
  {
    year: "2022",
    month: "JANUARY",
    point: 150,
  },
  {
    year: "2022",
    month: "JANUARY",
    point: 150,
  },
  {
    year: "2022",
    month: "JANUARY",
    point: 150,
  },
];

export default function ProfileScreen({ navigation }) {
  const [campaigns, setCampaigns] = useState([]);
  const [posts, setPosts] = useState([]);
  const [locale, setLocale] = useState("");
  const [user, setUser] = useState({});
  const [refreshing, setRefreshing] = React.useState(false);

  i18n.fallbacks = true;
  i18n.translations = { en, sn };
  i18n.locale = locale;

  useEffect(() => {
    getUserBy();
    handleLocale();
    getAllCampaigns();
    getAllPosts();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAllCampaigns();
    getAllPosts();
  }, []);

  const handleLocale = async () => {
    const loc = await SecureStore.getItemAsync("locale");
    setLocale(loc);
  };

  const getUserBy = async () => {
    await getUser().then(({ data }) => {
      setUser(data);
    });
  };

  const getAllCampaigns = async () => {
    await getAllCampaignsByUserId()
      .then(({ data }) => {
        setCampaigns(data);
      })
      .catch((error) => console.log(error.response.data));
  };
  const getAllPosts = async () => {
    await getAllPostsByUserId()
      .then(({ data }) => {
        console.log(data);
        setPosts(data);
        setRefreshing(false);
      })
      .catch((error) => console.log(error));
  };
  const logOut = async () => {
    await logout()
      .then(() => {
        navigation.navigate(routes.LOGIN);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Screen>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <View style={styles.profile}>
            <View style={styles.avatar}>
              <Image source={{ uri: user.image }} style={styles.image} />
            </View>
            <View style={styles.details}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.email}>{user.email}</Text>
              <Text style={styles.point}>150 Points</Text>
            </View>
          </View>
          <View style={styles.campaigns}>
            <View style={styles.head}>
              <Text style={[styles.name, { marginBottom: 0 }]}>
                {translate("CampaignsYouHost")}
              </Text>
              {campaigns.length !== 0 && (
                <Text
                  style={[styles.email, { marginBottom: 0 }]}
                  onPress={() => {
                    navigation.navigate(routes.CAMPAIGNS_YOU_HOST, {
                      campaigns,
                    });
                  }}
                >
                  {translate("SeeMore")}
                </Text>
              )}
            </View>
            <View>
              {(campaigns.length !== 0 &&
                campaigns.map((item, index) =>
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
                )) || (
                <View>
                  <Text style={styles.errorMsg}>No campaigns to show.</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.posts}>
            <View style={styles.head}>
              <Text style={[styles.name, { marginBottom: 0 }]}>
                {translate("MyPosts")}
              </Text>
              {posts.length !== 0 && (
                <Text
                  style={[styles.email, { marginBottom: 0 }]}
                  onPress={() => {
                    navigation.navigate(routes.MY_POST);
                  }}
                >
                  {translate("SeeMore")}
                </Text>
              )}
            </View>
            <View>
              {(posts.length !== 0 &&
                posts.map((item, index) =>
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
                )) || (
                <View>
                  <Text style={styles.errorMsg}>No posts to show.</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.points}>
            <View style={styles.head}>
              <Text style={styles.name}>{translate("PointHistory")}</Text>
              <Text
                style={styles.email}
                onPress={() => {
                  navigation.navigate(routes.POINTS_HISTORY, { points });
                }}
              >
                {translate("SeeMore")}
              </Text>
            </View>
            <View>
              {points.map((point, index) =>
                index === 0 || index === 1 ? (
                  <PointListItem key={index} item={point} />
                ) : null
              )}
            </View>
          </View>
          <View>
            <AppButton
              title={"English"}
              onPress={() => {
                setLocale("en");
                setLanguage("en");
                handleLocale();
                //navigation.navigate(routes.ALL_CAMPAIGNS);
              }}
            />
            <AppButton
              title={"සිංහල"}
              onPress={() => {
                setLocale("sn");
                setLanguage("sn");
                handleLocale();
                //navigation.navigate(routes.ALL_CAMPAIGNS);
              }}
            />
            <AppButton
              title={"Logout"}
              onPress={() => {
                logOut();
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
    fontSize: 18,
    marginBottom: 5,
  },
  email: {
    color: colors.primary,
    marginBottom: 5,
    fontSize: 16,
  },
  point: { color: colors.primary, fontSize: 18 },
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
    paddingTop: 10,
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
    fontSize: 20,
  },
  errorMsg: {
    fontSize: 20,
    alignSelf: "center",
    padding: 30,
    color: colors.primary,
  },
});
