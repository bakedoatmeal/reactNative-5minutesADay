import { KeyboardAvoidingView, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function DailyReflection() {
  const date = Date.now()

  const [journalData, setJournalData] = useState({
    date: date,
    feeling: 5,
    grateful: '', 
    actions: '', 
    affirmation: '',
    highlight: '',
    lesson: '',
  })
  
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
        <Text>Daily affirmation</Text>
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
      <Button title="Save"/>
    </View>
        
  )
}