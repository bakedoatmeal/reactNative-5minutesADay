import { KeyboardAvoidingView, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addDailyReflection } from '../Reflections';

export default function DailyReflection() {
  const date = new Date();
  const formattedDate = date.toISOString().slice(0, 10);

  // NSUSERStorage for key value pairs, similar to local storage
  // Look into react native local storage 
  // Look up timer app and password app 
  // icloud API 
  // core data - feature in IOS ecosystem, like a database
  // realm: alternate to core data 

  const [journalData, setJournalData] = useState({
    date: formattedDate,
    feeling: '',
    grateful: '', 
    actions: '', 
    affirmation: '',
    highlight: '',
    lesson: '',
  })

  const dispatch = useDispatch()
  
  return (
    <View>
      <KeyboardAvoidingView>
        <Text>{date.Date}</Text>
        <Text>I am feeling...</Text>
        <TextInput
          placeholder="answer here"
          onChangeText={value => setJournalData({...journalData, feeling: value})}
          value={journalData.feeling}
        />
        <Text>I am grateful for...</Text>
        <TextInput
          placeholder="I am grateful for..."
          onChangeText={value => setJournalData({...journalData, grateful: value})}
          value={journalData.grateful}
        />
        <Text>What would make today great?</Text>
        <TextInput
          placeholder="What would make today great?"
          onChangeText={value => setJournalData({...journalData, actions: value})}
          value={journalData.actions}
        />
        <Text>Daily affirmation</Text>
        <TextInput
          placeholder="Daily affirmation"
          onChangeText={value => setJournalData({...journalData, affirmation: value})}
          value={journalData.affirmation}
        />
        <Text>Highlight of the day</Text>
        <TextInput
          placeholder="Highlight of the day"
          onChangeText={value => setJournalData({...journalData, highlight: value})}
          value={journalData.highlight}
        />
        <Text>What did I learn today?</Text>
        <TextInput
          placeholder="Highlight of the day"
          onChangeText={value => setJournalData({...journalData, lesson: value})}
          value={journalData.lesson}
        />
      </KeyboardAvoidingView>
      <Button title="Save" onPress={() => {
        dispatch(addDailyReflection(journalData))
      }}/>
    </View>
        
  )
}