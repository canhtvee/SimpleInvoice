import React from 'react';
import {Pressable} from 'react-native';
import {View} from 'react-native';

import {AppText} from '../../commons';
import {Sizes} from '../../utils';

function InvoiceListItemField({label, value}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <AppText style={{width: Sizes.wpx(80)}}>{label}:</AppText>
      <AppText style={{overflow: 'hidden', width: Sizes.wpx(270)}}>
        {value}
      </AppText>
    </View>
  );
}

export function InvoiceListItem({data, index}) {
  console.log('InvoiceListItem', data.invoiceId);
  return (
    <Pressable
      style={{
        marginVertical: Sizes.padding,
        paddingHorizontal: Sizes.padding,
        alignItems: 'center',
      }}>
      <InvoiceListItemField label={'InvoiceId'} value={data.invoiceId} />
      <InvoiceListItemField label={'Due Date'} value={data.dueDate} />
      <InvoiceListItemField label={'Customer'} value={data.customer} />
      <InvoiceListItemField label={'Type'} value={data.type} />
    </Pressable>
  );
}
