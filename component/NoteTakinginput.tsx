import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react'

type Props = {
    saveNote: (text: string) => void
    noteId: string | undefined
}


export const NoteTakinginput: React.FC<Props> = ({saveNote}) => {
const [text, setText] = useState<string>('')

  return (
    <>
      <TextInput multiline={true} style={styles.textinput} value={text} onChangeText={setText}
      autoFocus={true}
      />
      <Button title='Save note' onPress={() => saveNote(text)}/>
    </>
  )
}

 


const styles = StyleSheet.create({
    textinput: {
      backgroundColor: "#ffb70342",
      width: "100%",
      height: 200,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingTop: 15,
      paddingBottom: 10
    }
  });
  