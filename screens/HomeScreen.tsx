import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScreeNavigationProp } from '../types'
import { useFocusEffect } from '@react-navigation/native';
import { Note, getAllNotes, getNote } from '../services/noteStoreServices';

type Props = {
    toggleNewNote: (toggle: boolean) => void
}

export const HomeScreen:  React.FC<Props> = () => {
 //states 
 const [notes, setNotes] = useState<Note[]>([])

 useFocusEffect(() => {
  getAllNotes().then(result => setNotes(result.notes))
 });

 

  const navigation = useNavigation<ScreeNavigationProp>()
  return (
      <>
       <View>     
              {notes.map(note => (<Text key={note.id}> {note.text} </Text>))}
          </View>

          <Button
            onPress={() => navigation.navigate("EditNote")}
            title="New Note"
          />  
        </>
  )
}



const styles = StyleSheet.create({})