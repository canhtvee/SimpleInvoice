import React from 'react';
import {useFormContext} from 'react-hook-form';

import {AppText, AppTextInput} from '../../commons';
import {Sizes} from '../../utils';

const bankAccountFields = [
  'bankId',
  'sortCode',
  'accountNumber',
  'accountName',
];

export function CreateInvoiceBankAccount() {
  const {control} = useFormContext();

  return (
    <>
      <AppText style={{marginTop: Sizes.space3x, fontWeight: 'bold'}}>
        Bank Account Info
      </AppText>

      {bankAccountFields.map(field => (
        <AppTextInput
          key={field}
          label={field}
          control={control}
          name={`bankAccount.${field}`}
          placeholder={`Enter ${field}`}
          containerStyle={{marginTop: Sizes.padding}}
        />
      ))}
    </>
  );
}
