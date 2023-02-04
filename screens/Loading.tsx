import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    FlatList,
    Image,
} from 'react-native';
import { Auth } from 'aws-amplify';

const Loading = () => {

    const navigation = useNavigation();

    useEffect(() => {
        async function ionViewCanEnter() {
            try {
                const test = await Auth.currentUserInfo();
                if (test.attributes === undefined) {
                    console.log('waiting user identification fail');
                    navigation.navigate('Login', { coucou: 'coucou' });
                    return false;
                }
                navigation.navigate('AddFriends', { coucou: 'coucou' });
            } catch {
                console.log('waiting identification exception caught');
                navigation.navigate('Login', { coucou: 'coucou' });
                return false;
            }
        }
        ionViewCanEnter().then((result) => {
            console.log('waiting user check successful');
        });
    }, [false]);

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
            }}
        >
            <Image
                source={require('../data/loading.gif')}
                style={{
                    maxWidth: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            />
        </View>
    );
};

export default Loading;
