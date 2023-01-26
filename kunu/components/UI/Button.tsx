import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

function Button(props: any) {
    return (
        <View style={[props.base, props.style]}>
            <Pressable
                onPress={props.onPress}
                style={styles.pressable}
                // style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
            >
                <View
                    style={[
                        styles.button,
                        props.mode === "flat" && styles.flat,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            props.mode === "flat" && styles.flatText,
                        ]}
                    >
                        {props.children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    base: {
        flex: 1,
    },
    button: {
        flex: 1,
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    flat: {
        backgroundColor: "transparent",
    },
    buttonText: {
        flex: 1,
        color: "white",
        textAlign: "center",
        justifyContent: 'center',
        fontSize: 20,
    },
    flatText: {
        color: GlobalStyles.colors.primary200,
        fontSize: 20,
    },
    pressable: {
        flex: 1,
    },
    // pressed: {
    //     flex: 1,
    //     opacity: 0.75,
    //     backgroundColor: GlobalStyles.colors.primary100,
    //     borderRadius: 4,
    // },
});
