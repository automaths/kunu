import { FlatList, StyleSheet } from "react-native";
// import Button from '../components/UI/Button';
import Input from "../components/UI/Input";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import React, { useState } from "react";
import { GlobalStyles } from "../constants/Styles";
import Button from "../components/UI/Button";

import { USERS } from "../data/dummy-data";
import Connection from "../components/Connections";
import Authorizations from "../components/Authorizations";

import {Dimensions} from 'react-native';

export default function TabTwoScreen(this: any) {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    function renderCategoryItem(itemData: any) {
        return (
            <View style={styles.searchResult}>
                <Text>Your Expense</Text>
            </View>
        );
    }

    const [search, setSearch] = useState("");

    const updateSearch = (search: React.SetStateAction<string>) => {
        setSearch(search);
    };

    const [toggling, setToggling] = useState(true);

    const toggleConnections = () => {
        if (toggling === false)
            setToggling(true);
    };

    const toggleAuthorizations = () => {
        if (toggling === true)
            setToggling(false);
    };

    return (
        <View style={styles.base}>
            <View style={styles.topRow}>
                <Button style={styles.topButtons} mode={toggling === true ? 'flat' : ''} onPress={toggleConnections}>Connections</Button>
                <Button style={styles.topButtons} mode={toggling === false ? 'flat' : ''} onPress={toggleAuthorizations}>Authorizations</Button>
            </View>
            <View style={styles.cardContent}>
                {toggling === true ? <Connection/> : <Authorizations/>}
            </View>
        </View>

        // <View style={styles.form}>
        //     <View style={styles.inputsRow}>
        //         <Input
        //             style={styles.rowInput}
        //             // label="Amount"
        //             textInputConfig={{
        //                 keyboardType: "default",
        //                 placeholder: "Name",
        //                 maxLength: 10,
        //                 onChangeText: () => {
        //                     console.log("should update state");
        //                 },
        //                 value: search,
        //             }}
        //         />
        //     </View>
        //     <FlatList
        //         data={USERS}
        //         keyExtractor={(item: any) => item.id}
        //         renderItem={renderCategoryItem}
        //         numColumns={1}
        //     />
        // </View>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    topButtons: {
        marginTop: 10,
        backgroundColor: GlobalStyles.colors.primary500,
        borderRadius: 4,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        width: 120,
        marginHorizontal: 8,
    },
    cardContent: {
        flex: 1,
        backgroundColor: "purple",
        margin: 10,
        borderRadius: 10,
    },

    seachBar: {
        // marginTop: 10,
    },
    innerSearchBar: {
        backgroundColor: "white",
    },
    searchContainer: {
        backgroundColor: "white",
    },

    form: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        marginVertical: 24,
        textAlign: "center",
    },
    inputsRow: {
        // marginTop: 40,
        // marginRight: 40,
        // marginLeft: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    searchResult: {
        marginLeft: 45,
        marginRight: 45,
        marginTop: 1,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        borderColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    rowInput: {
        flex: 1,
    },
    errorText: {
        textAlign: "center",
        color: GlobalStyles.colors.error500,
        margin: 8,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
});
