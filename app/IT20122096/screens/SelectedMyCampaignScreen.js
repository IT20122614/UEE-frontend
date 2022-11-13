import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Alert,
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
import { translate } from "../components/common/translator";
import colors from "../config/colors";
import routes from "../navigation/routes";
import RadioGroup from "react-native-radio-buttons-group";
import { getCampaignById, updateCampaign } from "../api/campaignService";
import { Snackbar } from "react-native-paper";

export default function SelectedMyCampaignScreen({ navigation, route }) {
  const campaign1 = route.params.item;

  const [campaign, setCampaign] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [radioButtons, setRadioButtons] = useState("");
  const [selected, setSelected] = useState(campaign1.status);
  const [refreshing, setRefreshing] = React.useState(false);
  const [snakVisible, SetSnackVisible] = useState(false);

  useEffect(() => {
    getCampaign();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getCampaign();
  }, []);

  const getCampaign = async () => {
    await getCampaignById(campaign1.id)
      .then(({ data }) => {
        setCampaign(data);
        setSelected(data.status);
        const radioButtonsData = [
          {
            id: "1",
            label: translate("Pending"),
            value: "PENDING",
            selected: data.status === "PENDING" ? true : false,
          },
          {
            id: "2",
            label: translate("Happening"),
            value: "HAPPENING",
            selected: data.status === "HAPPENING" ? true : false,
          },
          {
            id: "3",
            label: translate("Finish"),
            value: "FINISH",
            selected: data.status === "FINISH" ? true : false,
          },
        ];
        setRadioButtons(radioButtonsData);
        setRefreshing(false);
      })
      .catch((error) => console.log(error));
  };

  async function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    setModalVisible(!modalVisible);
    setSelected(
      radioButtons.filter((m) => m.selected === true).map((s) => s.value)[0]
    );
    const status = radioButtons
      .filter((m) => m.selected === true)
      .map((s) => s.value)[0];
    const data = {
      id: campaign.id,
      status: status,
    };
    await updateCampaign(data)
      .then(({ data }) => {
        SetSnackVisible(true);
      })
      .catch((error) => console.log(error));
  }
  return (
    <Screen>
      <ScrollView
        verticle
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <View>
            <AppButton
              title={translate("Post")}
              style={[
                styles.postbtn,
                selected !== "FINISH" && { backgroundColor: colors.lightGray },
              ]}
              fontSize={18}
              onPress={() => {
                navigation.navigate(routes.CREATE_POST, { campaign });
              }}
              disabled={selected === "FINISH" ? false : true}
              icon={
                <MaterialCommunityIcons
                  name={"plus"}
                  size={25}
                  color={colors.white}
                />
              }
            />
          </View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: campaign.image }} style={styles.image} />
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
              <View style={[styles.items, { marginLeft: 0 }]}>
                <Text style={styles.contentText}>{campaign.place}</Text>
                <Text style={styles.contentText}>{campaign.date}</Text>
                <Text style={styles.contentText}>{campaign.startTime}</Text>
                <Text style={styles.contentText}>{campaign.endTime}</Text>
                <Text style={styles.contentText}>{selected}</Text>
                <AppButton
                  title={translate("Change")}
                  style={styles.changebtn}
                  fontSize={15}
                  onPress={() => {
                    setModalVisible(true);
                  }}
                />
              </View>
            </View>
            <View style={styles.description}>
              <Text style={{ fontSize: 16 }}>{campaign.description}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                title={translate("Attendence")}
                style={[
                  styles.button,
                  selected !== "HAPPENING" && {
                    backgroundColor: colors.lightGray,
                  },
                ]}
                fontSize={15}
                disabled={selected === "HAPPENING" ? false : true}
                onPress={() => {
                  navigation.navigate(routes.Attendence, { campaign });
                }}
              />
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
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout="column"
              containerStyle={styles.radioButtons}
            />
          </View>
        </View>
      </Modal>
      <Snackbar
        visible={snakVisible}
        onDismiss={() => SetSnackVisible(false)}
        duration={2000}
        action={{
          label: translate("OK"),
          labelStyle: { color: colors.limeGreen, fontSize: 18 },
          onPress: () => {
            SetSnackVisible(false);
          },
        }}
        style={{ backgroundColor: colors.black }}
      >
        <View>
          <Text style={styles.snackbar}>{translate("SCSsnackbar")}</Text>
        </View>
      </Snackbar>
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
    marginTop: 10,
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
    fontSize: 16,
  },
  contentText: { paddingBottom: 10, color: colors.black, fontSize: 16 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 20,
  },
  description: {
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 16,
  },
  button: {
    width: 330,
    height: 40,
    borderRadius: 5,
    marginTop: 30,
  },
  postbtn: {
    width: 140,
    height: 40,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "flex-end",
    marginRight: 15,
  },
  changebtn: {
    width: 130,
    height: 40,
    borderRadius: 5,
    alignSelf: "flex-end",
    marginTop: 0,
    marginRight: -10,
  },
  radioButtons: {
    color: colors.primary,
    borderColor: colors.primary,
    alignItems: "flex-start",
  },

  //afsaf
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
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
  snackbar: {
    color: colors.limeGreen,
    fontSize: 18,
  },
});