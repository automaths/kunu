import { useState } from "react";
import { View } from "../components/Themed";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/Styles";
import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';
import AddFriend from './AddConnection';
import AddPhoto from '../screens/AddPhoto';

const Adding = () => {
    const [toggling, setToggling] = useState(true);

    const togglePhoto = () => {
        if (toggling === false) setToggling(true);
    };

    const toggleConnection = () => {
        if (toggling === true) setToggling(false);
    };

    return (
        <View style={styles.base}>
            <View style={styles.topRow}>
                <Button
                    style={styles.topButtons}
                    mode={toggling === true ? "flat" : ""}
                    onPress={togglePhoto}
                >
                    Photos
                </Button>
                <Button
                    style={styles.topButtons}
                    mode={toggling === false ? "flat" : ""}
                    onPress={toggleConnection}
                >
                    Connection
                </Button>
            </View>
            <View style={styles.body}>
                {toggling ? <AddPhoto /> : <AddFriend />}
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
    body: {
        flex: 1,
    }
});

export default Adding;
