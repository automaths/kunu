import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    TextInput,
    Alert,
} from 'react-native';
import { useState } from 'react';
import IntroButton from '../components/UI/IntroButton';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/UI/Button';
import RNPasswordStrengthMeter from 'react-native-password-strength-meter';

const FormPassword = (props: { route: any }) => {
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const passwordValidation = () => {
        const uppercaseRegExp = /(?=.*?[A-Z])/;
        const lowercaseRegExp = /(?=.*?[a-z])/;
        const digitsRegExp = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp = /.{8,}/;
        const passwordLength = password.length;
        const uppercasePassword = uppercaseRegExp.test(password);
        const lowercasePassword = lowercaseRegExp.test(password);
        const digitsPassword = digitsRegExp.test(password);
        const specialCharPassword = specialCharRegExp.test(password);
        const minLengthPassword = minLengthRegExp.test(password);
        if (passwordLength === 0) {
            Alert.alert('The password is empty');
        } else if (!uppercasePassword) {
            Alert.alert('At least one Uppercase');
        } else if (!lowercasePassword) {
            Alert.alert('At least one Lowercase');
        } else if (!digitsPassword) {
            Alert.alert('At least one digit');
        } else if (!specialCharPassword) {
            Alert.alert('At least one Special Characters');
        } else if (!minLengthPassword) {
            Alert.alert('At least minumum 8 characters');
        } else return true;
        return false;
    };

    console.log(`the username is ${props.route.params.username}`);
    console.log(`the email is ${props.route.params.email}`);

    return (
        <View style={styles.content}>
            <TextInput
                style={styles.input}
                placeholder={'Enter password'}
                value={password}
                onChangeText={setPassword}
                autoFocus={true}
                secureTextEntry={true}
                passwordRules="required: upper; required: lower; required: digit; minlength: 8; required:special"
            />
            <Button
                mode="flat"
                style={{ position: 'absolute', bottom: 100 }}
                onPress={() => {
                    if (passwordValidation())
                        navigation.navigate('FormConfirm', {
                            username: props.route.params.username,
                            email: props.route.params.email,
                            password: password,
                        });
                }}
            >
                <Text>Continue</Text>
            </Button>
        </View>
    );
};

export default FormPassword;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    input: {
        marginTop: '30%',
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
