import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GlobalStyles } from '../../constants/Styles';

function Input(props:any) {

  const inputStyles = [styles.input];

//   if (props.textInputConfig && props.textInputConfig.multiline) {
//     inputStyles.push(props.styles.inputMultiline)
//   }

  if (props.invalid) {
    inputStyles.push(props.styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, props.style]}>
      <Text style={[styles.label, props.invalid && props.styles.invalidLabel]}>{props.label}</Text>
      <TextInput style={inputStyles} {...props.textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50
  }
});
