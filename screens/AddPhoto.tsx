import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

// import { Colors } from '../constants/Colors';
import Button from '../components/UI/Button';
import ImagePicker from '../components/UI/ImagePicker';
import { Colors } from '../constants/Colors_js';

function AddPhoto() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  function changeTitleHandler(enteredText:any) {
    setEnteredTitle(enteredText);
  }

  function takeImageHandler(imageUri:any) {
    setSelectedImage(imageUri);
  }

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
      <View style={{marginTop: 50}}>
        <Button onPress={() => {console.log('coucou')}}>Send image</Button>
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
