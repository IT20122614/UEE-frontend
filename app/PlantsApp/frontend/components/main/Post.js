import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Post(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/image1.png")}
        style={styles.image}
      ></Image>
      <View style={styles.form}>
        <Image
          style={styles.plantImage}
          source={{ uri: props.route.params.item.downloadURL }}
        />
        <View style={styles.nameForm}>
        <Text style={{fontSize: 30, marginLeft: 30, marginTop: 4, fontWeight: "bold"}}>{props.route.params.item.caption.plantName}</Text>
        </View>
        <View style={styles.instructionForm}>
        <Text style={{fontSize: 30, marginLeft: 30, marginTop: 4,}}>{props.route.params.item.caption.plantName}</Text>
        </View>
        <TouchableOpacity style={styles.purchaseButton} onPress={() => props.navigation.navigate('Purchase', {props})}> 
          <Text style={styles.purchaseText}> Purchase </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
  nameForm: {
    height: 50,
    width: 320,
    backgroundColor: "#d9d9d9",
    marginTop: 10,
    borderRadius: 20,
    marginLeft: 15,
  },
  instructionForm: {
    height: 150,
    width: 320,
    backgroundColor: "#d9d9d9",
    marginTop: 10,
    borderRadius: 20,
    marginLeft: 15,
  },
  plantImage: {
    borderRadius: 30,
    marginLeft: "25%",
    marginTop: 10,
    marginLeft: 15,
    height: 200,
    width: 320,
  },
  purchaseButton: {
    marginTop: 10,
    height: 60,
    width: 250,
    borderRadius: 100,
    marginLeft: 50,
    backgroundColor: "#0072ff",
  },
  purchaseText: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: -1,
    marginLeft: 35,
  },
});
