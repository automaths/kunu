import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { GlobalStyles } from "../constants/Styles";

export default function Settings() {
    return (
        <View style={styles.container}>
            <View style={styles.username}>
                <Text style={styles.usernameTypo}>Username</Text>
            </View>
            <View style={styles.category}>
                <Text>Account</Text>
            </View>
            <View style={styles.element}>
                <Text>Blocked</Text>
            </View>
            <View style={styles.element}>
                <Text>LogOut</Text>
            </View>
            <View style={styles.category}>
                <Text>Customize</Text>
            </View>
            <View style={styles.element}>
                <Text>Enable Notifications</Text>
            </View>
            <View style={styles.element}>
                <Text>Sounds</Text>
            </View>
            <View style={styles.category}>
                <Text>Themes</Text>
            </View>
            <View style={styles.element}>
                <Text>Legal</Text>
            </View>
            <View style={styles.element}>
                <Text>Privacy Policy</Text>
            </View>
            <View style={styles.element}>
                <Text>Terms and Conditions</Text>
            </View>
            <View style={styles.category}>
                <Text>Share</Text>
            </View>
            <View style={styles.element}>
                <Text>Invite</Text>
            </View>
            <View style={styles.category}>
                <Text>Help</Text>
            </View>
            <View style={styles.element}>
                <Text>Support</Text>
            </View>
            <View style={styles.element}>
                <Text>Tips and Shorcuts</Text>
            </View>
            <View style={styles.element}>
                <Text>Send Feedback</Text>
            </View>
            <View style={styles.deleteAccount}>
                <Text style={styles.deleteAccountTypo}>Delete Account</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    category: {
        marginTop: 10,
        padding: 7,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    deleteAccount: {
        marginTop: 20,
        alignItems: "center",
    },
    deleteAccountTypo: {
        color: "red",
    },
    element: {
        margin: 10,
    },
    username: {
        alignItems: "center",
        margin: 20,
    },
    usernameTypo: {
        fontWeight: "bold",
        fontSize: 24,
    },
});
