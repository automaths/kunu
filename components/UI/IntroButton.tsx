import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/Styles';

function IntroButton(props: any) {
    return (
        <View style={{flex: 1, minWidth: '95%'}}>
            <Pressable
                onPress={props.onPress}
                style={styles.pressable}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default IntroButton;

const styles = StyleSheet.create({
    base: {
        flex: 1,
    },
    button: {
        flex: 1,
        borderRadius: 20,
        borderColor: GlobalStyles.colors.primary50,
        borderWidth: 3,
        padding: 8,
        backgroundColor: 'transparent',
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        color: GlobalStyles.colors.primary200,
        fontSize: 30,
    },
    pressable: {
        flex: 1,
    },
});
