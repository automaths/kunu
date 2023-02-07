import {
    View,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';
import { useState } from 'react';
import IntroButton from '../components/UI/IntroButton';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { GlobalStyles } from '../constants/Styles';

const FormAge = (props: { route: any }) => {
    const [username, setUsername] = useState('');
    type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Root'>;
    const navigation = useNavigation<homeScreenProp>();
    const [major, setMajor] = useState(false);

    const setDate = (event: DateTimePickerEvent, date: Date | undefined) => {
        const {
            type,
            nativeEvent: { timestamp },
        } = event;
        const now = new Date();
        const days = now.getTime() - date!.getTime();
        if (Math.floor(days / (1000 * 60 * 60 * 24 * 365)) >= 18)
            setMajor(true);
        else setMajor(false);
    };

    return (
        <View style={styles.content}>
            <View style={styles.logoView}>
                <Text style={styles.logoText}>Kunu</Text>
            </View>
            <Text style={styles.subtitle}>{`Hi ${props.route.params.username}, what's your age?`}</Text>
            <RNDateTimePicker
                display="spinner"
                onChange={setDate}
                value={new Date()}
                minimumDate={new Date(1930, 0, 1)}
                maximumDate={new Date()}
            />
            <Text
                style={styles.commentary}
            >
                (We need to make sure you are old enough to use Kunu)
            </Text>
            <View style={styles.buttonsContainer}>
                <IntroButton
                    style={{ position: 'absolute', bottom: 100 }}
                    onPress={() =>
                        navigation.navigate('FormNumber', {
                            username: props.route.params.username,
                        })
                    }
                >
                    <Text>Continue</Text>
                </IntroButton>
            </View>
        </View>
    );
};

export default FormAge;

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
    subtitle: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginTop: '10%',
    },
    commentary: {
        color: 'black',
        fontSize: 12,
        textAlign: 'center',
    }
});
