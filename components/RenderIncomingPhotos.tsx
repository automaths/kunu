import { Ionicons } from '@expo/vector-icons';
import { View, Pressable, Text, StyleSheet, Alert } from 'react-native';
import { GlobalStyles } from '../constants/Styles';

const RenderIncomingPhotos = (props: {
    item: any;
    requests: any;
    onTouch: any;
    onTouchBis: any;
    onTouchTer: any;
}) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
                <Text
                    style={{
                        flex: 1,
                        textAlign: 'left',
                        fontSize: 15,
                    }}
                >
                    {props.item.item.name}
                </Text>
            </Pressable>
            <View style={styles.expenseItem}>
                <View
                    style={{
                        marginRight: 10,
                        marginBottom: 5,
                    }}
                >
                    <Pressable
                        onPress={() => {
                            props.onTouch();
                        }}
                        style={({ pressed }) => pressed && styles.pressed}
                    >
                        <View
                            style={{
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Ionicons
                                name="eye"
                                size={25}
                                color={GlobalStyles.colors.primary100}
                            />
                        </View>
                    </Pressable>
                </View>
                <View
                    style={{
                        marginRight: 8,
                        marginBottom: 5,
                    }}
                >
                    <Pressable
                        onPress={() => {
                            props.onTouchBis();
                        }}
                        style={({ pressed }) => pressed && styles.pressed}
                    >
                        <View
                            style={{
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
            </View>
            <View style={{ marginRight: 8 }}>
                <Pressable
                    onPress={() => {
                        props.onTouchTer();
                    }}
                    style={({ pressed }) => pressed && styles.pressed}
                >
                    <View
                        style={{
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Ionicons
                            name="checkmark-circle"
                            size={25}
                            color="#0CC703"
                        />
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default RenderIncomingPhotos;

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
