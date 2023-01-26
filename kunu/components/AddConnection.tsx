import { FlatList, Pressable, StyleSheet, TextInput } from "react-native";
import { SetStateAction, useState } from "react";
import { Text, View } from "./Themed";
import Input from "./UI/Input";
import { USERS } from "../data/dummy-data";
import { GlobalStyles } from "../constants/Styles";
import { Ionicons } from "@expo/vector-icons";

const AddConnection = (props:any) => {
    const [search, setSearch] = useState("");

    function inputChangedHandler(enteredValue: SetStateAction<string>) {
        setSearch(enteredValue);
    }

    const sendRequest = () => {
        console.log("send requests");
    };

    const openDetails = () => {
        props.navigation.navigate("AddFriend");
    }

    function renderDemands(itemData: any) {
        return (
            <Pressable
                onPress={sendRequest}
                onLongPress={openDetails}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.expenseItem}>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amount}>{itemData.item.name}</Text>
                    </View>
                    <Ionicons name="send" size={24} color="white" />
                </View>
            </Pressable>
        );
    }

    return (
        <>
            <View>
                <View>
                    <Input
                        label="Add friend"
                        textInputConfig={{
                            placeholder: "Enter username",
                            onChangeText: inputChangedHandler,
                            value: search,
                        }}
                    >
                        This is the input
                    </Input>
                </View>
                <View>
                    <FlatList
                        data={USERS}
                        renderItem={renderDemands}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </>
    );
};

export default AddConnection;

const styles = StyleSheet.create({
    containers: {
        flex: 1,
    },
    pressed: {
        opacity: 0.75,
    },
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold",
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        minWidth: 80,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: "bold",
    },
    sendIcon: {
        flex: 1,
    },
});
