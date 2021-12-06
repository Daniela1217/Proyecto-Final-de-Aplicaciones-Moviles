import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import BusinessScreen from '../screens/BusinessScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  MapScreen: undefined;
  BusinessScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="BusinessScreen" component={BusinessScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;