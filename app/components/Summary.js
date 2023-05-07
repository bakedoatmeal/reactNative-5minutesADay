import { StyleSheet, Text, TouchableHighlight, View, SafeAreaView } from 'react-native';
import { Calendar} from 'react-native-calendars';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReflectionsDetail from './ReflectionsDetail'
import { useNavigation } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function History({navigation}) {
  return (
    <Stack.Navigator initialRouteName="History">
      <Stack.Screen name="History" children={() => <SummarySelector navigation={navigation}/>}/>
      <Stack.Screen name="Details" component={ReflectionsDetail}/>
    </Stack.Navigator>
  )
}

function SummarySelector() {
  const [selected, setSelected] = useState();
  const [data, setData] = useState();
	const reflections = useSelector(state => state.reflections.value);
  const navigation = useNavigation();


  const handleSelection = (day) => {
    console.log(reflections)
    console.log('selected day', day);
    setSelected(day);
    if (day in reflections) {
      setData(reflections[day]);
      console.log('data found!', reflections[day]);
    } else {
      setData()
    }
  }

  const filledDates =  Object.keys(reflections);

  return (
    <SafeAreaView>
      <Calendar onDayPress={(day) => handleSelection(day.dateString)} 
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'},
       [filledDates]: {marked: true, selectedDotColor: 'red'}
      }}
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350
      }}
      />
      {data ? (
        <TouchableHighlight
          onPress={() =>{
            console.log(data)
            navigation.push('Details', {
              data: data
            })
          }
          }
        > 
          <View>
            <Text>Reflections available</Text>
            <Text>{data.date}</Text>
            <Text>Highlight of the Day</Text>
            <Text>{data.highlight}</Text>
            <Text>Read full reflection...</Text>
          </View>
        </TouchableHighlight>
      ) : (
        <View>
          <Text>{selected}</Text>
          <Text>No data for this day!</Text>
        </View>
      )
      
    }
    </SafeAreaView>
  )
}