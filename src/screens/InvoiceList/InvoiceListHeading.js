import React from 'react';
import {ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useFormContext} from 'react-hook-form';

import {AppButton} from '../../commons';

export function InvoiceListHeading() {
  const navigation = useNavigation();
  const {setValue} = useFormContext();

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppButton
          title="Create Invoice"
          onPress={() => navigation.navigate('CreateInvoice')}
          textButton
        />
        <AppButton
          title="Sort by Latest"
          textButton
          onPress={() => setValue('sortOrder', 'LATEST')}
        />
        <AppButton
          title="Sort by Newest"
          textButton
          onPress={() => setValue('sortOrder', 'NEWEST')}
        />
      </ScrollView>
    </View>
  );
}
