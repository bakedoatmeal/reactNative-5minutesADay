import { KeyboardAvoidingView, SafeAreaView, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addDailyReflection } from '../Reflections';

export default function DailyReflection({data}) {
  
  return (
    <View>
      <SafeAreaView>
        <Text>{date.Date}</Text>
        <Text>I am feeling...</Text>
        <Text>{data.feeling}</Text>
        <Text>I am grateful for...</Text>
        <Text>{data.grateful}</Text>
        <Text>What would make today great?</Text>
        <Text>{data.actions}</Text>
        <Text>Daily affirmation</Text>
        <Text>{data.affirmation}</Text>
        <Text>Highlight of the day</Text>
        <Text>{data.highlight}</Text>
        <Text>What did I learn today?</Text>
        <Text>{data.lesson}</Text>
      </SafeAreaView>
    </View>
        
  )
}