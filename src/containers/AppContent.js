import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigation, useAppAccount} from '../utils';

import {Login} from '../screens/Login';
import {InvoiceList} from '../screens/InvoiceList';
import {CreateInvoice} from '../screens/CreateInvoice';
import {InvoiceDetail} from '../screens/InvoiceDetail';

const RootStack = createNativeStackNavigator();

export function AppContent() {
  const account = useAppAccount();
  const initialRouteName = account?.access_token ? 'InvoiceList' : 'Login';

  return (
    <NavigationContainer ref={AppNavigation.navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}
        initialRouteName={'CreateInvoice'}>
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
          name="InvoiceDetail"
          component={InvoiceDetail}
          options={{title: 'InvoiceDetail'}}
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
