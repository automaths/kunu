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

const FormPassword = () => {
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.content}>
            {/* <Text
                style={{
                    color: 'black',
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: '20%'
                }}
            >
                Let's go! What's your name?
            </Text> */}
            <TextInput
                style={styles.input}
                placeholder={'Enter password'}
                value={password}
                onChangeText={setPassword}
                autoFocus={true}
            />
                <Button
                    mode="flat"
                    style={{position: 'absolute', bottom: 100}}
                    onPress={() =>
                        navigation.navigate('FormConfirm', { password: password })
                    }
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
