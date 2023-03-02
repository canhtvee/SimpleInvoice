import React from 'react';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useFormState} from 'react-hook-form';

import {AppButtonNormal} from '../../commons';
import {AppAccount, FetchApi, resetToHome, Sizes} from '../../utils';

export function LoginSubmit({control, handleSubmit}) {
  const navigation = useNavigation();
  const {isSubmitting} = useFormState({control});

  const onSubmit = async data => {
    console.log(data);
    try {
      const loginResult = await FetchApi.login(data);
      if (!loginResult?.access_token) {
        throw new Error();
      }

      AppAccount.set(loginResult);

      // Get user profile right after sucessfully login
      const userProfile = await FetchApi.getUserProfile();
      if (!userProfile?.data) {
        throw new Error();
      }

      AppAccount.set(userProfile.data);

      resetToHome();
    } catch (error) {
      Alert.alert(null, 'Login failed \nPlease try again!');
    }
  };

  return (
    <AppButtonNormal
      title="Login"
      onPress={handleSubmit(onSubmit)}
      // onPress={() => console.log(AppAccount.get())}
      isLoading={isSubmitting}
      style={{marginTop: Sizes.wpx(40)}}
    />
  );
}
