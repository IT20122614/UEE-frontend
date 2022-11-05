import { Text, View, ToastAndroid } from "react-native";
import { Button, Card } from '@rneui/themed';
import { ref, update } from 'firebase/database';
import { db } from './FirebaseConfig';

export default function ItemView({ route, navigation }) {
    const userEmail = "amalP@gmail.com";
    const userFullName = "Amal Perera";

    const { key } = route.params;
    const { isfree } = route.params;
    const { title } = route.params;
    const { description } = route.params;
    const { category } = route.params;
    const { sellername } = route.params;
    const { selleremail } = route.params;
    const { address } = route.params;
    const { mobilenumber } = route.params;
    const { picturelink } = route.params;

    function reserveItem() {
        update(ref(db, '/items'), {
            [key]: {
                isfree: isfree,
                title: title,
                description: description,
                category: category,
                sellername: sellername,
                selleremail: selleremail,
                address: address,
                mobilenumber: mobilenumber,
                picturelink: picturelink,
                reservedBy: userEmail,
                reservername: userFullName
            }
        });
        ToastAndroid.show("Item Reserved", ToastAndroid.SHORT);
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
                title="Go Back"
                buttonStyle={{
                    marginLeft: 15,
                    borderRadius: 25,
                    border: '2px black',
                    padding: 5,
                    width: 140,
                    backgroundColor: 'green'
                }}
                onPress={() => {
                    navigation.goBack();
                }} />
            <Card>
                <Card.Title style={{ fontSize: 14 }}>{title}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: picturelink }} />
                <Card.Divider />
                <Text style={{ marginBottom: 10, fontSize: 12 }}>{description}</Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10, fontSize: 12 }}>Seller's Information{'\n'}</Text>
                <Text style={{ marginBottom: 10, fontSize: 12 }}>Name: {sellername}</Text>
                <Text style={{ marginBottom: 10, fontSize: 12 }}>Mobile Number: {mobilenumber}</Text>
                <Text style={{ marginBottom: 10, fontSize: 12 }}>Address: {address}</Text>
                <Button
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        backgroundColor: "green"
                    }}
                    title="Reserve"
                    titleStyle={{ fontSize: 12 }}
                    onPress={() => { reserveItem() }}
                />
            </Card>
        </View>
    );
}