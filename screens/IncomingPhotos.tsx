import { ActionSheetIOS, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { IMAGES } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

function IncomingPhotos() {
    const navigation = useNavigation();

    const [images, setImages] = useState([
        {
            id: '',
            image: require('../data/images/1.jpeg'),
            index: 0,
        },
    ]);

    useEffect(() => {
        setImages(IMAGES);
    }, [false]);

    return (
        <FlatList
            data={images}
            keyExtractor={(item) => item.id}
            renderItem={(item) => {
                return (
                    <CategoryGridTile
                        image={item.item.image}
                        onPress={() => {
                            navigation.navigate('SlidingView', {
                                image: item.item.image,
                            });
                        }}
                        onLongPress={() => {
                            ActionSheetIOS.showActionSheetWithOptions(
                                {
                                    options: [
                                        'Remove photo access to Kunuer',
                                        'Share photo to other Kunuer',
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

export default IncomingPhotos;
