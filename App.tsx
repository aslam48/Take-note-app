import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {NoteTakinginput} from "./component/NoteTakinginput";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator(); 
  
  const [shouldCreateNewNote, setshouldCreateNewNote] =
    useState<boolean>(false);

  const saveNote = async (text: string) => {
    await AsyncStorage.setItem("note", text);
  };

  return (
    <NavigationContainer>
    <View style={styles.container}>
      <StatusBar style="auto" />
      {shouldCreateNewNote ? (
        <NoteTakinginput saveNote={saveNote} />
      ) : (
        <>
          <Text>Home Screen</Text>
          <Button
            onPress={() => setshouldCreateNewNote(true)}
            title="New Note"
          />
        </>
      )}
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textinput: {
    backgroundColor: "#ffb70342",
    width: "100%",
    height: 200,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 10,
  },
});
