import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

export default function LineChartPage(props) {
  let { setDisplayedPage } = props;
  return (
    <View>
      <Text>Aceasta va fi pagina de LineChart</Text>
      <Button
        onPress={() => setDisplayedPage("MainMenuPage")}
        title="Back"
        color="#841584"
      />
    </View>
  );
}
