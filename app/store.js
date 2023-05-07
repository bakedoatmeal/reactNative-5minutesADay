import { configureStore } from '@reduxjs/toolkit';
import reflectionsReducer from './Reflections'

export const store = configureStore({
  reducer: {
    reflections: reflectionsReducer
  },
})