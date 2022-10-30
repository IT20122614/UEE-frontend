import { Text, View } from "react-native";
import { Button, Card } from '@rneui/themed';

export default function ItemView({ route, navigation }) {
    const { title } = route.params;
    const { picturelink } = route.params;
    const { description } = route.params;
    const { sellername } = route.params;
    const { sellermobilenumber } = route.params;
    const { selleraddress } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Card>
                <Card.Title style={{ fontSize: 14 }}>{title}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: picturelink }} />
                <Card.Divider />
                <Text style={{ marginBottom: 10, fontSize: 12 }}>{description}</Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10, fontSize: 12 }}>Seller's Information{'\n'}</Text>
                <Text style={{ marginBottom: 10, fontSize: 12 }}>Name: {sellername}</Text>
                <Text style={{ marginBottom: 10, fontSize: 12 }}>Mobile Number: {sellermobilenumber}</Text>
                <Text style={{ marginBottom: 10, fontSize: 12 }}>Address: {selleraddress}</Text>
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
                    onPress={() => { navigation.goBack() }}
                />
            </Card>
        </View>
    );
}