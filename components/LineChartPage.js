import React, { useState, useEffect } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import DB from "../database/DB";
import LineChartContainer from "./LineChartContainer";


let styles = StyleSheet.create({
  text:{
    fontSize: 36,
    color:"darkred",
    textAlign:"center",
    fontWeight: "bold"
  }
})



export default function LineChartPage(props) {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    async function fetchTransactions() {
      let dbTrans = await DB.findTransactions();
      setTransactions(dbTrans);
    }
    fetchTransactions();
  }, []);

  let { setDisplayedPage } = props;
  return (
    <View>
      <Text style ={styles.text}>Grafic GestioApp</Text>
      <LineChartContainer transactions={transactions} />
      <Button
        onPress={() => setDisplayedPage("MainMenuPage")}
        title="Back"
        color="#841584"
      />
    </View>
  );
}
