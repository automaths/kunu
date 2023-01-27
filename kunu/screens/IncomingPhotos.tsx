import { ActionSheetIOS, Alert, FlatList, View } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';
import Carousel from '../components/Carousel';

function IncomingPhotos() {

    const navigation = useNavigation();
  function renderCategoryItem(itemData:any) {
    function pressHandler() {
        navigation.navigate('SlidingView', {
            id: itemData.item.id,
        });
    }
    // function longPressHandler() {
    //     Alert.alert('this is the alert');
    // }

    // const longPressHandler = (event:any, user:any, callback:any) => {
    //     ActionSheetIOS.showActionSheetWithOptions({
    //       options: ['Copy Username', 'Call User', 'Add to favorites', 'Cancel'],
    //       cancelButtonIndex: [3],
    //       title: 'Hey',
    //       message : 'What do you want to do now?'
    //     }, (buttonIndexThatSelected) => {
    //       // Do something with result
    //       if(callback && typeof callback === 'function') callback();
    //     });
    //   };

    const longPressHandler = (event:any, itemData:any, callback:any) => {
        ActionSheetIOS.showActionSheetWithOptions({
          options: [`Remove Authorization of ${itemData.item.id}`, 'Add Authorization', 'Coucou', 'Cancel'],
          cancelButtonIndex: 3,
          title: 'Set Authorizations',
          message : 'Enable action on photo'
        }, (buttonIndexThatSelected) => {
            if (buttonIndexThatSelected === 0)
                console.log('first selected');
            else if (buttonIndexThatSelected === 1)
                console.log('second selected');
            else if (buttonIndexThatSelected === 2)
                console.log('third selected');
            else if (buttonIndexThatSelected === 3)
                console.log('cancel selected');
        });
      };


    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        onLongPress={(event:any) => {longPressHandler(event, itemData, () => console.log('Done'))}}
      />
    );
  }

  return (
    <FlatList
              data={CATEGORIES}
              keyExtractor={(item) => item.id}
              renderItem={renderCategoryItem}
              numColumns={3} />
  );
}

export default IncomingPhotos;
