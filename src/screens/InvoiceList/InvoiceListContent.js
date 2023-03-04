import React from 'react';
import {FlatList} from 'react-native';

import {AppContentEmpty} from '../../commons';
import {Colors, Sizes} from '../../utils';

import {useInvoiceList} from './modules';
import {InvoiceListItem} from './InvoiceListItem';

export function InvoiceListContent() {
  const invoiceList = useInvoiceList();

  return (
    <FlatList
      data={invoiceList}
      contentContainerStyle={{
        paddingBottom: Sizes.padding * 2,
        backgroundColor: Colors.ripple,
        paddingTop: Sizes.paddinglxx,
      }}
      renderItem={({item, index}) => (
        <InvoiceListItem data={item} index={index} />
      )}
      keyExtractor={(item, index) => `${item.invoiceId}-${index}`}
      ListEmptyComponent={
        <AppContentEmpty containerStyle={{marginTop: Sizes.space3x}} />
      }
    />
  );
}
