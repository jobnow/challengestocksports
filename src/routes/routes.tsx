import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import PhotosList from '../pages/PhotosList';
import PhotoProfile from '../pages/PhotoProfile';
import arrow from '../assets/Vector.png';
import { Button, Img } from './styles';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PhotosList"
          component={PhotosList}
          options={{
            headerStyle: {
              height: 66,
              elevation: 16,
            },
            headerTitle: () => false,
            headerTintColor: '#1947E6',
          }}
        />
        <Stack.Screen
          name="PhotoProfile"
          component={PhotoProfile}
          options={{
            headerStyle: {
              height: 66,
              elevation: 16,
            },
            headerTitle: () => false,
            headerTintColor: '#1947E6',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
