import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

import {AppContainer} from '../../commons';
import {InvoiceListContent} from './InvoiceListContent';
import {InvoiceListHeading} from './InvoiceListHeading';
import {InvoiceListSearch} from './InvoiceListSearch';

export function InvoiceList() {
  const form = useForm({
    defaultValues: {
      sortOrder: 'ASCENDING',
    },
  });

  const a = '';
  const b = '';

  console.log((!!a && a) + (!!b && b));

  return (
    <FormProvider {...form}>
      <AppContainer>
        <InvoiceListSearch />
        <InvoiceListHeading />
        <InvoiceListContent />
      </AppContainer>
    </FormProvider>
  );
}
