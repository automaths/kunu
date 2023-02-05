import { View, Text, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import { useNavigation } from '@react-navigation/native';
import IntroButton from '../components/UI/IntroButton';

const FormSuccess = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.content}>
            <Image
                source={require('../data/success.gif')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={{ color: 'black', fontSize: 18, textAlign: 'center' }}>
                Congratulations ! Your account creation was successful
            </Text>
            <Text style={{ color: 'black' }}>
                Congratulations ! Your account creation was successful
            </Text>
            <View style={styles.buttonsContainer}>
                <IntroButton
                    mode="flat"
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate('Root', { coucou: 'coucou' })
                    }
                >
                    <Text>Start</Text>
                </IntroButton>
            </View>
        </View>
    );
};

export default FormSuccess;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
    button: {
        
    },
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
