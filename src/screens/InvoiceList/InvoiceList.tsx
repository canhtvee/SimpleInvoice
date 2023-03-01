import React from 'react';
import {Text, View} from 'react-native';

export function InvoiceList({navigation}: any) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('CreateInvoice')}>
        InvoiceList
      </Text>
    </View>
  );
}
