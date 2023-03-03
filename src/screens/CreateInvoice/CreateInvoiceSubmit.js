import React from 'react';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useFormContext, useFormState} from 'react-hook-form';

import {AppButtonNormal} from '../../commons';
import {Sizes, uuid} from '../../utils';

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

    // console.log(data);

    const baseInvoice = JSON.parse(JSON.stringify(mockInvoice));
    const newInvoice = {...baseInvoice, ...data};
    newInvoice.items[0] = {...newInvoice.items[0], ...item};

    console.log(dayjs(newInvoice.dueDate).format('YYYY-MM-DD'));
    // console.log(newInvoice.items[0]);

    try {
    } catch (error) {
      Alert.alert(null, 'Login failed \nPlease try again!');
    }
  };

  return (
    <AppButtonNormal
      title="Create Invoice"
      onPress={handleSubmit(onSubmit)}
      isLoading={isSubmitting}
      style={{marginVertical: Sizes.wpx(40)}}
    />
  );
}
