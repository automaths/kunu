import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';
import {Dimensions} from 'react-native';

function CategoryGridTile(props:any) {

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={props.onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: props.color }]}>
          {/* <Text style={styles.title}>{props.title}</Text> */}
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    width: '33.5%',
    height: '33.5%',
    maxWidth: '33.5%',
    aspectRatio: 1,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    // padding: 16,
    // borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
