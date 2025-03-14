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
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Education">
                    {(params) => <EducationScreen route={params.route} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}