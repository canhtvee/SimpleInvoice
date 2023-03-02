import React from 'react';
import {useForm} from 'react-hook-form';
import {AppContainer, AppTextInput} from '../../commons';
import {Sizes} from '../../utils';
import {LoginHeading} from './LoginHeading';
import {LoginSubmit} from './LoginSubmit';

export function Login() {
  const {control, handleSubmit} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      clientId: 'oO8BMTesSg9Vl3_jAyKpbOd2fIEa',
      clientSecret: '0Exp4dwqmpON_ezyhfm0o_Xkowka',
    },
  });

  return (
    <AppContainer style={{paddingHorizontal: Sizes.wpx(30)}}>
      <LoginHeading />
      <AppTextInput
        label="Client ID"
        control={control}
        name="clientId"
        rules={{required: {value: true, message: 'ID is required'}}}
        placeholder={'Enter ClientId'}
        containerStyle={{marginTop: Sizes.wpx(30)}}
      />
      <AppTextInput
        label="Client Secret"
        control={control}
        name="clientSecret"
        rules={{required: {value: true, message: 'Secret is required'}}}
        placeholder={'Enter Client Secret'}
        secureTextEntry
        containerStyle={{marginTop: Sizes.wpx(20)}}
      />
      <LoginSubmit control={control} handleSubmit={handleSubmit} />
    </AppContainer>
  );
}
