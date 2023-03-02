import React from 'react';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AppText} from '../../commons';
import {Colors, Sizes} from '../../utils';

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
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        marginVertical: Sizes.paddinglxx,
        marginHorizontal: Sizes.padding,
        alignItems: 'center',
        borderRadius: Sizes.borderRadius,
        backgroundColor: Colors.background,
        padding: Sizes.paddinglx,
      }}
      onPress={() => {
        navigation.navigate('InvoiceDetail', {invoice: data});
      }}>
      <InvoiceListItemField label={'InvoiceId'} value={data.invoiceId} />
      <InvoiceListItemField label={'Due Date'} value={data.dueDate} />
      <InvoiceListItemField label={'Customer'} value={'data.customer'} />
      <InvoiceListItemField label={'Type'} value={data.type} />
    </Pressable>
  );
}
