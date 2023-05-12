import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Note, getAllNotes } from '../services/noteStoreServices';
import { useFocusEffect } from '@react-navigation/native';


const SaveNotesList: React.FC = () => {
    //states 
    const [notes, setNotes] = useState<Note[]>([])

    useFocusEffect(() => {
        getAllNotes().then(result => setNotes(result.notes))
    });

    return (
        <View style={styles.container}>
            {notes.map(note => ( 
                <ScrollView>
                    <View style={styles.row}> <Text style={styles.note} key={note.id}> {note.text.length === 0 ? "(Blank note)" : note.text} </Text> </View>
                </ScrollView>

            ))}
        </View>
    )
}

export default SaveNotesList

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
    },
    row: {
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: "#e6e6e6",
        alignSelf: "center",
        height: 90,
        justifyContent: "center"
    },
    note: {
        paddingVertical: 20,
        width: "100%",
        fontSize: 16,
    }
})