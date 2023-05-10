import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const getAsyncData = async () => {
//   let keys = []
//   try {
//     keys = await AsyncStorage.getAllKeys()
//     const value = await AsyncStorage.multiGet(keys)
//     console.log(value);

//     const data = {}

//     value.forEach((value) => {
//       data[value[0]] = JSON.parse(value[1]);
//     })
//     console.log(data)

//   } catch(e) {
//     // error reading value
//     console.log('There was an error getting async data', e)
//   }
// }

// const data = getAsyncData()
// console.log(data)

const initialState = {
  value: {
    '2023-05-01': {
      "actions": "Working out", 
      "affirmation": "I am capable", 
      "date": "2023-05-01", 
      "feeling": "Happy", 
      "grateful": "Family and the nice weather", 
      "highlight": "Baking cupcakes", 
      "lesson": "Short row knitting"
    },
    '2023-05-07': {
      "actions": "Playing guitar", 
      "affirmation": "I am worthy", 
      "date": "2023-05-07", 
      "feeling": "Happy", 
      "grateful": "Family and the nice weather", 
      "highlight": "Baking cupcakes", 
      "lesson": "Short row knitting"
    },
    '2023-05-03': {
      "actions": "Knitting", 
      "affirmation": "I am deserving", 
      "date": "2023-05-03", 
      "feeling": "Happy", 
      "grateful": "Family and the nice weather", 
      "highlight": "Baking cupcakes", 
      "lesson": "Short row knitting"
    },
  },
}

export const reflectionsSlice = createSlice({
  name: 'reflections',
  initialState,
  reducers: {
    addDailyReflection: (state, action) => {
      state.value[action.payload.date] = action.payload
      console.log(state.value)

      // try {
      //   const JSONData = JSON.stringify(action.payload)
      //   await AsyncStorage.setItem(action.payload.date, JSONData)
      //   const keys = await AsyncStorage.getAllKeys()
      //   console.log(keys)
      // } catch (e) {
      //   console.log('error saving to async storage')
      // }

    }
  }
})

export const { addDailyReflection } = reflectionsSlice.actions
export default reflectionsSlice.reducer 