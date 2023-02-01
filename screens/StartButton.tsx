import Button from "../components/uit/Button";
import { useNavigation } from '@react-navigation/native';
import { Colors } from '..//constants/Colors_js';
import { Alert, StyleSheet, View } from 'react-native';

const StartButton = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.authContent}>
            <Button onPress={() => {navigation.navigate('AddFriends', {coucou:'coucou'})}}>Go to App</Button>
        </View>
    );
}

export default StartButton;

const styles = StyleSheet.create({
    authContent: {
      marginTop: 64,
      marginHorizontal: 32,
      padding: 16,
      borderRadius: 8,
      backgroundColor: Colors.primary800,
      elevation: 2,
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.35,
      shadowRadius: 4,
    },
    buttons: {
      marginTop: 8,
    },
  });
  