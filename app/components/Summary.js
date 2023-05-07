import { StyleSheet, Text, View } from 'react-native';
import { Calendar} from 'react-native-calendars';
import { useState } from 'react';

export default function Summary() {
  const [selected, setSelected] = useState();

  const handleSelection = (day) => {
    console.log('selected day', day);
    setSelected(day.dateString)
  }

  return (
    <View>
      <Calendar onDayPress={handleSelection} 
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'},
        '2023-05-02': {marked: true, selectedDotColor: 'red'}
      }}
      />
      <Text>Summary View</Text>
    </View>
  )
}