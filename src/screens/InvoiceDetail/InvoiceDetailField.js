import React from 'react';
import {View} from 'react-native';

import {AppText} from '../../commons';
import {Sizes} from '../../utils';

export function InvoiceDetailField({label, value}) {
  return (
    <View style={{flexDirection: 'row', marginVertical: Sizes.paddinglx}}>
      <AppText style={{width: Sizes.wpx(120)}}>{label}:</AppText>
      <AppText style={{overflow: 'hidden', width: Sizes.wpx(250)}}>
        {value}
      </AppText>
    </View>
  );
}
