import React from 'react';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AppText} from '../../commons';
import {Colors, Sizes} from '../../utils';

function InvoiceListItemField({label, value}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <AppText style={{width: Sizes.wpx(100)}}>{label}:</AppText>
      <AppText style={{overflow: 'hidden', width: Sizes.wpx(240)}}>
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
      <InvoiceListItemField label={'Reference'} value={data.invoiceReference} />
      <InvoiceListItemField label={'Due Date'} value={data.dueDate} />
      <InvoiceListItemField label={'Amount'} value={data.amount} />
      <InvoiceListItemField label={'Description'} value={data.description} />
    </Pressable>
  );
}
