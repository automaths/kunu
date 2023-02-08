import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import IntroButton from '../components/UI/IntroButton';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../constants/Styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { Auth } from 'aws-amplify';

const FormNumber = (props: { route: any }) => {
    const [number, setNumber] = useState('');
    type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Root'>;
    const navigation = useNavigation<homeScreenProp>();

    return (
        <View style={styles.content}>
            <View style={styles.logoView}>
                <Text style={styles.logoText}>Kunu</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.subtitle}>Enter your phone number</Text>
                <View style={{ alignItems: 'center' }}>
                    <TextInput
                        style={styles.input}
                        placeholder={''}
                        value={number}
                        onChangeText={setNumber}
                        autoFocus={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType={'phone-pad'}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <IntroButton
                        onPress={() => {
                            const code = '000000';
                            let existingUser = true;
                            Auth.confirmSignUp(number, code, {
                                forceAliasCreation: false,
                            })
                                .then((data) => console.log(data))
                                .catch((err) => {
                                    console.log(err);
                                    if (err.code === 'UserNotFoundException') {
                                        Auth.signUp(number, 'password')
                                            .then((result) => {
                                                console.log('user created ');
                                                console.log(result);
                                                navigation.navigate(
                                                    'FormConfirm',
                                                    {
                                                        number: number,
                                                        exist: false,
                                                    },
                                                );
                                            })
                                            .catch((err) => {
                                                console.log(
                                                    'an error occured during the sign up',
                                                );
                                            });
                                    } else if (
                                        err.code === 'AliasExistsException' ||
                                        err.code === 'CodeMismatchException' ||
                                        err.code === 'NotAuthorizedException'
                                    ) {
                                        Auth.signIn(number, 'password').then(
                                            (result) => {
                                                console.log(
                                                    'the user exists and has been signed in',
                                                );
                                                console.log(result);
                                            },
                                        );
                                        console.log('coucou');
                                        Auth.verifyCurrentUserAttribute(number)
                                            .then(() => {
                                                console.log(
                                                    'a verification code is sent',
                                                );
                                                navigation.navigate(
                                                    'FormConfirm',
                                                    {
                                                        number: number,
                                                        exist: true,
                                                    },
                                                );
                                            })
                                            .catch((e) => {
                                                Auth.signOut();
                                                console.log(
                                                    'failed with error',
                                                    e,
                                                );
                                            });
                                    } else if (
                                        err.code === 'LimitExceededException'
                                    ) {
                                        console.log(
                                            'User exist check threw LimitExceededException',
                                        );
                                    }
                                    // case 'UserNotFoundException':
                                    // case 'NotAuthorizedException':
                                    // case 'AliasExistsException':
                                    // case 'CodeMismatchException':
                                    // case 'ExpiredCodeException':
                                    // case 'LimitExceededException':
                                });
                        }}
                    >
                        <Text>Continue</Text>
                    </IntroButton>
                </View>
            </View>
        </View>
    );
};

export default FormNumber;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
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
        maxHeight: '8%',
        minWidth: '90%',
        marginTop: '70%',
    },
    input: {
        marginTop: '3%',
        fontSize: 30,
    },
    subtitle: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginTop: '10%',
    },
});
