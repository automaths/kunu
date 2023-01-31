import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Colors } from '../../constants/Colors_js';

function Input(props: {
  label: any,
  keyboardType: any,
  secure: any,
  onUpdateValue: any,
  value: any,
  isInvalid: any,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, props.isInvalid && styles.labelInvalid]}>
        {props.label}
      </Text>
      <TextInput
        style={[styles.input, props.isInvalid && styles.inputInvalid]}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secure}
        autoCapitalize={false}
        onChangeText={props.onUpdateValue}
        value={props.value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: 'white',
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.error500,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
