import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { GlobalStyles } from "../constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function Permissions() {
    const [connections, setConnections] = useState(false);
    const [invitations, setInvitations] = useState(false);
    const [requests, setRequests] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.category}>
                <Pressable
                    onPress={() => setConnections(!connections)}
                    style={styles.pressable}
                >
                    <View style={styles.innerCategory}>
                        {connections ? (
                            <Ionicons
                                name="chevron-down-circle"
                                size={30}
                                color="white"
                            />
                        ) : (
                            <Ionicons
                                name="chevron-forward-circle"
                                size={30}
                                color="white"
                            />
                        )}
                        <View style={styles.banner}>
                            <Text style={styles.categoryTypo}>Connections</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
            <View style={styles.category}>
                <Pressable
                    onPress={() => setInvitations(!invitations)}
                    style={styles.pressable}
                >
                    <View style={styles.innerCategory}>
                        {invitations ? (
                            <Ionicons
                                name="chevron-down-circle"
                                size={30}
                                color="white"
                            />
                        ) : (
                            <Ionicons
                                name="chevron-forward-circle"
                                size={30}
                                color="white"
                            />
                        )}
                        <View style={styles.banner}>
                            <Text style={styles.categoryTypo}>Invitations</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
            <View style={styles.category}>
                <Pressable
                    onPress={() => setRequests(!requests)}
                    style={styles.pressable}
                    // style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
                >
                    <View style={styles.innerCategory}>
                        {requests ? (
                            <Ionicons
                                name="chevron-down-circle"
                                size={30}
                                color="white"
                            />
                        ) : (
                            <Ionicons
                                name="chevron-forward-circle"
                                size={30}
                                color="white"
                            />
                        )}
                        <View style={styles.banner}>
                            <Text style={styles.categoryTypo}>Requests Sent</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'white',
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
        flexDirection: "row",
        marginTop: 1,
        padding: 20,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    innerCategory: {
        flexDirection: "row",
        backgroundColor: GlobalStyles.colors.primary500,
    },
    categoryTypo: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    element: {
        margin: 10,
    },
    banner: {
        marginTop: 4,
        marginLeft: 8,
        flexDirection: "row",
        backgroundColor: GlobalStyles.colors.primary500,
    },
    pressable: {
        flex: 1,
    },
});
