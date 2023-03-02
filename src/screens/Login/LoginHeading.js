import React from 'react';
import {AppText} from '../../commons';
import {Sizes} from '../../utils';

export function LoginHeading() {
  return (
    <AppText
      style={{
        alignSelf: 'center',
        fontSize: Sizes.headline,
        fontWeight: 'bold',
        marginTop: Sizes.wpx(60),
      }}>
      Login to use Simple Invoice
    </AppText>
  );
}
