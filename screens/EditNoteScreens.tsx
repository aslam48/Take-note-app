import React from 'react';
import { NoteTakinginput } from '../component/NoteTakinginput';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveNote } from '../services/noteStoreServices';
import { useRoute } from '@react-navigation/native';
import { EditScreenRouteProp } from '../types';



export const EditNoteScreen: React.FC = () => {
    const route =useRoute<EditScreenRouteProp>()
   const noteId =  route.params.noteId
    return <NoteTakinginput saveNote={saveNote} noteId={noteId}/>
}