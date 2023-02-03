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
        const delay = (ms:any) => new Promise(res => setTimeout(res, ms));
        const wait = async () => {
            await delay(5000);
            setCheckAuth(true);
        }
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
