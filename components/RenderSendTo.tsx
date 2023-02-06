import { Ionicons } from "@expo/vector-icons";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/Styles";

const RenderSendTo = (props: {item:any, demands: any, onTouch: any}) => {

    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Pressable
                onPress={props.onTouch}
            >
                <Text style={{ flex: 1, textAlign: 'left', fontSize: 15 }}>
                    {props.item.item.two}
                </Text>
            </Pressable>
            <View style={styles.expenseItem}>
                <View style={{ marginBottom: 8, marginRight: 15 }}>
                    <Pressable
                        onPress={props.onTouch}
                        style={({ pressed }) => pressed && styles.pressed}
                    >
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Ionicons
                                name="close-circle"
                                size={25}
                                color="red"
                            />
                        </View>
                    </Pressable>
                </View>
                <View style={{ marginRight: 8 }}>
                <Pressable
                        onPress={() => {
                            Alert.alert('you asked the preview of the incoming photo');
                        }}
                        style={({ pressed }) => pressed && styles.pressed}
                    >
                        <View
                            style={{
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Ionicons
                                name="camera"
                                size={25}
                                color={GlobalStyles.colors.primary500}
                            />
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default RenderSendTo;

const styles = StyleSheet.create({
    root: {},
    invitationContainer: {
        margin: '3%',
    },
    title: {
        width: '100%',
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
    },
    containers: {
        flex: 1,
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
    category: {},
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