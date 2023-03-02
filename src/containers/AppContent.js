import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {Login} from '../screens/Login';

const RootStack = createNativeStackNavigator();

export function AppContent() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
