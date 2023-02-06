import { ActionSheetIOS, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { ValidatedPhotos } from '../models';
import uuid from 'react-native-uuid';

function IncomingPhotosZer() {
    const navigation = useNavigation();

    const [images, setImages] = useState([
        {
            sender: '',
            receiver: '',
            link: '',
            title: '',
        },
    ]);

    const [user, setUser] = useState({
        attributes: {
            sub: '',
        },
    });

    useEffect(() => {
        const test = Auth.currentUserInfo().then((result:any) => {
            console.log('setting up the user');
            console.log(result);
            setUser(result);
            DataStore.query(ValidatedPhotos, (photo:any) => photo.sender.contains(result.attributes.sub))
                .then((result:any) => {
                    console.log('fetching the images gives: ');
                    console.log(result);
                    setImages(result);
                })
        });
    }, [false]);

    return (
        <FlatList
            data={images}
            keyExtractor={(item) => uuid.v4().toString()}
            renderItem={(item) => {
                return (
                    <CategoryGridTile
                        image={item.item.link}
                        onPress={() => {
                            navigation.navigate('SlidingView', {
                                image: item.item.link,
                            });
                        }}
                        onLongPress={() => {
                            ActionSheetIOS.showActionSheetWithOptions(
                                {
                                    options: [
                                        'Suppress Kunu from library',
                                        'Another option',
                                        'Another option',
                                        'Cancel',
                                    ],
                                    cancelButtonIndex: 3,
                                    title: 'Kunu Option',
                                    message: 'Manage your Kunu',
                                },
                                (buttonIndexThatSelected) => {
                                    if (buttonIndexThatSelected === 0) {
                                        setImages(
                                            images.filter(
                                                (image: any) =>
                                                    image.id !== item.item.id,
                                            ),
                                        );
                                    }
                                    // else if (buttonIndexThatSelected === 1)
                                    //     console.log('second selected');
                                    // else if (buttonIndexThatSelected === 2)
                                    //     console.log('third selected');
                                    // else if (buttonIndexThatSelected === 3)
                                    //     console.log('cancel selected');
                                },
                            );
                        }}
                    />
                );
            }}
            numColumns={3}
        />
    );
}

export default IncomingPhotosZer;
