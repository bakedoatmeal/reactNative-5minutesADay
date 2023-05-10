import AsyncStorage from '@react-native-async-storage/async-storage';

const REFLECTIONS = 'REFLECTIONS'

export const saveState = async (state) => {
  try {
        const JSONData = JSON.stringify(state)
        await AsyncStorage.setItem(REFLECTIONS, JSONData)
      } catch (e) {
        console.log('error saving to async storage', e)
      }
}

export const getAsyncState = async () => {
  try {
    const value = await AsyncStorage.getItem(REFLECTIONS)
    const state = value === null ? undefined : JSON.parse(value)
    console.log(state)
    return state
  } catch(e) {
    // error reading value
    console.log('There was an error getting async data', e)
  }
}
