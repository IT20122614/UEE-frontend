import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  async onSignUp() {
    const { email, password } = this.state;
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/image1.png")}
          style={styles.image}
        ></Image>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder="email"
            onChangeText={(email) => this.setState({ email: email })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password: password })}
          />
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => this.onSignUp()}
          >
            <Text style={styles.signupText}> SignIn </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
    marginLeft: 60,
    height: 130,
    width: 300,
  },
  form: {
    height: 300,
    width: 350,
    backgroundColor: "#b2fc81",
    marginTop: 50,
    borderRadius: 20,
    marginLeft: 30,
  },
  textInput: {
    backgroundColor: "#d9d9d9",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 15,
    height: 70,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#59af3a",
    padding: 2,
  },
  signupButton: {
    marginTop: 30,
    height: 60,
    width: 250,
    borderRadius: 100,
    marginLeft: 50,
    backgroundColor: "#0072ff",
  },
  signupText: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: -4,
    marginLeft: 50,
  },
});
