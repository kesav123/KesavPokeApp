import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { PokemonProvider } from './src/contexts/PokemonContext';

const App = () => {
  return (
    <NavigationContainer>
      <PokemonProvider>
        <AppNavigator />
      </PokemonProvider>
    </NavigationContainer>
  );
};

export default App;
