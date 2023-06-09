import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveState } from './asyncStorage';

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
      "highlight": "Playing fetch with Ara", 
      "lesson": "Short row knitting"
    },
    '2023-05-03': {
      "actions": "Knitting", 
      "affirmation": "I am deserving", 
      "date": "2023-05-03", 
      "feeling": "Happy", 
      "grateful": "Family and the nice weather", 
      "highlight": "Tennis!", 
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

    }
  }
})

export const { addDailyReflection } = reflectionsSlice.actions
export default reflectionsSlice.reducer 