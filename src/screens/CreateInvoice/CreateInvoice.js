import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {AppContainer} from '../../commons';
import {Sizes} from '../../utils';

import {CreateInvoiceBankAccount} from './CreateInvoiceBankAccount';
import {CreateInvoiceCustomer} from './CreateInvoiceCustomer';
import {CreateInvoiceHeading} from './CreateInvoiceHeading';
import {CreateInvoiceSubmit} from './CreateInvoiceSubmit';
import {mockInvoice} from './mocking';

export function CreateInvoice() {
  const form = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: mockInvoice.invoices[0],
  });

  return (
    <FormProvider {...form}>
      <AppContainer>
        <KeyboardAwareScrollView
          contentContainerStyle={{paddingHorizontal: Sizes.wpx(30)}}>
          <CreateInvoiceHeading />
          <CreateInvoiceBankAccount />
          <CreateInvoiceCustomer />
          <CreateInvoiceSubmit />
        </KeyboardAwareScrollView>
      </AppContainer>
    </FormProvider>
  );
}
