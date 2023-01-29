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

const ShowFriends = () => {
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
        </SafeAreaView>
    );
};

export default ShowFriends;

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
