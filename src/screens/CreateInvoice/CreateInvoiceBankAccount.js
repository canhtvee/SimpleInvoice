import React from 'react';
import {useFormContext} from 'react-hook-form';

import {AppText, AppTextInput} from '../../commons';
import {Sizes} from '../../utils';
import {View} from 'react-native';

export function CreateInvoiceBankAccount() {
  const {control} = useFormContext();

  return (
    <>
      <AppText style={{marginTop: Sizes.space3x, fontWeight: 'bold'}}>
        Bank Account Info
      </AppText>
      <AppTextInput
        label="bankId"
        control={control}
        name="bankAccount.bankId"
        placeholder={'Enter bankId'}
        containerStyle={{marginTop: Sizes.padding}}
      />
      <AppTextInput
        label="sortCode"
        control={control}
        name="bankAccount.sortCode"
        placeholder={'Enter sortCode'}
        containerStyle={{marginTop: Sizes.padding}}
      />
      <AppTextInput
        label="accountNumber"
        control={control}
        name="bankAccount.accountNumber"
        placeholder={'Enter accountNumber'}
        containerStyle={{marginTop: Sizes.padding}}
      />
      <AppTextInput
        label="accountName"
        control={control}
        name="bankAccount.accountName"
        placeholder={'Enter accountName'}
        containerStyle={{marginTop: Sizes.padding}}
      />
    </>
  );
}
