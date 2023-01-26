import { useState } from "react";
import { Text, View } from "../components/Themed";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/Styles";
import { FlatList, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import Received from "./Received";
import Sent from "./Sent";

const AddPhoto = () => {
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
                <View style={styles.buttonDivider}>
                    <Button
                        style={styles.topButtons}
                        mode={toggling === true ? "flat" : ""}
                        onPress={toggleReceived}
                    >
                        Camera
                    </Button>
                </View>
                <View style={styles.buttonDivider}>
                    <Button
                        style={styles.topButtons}
                        mode={toggling === false ? "flat" : ""}
                        onPress={toggleSent}
                    >
                        Gallery
                    </Button>
                </View>
            </View>
        </View>
    );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    base: {
        flex: 1,
    },
    topRow: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonDivider: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    topButtons: {
        marginTop: 10,
        backgroundColor: GlobalStyles.colors.primary500,
        borderRadius: 4,
        width: windowWidth < 600 ? 120 : 240,
        height: windowHeight < 1100 ? 40 : 80,
        marginHorizontal: 8,
    },
});

export default AddPhoto;
