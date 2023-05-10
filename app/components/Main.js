import { StyleSheet} from 'react-native';
import DailyReflection from './DailyReflection';
import History from './Summary'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="DailyReflection"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
      
            if (route.name === 'Daily Reflecion') {
              iconName = focused
                ? 'journal' // Set focused icon
                : 'journal-outline'; // Set the not focused icon
            } else if (route.name === 'Summary') {
              iconName = focused ? 'calendar-clear' : 'calendar-number-outline';
            }
      
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato', // Active/focussed color
          tabBarInactiveTintColor: 'gray', // Inactive color,
          headerShown: false
        })
      }
      >
        <Tab.Screen name="Daily Reflection" component={DailyReflection}/>
        <Tab.Screen name="Summary" component={History}/>        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
