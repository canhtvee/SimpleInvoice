import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {AppContainer} from '../../commons';
import {Sizes} from '../../utils';
import {InvoiceDetailField} from './InvoiceDetailField';

export function InvoiceDetail() {
  const {params} = useRoute();

  const {invoice} = params;

  return (
    <AppContainer>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: Sizes.padding * 2,
          paddingTop: Sizes.paddinglxx,
          alignItems: 'center',
        }}>
        {Object.keys(invoice).map((key, index) => (
          <InvoiceDetailField key={key} label={key} value={`${invoice[key]}`} />
        ))}
      </ScrollView>
    </AppContainer>
  );
}
