import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import { useState } from 'react';
import IntroButton from '../components/UI/IntroButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { GlobalStyles } from '../constants/Styles';

const FormUsername = () => {
    const [username, setUsername] = useState('');
    type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Root'>;
    const navigation = useNavigation<homeScreenProp>();

    return (
        <View style={styles.content}>
            <View style={styles.logoView}>
                <Text style={styles.logoText}>Kunu</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.subtitle}>Let's go, what's your name?</Text>
                <View style={{ alignItems: 'center' }}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Your name'}
                        value={username}
                        onChangeText={setUsername}
                        autoFocus={true}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <IntroButton
                        onPress={() =>
                            navigation.navigate('FormAge', {
                                username: username,
                            })
                        }
                    >
                        <Text>Continue</Text>
                    </IntroButton>
                </View>
            </View>
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
    logoView: {
        marginTop: '12%',
    },
    logoText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary200,
    },
    input: {
        marginTop: '3%',
        fontSize: 30,
    },
    title: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: '60%',
        justifyContent: 'center',
        maxHeight: '8%',
        minWidth: '90%',
    },
    subtitle: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginTop: '10%',
    },
});
