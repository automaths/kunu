import { useState } from "react";
import { Text, View } from "../components/Themed";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/Styles";
import { FlatList, StyleSheet } from "react-native";
import {Dimensions} from 'react-native';
import Received from "./Received";
import Sent from "./Sent";
import AddFriend from '../components/AddConnection';

const Friends = (props:any) => {
    const [toggling, setToggling] = useState(true);

    const toggleReceived = () => {
        if (toggling === false) setToggling(true);
    };

    const toggleSent = () => {
        if (toggling === true) setToggling(false);
    };



    return (
        <View style={styles.base}>
            <View style={styles.topRow}>
                <Button
                    style={styles.topButtons}
                    mode={toggling === true ? "flat" : ""}
                    onPress={toggleReceived}
                >
                    Ajouts
                </Button>
                <Button
                    style={styles.topButtons}
                    mode={toggling === false ? "flat" : ""}
                    onPress={toggleSent}
                >
                    Amis
                </Button>
            </View>
            <View style={styles.gallerie}>
                {toggling ? <AddFriend navigation={props.navigation}/> : <AddFriend navigation={props.navigation}/>}
            </View>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
        width: windowWidth < 600 ? 120 : 240,
        height: windowHeight < 1100 ? 40 : 80,
        marginHorizontal: 8,
    },
    gallerie: {
        flex: 1,
    }
});

export default Friends;
