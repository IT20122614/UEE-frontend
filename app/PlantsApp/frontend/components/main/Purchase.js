import React from "react";
import { StyleSheet, TextInput, View, Text, Image, TouchableOpacity } from "react-native";

export default function Purchase(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/image1.png")}
        style={styles.image}
      ></Image>
      <View style={styles.form}>
      <TextInput
            style={styles.textInput}
            placeholder="name"
          />
          <TextInput
            style={styles.textInput}
            placeholder="email"
          />
          <TextInput
            style={styles.textInput}
            placeholder="password"
          />
          <TextInput
            style={styles.textInput}
            placeholder="password"
          />
        <TouchableOpacity style={styles.purchaseButton} onPress={() => props.navigation.navigate('Feed')}> 
          <Text style={styles.purchaseText}> Place Order </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#73e24c",
    },
    image: {
      borderRadius: 30,
      marginLeft: "25%",
      marginTop: 40,
      marginLeft: 50,
      height: 130,
      width: 300,
    },
    form: {
      height: 510,
      width: 350,
      backgroundColor: "#b2fc81",
      marginTop: 10,
      borderRadius: 20,
      marginLeft: 25,
    },
    textInput: {
        backgroundColor: "#d9d9d9",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15,
        height: 70,
        fontSize: 20,
        borderWidth: 1,
        borderColor: "#59af3a",
        padding: 2,
      },
    purchaseButton: {
      marginTop: 20,
      height: 60,
      width: 250,
      borderRadius: 100,
      marginLeft: 50,
      backgroundColor: "#0072ff",
    },
    purchaseText: {
      fontSize: 35,
      fontWeight: "bold",
      marginTop: 2,
      marginLeft: 25,
    },
  });
