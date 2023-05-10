import { StyleSheet, Text, TouchableHighlight, View, SafeAreaView } from 'react-native';
import { Calendar} from 'react-native-calendars';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReflectionsDetail from './ReflectionsDetail'
import { useNavigation } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
    setSelected(day);
    if (day in reflections) {
      setData(reflections[day]);
    } else {
      setData()
    }
  }

  const filledDates = {}
  if (reflections) {
    Object.keys(reflections).forEach((value) => {
      filledDates[value] = {marked: true, selectedDotColor: 'red'}
    })
  }


  return (
    <SafeAreaView>
      <Calendar onDayPress={(day) => handleSelection(day.dateString)} 
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'},
        ...filledDates
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
          <View style={style.container}>
            <View styles={style.header}>
              <Text style={style.label}>Reflections available</Text>
              <Text style={style.label}>{data.date}</Text>
            </View>
            <Text style={style.label}>Highlight of the Day</Text>
            <Text style={style.input}>{data.highlight}</Text>
            <Text style={style.click}>Read full reflection...</Text>
          </View>
        </TouchableHighlight>
      ) : (
        <View style={style.container}>
          <Text style={style.label}>{selected}</Text>
          <Text style={style.label}>No data for this day!</Text>
        </View>
      )
      
    }
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  label: {
    fontSize: 15,
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
  },
  click: {
    marginTop: 10,
    color: 'teal',
  }, 
  header: {
    display: 'flex',
    flexDirection: 'flex',
    alignItems: 'flex-start',
  }
})