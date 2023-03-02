import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {Login} from '../screens/Login';
import {InvoiceList} from '../screens/InvoiceList';
import {CreateInvoice} from '../screens/CreateInvoice';
import {useAppAccount} from '../utils';

const RootStack = createNativeStackNavigator();

export function AppContent() {
  const account = useAppAccount();
  const initialRouteName = account?.access_token ? 'InvoiceList' : 'Login';

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}
        initialRouteName={initialRouteName}>
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <RootStack.Screen
          name="InvoiceList"
          component={InvoiceList}
          options={{title: 'InvoiceList'}}
        />
        <RootStack.Screen
          name="CreateInvoice"
          component={CreateInvoice}
          options={{title: 'CreateInvoice'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
