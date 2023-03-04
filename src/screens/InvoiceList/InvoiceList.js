import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

import {AppContainer} from '../../commons';
import {InvoiceListContent} from './InvoiceListContent';
import {InvoiceListHeading} from './InvoiceListHeading';
import {InvoiceListSearch} from './InvoiceListSearch';

export function InvoiceList() {
  const form = useForm({
    defaultValues: {
      sortOrder: 'NEWEST',
    },
  });

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
