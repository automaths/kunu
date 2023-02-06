import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    FlatList,
    Alert,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import { DEMANDS, REQUESTS } from '../data/dummy-data';
import { GlobalStyles } from '../constants/Styles';
import RenderSendTo from '../components/RenderSendTo';
import RenderIncomingPhotos from '../components/RenderIncomingPhotos';
import { DataStore } from '@aws-amplify/datastore';
import { Auth } from 'aws-amplify';
import { Friends, Invitation, Members } from '../models';
import uuid from 'react-native-uuid';
import RenderKunuers from '../components/RenderKunuers';

const ShowFriends = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [clicked, setClicked] = useState(false);
    const [demands, setDemands] = useState([
        {
            one: '',
            two: '',
        },
    ]);
    const [requests, setRequests] = useState([
        {
            id: '',
            name: '',
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
        const test = Auth.currentUserInfo().then((result) => {
            console.log('setting up the user');
            setUser(result);
        })
        DataStore.query(Members).then((result) => {
            console.log('the list of all kunuers is: ');
            console.log(result);
            setKunuers(result);
        });
        Auth.currentUserInfo().then((result) => {
            console.log(
                `the sub searched in contain is ${result.attributes.sub}`,
            );
            console.log(result.attributes.sub);
            DataStore.query(Friends, (friend) =>
                friend.one.contains(result.attributes.sub),
            ).then((result) => {
                console.log('the friends fetched are: ');
                console.log(result);
                setDemands(result);
            });
        });
        setRequests(REQUESTS);
    }, [false]);

    return (
        <SafeAreaView style={styles.root}>
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
                    Send To
                </Text>
                <FlatList
                    data={demands}
                    renderItem={(item) => {
                        return (
                            <RenderSendTo
                                item={item}
                                demands={demands}
                                onTouch={() => {
                                    Alert.alert('you want to send a photo');
                                }}
                                onTouchBis={async () => {
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
                                })}}
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
                    Incoming Photos
                </Text>
                <FlatList
                    data={requests}
                    extraData={requests}
                    renderItem={(item) => {
                        return (
                            <RenderIncomingPhotos
                                item={item}
                                requests={requests}
                                onTouch={() => {
                                    {
                                        setRequests(
                                            requests.filter(
                                                (request) =>
                                                    request.id !== item.item.id,
                                            ),
                                        );
                                    }
                                }}
                            />
                        );
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
                </>
                )}
        </SafeAreaView>
    );
};

export default ShowFriends;

const styles = StyleSheet.create({
    root: {backgroundColor: 'white'},
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
