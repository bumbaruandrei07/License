import React, { useState, useEffect } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import DB from "../database/DB";
import LineChartContainer from "./LineChartContainer";

export default function LineChartPage(props) {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    async function fetchTransactions() {
      //preluarea datelor din db, db ===state
      let dbTrans = await DB.findTransactions();
      setTransactions(dbTrans);
    }
    fetchTransactions();
  }, []);

  let { setDisplayedPage } = props;
  return (
    <View>
      <Text>Aceasta va fi pagina de LineChart</Text>
      <LineChartContainer transactions={transactions} />
      <Button
        onPress={() => setDisplayedPage("MainMenuPage")}
        title="Back"
        color="#841584"
      />
    </View>
  );
}
