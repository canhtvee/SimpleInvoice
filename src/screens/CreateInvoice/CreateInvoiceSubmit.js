import React from 'react';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useFormState} from 'react-hook-form';
import uuid from 'react-native-uuid';

import {AppButton} from '../../commons';
import {FetchApi, Sizes} from '../../utils';

import dayjs from 'dayjs';
import {InvoiceService} from '../InvoiceList';
import {mockInvoice} from './mocking';

export function CreateInvoiceSubmit({control, handleSubmit}) {
  const navigation = useNavigation();
  const {isSubmitting} = useFormState({control});

  const onSubmit = async data => {
    const item = {
      itemReference: uuid.v4(),
      description: 'Honda RC' + Math.floor(Math.random() * 150 + 1),
      quantity: Math.floor(Math.random() * 10 + 1),
      amount: Math.floor(Math.random() * 10000 + 1000),
    };

    const baseInvoice = JSON.parse(JSON.stringify(mockInvoice));
    const newInvoice = {
      ...baseInvoice,
      ...data,
      dueDate: dayjs(data.dueDate).format('YYYY-MM-DD'),
    };
    newInvoice.items[0] = {...newInvoice.items[0], ...item};

    console.log(newInvoice);

    try {
      const result = await FetchApi.createInvoice(newInvoice);

      if (!result?.paging) {
        Alert.alert(null, 'Create Invoice Failed');
        throw new Error();
      }

      Alert.alert(null, 'Create Invoice Successful');
      InvoiceService.set(newInvoice);
      navigation.goBack();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <AppButton
      title="Create Invoice"
      onPress={handleSubmit(onSubmit)}
      isLoading={isSubmitting}
      style={{marginVertical: Sizes.wpx(40)}}
    />
  );
}
