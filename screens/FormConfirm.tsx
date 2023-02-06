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


const FormConfirm = (props: {route:any}) => {
    const [code, setCode] = useState('');
    const navigation = useNavigation();

    const delay = (ms:any) => new Promise(res => setTimeout(res, ms));
    const wait = async () => {
        await delay(5000);
    }

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
                Enter the code received to your email
            </Text>
            <TextInput
                style={styles.input}
                placeholder={'Enter code'}
                value={code}
                onChangeText={setCode}
                autoFocus={true}
            />
            <View style={{ position: 'absolute', bottom: 100 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        marginBottom: 20,
                    }}
                >
                    <Button
                        mode="flat"
                        style={{padding: 20}}
                        onPress={() =>
                            navigation.navigate('FormConfirm', { code: code })
                        }
                    >
                        <Text style={{fontSize: 15, color: 'grey'}}>Resend Code</Text>
                    </Button>
                    <Button
                        mode="flat"
                        style={{padding: 20}}
                        onPress={() =>
                            navigation.navigate('FormConfirm', { code: code })
                        }
                    >
                        <Text style={{fontSize: 15, color: 'grey'}}>Change email</Text>
                    </Button>
                </View>
                <Button
                    mode="flat"
                    onPress={async () => {
                        try {
                            const token = await Auth.confirmSignUp(props.route.params.email, code, { forceAliasCreation: false });
                            console.log('confirming');
                            console.log(token);
                            await wait();
                            const test = await Auth.currentUserInfo();
                            await DataStore.save(new Members ({
                                id: test.id,
                                email: test.attributes.email,
                                family_name: test.attributes.family_name,
                                given_name: test.attributes.given_name,
                                sub: test.attributes.sub,
                                username: test.username,
                            }));
                            navigation.navigate('FormSuccess', {coucou: 'coucou'});
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
