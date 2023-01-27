import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIESZER } from '../data/dummy-data';

function IncomingPhotoszer(props:any) {
  function renderCategoryItem(itemData:any) {
    function pressHandler() {
        console.log(props);
    //   props.navigation.navigate('PhotoDetails', {
    //     categoryId: itemData.item.id,
    //   });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIESZER}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={3}
    />
  );
}

export default IncomingPhotoszer;
