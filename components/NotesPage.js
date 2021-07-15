import React, { useState } from "react";
import { PageEnum } from "../App";
import {
  StyleSheet,
  Button,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  Modal,
  Pressable,
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
  <View style={stylesMessage.item}>
    <Text style={stylesMessage.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => <Item title={item.title} />;

const stylesMessage = StyleSheet.create({
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
  const [modalVisible, setModalVisible] = useState(false);

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });

  return (
    <SafeAreaView style={stylesMessage.container}>
      <FlatList
        data={ExampleData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Button
        onPress={() => setModalVisible(true)}
        title="Add Message"
        color="#841584"
      />
      <Button
        onPress={() => setDisplayedPage(PageEnum.MainMenuPage)}
        title="Back"
        color="#841584"
      />

      {/* <View style={styles.centeredView}> */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      {/* </View> */}
    </SafeAreaView>
  );
}
