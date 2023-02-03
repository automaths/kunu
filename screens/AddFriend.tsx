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
import RenderRequestsSent from '../components/RenderRequestsSent';
import RenderPendingInvitations from '../components/RenderPendingInvitations';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { DataStore } from '@aws-amplify/datastore';
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
        async function ionViewCanEnter() {
            try {
                const test = await Auth.currentUserInfo();
                console.log('el testoune is');
                console.log(test);
                if (test.attributes === undefined) {
                    console.log('the user is not authenticated');
                    navigation.navigate('Login', { coucou: 'coucou' });
                    return false;
                }
                const searchMember = await DataStore.query(Members, member => member.email.contains(test.attributes.email));
                if (searchMember.length === 0)
                {
                    console.log('the user has not been found, creating user in db');
                    await DataStore.save(new Members ({
                        id: test.id,
                        email: test.attributes.email,
                        family_name: test.attributes.family_name,
                        given_name: test.attributes.given_name,
                        sub: test.attributes.sub,
                        username: test.username,
                    }));
                }
                console.log('the user is authenticated');
                return true;
            } catch {
                console.log('exception caught during ionViewCanEnter');
                navigation.navigate('Login', { coucou: 'coucou' });
                return false;
            }
        }
        const delay = (ms:any) => new Promise(res => setTimeout(res, ms));
        const wait = async () => {
            await delay(5000);
            setCheckAuth(true);
        }
        ionViewCanEnter().then((result) => {
            console.log('the user check has been done');
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
    root: {flex: 1, backgroundColor: 'white'},
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
