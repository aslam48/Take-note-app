import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { ScreeNavigationProp } from '../types'


const NewNoteButton = () => {
    const navigation = useNavigation<ScreeNavigationProp>()
  return (
    <Pressable 
    onPress={() => navigation.navigate("EditNote")}
    >
        <FontAwesome name="pencil-square-o" size={30} color="#ffb703"/>
    </Pressable>
  )
}

export default NewNoteButton