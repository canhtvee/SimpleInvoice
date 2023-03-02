import React from 'react';
import {useFormContext} from 'react-hook-form';

import {AppText, AppTextInput} from '../../commons';
import {Sizes} from '../../utils';
import {CreateInvoiceCustomerAddress} from './CreateInvoiceCustomerAddress';

export function CreateInvoiceCustomer() {
  const {control} = useFormContext();

  return (
    <>
      <AppText style={{marginTop: Sizes.space3x, fontWeight: 'bold'}}>
        Customer Info
      </AppText>
      <AppTextInput
        label="firstName"
        control={control}
        name="customer.firstName"
        placeholder={'Enter lastName'}
        containerStyle={{marginTop: Sizes.padding}}
      />
      <AppTextInput
        label="lastName"
        control={control}
        name="customer.lastName"
        placeholder={'Enter lastName'}
        containerStyle={{marginTop: Sizes.padding}}
      />
      <AppTextInput
        label="email"
        control={control}
        name="customer.contact.email"
        placeholder={'Enter email'}
        containerStyle={{marginTop: Sizes.padding}}
      />
      <AppTextInput
        label="mobileNumber"
        control={control}
        name="customer.contact.mobileNumber"
        placeholder={'Enter mobileNumber'}
        containerStyle={{marginTop: Sizes.padding}}
      />
      <CreateInvoiceCustomerAddress />
    </>
  );
}

// customer: {
//   firstName: 'Nguyen',
//   lastName: 'Dung 2',
//   contact: {
//     email: 'nguyendung2@101digital.io',
//     mobileNumber: '+6597594971',
//   },
//   addresses: [
//     {
//       premise: 'CT11',
//       countryCode: 'VN',
//       postcode: '1000',
//       county: 'hoangmai',
//       city: 'hanoi',
//     },
//   ],
// },
