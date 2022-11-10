import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Search(props) {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (search) => {
    const db = getFirestore();
    const q = query(collection(db, "users"), where("name", ">=", search));
    let users = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const data = doc.data();
      const id = doc.id;
      users.push({ id, ...data });
    });
    setUsers(users);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          onChangeText={(search) => fetchUsers(search)}
        />
                <Icon
          style={styles.searchIcon}
          name="search"
          size={20}
          color="#000"
        />
      </View>
      <FlatList
        numColumns={1}
        horizontal={false}
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("Profile", { uid: item.id })
            }
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#73e24c",
  },
  searchSection: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#73e24c',
 },
  searchIcon: {
    padding: 10,
  },
  mainImage: {
    borderRadius: 30,
    marginLeft: "25%",
    marginTop: 10,
    marginLeft: 50,
    height: 130,
    width: 300,
  },
  textInput: {
    backgroundColor: "#d9d9d9",
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,
    height: 70,
    width: 350,
    fontSize: 25,
    borderWidth: 1,
    borderColor: "#59af3a",
    padding: 2,
    fontWeight: "bold",
  },
});
