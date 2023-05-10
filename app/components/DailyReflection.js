import { KeyboardAvoidingView, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addDailyReflection } from '../Reflections';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView>
    <ScrollView style={style.scrollView}>
    <View style={style.container}>
      <KeyboardAvoidingView>
        <Text style={style.label}>{formattedDate}</Text>
        <Text style={style.label}>I am feeling...</Text>
        <TextInput
          style={style.input}
          multiline
          numberOfLines={4}
          maxLength={150}
          placeholder="Answer here"
          onChangeText={value => setJournalData({...journalData, feeling: value})}
          value={journalData.feeling}
        />
        <Text style={style.label}>I am grateful for...</Text>
        <TextInput
          style={style.input}
          placeholder="Answer here"
          multiline
          numberOfLines={4}
          maxLength={150}
          onChangeText={value => setJournalData({...journalData, grateful: value})}
          value={journalData.grateful}
        />
        <Text style={style.label}>What would make today great?</Text>
        <TextInput
          style={style.input}
          placeholder="Answer here"
          multiline
          numberOfLines={4}
          maxLength={150}
          onChangeText={value => setJournalData({...journalData, actions: value})}
          value={journalData.actions}
        />
        <Text style={style.label}>Daily affirmation</Text>
        <TextInput
          style={style.input}
          placeholder="Answer here"
          multiline
          numberOfLines={150}
          maxLength={150}
          onChangeText={value => setJournalData({...journalData, affirmation: value})}
          value={journalData.affirmation}
        />
        <Text style={style.label}>3 highlights of the day</Text>
        <TextInput
          style={style.input}
          multiline
          numberOfLines={4}
          maxLength={150}
          placeholder="Answer here"
          onChangeText={value => setJournalData({...journalData, highlight: value})}
          value={journalData.highlight}
        />
        <Text style={style.label}>What did I learn today?</Text>
        <TextInput
          style={style.input}
          multiline
          numberOfLines={4}
          maxLength={150}
          placeholder="Answer here"
          onChangeText={value => setJournalData({...journalData, lesson: value})}
          value={journalData.lesson}
        />
      </KeyboardAvoidingView>
      <Button style={style.button} title="Save" color='#3B6064' onPress={() => {
        console.log('journalData', journalData)
        dispatch(addDailyReflection(journalData))
      }}/>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  label: {
    fontSize: 20,
    color: '#3B6064',
    paddingTop: 20,
  },
  container: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    padding: 18,
    opacity: '30%',
    borderRadius: 10,
    backgroundColor: 'rgba(245, 244, 237, 0.9)'
  },
  input: {
    marginTop: 6,
    color: '#364958',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    minHeight: 50,
  },
  scrollView: {
    backgroundColor: '#004782',
  }
})