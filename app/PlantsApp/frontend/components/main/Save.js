import React, { useState } from "react";
import { TextInput, View, Image, Text } from "react-native";
import { Button } from "react-native-paper";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  doc,
  setDoc,
  getFirestore,
  serverTimestamp,
  collection,
  addDoc,
} from "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";

const data = ["Paid", "Free"];

export default function Save(props, { navigation }) {
  const [caption, setCaption] = useState({
    storeName: "",
    plantName: "",
    instructions: "",
    delivery: "",
  });

  const uploadImage = async () => {
    const uri = props.route.params.image;
    const auth = getAuth();
    const childPath = `post/${auth.currentUser.uid}/${Math.random().toString(
      36
    )}`;
    const storage = getStorage();
    const storageRef = ref(storage, childPath);

    const response = await fetch(uri);
    const blob = await response.blob();

    const task = uploadBytesResumable(storageRef, blob);

    const taskProgress = (snapshot) => {
      console.log(
        `transferred: ${
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        }%`
      );
    };

    const taskError = (snapshot) => {
      console.log(snapshot);
    };

    const taskCompleted = async () => {
      await getDownloadURL(task.snapshot.ref).then((snapshot) => {
        savePostData(snapshot);
      });
    };

    task.on("state_changed", taskProgress, taskError, taskCompleted);
  };

  const savePostData = async (downloadURL) => {
    const auth = getAuth();
    const db = getFirestore();
    const timeStamp = serverTimestamp();
    await addDoc(collection(db, "posts", auth.currentUser.uid, "userPosts"), {
      downloadURL,
      caption,
      creation: timeStamp,
    })
      .then(function () {
        props.navigation.popToTop();
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: props.route.params.image }} />
      <TextInput
        placeholder="Store Name:"
        onChangeText={(storeName) =>
          setCaption({
            storeName: storeName,
          })
        }
      />
      <TextInput
        placeholder="Plant Name:"
        onChangeText={(plantName) =>
          setCaption({
            ...caption,
            plantName: plantName,
          })
        }
      />
      <TextInput
        placeholder="Instructions:"
        onChangeText={(instructions) =>
          setCaption({
            ...caption,
            instructions: instructions,
          })
        }
      />
      <Text>Delivery Type:</Text>
      <SelectDropdown
        data={data}
        onSelect={(selectedItem) => {
          setCaption({
            ...caption,
            delivery: selectedItem,
          });
        }}
        defaultValue="Select Delivery type"
      />
      <Button title="Save" onPress={() => uploadImage()}> set </Button>
    </View>
  );
}
