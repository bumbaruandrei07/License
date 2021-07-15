import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { PageEnum } from "../App";
//import styled from "styled-components";

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
  const styles = StyleSheet.create({
    view: { margin: 12, padding: 12 },
    text: {
      fontSize: 48,
      fontWeight: 'bold',
     // fontFamily:  'Arial',
    // fontFamily : 'Times New Roman',
      color: 'darkgreen',
      margin: 12,
      padding: 12
    }
  })
  
  return (
    <View>
      <Text
        style={styles.text}
      >
        GestioApp MENIU PRINCIPAL!
      </Text>
      <View style={styles.view}>
        <Button
          Button
          onPress={() => setDisplayedPage(PageEnum.BalancePage)}
          title="Gestioneaza Sold"
          color="#841584"
        />
      </View>
      <View style={styles.view}>
        <Button
          onPress={() => setDisplayedPage(PageEnum.LineChartPage)}
          title="Afiseaza Line Chart"
          color="#841584"
        />
      </View>

      <View style={styles.view}>
        <Button
          Button
          onPress={() => setDisplayedPage(PageEnum.MessagesPage)}
          title="Gestio Notes"
          color="#841584"
        />
      </View>
    </View>
  );
}
