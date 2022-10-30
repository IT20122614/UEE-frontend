import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Form, FormItem, Picker } from 'react-native-form-component';

const categories = ["RUBBER", "GLASS", "POLYTHENE"];

const isFreeStrings = ["Yes", "No"];

export default function AddRecyclableItem() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isfree, setIsfree] = useState('')
    const [address, setAddress] = useState('')
    const [mobilenumber, setMobilenumber] = useState('')

    function displayCategories() {
        return categories.map((category) => {
            return ({ label: category, value: category })
        })
    }

    function displayIsFreeStrings() {
        return isFreeStrings.map((isFreeString) => {
            return ({ label: isFreeString, value: isFreeString })
        })
    }

    return (
        <ScrollView>
            <Form
                onButtonPress={() => console.log({ title: title.trim(), description: description.trim(), category: category, isfree: isfree, address: address, mobilenumber: mobilenumber })}
                buttonStyle={{ backgroundColor: "green", width: 200, marginLeft: '25%', height: 40 }}
                buttonText='Post'
            >
                <View style={{ margin: 15, textAlign: 'center' }}>
                    <FormItem
                        label='Title'
                        value={title}
                        onChangeText={(title) => setTitle(title)}
                        isRequired
                        asterik
                    />
                    <FormItem
                        label='Description'
                        value={description}
                        onChangeText={(description) => setDescription(description)}
                        isRequired
                        asterik
                    />
                    <Picker
                        items={displayCategories()}
                        label='Select Category'
                        selectedValue={category}
                        onSelection={(item) => setCategory(item.value)}
                        isRequired
                        asterik
                    />
                    <Picker
                        items={displayIsFreeStrings()}
                        label='Do you sell this for free?'
                        selectedValue={isfree}
                        onSelection={(item) => setIsfree(item.value)}
                        isRequired
                        asterik
                    />
                    <FormItem
                        label='Address'
                        value={address}
                        onChangeText={(address) => setAddress(address)}
                        isRequired
                        asterik
                    />
                    <FormItem
                        label='Your Contact Number'
                        value={mobilenumber}
                        onChangeText={(mobilenumber) => setMobilenumber(mobilenumber)}
                        isRequired
                        asterik
                    />
                </View>
            </Form>
        </ScrollView>
    )
}