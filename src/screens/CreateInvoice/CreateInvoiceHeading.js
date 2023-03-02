import React from 'react';
import {AppText} from '../../commons';
import {Sizes} from '../../utils';

export function CreateInvoiceHeading() {
  return (
    <AppText
      style={{
        alignSelf: 'center',
        fontSize: Sizes.headline,
        fontWeight: 'bold',
        marginTop: Sizes.wpx(60),
      }}>
      Create Invoice
    </AppText>
  );
}
