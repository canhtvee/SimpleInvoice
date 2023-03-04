import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AppButton} from '../../commons';

export function InvoiceListHeading() {
  const navigation = useNavigation();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <AppButton
        title="Create Invoice"
        onPress={() => navigation.navigate('CreateInvoice')}
        textButton
      />
      <AppButton title="Search Invoice" textButton />
      <AppButton title="Sort Invoice" textButton />
    </ScrollView>
  );
}
