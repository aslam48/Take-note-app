import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScreeNavigationProp } from '../types'

type Props = {
    toggleNewNote: (toggle: boolean) => void
}

export const HomeScreen:  React.FC<Props> = () => {
  const navigation = useNavigation<ScreeNavigationProp>()
 
  return (
    <View>
      <>
          <Text>Home Screen</Text>wq
          <Button
            onPress={() => navigation.navigate("EditNote")}
            title="New Note"
          />
        </>
    </View>
  )
}



const styles = StyleSheet.create({})