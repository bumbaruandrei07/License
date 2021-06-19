import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainMenuPage from "./components/MainMenuPage";
import LineChartPage from "./components/LineChartPage";
import BalancePage from "./components/BalancePage";

export const PageEnum = {
  MainMenuPage: "MainMenuPage",
  BalancePage: "BalancePage",
  LineChartPage: "LineChartPage",
};

export default function App() {
  let [displayedPage, setDisplayedPage] = useState(PageEnum.MainMenuPage);
  let currentPage;
  switch (displayedPage) {
    case PageEnum.MainMenuPage:
      currentPage = (
        <MainMenuPage
          displayedPage={displayedPage}
          setDisplayedPage={setDisplayedPage}
        />
      );
      break;
    case PageEnum.BalancePage:
      currentPage = <BalancePage setDisplayedPage={setDisplayedPage} />;
      break;
    case PageEnum.LineChartPage:
      currentPage = <LineChartPage setDisplayedPage={setDisplayedPage} />;
      break;
    default:
      throw Error("Page not declared in switch");
  }
  return (
    <View style={styles.container}>
      {currentPage}

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "khaki",
    alignItems: "center",
    justifyContent: "center",
  },
});
