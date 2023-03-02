import React from 'react';
import {View} from 'react-native';
import {FormProvider, useForm} from 'react-hook-form';

export function InvoiceList() {
  const form = useForm({mode: 'onSubmit', reValidateMode: 'onChange'});

  return (
    <FormProvider {...form}>
      <View style={{flex: 1}}></View>
    </FormProvider>
  );
}
