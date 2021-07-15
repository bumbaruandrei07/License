import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TransactionValueTextInput = (props) => {
  const { transactionValue, onChangeTransactionValue } = props;
  const onlyDigits = (text) => {
  //  return text.replace(/[^.\d]/g, "");
  };

  const checkNumber = (text) => {
    console.log(text);

    return onlyDigits(text);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeTransactionValue(text)}
        value={transactionValue}
        placeholder="transaction value"
        keyboardType="numeric"
        // validate:

        onSubmitEditing={checkNumber}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default TransactionValueTextInput;
