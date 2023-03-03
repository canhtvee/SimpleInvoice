import React from 'react';
import {useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {AppContainer, AppDateInput, AppTextInput} from '../../commons';
import {Sizes} from '../../utils';

import {CreateInvoiceHeading} from './CreateInvoiceHeading';
import {CreateInvoiceSubmit} from './CreateInvoiceSubmit';

export function CreateInvoice() {
  const {control, handleSubmit} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      invoiceReference: '',
      amount: '',
      dueDate: '',
      description: '',
    },
  });

  return (
    <AppContainer>
      <KeyboardAwareScrollView
        contentContainerStyle={{paddingHorizontal: Sizes.wpx(30)}}>
        <CreateInvoiceHeading />

        <AppTextInput
          label="invoiceReference"
          control={control}
          name={'invoiceReference'}
          placeholder={'invoiceReference'}
        />
        <AppTextInput
          label="amount"
          control={control}
          name={'amount'}
          placeholder={'amount'}
        />
        <AppDateInput label="dueDate" control={control} name={'dueDate'} />
        <AppTextInput
          label="description"
          control={control}
          name={'description'}
          placeholder={'description'}
        />

        <CreateInvoiceSubmit handleSubmit={handleSubmit} control={control} />
      </KeyboardAwareScrollView>
    </AppContainer>
  );
}
