import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen'; 
import ListScreen from './src/pages/ListScreen'; 
import AvaliationScreen from './src/pages/AvaliationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Avaliation" component={AvaliationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
