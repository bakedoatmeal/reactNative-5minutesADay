import { configureStore } from '@reduxjs/toolkit';
import reflectionsReducer from './Reflections'
import { getAsyncState, saveState } from './asyncStorage';

export const store = configureStore({
  reducer: {
    reflections: reflectionsReducer
  },
})
