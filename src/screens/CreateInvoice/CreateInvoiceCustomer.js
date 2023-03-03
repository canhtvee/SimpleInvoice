import React from 'react';
import {useFormContext} from 'react-hook-form';

import {AppText, renderFields} from '../../commons';
import {Sizes} from '../../utils';
import {CreateInvoiceCustomerAddress} from './CreateInvoiceCustomerAddress';

export function CreateInvoiceCustomer() {
  const {control} = useFormContext();

  return (
    <>
      <AppText style={{marginTop: Sizes.space3x, fontWeight: 'bold'}}>
        Customer Info
      </AppText>
      {renderFields(
        [
          {
            key: 'customer',
            children: [
              {key: 'firstName'},
              {key: 'lastName'},
              {
                key: 'contact',
                children: [{key: 'email'}, {key: 'mobileNumber'}],
              },
            ],
          },
        ],
        '',
        {control, containerStyle: {marginTop: Sizes.padding}},
      )}
      <CreateInvoiceCustomerAddress />
    </>
  );
}
