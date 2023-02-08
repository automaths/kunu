import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';
import { useState } from 'react';
import IntroButton from '../components/UI/IntroButton';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/UI/Button';
import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { Members } from '../models';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

const FormConfirm = (props: { route: any }) => {
    const [code, setCode] = useState('');
    type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Root'>;
    const navigation = useNavigation<homeScreenProp>();

    const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));
    const wait = async () => {
        await delay(5000);
    };

    return (
        <View style={styles.content}>
            <Text
                style={{
                    color: 'black',
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: '20%',
                }}
            >
                {`Great! Code sent to ${props.route.params.number}`}
            </Text>
            <TextInput
                style={styles.input}
                placeholder={'Enter code'}
                value={code}
                onChangeText={setCode}
                autoFocus={true}
            />
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginBottom: 20,
                    }}
                >
                    <Button
                        mode="flat"
                        style={{ padding: 20 }}
                        onPress={() =>
                            navigation.navigate('FormConfirm', { code: code })
                        }
                    >
                        <Text style={{ fontSize: 15, color: 'grey' }}>
                            Resend Code
                        </Text>
                    </Button>
                    <Button
                        mode="flat"
                        style={{ padding: 20 }}
                        onPress={() =>
                            navigation.navigate('FormConfirm', { code: code })
                        }
                    >
                        <Text style={{ fontSize: 15, color: 'grey' }}>
                            Change email
                        </Text>
                    </Button>
                </View>
                <Button
                    mode="flat"
                    onPress={async () => {
                        try {
                            let token;
                            navigation.navigate('FormSuccess');
                            if (props.route.params.exist) {
                                Auth.verifyCurrentUserAttributeSubmit(
                                    props.route.params.number,
                                    'the_verification_code',
                                )
                                    .then((result) => {
                                        console.log(
                                            'trying the return of exist verify',
                                        );
                                        console.log(result);
                                        console.log('phone_number verified');
                                        token = true;
                                    })
                                    .catch((e) => {
                                        console.log('failed with error', e);
                                        token = false;
                                    });
                            } else {
                                token = await Auth.confirmSignUp(
                                    props.route.params.number,
                                    code,
                                    { forceAliasCreation: false },
                                );
                            }
                            console.log('confirming');
                            console.log(token);
                            if (token) {
                                await wait();
                                const sign = Auth.signIn(
                                    '+33634162976',
                                    'password',
                                );
                                console.log(sign);
                                await wait();
                                const test = await Auth.currentUserInfo();
                                await DataStore.save(
                                    new Members({
                                        id: test.attributes.phone_number,
                                        email: test.attributes.phone_number,
                                        family_name:
                                            test.attributes.phone_number,
                                        given_name:
                                            test.attributes.phone_number,
                                        sub: test.userSub,
                                        username: test.attributes.phone_number,
                                    }),
                                );
                            }
                        } catch (err) {
                            console.error(err);
                            console.log('an error occured while confirming');
                        }
                    }}
                >
                    <Text>Continue</Text>
                </Button>
            </View>
        </View>
    );
};

export default FormConfirm;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    input: {
        marginTop: 30,
        fontSize: 30,
        marginLeft: 10,
        width: '90%',
    },
    title: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
    },
});
