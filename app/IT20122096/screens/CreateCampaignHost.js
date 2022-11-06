import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppForm from "../components/common/AppForm";
import Screen from "../components/common/Screen";
import * as Yup from "yup";
import AppFormField from "../components/common/AppFormField";
import AppFormImagePicker from "./../components/common/AppFormImagePicker";
import { translate } from "../components/common/translator";
import colors from "../config/colors";
import SubmitButton from "../components/common/SubmitBUtton";
import { Snackbar } from "react-native-paper";
import routes from "../navigation/routes";

export default function CreateCampaignHost({ navigation }) {
  const [snakVisible, SetSnackVisible] = useState(false);
  const validationSchema = Yup.object().shape({
    images: Yup.array()
      .min(1, "Please select at least one image")
      .label("Images"),
    place: Yup.string(),
    date: Yup.string(),
    startTime: Yup.string(),
    endTime: Yup.string(),
    description: Yup.string(),
  });
  const handleSubmit = async (values) => {
    SetSnackVisible(true);
    setTimeout(() => {
      navigation.navigate(routes.ALL_CAMPAIGNS);
    }, 2500);
  };
  return (
    <Screen>
      <View style={styles.header}>
        <Text
          style={{ color: colors.primary, fontSize: 17, fontWeight: "bold" }}
        >
          {translate("HostNewForm")}
        </Text>
      </View>
      <ScrollView>
        <View style={styles.form}>
          <AppForm
            initialValues={{
              images: [],
              place: "",
              date: "",
              startTime: "",
              endTime: "",
              description: "",
            }}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
          >
            <View style={{marginLeft:15}}>
              <AppFormImagePicker name={"images"} />
            </View>
            <View style={styles.fields}>
              <Text style={styles.text}>{translate("Place")}</Text>
              <AppFormField maxLength={255} name="place" />
              <Text style={styles.text}>{translate("Date")}</Text>
              <AppFormField maxLength={255} name="date" />
              <Text style={styles.text}>{translate("StartTime")}</Text>
              <AppFormField maxLength={255} name="startTime" />
              <Text style={styles.text}>{translate("EndTime")}</Text>
              <AppFormField maxLength={255} name="endTime" />
              <Text style={styles.text}>{translate("Description")}</Text>
              <AppFormField
                maxLength={255}
                name="description"
                multiline
                numberOfLines={4}
                height={90}
              />
            </View>
            <View style={styles.submit}>
              <SubmitButton
                title={translate("Save")}
                style={styles.submitbutton}
                fontSize={18}
              />
            </View>
          </AppForm>
        </View>
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
            <Text style={styles.snackbar}>{translate("CCHsnackbar")}</Text>
          </View>
        </Snackbar>
      </ScrollView>
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
  form: {
    margin: 10,
    marginBottom: 20,
  },
  fields: {
    alignSelf: "center",
    width: 400,
    padding: 20,
    marginBottom: 10,
  },
  text: {
    color: colors.primary,
    fontSize: 15,
  },
  submit: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: 20,
  },
  submitbutton: {
    width: 130,
    height: 40,
    borderRadius: 10,
    color: colors.white,
    marginRight: 50,
  },
  snackbar: {
    color: colors.limeGreen,
    fontSize: 18,
  },
});
