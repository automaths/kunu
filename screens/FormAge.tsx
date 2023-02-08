import { View, Text, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import IntroButton from '../components/UI/IntroButton';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { GlobalStyles } from '../constants/Styles';

const FormAge = (props: { route: any }) => {
    type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Root'>;
    const navigation = useNavigation<homeScreenProp>();

    return (
        <View style={styles.content}>
            <View style={styles.logoView}>
                <Text style={styles.logoText}>Kunu</Text>
            </View>
            <Text
                style={styles.subtitle}
            >{`Hi ${props.route.params.username}, do you confirm that you are older than 18 years old?`}</Text>
            <Text style={styles.commentary}>
                (We need to make sure you are old enough to use Kunu)
            </Text>
            <View style={styles.buttonsContainer}>
                <IntroButton
                    style={{ flex: 1, position: 'absolute', bottom: 100, }}
                    onPress={() =>
                        navigation.navigate('FormNumber', {
                            username: props.route.params.username,
                        })
                    }
                >
                    <Text>Yes</Text>
                </IntroButton>
                <View style={{margin: '15%'}}></View>
                <IntroButton
                    style={{ flex: 1, position: 'absolute', bottom: 100 }}
                    onPress={() =>
                        Alert.alert(
                            'You need to be older than 18 to use Kunu App',
                        )
                    }
                >
                    <Text>No</Text>
                </IntroButton>
            </View>
        </View>
    );
};

export default FormAge;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
    logoView: {
        marginTop: '12%',
    },
    logoText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary200,
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        maxHeight: '8%',
        maxWidth: '40%',
        position: 'absolute',
        bottom: '8%',
    },
    subtitle: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginTop: '10%',
    },
    commentary: {
        color: 'black',
        fontSize: 12,
        textAlign: 'center',
    },
});
