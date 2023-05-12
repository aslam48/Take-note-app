import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScreeNavigationProp } from '../types'
import SaveNotesList from '../component/SaveNotesList'


export const HomeScreen: React.FC = () => {

  const navigation = useNavigation<ScreeNavigationProp>()
  return (
    <>
     <SaveNotesList/>
      
    </>
  )
}



const styles = StyleSheet.create({})