import { StyleSheet, Button, Text, View } from "react-native";
import { PageEnum } from "../App";
import { RadioButton } from "react-native-paper";
import React, { useState, useEffect } from "react";
import TransactionValueTextInput from "./TransactionValueTextInput";
import AddTransactionButton from "./AddTransactionButton";
import BalanceText from "./BalanceText";
import Transaction from "../model/Transaction";
import DB from "../database/DB";

export const TransactionType = {
  Venit: "Venit",
  Cheltuiala: "Cheltuiala",
};

export default function BalancePage(props) {
  let { setDisplayedPage } = props;
  const [checked, setChecked] = useState(TransactionType.Venit);
  const [transactionValue, onChangeTransactionValue] = useState("");
  const [transactions, setTransactions] = useState([]);

  console.log(checked);

  const reducer = (acc, currentTransaction) => acc + currentTransaction.value;
  const computeBalance = () => transactions.reduce(reducer, 0);

  const onPressAddButton = () => {
    const value =
      checked === TransactionType.Venit
        ? Number(transactionValue)
        : -Number(transactionValue);
    const timestamp = new Date().getTime();

    const transaction = new Transaction(value, timestamp);

    setTransactions([...transactions, transaction]);
    console.log("Button Pressed!");
    console.log(transactions);
  };

  useEffect(
    () => {
      let lastTransaction = transactions[transactions.length - 1];
      if (lastTransaction) {
        DB.createTransaction(lastTransaction.value, lastTransaction.timestamp);
      }
    },
    //cand se schimba tranzactiile atunci se schimba efectul - alocam immutable
    // kind of Observer dp
    [transactions]
  );

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
