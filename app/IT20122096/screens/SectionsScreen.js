import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../components/common/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AppButton from "../components/common/AppButton";

export default function SectionsScreen({ route, navigation }) {
  return (
    <Screen>
      <View>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.buttons}>
        <AppButton
          title={"Help clean the nature"}
          style={styles.submitbutton}
          fontSize={18}
          onPress={() => {
            navigation.navigate(routes.HOME);
          }}
        />
        <AppButton
          title={"Chemical Management"}
          style={styles.submitbutton}
          fontSize={18}
          onPress={() => {
            navigation.navigate(routes.CHEMICAL_HOME);
          }}
        />
        <AppButton
          title={"Plant App"}
          style={styles.submitbutton}
          fontSize={18}
          onPress={() => {
            navigation.navigate(routes.HOME);
          }}
        />
        <AppButton
          title={"Recycle App"}
          style={styles.submitbutton}
          fontSize={18}
          onPress={() => {
            navigation.navigate(routes.HOME);
          }}
        />
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
    marginBottom: 80,
  },
  buttons: {
    alignSelf: "center",
  },
  submitbutton: {
    width: 330,
    height: 50,
    borderRadius: 6,
    color: colors.white,
    marginBottom: 40,
  },
});
