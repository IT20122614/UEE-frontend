import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.verticalLine} />
      <Text style={styles.text}>
        Plant a {"\n"}Tree for{"\n"}Life
      </Text>
      <Image
        source={require("../../assets/image1.png")}
        style={styles.image}
      ></Image>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#73e24c",
  },
  verticalLine: {
    height: "18%",
    width: 5,
    backgroundColor: "green",
    marginTop: -100,
    marginLeft: 100,
  },
  text: {
    marginTop: -165,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 120,
  },

  image: {
    borderRadius: 30,
    marginLeft: "25%",
    marginTop: 80,
  },
  registerButton: {
    marginTop: 30,
    height: 60,
    width: 250,
    borderRadius: 100,
    marginLeft: 80,
    backgroundColor: "#0072ff",
  },
  registerText: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: -4,
    marginLeft: 48,
  },
  loginButton: {
    marginTop: 30,
    height: 60,
    width: 250,
    borderRadius: 100,
    marginLeft: 80,
    backgroundColor: "#0072ff",
  },
  loginText: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: -4,
    marginLeft: 70,
  },
});
