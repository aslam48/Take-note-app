import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react'

type Props = {
    saveNote: (text: string) => void
}


const NoteTakinginput: React.FC<Props> = ({saveNote}) => {
const [text, setText] = useState<string>('')

  return (
    <View>
     
      <TextInput multiline={true} style={styles.textinput} value={text} onChangeText={setText}/>
      <Button title='Save note' onPress={() => saveNote(text)}/>
    </View>
  )
}

export default NoteTakinginput


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
  