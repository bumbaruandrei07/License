import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { PageEnum } from "../App";
import styled from "styled-components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 10,
  },
});

export default function MainMenuPage(props) {
  // let displayedPage = props.displayedPage;
  // let setDisplayedPage = props.setDisplayedPage
  // ========================= La fel cu cel de mai jos ================
  let { displayedPage, setDisplayedPage } = props;

  return (
    <View>
     
      <Text
        style={{ font: "48px bold Arial",  color: "darkgreen", margin: "12px", padding: "12px", }}
      >
        GestioApp MENIU PRINCIPAL!
      </Text>
      <View style={{ margin: "12px", padding: "12px" }}>
        <Button
          Button
          onPress={() => setDisplayedPage(PageEnum.BalancePage)}
          title="Gestioneaza Sold"
          color="#841584"
          
        />
      </View>
      <View style={{ margin: "12px", padding: "12px" }}>
        <Button
          onPress={() => setDisplayedPage(PageEnum.LineChartPage)}
          title="Afiseaza Line Chart"
          color="#841584"
        />
      </View>
    </View>
  );
}
