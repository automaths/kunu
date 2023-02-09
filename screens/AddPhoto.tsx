import { useCallback, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../components/UI/Button';
import ImagePicker from '../components/UI/ImagePicker';
import { Colors } from '../constants/Colors_js';
import { LINKS } from '../data/dummy-data';
import { Storage } from '@aws-amplify/storage';
import uuid from 'react-native-uuid';
import { Auth, DataStore } from 'aws-amplify';
import { IncomingPhotos } from '../models';

function AddPhoto(props: {route: any}) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [user, setUser] = useState({
        attributes: {
            sub: '',
        },
    });

    const sendRandomPhoto = async () => {
        const random = (Math.floor(Math.random() * 100) + 1) % 10;
        let photoToSend = LINKS[random].link;
        console.log(`the link is ${photoToSend}}`);
        const identifier = uuid.v4().toString();
        const result = await Storage.put(identifier, {
            link: photoToSend,
            sender: user.attributes.sub,
            receiver: props.route.params.target,
            title: enteredTitle,
        });
        console.log('the result of sending the photo is: ');
        console.log(result);
        const saving = await DataStore.save(
            new IncomingPhotos({
                link: photoToSend,
                sender: user.attributes.sub,
                receiver: props.route.params.target,
                title: enteredTitle,
            }),
        );
        console.log('then saved to the db');
        console.log(saving);
    }

    function changeTitleHandler(enteredText: any) {
        setEnteredTitle(enteredText);
    }

    function takeImageHandler(imageUri: any) {
        setSelectedImage(imageUri);
    }

    useEffect(() => {
        // const test = Auth.currentUserInfo().then((result) => {
        //     console.log('setting up the user');
        //     setUser(result);
        // });
    }, [false]);

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={changeTitleHandler}
                    value={enteredTitle}
                />
            </View>
            <ImagePicker onTakeImage={takeImageHandler} />
            <View style={{ marginTop: 50 }}>
                <Button onPress={sendRandomPhoto}>Send image</Button>
            </View>
        </ScrollView>
    );
}

export default AddPhoto;

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500,
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary800,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100,
    },
});
