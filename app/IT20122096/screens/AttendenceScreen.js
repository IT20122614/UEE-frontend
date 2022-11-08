import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Screen from "../components/common/Screen";
import Checkbox from "expo-checkbox";
import colors from "../config/colors";
import AppButton from "../components/common/AppButton";
import { translate } from "../components/common/translator";
import { getAllContributors, markAttendance } from "../api/campaignService";
import { Snackbar } from "react-native-paper";

export default function AttendenceScreen({ route }) {
  const campaign = route.params.campaign;
  const [isChecked, setChecked] = useState(false);
  const [contributors, setContributors] = useState([]);
  const [snakVisible, SetSnackVisible] = useState(false);


  useEffect(() => {
    getContributors();
  }, []);

  const onRefresh = React.useCallback(() => {
    getContributors();
  }, []);

  const getContributors = async () => {
    await getAllContributors(campaign.id)
      .then(({ data }) => {
        setContributors(data);
      })
      .catch((error) => console.log(error));
  };

  const mark = (id) => {
    let temp = contributors.map((contributor) => {
      if (id === contributor.id) {
        return {
          ...contributor,
          attendance:
            contributor.attendance === "PRESENT" ? "ABSENT" : "PRESENT",
        };
      }
      return contributor;
    });
    setContributors(temp);
  };

  const saveChanages = async () => {
    const contrinution = [];
    contributors.forEach((con) => {
      let cont = {
        id: con.id,
        attendance: con.attendance,
      };
      contrinution.push(cont);
    });
    await markAttendance(contrinution)
      .then(({ data }) => {
        SetSnackVisible(true);
        onRefresh();
        console.log(data)
      })
      .catch((error) => console.log(error));
  };

  return (
    <Screen>
      <View>
        <AppButton
          title={translate("SaveChanges")}
          style={styles.savebtn}
          fontSize={15}
          onPress={() => {
            saveChanages();
          }}
        />
      </View>
      <ScrollView>
        <View>
          {contributors.map((cont, index) => (
            <View key={index} style={styles.container}>
              <View style={styles.flex1}>
                <Image source={{ uri: cont.user.image }} style={styles.image} />
              </View>
              <View style={styles.flex2}>
                <Text style={styles.name}>{cont.name}</Text>
              </View>
              <View style={styles.flex3}>
                <Checkbox
                  style={styles.checkbox}
                  value={cont.attendance === "ABSENT" ? false : true}
                  onValueChange={() => {
                    mark(cont.id);
                  }}
                  color={
                    cont.attendance === "PRESENT" ? colors.primary : undefined
                  }
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
          <Text style={styles.snackbar}>{translate("ASsnackbar")}</Text>
        </View>
      </Snackbar>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    margin: 5,
    padding: 5,
    backgroundColor: colors.lightGreen,
  },
  flex1: { flex: 1 },
  flex2: { flex: 4 },
  flex3: { flex: 0.5 },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontWeight: "bold",
    fontSize: 19,
    color: colors.primary,
  },
  checkbox: {
    width: 30,
    height: 30,
  },
  savebtn: {
    width: 180,
    height: 40,
    borderRadius: 5,
    alignSelf: "flex-end",
    margin: 10,
  },
  snackbar: {
    color: colors.limeGreen,
    fontSize: 18,
  },
});
