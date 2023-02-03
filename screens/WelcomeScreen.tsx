import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

import { Auth, Hub } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/uit/Button';

import React from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { Users } from '../models';

function listenToAutoSignInEvent() {
    Hub.listen('auth', ({ payload }) => {
        const { event } = payload;
        if (event === 'autoSignIn') {
            const user = payload.data;
            console.log('the user is signed in mamen');
        } else if (event === 'autoSignIn_failure') {
            console.log('the user is not signed in');
        }
    });
}

// await DataStore.save(
//     new Users({
// 		"user_list": []
// 	})
// );

// /* Models in DataStore are immutable. To update a record you must use the copyOf function
//  to apply updates to the item’s fields rather than mutating the instance directly */
//  await DataStore.save(Users.copyOf(CURRENT_ITEM, item => {
//     // Update the values on {item} variable to update DataStore entry
// }));

// const modelToDelete = await DataStore.query(Users, 123456789);
// DataStore.delete(modelToDelete);

// const models = await DataStore.query(Users);
// console.log(models);

function WelcomeScreen() {
    const [fetchedMessage, setFetchedMesssage] = useState('');

    const authCtx = useContext(AuthContext);
    const token = authCtx.token;

    const navigation = useNavigation();

    useEffect(() => {

        async function checkDatabase(){
            try {
                const check = await DataStore.query(Users);
                if (check.length === 0)
                {
                    await DataStore.save(
                        new Users({
                            "user_list": []
                        })
                    );
                }
            } catch (err) {
                console.log('error while checking database');
                return null;
            }
        }

        async function fetchUsers() {
            try {
                const models = await DataStore.query(Users);
                console.log(models);
                return models;
            } catch (err) {
                console.log('error fetching users');
                return null;
            }
        }

        async function addUser(users:any, user: any) {
            try {
                console.log('adding new user mamen');
                await DataStore.save(Users.copyOf(users.append(user), item => {
                    // Update the values on {item} variable to update DataStore entry
                    console.log('is saving to the datastore');
                }));
                // return res;
            } catch (err) {
                console.log('error creating user:', err);
            }
        }

        async function ionViewCanEnter() {
            try {
                const test = await Auth.currentUserInfo();
                console.log('el testoune is');
                console.log(test);
                if (test.attributes === undefined) {
                    console.log('the function returns false');
                    navigation.navigate('Login', { coucou: 'coucou' });
                    return false;
                }
                const isRegistered = fetchUsers().then((result) => {
                    console.log('the result of the fetch of users is: ');
                    console.log(result);
                    if (result?.length === 0)
                        addUser(result, test);
                });
                // if (isRegistered === null) addUser(test);

                console.log('the function returns true');
                return true;
            } catch {
                console.log('the function returns false');
                navigation.navigate('Login', { coucou: 'coucou' });
                return false;
            }
        }

        checkDatabase();
        ionViewCanEnter().then((result) => {
            console.log(`el resulto is `);
            console.log(result);
            result
                ? console.log('user authenticated')
                : navigation.navigate('Login', { coucou: 'coucou' });
        });
        listenToAutoSignInEvent(); //not necessary
    }, [false]);

    const handleSignOut = async () => {
        await Auth.signOut();
        navigation.navigate('Login', { coucou: 'coucou' });
        //can use current user info to be sure
    };

    const handleEnter = async () => {
        navigation.navigate('AddFriends', { coucou: 'coucou' });
    };

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>You authenticated successfully!</Text>
            <Button onPress={handleEnter}>Enter App</Button>
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
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
