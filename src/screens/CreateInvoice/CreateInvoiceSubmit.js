import React from 'react';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useFormState} from 'react-hook-form';

import {AppButton} from '../../commons';
import {FetchApi, Sizes, uuid} from '../../utils';

import {mockInvoice} from './mocking';
import dayjs from 'dayjs';

export function CreateInvoiceSubmit({control, handleSubmit}) {
  const navigation = useNavigation();
  const {isSubmitting} = useFormState({control});

  const onSubmit = async data => {
    const item = {
      itemReference: uuid(),
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
        throw new Error();
      }

      Alert.alert(null, 'Create Invoice Successful');
      navigation.goBack();
    } catch (error) {
      Alert.alert(null, 'Create Invoice Failed');
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
