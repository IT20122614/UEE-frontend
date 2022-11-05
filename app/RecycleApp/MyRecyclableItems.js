import { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Card } from '@rneui/themed';
import { onValue, ref } from 'firebase/database';
import { db } from './FirebaseConfig';

export default function MyRecyclableItems() {
    const currentUserEmailAddress = "amalP@gmail.com";

    const [data, setData] = useState({});

    useEffect(() => {
        return onValue(ref(db, '/items'), querySnapshot => {
            let data = querySnapshot.val();
            let recievedItems = { ...data };
            setData(recievedItems);
        });
    }, []);

    function renderMyPostedItems() {
        const keys = Object.keys(data);
        return keys.filter((key) => data[key].selleremail === currentUserEmailAddress).map((key) => {
            return (
                <Card key={key}>
                    <Card.Title style={{ fontSize: 14 }}>{data[key].title}</Card.Title>
                    <Card.Divider />
                    {data[key].isfree === false ?
                        <Text style={{ position: "absolute", color: "red", fontSize: 11 }}>Free</Text>
                        :
                        <Text style={{ position: "absolute", fontSize: 11 }}>Paid</Text>
                    }
                    <Card.Image source={{ uri: data[key].picturelink }} />
                    <Card.Divider />
                    {data[key].reservedBy ?
                        <Text style={{ marginBottom: 10, fontSize: 12, color: 'red' }}>Reserved or bought by {data[key].reservername}. Contact this person through {data[key].reservedBy} email address.</Text>
                        :
                        <Text style={{ marginBottom: 10, fontSize: 12 }}>{data[key].description}</Text>
                    }
                </Card>
            );
        });
    }

    function renderMyAcquiredItems() {
        const keys = Object.keys(data);
        return keys.filter((key) => data[key].reservedBy === currentUserEmailAddress).map((key) => {
            return (
                <Card key={key}>
                    <Card.Title style={{ fontSize: 14 }}>{data[key].title}</Card.Title>
                    <Card.Divider />
                    {data[key].isfree === false ?
                        <Text style={{ position: "absolute", color: "red", fontSize: 11 }}>Free</Text>
                        :
                        <Text style={{ position: "absolute", fontSize: 11 }}>Paid</Text>
                    }
                    <Card.Image source={{ uri: data[key].picturelink }} />
                    <Card.Divider />
                    <Text style={{ marginBottom: 10, fontSize: 12 }}>{data[key].description}</Text>
                    <Text style={{ marginBottom: 10, fontSize: 12, color: 'red' }}>This item belongs to {data[key].sellername}. Contact this person through {data[key].selleremail} email address or {data[key].mobilenumber} mobile number or visit {data[key].address} where the item is located.</Text>
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
            {renderMyAcquiredItems().length ?
                <View>
                    <Text style={{ fontSize: 20, margin: 10 }}>My Acquired Items</Text>
                    {renderMyAcquiredItems()}
                    <Text><>{'\n\n'}</></Text>
                </View>
                :
                <></>
            }

            {renderMyPostedItems().length ?
                <View>
                    <Text style={{ fontSize: 20, margin: 10 }}>My Posted Items</Text>
                    {renderMyPostedItems()}
                    <Text><>{'\n\n'}</></Text>
                </View>
                :
                <></>
            }
        </ScrollView>
    );
}