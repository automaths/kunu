
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
  FlatList,
  Pressable,
  TouchableHighlight,
} from "react-native";

import Button from "../components/UI/Button";

import List from "../components/List";
import SearchBar from "../components/SearchBar";
import Connections from "../components/Connections";
import { REQUESTS } from "../data/dummy-data";
import { GlobalStyles } from "../constants/Styles";
import { Ionicons } from "@expo/vector-icons";

const touchDemand = () => {
    console.log("demand touched");
};

function renderDemands(itemData: any) {
    return (
        <Pressable
            onPress={touchDemand}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.expenseItem}>
                <Text style={{flex: 1, textAlign: 'left', fontWeight: "bold", marginLeft: 10}}>{itemData.item.name}</Text>
                <Pressable
                    onPress={touchDemand}
                    style={({ pressed }) => pressed && styles.pressed}
                >
                    <View style={{flex:1, justifyContent: 'flex-end', marginRight: 10}}>
                        <Ionicons name="close-circle" size={25} color="red" />
                    </View>
                </Pressable>
                    <Pressable
                        onPress={touchDemand}
                        style={({ pressed }) => pressed && styles.pressed}
                    >
                    <View style={{flex: 1, justifyContent: 'flex-end', marginRight: 40}}>
                        <Ionicons name="checkmark-circle" size={25} color="green" />
                    </View>
                </Pressable>
            </View>
        </Pressable>
    );
}


const AddFriends = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
        placeholder={'Add Kunuer'}
      />
        <FlatList
            data={REQUESTS}
            renderItem={renderDemands}
            keyExtractor={(item) => item.id}
        />
    </SafeAreaView>
  );
};

export default AddFriends;

const styles = StyleSheet.create({
  root: {
    },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
  containers: {
    flex: 1,
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: 'white'
    },
    expenseItem: {
        flex: 1,
        marginLeft: 10,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: 'flex-end',
    },
    category: {
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold",
    },
    amount: {
        fontWeight: "bold",
        // alignContent: 'center',
        // justifyContent: 'center'
    },
});
