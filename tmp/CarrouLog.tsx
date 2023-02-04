import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';
import Carousel from 'react-native-intro-carousel';
import { GlobalStyles } from '../constants/Styles';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/UI/Button';
import IntroButton from '../components/UI/IntroButton';
import { useState } from 'react';

const CarrouLog = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Carousel
            data={[
                {
                    key: '1',
                    title: 'Share intimate moments with confidence',
                    image: require('../data/heartflow.gif'),
                    data: {
                        coucou: 'coucou',
                        // ... // you can add any data here
                    },
                },
                {
                    key: '2',
                    title: 'Let your chosen one keep it ...',
                    image: require('../data/sharelove.gif'),
                    data: {
                        coucou: 'coucou',
                        // ... // you can add any data here
                    },
                },
                {
                    key: '3',
                    title: '... and keep control over it',
                    // description: '... but keep control over it',
                    image: require('../data/lovelock.gif'),
                    data: {
                        coucou: 'coucou',
                        // ... // you can add any data here
                    },
                },
            ]}
            buttonsConfig={{
                disabled: true,
            }}
            paginationConfig={{
                color: 'grey',
                activeColor: GlobalStyles.colors.primary200,
                bottomOffset: 200,
                dotSize: 8,
            }}
            renderItem={({ item, index }, goToSlide) => (
                <View style={styles.content}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 18,
                            textAlign: 'center',
                        }}
                    >
                        {item.title}
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'Enter email'}
                        value={password}
                        onChangeText={setPassword}
                        // autoFocus={true}
                        // onFocus={() => {
                        //     props.setClicked(true);
                        // }}
                    />
                    {index === 0 ? (
                        <TextInput
                            style={styles.input}
                            placeholder={'Enter email'}
                            value={password}
                            onChangeText={setPassword}
                            // onFocus={() => {
                            //     props.setClicked(true);
                            // }}
                        />
                    ) : (
                        <></>
                    )}
                    <View style={styles.buttonsContainer}>
                        {index === 2 ? (
                            <IntroButton
                                mode="flat"
                                style={[styles.button]}
                                onPress={() =>
                                    navigation.navigate('Login', {
                                        coucou: 'coucou',
                                    })
                                }
                            >
                                <Text>Start</Text>
                            </IntroButton>
                        ) : (
                            <IntroButton
                                mode="flat"
                                style={[styles.button]}
                                onPress={() => goToSlide(index + 1)}
                            >
                                <Text>Continue</Text>
                            </IntroButton>
                        )}
                    </View>
                </View>
            )}
        />
    );
};

export default CarrouLog;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginTop: 30,
        fontSize: 20,
        marginLeft: 10,
        width: '90%',
    },
    image: {
        width: '60%',
        height: '60%',
        position: 'absolute',
        top: '0%',
    },
    title: {
        // width: '100%',
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '15%',
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: 'white',
    },
    expenseItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {},
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    amount: {
        fontWeight: 'bold',
    },
});
