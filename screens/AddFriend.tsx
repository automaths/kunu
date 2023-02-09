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
import { GlobalStyles } from '../constants/Styles';
import RenderRequestsSent from '../components/RenderRequestsSent';
import RenderPendingInvitations from '../components/RenderPendingInvitations';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { DataStore } from '@aws-amplify/datastore';
import { Members, Invitation, Friends } from '../models';
import RenderKunuers from '../components/RenderKunuers';
import uuid from 'react-native-uuid';

const AddFriends = () => {
    const navigation = useNavigation();
    const [searchPhrase, setSearchPhrase] = useState('');
    const [clicked, setClicked] = useState(false);
    const [demands, setDemands] = useState([
        {
            inviter: '',
            invited: '',
        },
    ]);
    const [requests, setRequests] = useState([
        {
            inviter: '',
            invited: '',
        },
    ]);

    const [kunuers, setKunuers] = useState([
        {
            given_name: '',
            sub: '',
        },
    ]);
    const [user, setUser] = useState({
        attributes: {
            sub: '',
        },
    });

    useEffect(() => {
        async function ionViewCanEnter() {
            try {
                const test = await Auth.currentUserInfo().then((result) => {
                    console.log('length result');
                    console.log(Object.keys(result).length);
                    if (Object.keys(result).length === 0)
                    {
                        navigation.navigate('Introduction', { coucou: 'coucou' });                        
                    }
                    console.log(result);
                    console.log('fetching the current user');
                }).catch((err) => {
                    console.log(err);
                    console.log('an exception has been thrown during currentuserinfo');
                    navigation.navigate('Introduction', { coucou: 'coucou' });
                });
                console.log('setting up the user');
                setUser(test);
                console.log('el testoune is');
                console.log(test);
                if (test === null)
                {
                    console.log('the user is not authenticated');
                    navigation.navigate('Introduction', { coucou: 'coucou' });
                    return false;
                }
                // if (test.attributes === undefined) {
                    // console.log('the user is not authenticated');
                    // navigation.navigate('Introduction', { coucou: 'coucou' });
                    // return false;
                // }
                const searchMember = await DataStore.query(Members, (member) =>
                    member.email.contains(test.attributes.phone_number),
                );
                if (searchMember.length === 0) {
                    console.log(
                        'the user has not been found, creating user in db',
                    );
                    await DataStore.save(
                        new Members({
                            id: test.attributes.phone_number,
                            email: test.attributes.phone_number,
                            family_name: test.attributes.phone_number,
                            given_name: test.attributes.phone_number,
                            sub: test.userSub,
                            username: test.attributes.phone_number,
                        }),
                    );
                }
                console.log('the user is authenticated');
                return true;
            } catch {
                console.log('exception caught during ionViewCanEnter');
                return false;
            }
        }
        // ionViewCanEnter().then((result) => {
        //     console.log('the user check has been done');
        // });
        // DataStore.query(Members).then((result) => {
        //     console.log('the list of all kunuers is: ');
        //     console.log(result);
        //     setKunuers(result);
        // });
        // Auth.currentUserInfo().then((result) => {
        //     console.log(
        //         `the sub searched in contain is ${result.attributes.sub}`,
        //     );
        //     console.log(result.attributes.sub);

        //     DataStore.query(Invitation, (invit) =>
        //         invit.invited.contains(result.attributes.sub),
        //     ).then((result) => {
        //         console.log('the demands fetched are: ');
        //         console.log(result);
        //         setDemands(result);
        //     });
        //     DataStore.query(Invitation, (invit) =>
        //         invit.inviter.contains(result.attributes.sub),
        //     ).then((result) => {
        //         console.log('the requests fetched are: ');
        //         console.log(result);
        //         setRequests(result);
        //     });
        // });
    }, [false]);

    return (
        <SafeAreaView style={styles.root}>
            <>
                <SearchBar
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                    placeholder={'Search Kunuer'}
                />
                {clicked ? (
                    <View style={styles.invitationContainer}>
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: 'bold',
                                marginBottom: 15,
                            }}
                        >
                            Add Kunuer
                        </Text>
                        <FlatList
                            data={kunuers.filter(
                                (kunuer) =>
                                    kunuer.given_name.includes(searchPhrase) &&
                                    kunuer.sub !== user.attributes.sub,
                            )}
                            renderItem={(item) => {
                                return (
                                    <RenderKunuers
                                        item={item}
                                        demands={kunuers.filter((kunuer) =>
                                            kunuer.given_name.includes(
                                                searchPhrase,
                                            ),
                                        )}
                                        user={user}
                                        onTouch={async () => {
                                            {
                                                await DataStore.save(
                                                    new Invitation({
                                                        inviter:
                                                            user.attributes.sub,
                                                        invited: item.item.sub,
                                                    }),
                                                );
                                            }
                                        }}
                                    />
                                );
                            }}
                            keyExtractor={(item) => item.sub}
                        />
                    </View>
                ) : (
                    <>
                        <View style={styles.invitationContainer}>
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
                                            onTouch={async () => {
                                                {
                                                    setDemands(
                                                        demands.filter(
                                                            (request) =>
                                                                request.inviter !==
                                                                item.item
                                                                    .inviter,
                                                        ),
                                                    );
                                                    await DataStore.save(
                                                        new Friends({
                                                            one: item.item
                                                                .inviter,
                                                            two: item.item
                                                                .invited,
                                                        }),
                                                    );
                                                    await DataStore.save(
                                                        new Friends({
                                                            one: item.item
                                                                .invited,
                                                            two: item.item
                                                                .inviter,
                                                        }),
                                                    );
                                                    DataStore.query(
                                                        Invitation,
                                                        (invit) =>
                                                            invit.inviter.contains(
                                                                item.item
                                                                    .inviter,
                                                            ) &&
                                                            invit.invited.contains(
                                                                item.item
                                                                    .invited,
                                                            ),
                                                    ).then((result) => {
                                                        console.log(
                                                            'trying to delete the pending invit after chosen',
                                                        );
                                                        console.log(result);
                                                        DataStore.delete(
                                                            result[0],
                                                        );
                                                    });
                                                }
                                            }}
                                            onTouchBis={async () => {
                                                    {
                                                        setDemands(
                                                            demands.filter(
                                                                (request) =>
                                                                    request.inviter !==
                                                                    item.item
                                                                        .inviter,
                                                            ),
                                                        );
                                                        DataStore.query(
                                                            Invitation,
                                                            (invit) =>
                                                                invit.inviter.contains(
                                                                    item.item
                                                                        .inviter,
                                                                ) &&
                                                                invit.invited.contains(
                                                                    item.item
                                                                        .invited,
                                                                ),
                                                        ).then((result) => {
                                                            console.log(
                                                                'trying to delete the pending invit after chosen',
                                                            );
                                                            console.log(result);
                                                            DataStore.delete(
                                                                result[0],
                                                            );
                                                        });
                                                    }
                                                }}
                                        />
                                    );
                                }}
                                keyExtractor={(item) => uuid.v4().toString()}
                            />
                        </View>
                        <View style={styles.invitationContainer}>
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
                                                            (request) =>
                                                                request.invited !==
                                                                item.item
                                                                    .invited,
                                                        ),
                                                    );
                                                    DataStore.query(
                                                        Invitation,
                                                        (invit) =>
                                                            invit.inviter.contains(
                                                                item.item
                                                                    .inviter,
                                                            ) &&
                                                            invit.invited.contains(
                                                                item.item
                                                                    .invited,
                                                            ),
                                                    ).then((result) => {
                                                        console.log(
                                                            'trying to delete the request',
                                                        );
                                                        console.log(result);
                                                        DataStore.delete(
                                                            result[0],
                                                        );
                                                    });
                                                }
                                            }}
                                        />
                                    );
                                }}
                                keyExtractor={(item) => uuid.v4().toString()}
                            />
                        </View>
                    </>
                )}
            </>
        </SafeAreaView>
    );
};

export default AddFriends;

const styles = StyleSheet.create({
    root: { flex: 1, backgroundColor: 'white' },
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
