import { GlobalStyles } from "../constants/Styles";
import { StyleSheet, View } from "react-native";
import {Dimensions} from 'react-native';
import IncomingPhotos from "./IncomingPhotos";

const Nudes = () => {

    return (
        <View style={styles.base}>
            <View style={styles.gallerie}>
                <IncomingPhotos />
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
        // justifyContent: "space-between",
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

export default Nudes;
