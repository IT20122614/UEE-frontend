import { View, ScrollView, Text } from 'react-native';
import { Card } from '@rneui/themed';

const items = [{
    id: 1,
    isfree: true,
    title: '4 Used Glasses',
    description: '4 used glasses for anyone wants',
    category: 'GLASS',
    sellername: "Amal Perera",
    selleremail: "amalp@gmail.com",
    address: '12/A, Ambagahawatta Road, Millaniya, Piliyandala',
    mobilenumber: '0112910291',
    picturelink: 'https://assets.glasses.com/is/image/Glasses/805289270102__STD__shad__fr.png?impolicy=GL_parameters_transp&width=700',
    reservedBy: null,
    reservername: null
},
{
    id: 2,
    isfree: true,
    title: '3 Used Rubber Tyres',
    description: '4 used rubber tyres for anyone wants',
    category: 'RUBBER',
    sellername: "Patalee Ranawaka",
    selleremail: "patalee@gmail.com",
    address: '43/A, Colombo Road, Bokundara',
    mobilenumber: '0112912839',
    picturelink: 'data:image/jpeg;base64,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',
    reservedBy: 'kasunmalshan@gmail.com',
    reservername: 'Kasun Malshan'
},
{
    id: 3,
    isfree: false,
    title: '1KG Polythene',
    description: '1KG weighted polythene 10/= per 1KG',
    category: 'POLYTHENE',
    sellername: "Amal Perera",
    selleremail: 'amalp@gmail.com',
    address: '423, Old Road, Galle',
    mobilenumber: '0232212839',
    picturelink: 'https://www.dailynews.lk/sites/default/files/news/2021/11/08/Untitled-38.jpg',
    reservedBy: null,
    reservername: null
}];

export default function MyRecyclableItems() {
    function renderMyPostedItems() {
        return items.filter((item) => item.selleremail === "amalp@gmail.com").map((item) => {
            return (
                item.selleremail === "amalp@gmail.com" &&
                <Card key={item.id}>
                    <Card.Title style={{ fontSize: 14 }}>{item.title}</Card.Title>
                    <Card.Divider />
                    {item.isfree === false ?
                        <Text style={{ position: "absolute", color: "red", fontSize: 11 }}>Free</Text>
                        :
                        <Text style={{ position: "absolute", fontSize: 11 }}>Paid</Text>
                    }
                    <Card.Image source={{ uri: item.picturelink }} />
                    <Card.Divider />
                    {item.reservedBy !== null ?
                        <Text style={{ marginBottom: 10, fontSize: 12, color: 'red' }}>Reserved or bought by {item.reservername}</Text>
                        :
                        <Text style={{ marginBottom: 10, fontSize: 12 }}>{item.description}</Text>
                    }
                </Card>
            );
        });
    }

    function renderMyAcquiredItems() {
        return items.filter((item) => item.reservedBy === "amalp@gmail.com").map((item) => {
            return (
                <Card key={item.id}>
                    <Card.Title style={{ fontSize: 14 }}>{item.title}</Card.Title>
                    <Card.Divider />
                    {item.isfree === false ?
                        <Text style={{ position: "absolute", color: "red", fontSize: 11 }}>Free</Text>
                        :
                        <Text style={{ position: "absolute", fontSize: 11 }}>Paid</Text>
                    }
                    <Card.Image source={{ uri: item.picturelink }} />
                    <Card.Divider />
                    <Text style={{ marginBottom: 10, fontSize: 12 }}>{item.description}</Text>
                </Card>
            );
        });
    }

    return (
        <ScrollView>
            <View>
                <Text style={{ fontSize: 20, margin: 10 }}>My Posted Items</Text>
                {renderMyPostedItems() ?
                    renderMyPostedItems()
                    :
                    <Text style={{ fontSize: 12, margin: 10, textAlign: 'center', color: 'blue' }}>
                        You do not have any posted items
                    </Text>
                }
            </View>
            <View>
                <Text style={{ fontSize: 20, margin: 10 }}>My Acquired Items</Text>
                {renderMyAcquiredItems().length ?
                    renderMyAcquiredItems()
                    :
                    <Text style={{ fontSize: 12, margin: 10, textAlign: 'center', color: 'blue' }}>
                        You do not have any acquired items
                    </Text>
                }
            </View>
        </ScrollView>
    );
}