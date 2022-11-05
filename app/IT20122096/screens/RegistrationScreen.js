import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../components/common/Screen";
import AppForm from "./../components/common/AppForm";
import * as Yup from "yup";
import AppFormField from "../components/common/AppFormField";
import colors from "../config/colors";
import SubmitButton from "../components/common/SubmitBUtton";
import routes from "../navigation/routes";

export default function RegistrationScreen({route,navigation}) {
  const validationSchema = Yup.object().shape({
    email: Yup.string(),
    password:Yup.string()
  })
  const handleSubmit = (value) => {
navigation.navigate(routes.LOGIN);
  };
  return (
    <Screen>
      <View>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.form}>
        <AppForm
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={validationSchema}
        >
          <View style={styles.fields}>
            <Text style={styles.text}>FUll NAME</Text>
            <AppFormField
              maxLength={255}
              name="email"
              placeholder="Enter Full Name"
            />
            <Text style={styles.text}>EMAIL</Text>
            <AppFormField
              maxLength={255}
              name="email"
              placeholder="Enter Email"
            />
            <Text style={styles.text}>PASSWORD</Text>
            <AppFormField
              keyboardType="password"
              maxLength={255}
              name="password"
              placeholder="Enter Password"
              secureTextEntry
            />
            <Text style={styles.text}>CONFIRM PASSWORD</Text>
            <AppFormField
              keyboardType="password"
              maxLength={255}
              name="password"
              placeholder="Enter Confirm Password"
              secureTextEntry
            />
          </View>
          <View style={styles.login}>
            <SubmitButton
              title={"SIGN UP"}
              style={styles.submitbutton}
              fontSize={18}
            />
            <Text
              style={styles.text}
              onPress={() => {
                navigation.navigate(routes.LOGIN);
              }}
            >
              LOGIN
            </Text>
          </View>
        </AppForm>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    marginTop: 60,
    alignSelf: "center",
    marginBottom: 10,
  },
  form: { marginTop: 0 },
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
  login: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingLeft: 90,
  },
});
