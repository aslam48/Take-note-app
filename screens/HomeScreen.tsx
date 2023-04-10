import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScreeNavigationProp } from '../types'
import { useFocusEffect } from '@react-navigation/native';
import { getNote } from '../services/noteStoreServices';

type Props = {
    toggleNewNote: (toggle: boolean) => void
}

export const HomeScreen:  React.FC<Props> = () => {
 //states 
 const [noteText, setNoteText] = useState<string>("")

 useFocusEffect(() => {
  getNote().then(result => setNoteText(result ?? ""))
 })

 

  const navigation = useNavigation<ScreeNavigationProp>()
  return (
      <>
       <View>
            <Text>
             {noteText}
            </Text>
          </View>

          <Button
            onPress={() => navigation.navigate("EditNote")}
            title="New Note"
          />  
        </>
  )
}



const styles = StyleSheet.create({})