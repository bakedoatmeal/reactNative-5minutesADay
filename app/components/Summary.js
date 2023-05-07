import { StyleSheet, Text, View } from 'react-native';
import { Calendar} from 'react-native-calendars';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {ReflectionsDetail} from './ReflectionsDetail'
 
export default function Summary() {
  const [selected, setSelected] = useState();
  const [data, setData] = useState();
	const reflections = useSelector(state => state.reflections.value);

  const handleSelection = (day) => {
    console.log(reflections)
    console.log('selected day', day);
    setSelected(day);
    if (day in reflections) {
      setData(reflections[day]);
      console.log('data found!', reflections[day]);
    }
  }

  return (
    <View>
      <Calendar onDayPress={(day) => handleSelection(day.dateString)} 
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'},
        '2023-05-02': {marked: true, selectedDotColor: 'red'}
      }}
      />
      <Text>Summary View</Text>
      {data && (
        <ReflectionsDetail data={data}/>
      )}
    </View>
  )
}