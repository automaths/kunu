import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    FlatList,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import { DEMANDS, REQUESTS } from '../data/dummy-data';
import { GlobalStyles } from '../constants/Styles';
import RenderIncomingInvitations from '../components/RenderRequestsSent';
import RenderRequestsSent from '../components/RenderRequestsSent';
import RenderPendingInvitations from '../components/RenderPendingInvitations';

const AddFriends = () => {
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

    useEffect(() => {
        setDemands(DEMANDS);
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
                                onTouch={() => {
                                    {
                                        setDemands(
                                            demands.filter(
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
        </SafeAreaView>
    );
};

export default AddFriends;

const styles = StyleSheet.create({
    root: {},
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
