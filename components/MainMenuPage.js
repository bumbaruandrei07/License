import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { PageEnum } from "../App";

export default function MainMenuPage(props) {
  // let displayedPage = props.displayedPage; 
  // let setDisplayedPage = props.setDisplayedPage
  // ========================= La fel cu cel de mai jos ================
  let {displayedPage, setDisplayedPage} = props

  return(
    <View>
      <Text>{displayedPage}</Text>
      <Text>GestioApp MENIU PRINCIPAL!</Text>
      <Button
        onPress={() => setDisplayedPage(PageEnum.BalancePage)}
        title="Gestioneaza Sold"
        color="#841584"
      />
      <Button
        onPress={() => setDisplayedPage(PageEnum.LineChartPage)}
        title="Afiseaza Line Chart"
        color="#841584"
      />
    </View>
  );
}
