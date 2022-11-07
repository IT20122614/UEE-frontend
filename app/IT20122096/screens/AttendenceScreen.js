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
import { getAllContributors } from "../api/campaignService";

export default function AttendenceScreen({ route }) {
  const campaign = route.params.campaign;
  const [isChecked, setChecked] = useState(false);
  const [contributors, setContributors] = useState([]);
  const [attendence, setAttendence] = useState([]);

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
  useEffect(() => {
    getContributors()
  },[])

  const saveChanages = () => {
    console.log(contributors);
  }

  const getContributors = async () => {
    await getAllContributors(campaign.id).then(({ data }) => {
      setContributors(data);
    }).catch((error)=>console.log(error))
  }

  return (
    <Screen>
      <View>
        <AppButton title={translate("SaveChanges")} style={styles.savebtn} fontSize={17} onPress={()=>{saveChanages()}} />
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
                  value={
                    cont.attendance === "ABSENT"
                      ? false
                      : true
                  }
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
    width: 150,
    height: 40,
    borderRadius: 5,
    alignSelf: "flex-end",
    margin: 10,
  },
});
