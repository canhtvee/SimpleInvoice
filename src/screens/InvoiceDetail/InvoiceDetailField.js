import React from 'react';
import {View} from 'react-native';

import {AppText} from '../../commons';
import {Sizes} from '../../utils';

export function InvoiceDetailField({label, value}) {
  return (
    <View style={{marginVertical: Sizes.paddinglx}}>
      <AppText>{label}:</AppText>
      <AppText
        style={{overflow: 'hidden', alignSelf: 'flex-end', fontWeight: 'bold'}}>
        {value}
      </AppText>
    </View>
  );
}
