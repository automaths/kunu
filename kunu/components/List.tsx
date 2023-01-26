import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = (props:any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{props.name}</Text>
    <Text>{props.details}</Text>
  </View>
);

// the filter
const List = (props:any) => {
  const renderItem = (props:any) => {
    // when no input, show all
    if (props.searchPhrase === "") {
      return <Item name={props.item.name} details={props.item.details} />;
    }
    // filter of the name
    // if (props.item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    //   return <Item name={props.item.name} details={props.item.details} />;
    // }

    // filter of the description
    // if (props.item.details.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    //   return <Item name={props.item.name} details={props.item.details} />;
    // }

    // return (<Item name={props.item.name} details={props.item.details} />);
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
