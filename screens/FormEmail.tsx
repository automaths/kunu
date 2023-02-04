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

const FormEmail = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.content}>
            <TextInput
                style={styles.input}
                placeholder={'Enter email'}
                value={email}
                onChangeText={setEmail}
                autoFocus={true}
            />
                <Button
                    mode="flat"
                    style={{position: 'absolute', bottom: 100}}
                    onPress={() =>
                        navigation.navigate('FormPassword', { email: email })
                    }
                >
                    <Text>Continue</Text>
                </Button>
        </View>
    );
};

export default FormEmail;

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
