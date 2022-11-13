import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppButton from "../components/common/AppButton";
import Screen from "../components/common/Screen";
import { en, sn } from "../constants/localization";
import i18n from "i18n-js";
import routes from "../navigation/routes";
import { translate, setLanguage } from "../components/common/translator";
import colors from "../config/colors";
import CampaignListItem from "../components/Profile/CampaignListItem";
import PostsListItem from "../components/Profile/PostsListItem";
import PointListItem from "../components/Profile/PointListItem";
translate;
import * as SecureStore from "expo-secure-store";
import { getAllCampaignsByUserId } from "../api/campaignService";
import { logout } from "../api/authService";
import { getUser } from "../api/userService";
import { getAllPostsByUserId } from "../api/postService";
import { getAllPointsByUserId } from "../api/pointService";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  const [campaigns, setCampaigns] = useState([]);
  const [posts, setPosts] = useState([]);
  const [points, setPoints] = useState([]);
  const [userPoint, setUserPoint] = useState("");
  const [locale, setLocale] = useState("");
  const [user, setUser] = useState({});
  const [refreshing, setRefreshing] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  i18n.fallbacks = true;
  i18n.translations = { en, sn };
  i18n.locale = locale;

  useEffect(() => {
    getUserBy();
    handleLocale();
    getAllCampaigns();
    getAllPosts();
    userPoints();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAllCampaigns();
    getAllPosts();
    userPoints();
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

  const userPoints = async () => {
    await getAllPointsByUserId()
      .then(async ({ data }) => {
        setPoints(data);
        const userId = await SecureStore.getItemAsync("userId");
        const point = data.filter((p) => p.user.id === userId)[0].points;
        setUserPoint(point);
      })
      .catch((error) => console.log(error));
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.name}>{user.name}</Text>
                <Ionicons
                  name="ios-settings"
                  size={33}
                  color={colors.primary}
                  style={styles.settings}
                  onPress={() => {
                    setModalVisible(true);
                  }}
                />
              </View>
              <Text style={styles.email}>{user.email}</Text>
              <Text style={styles.point}>{userPoint + " "}Points</Text>
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
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Ionicons
              name="close"
              size={40}
              color={colors.primary}
              style={styles.closebtn}
              onPress={() => {
                setModalVisible(false);
              }}
            />

            <View style={styles.modalcontent}>
              <AppButton
                title={"English"}
                onPress={() => {
                  setLocale("en");
                  setLanguage("en");
                  handleLocale();
                  //navigation.navigate(routes.ALL_CAMPAIGNS);
                }}
                style={styles.langbtn}
                fontSize={20}
              />
              <AppButton
                title={"සිංහල"}
                onPress={() => {
                  setLocale("sn");
                  setLanguage("sn");
                  handleLocale();
                  //navigation.navigate(routes.ALL_CAMPAIGNS);
                }}
                style={styles.langbtn}
                fontSize={20}
              />
            </View>
            <AppButton
              title={"Logout"}
              onPress={() => {
                logOut();
              }}
              style={styles.logout}
              fontSize={20}
              color={colors.primary}
              icon={
                <MaterialCommunityIcons
                  name="logout"
                  size={33}
                  color={colors.primary}
                  style={{ marginLeft: -30, marginRight: 10 }}
                />
              }
            />
          </View>
        </View>
      </Modal>
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
  settings: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
  closebtn: {
    alignSelf: "flex-start",
    marginLeft: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -35,
    alignSelf: "flex-end",
  },
  modalcontent: {
    alignItems: "center",
    marginTop: 200,
  },
  logout: {
    width: 200,
    height: 40,
    marginBottom: 5,
    marginRight: 20,
    marginLeft: -40,
    marginTop: 340,
    backgroundColor: colors.lightGreen,
  },
  langbtn: {
    width: 200,
    height: 40,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: colors.primary,
    borderWidth: 1,
    height: "82%",
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.lightGreen,
    shadowColor: colors.lightGreen,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
