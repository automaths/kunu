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

const FormUsername = () => {
    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.content}>
            <Text
                style={{
                    color: 'black',
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: '20%'
                }}
            >
                Let's go! What's your name?
            </Text>
            <TextInput
                style={styles.input}
                placeholder={'Enter username'}
                value={username}
                onChangeText={setUsername}
                autoFocus={true}
            />
                <Button
                    mode="flat"
                    style={{position: 'absolute', bottom: 100}}
                    onPress={() =>
                        navigation.navigate('FormAge', { username: username })
                    }
                >
                    <Text>Continue</Text>
                </Button>
        </View>
    );
};

export default FormUsername;

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
