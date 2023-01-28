import { ActionSheetIOS, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES, IMAGES } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';

function IncomingPhotos() {
    const navigation = useNavigation();
    function renderCategoryItem(itemData: any) {
        function pressHandler() {
            navigation.navigate('SlidingView', {
                id: itemData.item.id,
            });
        }
        const longPressHandler = (event: any, itemData: any, callback: any) => {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: [
                        `Remove Authorization of ${itemData.item.id}`,
                        'Add Authorization',
                        'Coucou',
                        'Cancel',
                    ],
                    cancelButtonIndex: 3,
                    title: 'Set Authorizations',
                    message: 'Enable action on photo',
                },
                (buttonIndexThatSelected) => {
                    callback();
                    if (buttonIndexThatSelected === 0)
                        console.log('first selected');
                    else if (buttonIndexThatSelected === 1)
                        console.log('second selected');
                    else if (buttonIndexThatSelected === 2)
                        console.log('third selected');
                    else if (buttonIndexThatSelected === 3)
                        console.log('cancel selected');
                },
            );
        };

        return (
            <CategoryGridTile
                image={itemData.item.image}
                color={itemData.item.color}
                onPress={pressHandler}
                onLongPress={(event: any) => {
                    longPressHandler(event, itemData, () =>
                        console.log('Done'),
                    );
                }}
            />
        );
    }

    return (
        <FlatList
            data={IMAGES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={3}
        />
    );
}

export default IncomingPhotos;
