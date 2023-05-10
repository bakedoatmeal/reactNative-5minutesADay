import { KeyboardAvoidingView, SafeAreaView, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addDailyReflection } from '../Reflections';
import { ScrollView } from 'react-native-gesture-handler';

export default function DailyReflection({route, navigation}) {
  
  const data = route.params?.data;

  return (
    <ScrollView style={style.scrollView}>
      <SafeAreaView>
        <View style={style.container}>
          <Text style={style.label}>{data.date}</Text>
          <Text style={style.label}>I am feeling...</Text>
          <Text style={style.input}>{data.feeling}</Text>
          <Text style={style.label}>I am grateful for...</Text>
          <Text style={style.input}>{data.grateful}</Text>
          <Text style={style.label}>What would make today great?</Text>
          <Text style={style.input}>{data.actions}</Text>
          <Text style={style.label}>Daily affirmation</Text>
          <Text style={style.input}>{data.affirmation}</Text>
          <Text style={style.label}>Highlights of the day</Text>
          <Text style={style.input}>{data.highlight}</Text>
          <Text style={style.label}>What did I learn today?</Text>
          <Text style={style.input}>{data.lesson}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
        
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
    backgroundColor: '#008266',
  }
})