import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import EducationScreen from './Education';
// import Index from '../App'; // La pantalla actual
// import SecondScreen from './SecondScreen'; // La nueva pantalla (la crearemos luego)

type RootStackParamList = {
    Home: undefined;
    Education: { apiKey: string; integratorUserId: string };
  };
  
const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Aston SDK TestApp' }} />
        <Stack.Screen name="Education" options={{ title: 'Second Screen' }}>
            {(params) => <EducationScreen route={params.route} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}