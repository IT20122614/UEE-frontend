import { useState } from 'react';
import { ScrollView, View, ToastAndroid, StyleSheet, Text } from 'react-native';
import { Form, FormItem, Picker } from 'react-native-form-component';
import { ref as dbRef, set, child, push } from 'firebase/database';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from './FirebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import { Button } from '@rneui/themed';

const categories = ["GLASS", "PLASTICS", "POLYTHENE", "RUBBER", "USED ELECTRONICS"];

const isFreeStrings = ["Yes", "No"];

export default function AddRecyclableItem({ route, navigation }) {
    const userEmail = "user1@gmail.com";
    const userFullName = "User 1";

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isfree, setIsfree] = useState('')
    const [address, setAddress] = useState('')
    const [mobilenumber, setMobilenumber] = useState('')
    const [picturelink, setPictureLink] = useState('')
    const [reservedBy, setReservedBy] = useState('')
    const [reservername, setReserverName] = useState('')

    const [image, setImage] = useState(null);

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

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);

            if (image) {
                const imgUri = await fetch(image);
                const uploadableImage = await imgUri.blob();

                const imagePath = `itmes/${image.substring(image.lastIndexOf('/') + 1)}`;

                const firebaseStorageRef = storageRef(storage, imagePath);
                const uploadTask = uploadBytesResumable(firebaseStorageRef, uploadableImage, { contentType: "image/jpg" });

                uploadTask.then(() => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setPictureLink(url);
                    });
                }).catch((error) => {
                    console.error(error);
                });
            }
        }
    };

    function createRecyclableItem() {
        console.log({ title: title.trim(), description: description.trim(), category: category, isfree: isfree, address: address, mobilenumber: mobilenumber, picturelink: picturelink })

        if (!isfree || !title || !description || !categories || !address || !mobilenumber || !picturelink) {
            ToastAndroid.show("Please fill all the items", ToastAndroid.SHORT);
        } else if (/^\d+$/.test(mobilenumber) === false || mobilenumber.length !== 10) {
            ToastAndroid.show("Please fill a valid mobile number", ToastAndroid.SHORT);
        } else {
            const newItemKey = push(child(dbRef(db), 'items')).key;
            set(dbRef(db, 'items/' + newItemKey), {
                isfree: isfree === 'Yes' ? 'true' : 'false',
                title: title,
                description: description.trim(),
                category: category,
                sellername: userFullName,
                selleremail: userEmail,
                address: address,
                mobilenumber: mobilenumber,
                picturelink: picturelink,
                reservedBy: reservedBy,
                reservername: reservername
            });
            setIsfree('');
            setTitle('');
            setDescription('');
            setCategory('');
            setAddress('');
            setMobilenumber('');
            setPictureLink('');

            ToastAndroid.show(`New Recyclable Item Posted ${image}`, ToastAndroid.SHORT);
            navigation.goBack();
        }
    }

    return (
        <ScrollView>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
            <Form
                onButtonPress={() => createRecyclableItem()}
                buttonStyle={{ backgroundColor: "green", width: 200, marginLeft: '25%', height: 40 }}
                buttonText='Post'
            >
                <View style={{ margin: 15, textAlign: 'center' }}>
                    <FormItem
                        label='Title'
                        value={title}
                        onChangeText={(title) => setTitle(title)}
                        asterik
                    />
                    <FormItem
                        label='Description'
                        value={description}
                        onChangeText={(description) => setDescription(description)}
                        asterik
                    />
                    <FormItem
                        label='Upload an image of the item. If you already have a link to an image of your own cloud storage paste it here, but make sure that it is available for public access. If you want to upload to our servers click the button below. Please stay until the link displays to verify that image has been uploaded successfully. Please do not edit the link after the image has been properly uploaded'
                        value={picturelink}
                        onChangeText={(picturelink) => setPictureLink(picturelink)}
                        asterik
                    />
                    <Button title="Click here to pick an image from gallery" buttonStyle={{
                        borderRadius: 0,
                        marginBottom: 0,
                        backgroundColor: "green",
                    }} onPress={() => pickImage()} />
                    <Text>{'\n'}</Text>
                    <Picker
                        items={displayCategories()}
                        label='Select Category'
                        selectedValue={category}
                        onSelection={(item) => setCategory(item.value)}
                        asterik
                    />
                    <Picker
                        items={displayIsFreeStrings()}
                        label='Do you sell this for free?'
                        selectedValue={isfree}
                        onSelection={(item) => setIsfree(item.value)}
                        asterik
                    />
                    <FormItem
                        label='Address'
                        value={address}
                        onChangeText={(address) => setAddress(address)}
                        asterik
                    />
                    <FormItem
                        label='Your Contact Number'
                        value={mobilenumber}
                        onChangeText={(mobilenumber) => setMobilenumber(mobilenumber)}
                        asterik
                    />
                </View>
            </Form>
            <Text>{'\n'}</Text>
        </ScrollView>
    )
}