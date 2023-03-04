import React from 'react';
import {Alert} from 'react-native';
import {useFormState} from 'react-hook-form';

import {AppButton} from '../../commons';
import {AppAccount, FetchApi, resetToHome, Sizes} from '../../utils';

export function LoginSubmit({control, handleSubmit}) {
  const {isSubmitting} = useFormState({control});

  const onSubmit = async data => {
    try {
      const loginResult = await FetchApi.login(data);
      if (!loginResult?.access_token) {
        throw new Error('loginResult error');
      }

      AppAccount.set(loginResult);

      //Get user profile right after sucessfully login
      const userProfile = await FetchApi.getUserProfile();
      if (!userProfile?.data) {
        throw new Error('userProfile error');
      }

      AppAccount.set({
        ...userProfile.data,
        org_token: userProfile.data.memberships[0].token,
      });

      resetToHome();
    } catch (error) {
      AppAccount.set();
      Alert.alert(null, 'Login failed \nPlease try again!');
    }
  };

  return (
    <AppButton
      title="Login"
      onPress={handleSubmit(onSubmit)}
      isLoading={isSubmitting}
      style={{marginTop: Sizes.wpx(40)}}
    />
  );
}
