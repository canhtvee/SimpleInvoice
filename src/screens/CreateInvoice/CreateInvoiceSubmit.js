import React from 'react';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useFormContext, useFormState} from 'react-hook-form';

import {AppButtonNormal} from '../../commons';
import {Sizes} from '../../utils';

export function CreateInvoiceSubmit() {
  const navigation = useNavigation();
  const {control, handleSubmit} = useFormContext();
  const {isSubmitting} = useFormState({control});

  const onSubmit = async data => {
    console.log(data);
    // try {
    // } catch (error) {
    //   Alert.alert(null, 'Login failed \nPlease try again!');
    // }
  };

  return (
    <AppButtonNormal
      title="Create Invoice"
      onPress={handleSubmit(onSubmit)}
      isLoading={isSubmitting}
      style={{marginTop: Sizes.wpx(40)}}
    />
  );
}
