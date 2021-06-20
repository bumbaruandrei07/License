import React from "react";
import { PageEnum } from "../App";
import {
  StyleSheet,
  Button,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";

const ExampleData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => <Item title={item.title} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});








export default function MessagesPage(props) {
  const { setDisplayedPage } = props;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ExampleData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Button onPress={() => {}} title="Add Message" color="#841584" />
      <Button
        onPress={() => setDisplayedPage(PageEnum.MainMenuPage)}
        title="Back"
        color="#841584"
      />
    </SafeAreaView>
  );
}