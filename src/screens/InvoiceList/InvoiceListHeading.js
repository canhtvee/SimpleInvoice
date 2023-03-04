import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useFormContext} from 'react-hook-form';

import {AppButton} from '../../commons';

export function InvoiceListHeading() {
  const navigation = useNavigation();
  const {setValue} = useFormContext();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <AppButton
        title="Create Invoice"
        onPress={() => navigation.navigate('CreateInvoice')}
        textButton
      />
      <AppButton
        title="Sort ASCENDING"
        textButton
        onPress={() => setValue('sortOrder', 'ASCENDING')}
      />
      <AppButton
        title="Sort DESCENDING"
        textButton
        onPress={() => setValue('sortOrder', 'DESCENDING')}
      />
    </ScrollView>
  );
}
