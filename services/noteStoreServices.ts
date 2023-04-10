
import AsyncStorage from "@react-native-async-storage/async-storage";


export type Note = {
    text: string;
    id: string;
}

export type NoteStore = {
    notes: Array<Note>
}

const STORE_KEY = 'TAKE_NOTE_STORE'
export const getAllNot = async () => {
    const storeItem =await AsyncStorage.getItem(STORE_KEY)
    if(storeItem) {
        return JSON.parse(storeItem) as NoteStore
    }
    return {notes: []}
}

export const getNote = async () => {
    return await  AsyncStorage.getItem("note")
}

export const saveNote = async (text: string) => {
    await AsyncStorage.setItem("note", text);  
  };