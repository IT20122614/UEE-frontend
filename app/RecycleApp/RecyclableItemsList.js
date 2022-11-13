import { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';
import { Button, Card } from '@rneui/themed';
import { onValue, ref } from 'firebase/database';
import { db } from './FirebaseConfig';

export default function RecyclableItemsList({ navigation }) {
    const currentUserEmailAddress = "amalP@gmail.com";

    const [data, setData] = useState({});

    useEffect(() => {
        return onValue(ref(db, '/items'), querySnapshot => {
            let data = querySnapshot.val();
            let recievedItems = { ...data };
            setData(recievedItems);
        });
    }, []);

    function filterItems(category) {
        if (category !== 'ALL') {
            return onValue(ref(db, '/items'), querySnapshot => {
                let data = querySnapshot.val();
                let recievedItems = { ...data };
                setData(recievedItems);

                const filtered = Object.keys(data)
                    .filter(key => data[key].category === category)
                    .reduce((obj, key) => {
                        obj[key] = data[key];
                        return obj;
                    }, {});

                setData(filtered);
            });
        } else {
            return onValue(ref(db, '/items'), querySnapshot => {
                let data = querySnapshot.val();
                let recievedItems = { ...data };
                setData(recievedItems);
            });
        }
    }

    function renderItems() {
        const keys = Object.keys(data);

        return keys.map((key) => {
            return (
                (!data[key].reservedBy && data[key].selleremail !== currentUserEmailAddress) &&
                <Card key={key}>
                    <Card.Title style={{ fontSize: 14 }}>{data[key].title}</Card.Title>
                    <Card.Divider />
                    {data[key].isfree === 'true' ?
                        <Text style={{ position: "absolute", color: "red", fontSize: 11 }}>Free</Text>
                        :
                        <Text style={{ position: "absolute", fontSize: 11 }}>Paid</Text>
                    }
                    <Card.Image source={{ uri: data[key].picturelink }} />
                    <Card.Divider />
                    <Text style={{ marginBottom: 10, fontSize: 12 }}>{data[key].description}</Text>
                    <Card.Divider />
                    <Button
                        buttonStyle={{
                            backgroundColor: "green"
                        }}
                        title="View More"
                        titleStyle={{ fontSize: 12 }}
                        onPress={() => {
                            navigation.navigate('SingleView', {
                                key: key,
                                isfree: data[key].isfree,
                                title: data[key].title,
                                description: data[key].description,
                                category: data[key].category,
                                sellername: data[key].sellername,
                                selleremail: data[key].selleremail,
                                address: data[key].address,
                                mobilenumber: data[key].mobilenumber,
                                picturelink: data[key].picturelink
                            });
                        }}
                    />
                </Card>
            );
        });
    }

    return (
        <ScrollView>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
            <Text><>{'\n'}</></Text>
            <ScrollView horizontal={true} contentContainerStyle={styles.container}>
                <View>
                    <Button
                        title="ALL"
                        buttonStyle={{
                            marginLeft: 15,
                            borderRadius: 25,
                            border: '2px black',
                            padding: 2,
                            width: 60,
                            backgroundColor: 'green'
                        }}
                        onPress={() => {
                            filterItems("ALL")
                        }} />
                </View>
                <View>
                    <Button
                        title="GLASS"
                        buttonStyle={{
                            marginLeft: 15,
                            borderRadius: 25,
                            border: '2px black',
                            padding: 2,
                            width: 80,
                            backgroundColor: 'green'
                        }}
                        onPress={() => {
                            filterItems("GLASS")
                        }} />
                </View>
                <View>
                    <Button
                        title="PLASTICS"
                        buttonStyle={{
                            marginLeft: 15,
                            borderRadius: 25,
                            border: '2px black',
                            padding: 2,
                            width: 110,
                            backgroundColor: 'green'
                        }}
                        onPress={() => {
                            filterItems("PLASTICS")
                        }} />
                </View>
                <View>
                    <Button
                        title="POLYTHENE"
                        buttonStyle={{
                            marginLeft: 15,
                            borderRadius: 25,
                            border: '2px black',
                            padding: 2,
                            width: 120,
                            backgroundColor: 'green'
                        }}
                        onPress={() => {
                            filterItems("POLYTHENE")
                        }} />
                </View>
                <View>
                    <Button
                        title="RUBBER"
                        buttonStyle={{
                            marginLeft: 15,
                            borderRadius: 25,
                            border: '2px black',
                            padding: 2,
                            width: 90,
                            backgroundColor: 'green'
                        }}
                        onPress={() => {
                            filterItems("RUBBER")
                        }} />
                </View>
                <View>
                    <Button
                        title="USED ELECTRONICS"
                        buttonStyle={{
                            marginLeft: 15,
                            borderRadius: 25,
                            border: '2px black',
                            padding: 2,
                            width: 190,
                            backgroundColor: 'green'
                        }}
                        onPress={() => {
                            filterItems("USED ELECTRONICS")
                        }} />
                </View>
            </ScrollView>
            <View>
                {renderItems()}
                <Text><>{'\n\n'}</></Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

registerRootComponent(RecyclableItemsList);