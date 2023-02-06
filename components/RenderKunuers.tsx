import { Ionicons } from '@expo/vector-icons';
import { View, Pressable, Text, StyleSheet, Alert } from 'react-native';
import { GlobalStyles } from '../constants/Styles';

const RenderKunuers = (props: { item: any; demands: any; onTouch: any, user:any }) => {
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
                    {props.item.item.given_name}
                </Text>
            </Pressable>
            <View style={styles.expenseItem}>
                <View
                    style={{
                        marginRight: 8,
                        marginBottom: 5,
                    }}
                >
                    <Pressable
                        onPress={() => {
                            Alert.alert(
                                'you are sending a friend request invitation',
                            );
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
                                name="md-add-circle-sharp"
                                size={25}
                                color="#1daff3"
                            />
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default RenderKunuers;

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
