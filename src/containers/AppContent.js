import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {InvoiceList} from '../screens/InvoiceList';
import {CreateInvoice} from '../screens/CreateInvoice';

const RootStack = createNativeStackNavigator();

export function AppContent() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
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
