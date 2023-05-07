import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
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