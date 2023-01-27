import { useState } from "react";
import { Text, View } from "../components/Themed";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/Styles";
import { FlatList, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import IncomingPhotos from "./IncomingPhotos";

const Received = () => {
    return (
        <View style={styles.base}>
            <IncomingPhotos />
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        flex: 1,
    },
});

export default Received;
