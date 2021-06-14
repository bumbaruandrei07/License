import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { PageEnum } from "../App";

export default function BalancePage(props) {
  let { setDisplayedPage } = props;

  return (
    <View>
      <Text>Aceasta va fi pagina de sold!</Text>
      <Button
        onPress={() => setDisplayedPage(PageEnum.MainMenuPage)}
        title="Back"
        color="#841584"
      />
    </View>
  );
}
