import React, { useState } from "react";
import AppForm from "../components/common/AppForm";
import AppFormField from "../components/common/AppFormField";
import Screen from "../components/common/Screen";
import SubmitButton from "../components/common/SubmitBUtton";
import * as Yup from "yup";
import colors from "../config/colors";
import { StyleSheet, Text, View } from "react-native";
import {translate} from "../components/common/translator";
import {Snackbar } from "react-native-paper";
import routes from "../navigation/routes";

export default function ContributionFormScreen({navigation}) {
  const [snakVisible, SetSnackVisible]=useState(false)
  const validationSchema = Yup.object().shape({
    FirstName: Yup.string().min(5),
    LastName: Yup.string().min(5),
    ContactNo: Yup.string().min(10).max(10),
    Contribution: Yup.string(),
  });
  const handleSubmit = (value) => {
    SetSnackVisible(true);
    setTimeout(() => {
      navigation.navigate(routes.ALL_CAMPAIGNS);
    }, 2500);
    
    
  };
  return (
    <Screen>
      <View style={styles.form}>
        <AppForm
          initialValues={{
            FirstName: "",
            LastName: "",
            ContactNo: "",
            Contribution: "",
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={validationSchema}
        >
          <View style={styles.fields}>
            <Text style={styles.text}>{translate("FirstName")}</Text>
            <AppFormField maxLength={255} name="FirstName" />
            <Text style={styles.text}>{translate("LastName")}</Text>
            <AppFormField maxLength={255} name="LastName" />
            <Text style={styles.text}>{translate("ContactNo")}</Text>
            <AppFormField maxLength={255} name="ContactNo" />
            <Text style={styles.text}>{translate("Contribution")}</Text>
            <AppFormField
              maxLength={255}
              name="Contribution"
              multiline
              numberOfLines={4}
              height={100}
            />
          </View>
          <View style={styles.save}>
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
          labelStyle:{color:colors.limeGreen,fontSize: 18,},
          onPress: () => {
            SetSnackVisible(false);
          },
        }}
        style={{ backgroundColor: colors.black }}
      >
        <View>
          <Text style={styles.snackbar}>{translate("CYSsnackbar")}</Text>
        </View>
      </Snackbar>
    </Screen>
  );
}
const styles = StyleSheet.create({
  form: {
    marginTop: 50,
    marginBottom: 0,
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
  submitbutton: {
    width: 130,
    height: 40,
    borderRadius: 10,

    color: colors.white,
    marginRight: 50,
  },
  save: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: 10,
  },
  snackbar: {
    color: colors.limeGreen,
    fontSize: 18,
  },
});
