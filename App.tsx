import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {NoteTakinginput} from "./component/NoteTakinginput";
import { EditNoteScreen } from "./screens/EditNoteScreens";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from "./screens/HomeScreen";
import { RootStackParamList } from "./types";
import NewNoteButton from "./component/NewNoteButton";



export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>(); 

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component = {HomeScreen} 
        options={{
          headerTitle: "All notes",
          headerRight: ()=> <NewNoteButton/>
        }}
     
        />
        <Stack.Screen name="EditNote" component = {EditNoteScreen} />
    </Stack.Navigator>
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
