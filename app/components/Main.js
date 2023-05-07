import { StyleSheet} from 'react-native';
import DailyReflection from './DailyReflection';
import Summary from './Summary';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="DailyReflection">
        <Tab.Screen name="Daily Reflection" component={DailyReflection}/>
        <Tab.Screen name="Summary" component={Summary}/>        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
