import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    FlatList,
    Pressable,
} from 'react-native';

import SearchBar from '../components/SearchBar';
import { DEMANDS, REQUESTS } from '../data/dummy-data';
import { GlobalStyles } from '../constants/Styles';
import { Ionicons } from '@expo/vector-icons';

const touchDemand = () => {
    console.log('demand touched');
};

function renderDemands(itemData: any) {
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Pressable
                onPress={touchDemand}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <Text style={{ flex: 1, textAlign: 'left', fontSize: 15 }}>
                    {itemData.item.name}
                </Text>
            </Pressable>
            <View style={styles.expenseItem}>
                <View style={{ marginRight: 8, marginBottom: 5 }}>
                    <Pressable
                        onPress={touchDemand}
                        style={({ pressed }) => pressed && styles.pressed}
                    >
                        <View style={{ justifyContent: 'flex-end' }}>
                            <Ionicons
                                name="close-circle"
                                size={25}
                                color="red"
                            />
                        </View>
                    </Pressable>
                </View>
            </View>
            <View style={{ marginRight: 8 }}>
                <Pressable
                    onPress={touchDemand}
                    style={({ pressed }) => pressed && styles.pressed}
                >
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Ionicons
                            name="checkmark-circle"
                            size={25}
                            color="#0CC703"
                        />
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

const AddFriends = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [clicked, setClicked] = useState(false);

    return (
        <SafeAreaView style={styles.root}>
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
                placeholder={'Add Kunuer'}
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
                    data={DEMANDS}
                    renderItem={renderDemands}
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
                    data={REQUESTS}
                    renderItem={renderDemands}
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
