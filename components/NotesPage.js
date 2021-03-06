import React, { useEffect, useState } from "react";
import { PageEnum } from "../App";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import AddMessageModal from "./AddMessageModal";
import NoteItem from "./NoteItem";
import DB from "../database/DB";
import {Input, Button} from 'react-native-elements';
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

const renderItem = ({ item }) => <NoteItem title={item.title} />;

/**
 * @param  {{id: String, text: String}} note
 */
function adaptNoteToListItem(note) {
  return {
    id: note.id,
    title: note.text,
  };
}

export default function NotesPage(props) {
  const { setDisplayedPage } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function processNotes() {
      let lastNote = notes[notes.length - 1];
      if (lastNote) {
        await DB.createNote(lastNote.text);
      }
    }
    processNotes();
  }, [notes]);

  useEffect(() => {
    async function processNotes() {
      //selectam toate notele
      let dbNotes = await DB.findNotes();
      //setam starea cu toate notele noi => NOTELE O SA EXISTE DUPA CE IESIM DIN COMPONENTA
      setNotes(dbNotes);
    }

    processNotes();
  }, []);

  const addNote = (note) => {
    if (note.text === "") {
      Alert.alert(
        "Atentie!",
        "Textul trebuie sa contina cel putin un caracter!"
      );

      return;
    }

    setNotes([...notes, note]);
  };
  console.log("notes");
  console.log(notes);

  console.log("modalVisible: ");
  console.log(modalVisible);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    button: {
      margin: 20,
    },
    buttonTitle: {
      fontSize: 24,
      
    },
    backButton: {
     
      flexGrow: 2,
      backgroundColor: "red"
    },

    flexView: {
      display: "flex",
      flexDirection: "row",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notes.map((note) => adaptNoteToListItem(note))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.flexView}>
        <Button
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
          onPress={() => setModalVisible(true)}
          title="Add Message"
         
        />
        <Button
          titleStyle={styles.buttonTitle}
          buttonStyle= {{...styles.button, ...styles.backButton}}
          onPress={() => setDisplayedPage(PageEnum.MainMenuPage)}
          title="Back"
         
        />
      </View>

      <AddMessageModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        addNote={addNote}
      />
    </SafeAreaView>
  );
}
