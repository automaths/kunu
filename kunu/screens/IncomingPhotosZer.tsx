import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIESZER } from '../data/dummy-data';

// import { CATEGORIES } from '../data/dummy-data.tsx';

function IncomingPhotos(props:any) {
  function renderCategoryItem(itemData:any) {
    function pressHandler() {
      props.navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
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

export default IncomingPhotos;
