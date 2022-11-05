import React from 'react'
import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../components/common/Screen";
import AppForm from "./../components/common/AppForm";
import * as Yup from "yup";
import AppFormField from './../components/common/AppFormField';
import colors from '../config/colors';
import SubmitButton from '../components/common/SubmitBUtton';
import routes from '../navigation/routes';

export default function LoginScreen({route,navigation}) {
   const validationSchema = Yup.object().shape({
    email: Yup.string(),
    password:Yup.string()
  })
  const handleSubmit = (value) => {
navigation.navigate(routes.SECTIONS);
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
            <Text style={styles.text}>Email</Text>
            <AppFormField
              maxLength={255}
              name="email"
              placeholder="Enter Email"
            />
            <Text style={styles.text}>Password</Text>
            <AppFormField
              keyboardType="password"
              maxLength={255}
              name="password"
              placeholder="Enter Password"
              secureTextEntry
            />
          </View>
          <View style={styles.login}>
            <SubmitButton
              title={"Log in"}
              style={styles.submitbutton}
              fontSize={18}
            />
            <Text style={styles.text} onPress={() => {
              navigation.navigate(routes.REGISTRATION)
            }} >SIGN UP</Text>
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
    marginBottom: 40,
  },
  form: { marginTop: 10 },
  fields: {
    alignSelf: "center",
    width: 400,
    padding: 20,
    paddingTop: 20,
    marginBottom: 80,
  },
  text: {
    color: colors.primary,
    fontSize:15
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
    paddingLeft:90
  },
});