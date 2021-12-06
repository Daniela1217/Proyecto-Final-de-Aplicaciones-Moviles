import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import { BusinessProvider } from './src/context/BusinessContext';

const App = () => {

  const AppState = ({ children }: any ) => {
    return (
        <BusinessProvider>
        { children }
      </BusinessProvider>
    )
  }

  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  )
}

export default App
