import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
} from 'react-native';
import { useState } from 'react';
import IntroButton from '../components/UI/IntroButton';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../constants/Styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { Auth } from 'aws-amplify';

// try {
//     const { user } = await Auth.signUp({ username, password });
//     console.log(user);
// } catch (error) {
//     console.log('error signing up:', error);
// }

// try {
//     const user = await Auth.signIn(username, password);
// } catch (error) {
//     console.log('error signing in', error);
// }

// try {
//     await Auth.signOut();
// } catch (error) {
//     console.log('error signing out: ', error);
// }

const FormNumber = (props: { route: any }) => {
    const [number, setNumber] = useState('');
    type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Root'>;
    const navigation = useNavigation<homeScreenProp>();

    return (
        <View style={styles.content}>
            <View style={styles.logoView}>
                <Text style={styles.logoText}>Kunu</Text>
            </View>
            <View style={{flex:1}}>
                <Text
                    style={styles.subtitle}
                >
                    Enter your email
                </Text>
                <View style={{alignItems: 'center',}}>
                    <TextInput
                style={styles.input}
                placeholder={'Enter email'}
                value={number}
                onChangeText={setNumber}
                autoFocus={true}
                autoCapitalize="none"
                autoCorrect={false}
                    />
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <IntroButton
                    style={{ position: 'absolute', bottom: 100 }}
                    onPress={async () => {
                        try {
                            const { user } = await Auth.signUp(number, 'password');
                            console.log('user created ');
                            console.log(user);
                            navigation.navigate('FormConfirm', {
                                username: props.route.params.username,
                                number: number,
                            });
                            navigation.navigate('FormConfirm', { number: number, username: props.route.params.username})
                        } catch (err) {
                            console.error(err);
                            console.log('an error occured while creating a user');
                        }
                    }}
                >
                    <Text>Continue</Text>
                </IntroButton>
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
        position: 'absolute',
        bottom: '8%',
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
