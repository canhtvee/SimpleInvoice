import React from 'react';
import {useFieldArray, useFormContext} from 'react-hook-form';

import {AppText, AppTextInput} from '../../commons';
import {Sizes} from '../../utils';

export function CreateInvoiceCustomerAddress() {
  const {control} = useFormContext();

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'customer.addresses',
  });

  console.log(fields);

  return (
    <>
      <AppText style={{marginTop: Sizes.space3x, fontWeight: 'bold'}}>
        Customer Info Address
      </AppText>
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

const _ = [
  {
    city: 'hanoi',
    countryCode: 'VN',
    county: 'hoangmai',
    id: '10ce8290-dd7f-4148-8e2c-e574727abfa4',
    postcode: '1000',
    premise: 'CT11',
  },
];
