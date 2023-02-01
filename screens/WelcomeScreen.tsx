import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

import { Auth, Hub } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/uit/Button';

function listenToAutoSignInEvent() {
    Hub.listen('auth', ({ payload }) => {
        const { event } = payload;
        if (event === 'autoSignIn') {
            const user = payload.data;
            console.log('the user is signed in mamen');
        } else if (event === 'autoSignIn_failure') {
            console.log('the user is not signed in');
        }
    })
}



function WelcomeScreen() {
  const [fetchedMessage, setFetchedMesssage] = useState('');

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const navigation = useNavigation();

  useEffect(() => {

    async function ionViewCanEnter() {
        try {
            const test = await Auth.currentUserInfo();
            console.log('el testoune is');
            console.log(test);
            if (test.attributes === undefined)
            {
                console.log('the function returns false');
                navigation.navigate('Login', {coucou: 'coucou'});
                return false;
            }
            console.log('the function returns true');
            return true;
        } catch {
            console.log('the function returns false');
            navigation.navigate('Login', {coucou: 'coucou'});
            return false;
        }
    }
    ionViewCanEnter().then((result) => {
        console.log(`el resulto is `);
        console.log(result);
        result ? console.log('user authenticated') : navigation.navigate('Login', {coucou: 'coucou'})
    });
    listenToAutoSignInEvent(); //not necessary
  }, [false]);

  const handleSignOut = async () => {
    await Auth.signOut();
    navigation.navigate('Login', {coucou: 'coucou'});
    //can use current user info to be sure
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Button onPress={handleSignOut}>Logout</Button>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
