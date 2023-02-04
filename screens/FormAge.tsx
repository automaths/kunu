import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';
import { Component, useState } from 'react';
import IntroButton from '../components/UI/IntroButton';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/UI/Button';
import React from 'react';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const FormAge = () => {
    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    const setDate = (event: DateTimePickerEvent, date: Date) => {
        const {
          type,
          nativeEvent: {timestamp},
        } = event;
        console.log(`the date is`);
        console.log(date);
      };


    return (
        <View style={styles.content}>
            <Text
                style={{
                    color: 'black',
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: '20%',
                    marginBottom: '20%'
                }}
            >
                What's your age?
            </Text>
            <RNDateTimePicker display="spinner" onChange={setDate} value={new Date()} minimumDate={new Date(1930, 0, 1)} maximumDate={new Date()} />
            <View style={{position: 'absolute', bottom: 100}}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 12,
                        textAlign: 'center',
                    }}
                >
                    (We need to make sure you are old enough to use Kunu)
                </Text>
                    <Button
                        mode="flat"
                        onPress={() =>
                            navigation.navigate('FormAge', { username: username })
                        }
                    >
                        <Text>Continue</Text>
                    </Button>
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
