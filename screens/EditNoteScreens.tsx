import React from 'react';
import { NoteTakinginput } from '../component/NoteTakinginput';
import AsyncStorage from "@react-native-async-storage/async-storage";



export const EditNoteScreen: React.FC = () => {
    const saveNote = async (text: string) => {
        await AsyncStorage.setItem("note", text);  
      };
      
    return (
        <NoteTakinginput saveNote={saveNote}/>
    )
}