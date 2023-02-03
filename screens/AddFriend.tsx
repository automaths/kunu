import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    FlatList,
    Image,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import { DEMANDS, REQUESTS } from '../data/dummy-data';
import { GlobalStyles } from '../constants/Styles';
import RenderIncomingInvitations from '../components/RenderRequestsSent';
import RenderRequestsSent from '../components/RenderRequestsSent';
import RenderPendingInvitations from '../components/RenderPendingInvitations';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { Users } from '../models';
import { User } from '../models';
import { Members } from '../models';

const AddFriends = () => {
    const navigation = useNavigation();
    const [searchPhrase, setSearchPhrase] = useState('');
    const [clicked, setClicked] = useState(false);
    const [demands, setDemands] = useState([
        {
            id: '',
            name: '',
        },
    ]);
    const [requests, setRequests] = useState([
        {
            id: '',
            name: '',
        },
    ]);

    const [checkAuth, setCheckAuth] = useState(false);


    useEffect(() => {
        async function checkDatabase(){
            try {
                const check = await DataStore.query(Members);
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
                const models = await DataStore.query(Members);
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
                console.log(user);
                const userzer = new Members ({
                    id: user.id,
                    email: user.attributes.email,
                    family_name: user.attributes.family_name,
                    given_name: user.attributes.given_name,
                    sub: user.attributes.sub,
                    username: user.username,
                })
                console.log('the model userzer is');
                console.log(userzer);
                // const new_database = new Users({
                //     "user_list": [userzer]
                // });
                await DataStore.save(userzer);
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
                    console.log(`the length of the result is ${result?.length}`);
                    if (result === null)
                        console.log('the result of fetching in null nul')
                    else if (result[0].length === 0)
                    {
                        console.log('adding a new user brow nothing in the list');
                        addUser(result, test);
                    }
                    // else if (result[0]?.user_list?.length > 0)
                    // {

                    // }
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
        const delay = (ms:any) => new Promise(res => setTimeout(res, ms));
        const wait = async () => {
            await delay(5000);
            setCheckAuth(true);
        }
        checkDatabase();
        ionViewCanEnter().then((result) => {
            console.log(`el resulto is `);
            console.log(result);
            result ? console.log('user authenticated') : navigation.navigate('Login', {coucou: 'coucou'})
        });
        wait();
        setDemands(DEMANDS);
        setRequests(REQUESTS);
    }, [false]);

    return (
        <SafeAreaView style={styles.root}>
        {
            checkAuth 
            ?
            <>
            <SearchBar
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                        clicked={clicked}
                        setClicked={setClicked}
                        placeholder={'Search Kunuer'} /><View style={styles.invitationContainer}>
                            <Text
                                style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    marginBottom: 15,
                                }}
                            >
                                Pending Invitations
                            </Text>
                            <FlatList
                                data={demands}
                                renderItem={(item) => {
                                    return (
                                        <RenderPendingInvitations
                                            item={item}
                                            demands={demands}
                                            onTouch={() => {
                                                {
                                                    setDemands(
                                                        demands.filter(
                                                            (request) => request.id !== item.item.id
                                                        )
                                                    );
                                                }
                                            } } />
                                    );
                                } }
                                keyExtractor={(item) => item.id} />
                        </View><View style={styles.invitationContainer}>
                            <Text
                                style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    marginBottom: 15,
                                }}
                            >
                                Requests Sent
                            </Text>
                            <FlatList
                                data={requests}
                                extraData={requests}
                                renderItem={(item) => {
                                    return (
                                        <RenderRequestsSent
                                            item={item}
                                            requests={requests}
                                            onTouch={() => {
                                                {
                                                    setRequests(
                                                        requests.filter(
                                                            (request) => request.id !== item.item.id
                                                        )
                                                    );
                                                }
                                            } } />
                                    );
                                } }
                                keyExtractor={(item) => item.id} />
                        </View>
                        </>
            : 
            <View style={{flex: 1,alignItems:'center', justifyContent: 'center', backgroundColor: 'white'}}>
                <Image source={require('../data/resize_waiting.gif')} style={{maxWidth: '100%', alignItems:'center', justifyContent: 'center'}} />
            </View>
        }
        </SafeAreaView>
    );
};

export default AddFriends;

const styles = StyleSheet.create({
    root: {flex: 1},
    invitationContainer: {
        margin: '3%',
    },
    title: {
        width: '100%',
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
    },
    containers: {
        flex: 1,
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: 'white',
    },
    expenseItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    category: {},
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    amount: {
        fontWeight: 'bold',
    },
});
