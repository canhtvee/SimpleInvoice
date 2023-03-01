import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {InvoiceList} from '../screens/InvoiceList';
import {CreateInvoice} from '../screens/CreateInvoice';

const StackMain = createNativeStackNavigator();

export function AppContent() {
  return (
    <NavigationContainer>
      <StackMain.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <StackMain.Screen
          name="InvoiceList"
          component={InvoiceList}
          options={{title: 'InvoiceList'}}
        />
        <StackMain.Screen
          name="CreateInvoice"
          component={CreateInvoice}
          options={{title: 'CreateInvoice'}}
        />
      </StackMain.Navigator>
    </NavigationContainer>
  );
}
