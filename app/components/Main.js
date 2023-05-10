import { StyleSheet} from 'react-native';
import DailyReflection from './DailyReflection';
import History from './Summary'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
                ? 'book-open' // Set focused icon
                : 'book-open'; // Set the not focused icon
            } else if (route.name === 'Summary') {
              iconName = focused ? 'calendar' : "calendar";
            }
      
            // You can return any component that you like here!
            return  <Icon name={iconName} size={25} color="blue" />
          },
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
    backgroundColor: 'honeydew',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
