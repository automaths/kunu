import { StyleSheet, View } from "react-native";
import IncomingPhotosZer from "../screens/IncomingPhotosZer";

const Sent = () => {
    return (
        <View style={styles.base}>
            <IncomingPhotosZer />
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        flex: 1,
    },
});

export default Sent;
