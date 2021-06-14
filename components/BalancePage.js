import { StyleSheet, Button, Text, View } from "react-native";
import { PageEnum } from "../App";
import { RadioButton } from "react-native-paper";
import React, { useState } from "react";
import TransactionValueTextInput from "./TransactionValueTextInput";
import AddTransactionButton from "./AddTransactionButton";
import BalanceText from "./BalanceText";

export const TransactionType = {
  Venit: "Venit",
  Cheltuiala: "Cheltuiala",
};

export default function BalancePage(props) {
  let { setDisplayedPage } = props;
  const [checked, setChecked] = useState(TransactionType.Venit);
  const [transactionValue, onChangeTransactionValue] = useState(null);
  const [transactions, setTransactions] = useState([]);

  console.log(checked);

  const reducer = (acc, currentTransaction) => acc + currentTransaction.value;
  const computeBalance = () => transactions.reduce(reducer, 0);

  const onPressAddButton = () => {
    const transaction = {
      value:
        checked === TransactionType.Venit
          ? Number(transactionValue)
          : -Number(transactionValue),
      timestamp: new Date().getTime(),
    };
    setTransactions([...transactions, transaction]);
    console.log("Button Pressed!");
    console.log(transactions);
  };

  return (
    <View>
      <Text>Venit</Text>
      <RadioButton
        value={TransactionType.Venit}
        status={checked === TransactionType.Venit ? "checked" : "unchecked"}
        onPress={() => setChecked(TransactionType.Venit)}
      />

      <Text>Cheltuiala</Text>
      <RadioButton
        value={TransactionType.Cheltuiala}
        status={
          checked === TransactionType.Cheltuiala ? "checked" : "unchecked"
        }
        onPress={() => setChecked(TransactionType.Cheltuiala)}
      />
      <TransactionValueTextInput
        transactionValue={transactionValue}
        onChangeTransactionValue={onChangeTransactionValue}
      />
      <AddTransactionButton onPress={onPressAddButton} />

      <BalanceText balance={computeBalance(transactions)} />

      <Button
        onPress={() => setDisplayedPage(PageEnum.MainMenuPage)}
        title="Back"
        color="#841584"
      />
    </View>
  );
}
