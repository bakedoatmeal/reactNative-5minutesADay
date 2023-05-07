import { createSlice } from '@reduxjs/toolkit';

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
  },
}

export const reflectionsSlice = createSlice({
  name: 'reflections',
  initialState,
  reducers: {
    addDailyReflection: (state, action) => {
      state.value[action.payload.date] = action.payload
      console.log(state.value)
    }
  }
})

export const { addDailyReflection } = reflectionsSlice.actions
export default reflectionsSlice.reducer 