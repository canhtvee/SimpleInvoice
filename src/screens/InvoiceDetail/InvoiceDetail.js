import React from 'react';
import {ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {AppContainer} from '../../commons';
import {Sizes} from '../../utils';

import {renderInvoiceDetailFields} from './renderInvoiceDetailFields';

export function InvoiceDetail() {
  const {params} = useRoute();

  const {invoice} = params;

  return (
    <AppContainer>
      <ScrollView
        contentContainerStyle={{
          padding: Sizes.padding * 2,
        }}>
        {renderInvoiceDetailFields(invoice, '')}
      </ScrollView>
    </AppContainer>
  );
}
