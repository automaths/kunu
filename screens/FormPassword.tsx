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
import { useNavigation } from '@react-navigation/native';
import Button from '../components/UI/Button';
import { createUser } from '../util/auth';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

const FormPassword = (props: { route: any }) => {
    const [password, setPassword] = useState('');
    type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Root'>;
    const navigation = useNavigation<homeScreenProp>();

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
                onPress={async () => {
                    if (passwordValidation())
                    {
                        try {
                            navigation.navigate('FormNumber', {
                                username: props.route.params.username,
                                password: password,
                            });
                        } catch (err) {
                            console.error(err);
                            console.log('an error occured while creating a user');
                        }
                    }
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
