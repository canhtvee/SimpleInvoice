import React from 'react';
import {useFieldArray, useFormContext} from 'react-hook-form';
import {View} from 'react-native';

import {AppButtonNormal, AppText, renderFields} from '../../commons';
import {Colors, Sizes} from '../../utils';

export function CreateInvoiceCustomerAddress() {
  const {control, getValues} = useFormContext();

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'customer.addresses',
  });

  return (
    <>
      <AppText
        style={{
          marginTop: Sizes.space3x,
          fontWeight: 'bold',
          borderRadius: Sizes.borderRadius,
        }}>
        Customer Info Address
      </AppText>

      {fields.map((field, index) => {
        const path = `customer.addresses.${index}`;

        return (
          <View
            key={field.id}
            style={{
              backgroundColor: Colors.ripple,
              borderRadius: Sizes.borderRadius,
              marginTop: Sizes.padding,
            }}>
            <AppButtonNormal
              title="Delete"
              style={{alignSelf: 'flex-end', marginTop: Sizes.padding}}
              onPress={() => remove(index)}
            />
            {renderFields(
              [
                {key: 'city'},
                {key: 'countryCode'},
                {key: 'county'},
                {key: 'postcode'},
                {key: 'premise'},
              ],
              path,
              {control},
            )}
          </View>
        );
      })}

      <AppButtonNormal
        title="Add Address"
        style={{alignSelf: 'flex-end', marginTop: Sizes.space3x}}
        onPress={() => append()}
      />
    </>
  );
}

const _ = {
  addresses: [
    {
      city: 'hanoi',
      countryCode: 'VN',
      county: 'hoangmai',
      postcode: '1000',
      premise: 'CT11',
    },
    {
      city: 'ninh binh',
      countryCode: 'VN',
      county: 'hoalu',
      postcode: '20000',
      premise: 'KimPhu',
    },
  ],
  contact: {email: 'nguyendung2@101digital.io', mobileNumber: '+6597594971'},
  firstName: 'Nguyen',
  lastName: 'Dung 2',
};
