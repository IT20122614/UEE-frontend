import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Image,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import SelectDropdown from "react-native-select-dropdown";

const data = ["User", "Supplier"];

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      type: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  onSignUp() {
    const { email, password, name, type } = this.state;
    const auth = getAuth();
    const db = getFirestore();
    console.log(this.state);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setDoc(doc(db, "users", auth.currentUser.uid), {
          name,
          email,
          type,
        });
        console.log(result);
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
            placeholder="name"
            onChangeText={(name) => this.setState({ name: name })}
          />
          <SelectDropdown
            buttonStyle={styles.dropdown} dropdownStyle={styles.dropdownMenu}
            defaultButtonText={"Select User Type"}
            data={data}
            onSelect={(selectedItem) => {
              this.setState({ type: selectedItem })
            }}
          />
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
            <Text style={styles.signupText}> SignUp </Text>
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
    height: 400,
    width: 350,
    backgroundColor: "#b2fc81",
    marginTop: 10,
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
    marginTop: 100,
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
  dropdown: {
    height: 70,
    backgroundColor: "#d9d9d9",
    width: 330,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#59af3a",
    borderRadius: 15,
  },
  dropdownMenu: {
    height: 100,
    backgroundColor: "#d9d9d9",
    width: 330,
    marginTop: -100,
    marginLeft: 5,
    marginRight: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#59af3a",
    borderRadius: 15,
  },
});
