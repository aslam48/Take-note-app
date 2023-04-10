import React from 'react';
import { NoteTakinginput } from '../component/NoteTakinginput';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveNote } from '../services/noteStoreServices';



export const EditNoteScreen: React.FC = () => {
    return <NoteTakinginput saveNote={saveNote}/>
}