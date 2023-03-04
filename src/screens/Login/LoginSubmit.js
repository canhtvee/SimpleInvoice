import React from 'react';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useFormState} from 'react-hook-form';

import {parseString} from 'xml2js';

import {AppButton} from '../../commons';
import {AppAccount, Constants, FetchApi, resetToHome, Sizes} from '../../utils';

export function LoginSubmit({control, handleSubmit}) {
  const navigation = useNavigation();
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
      console.log(error);
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

const _ = {
  data: {
    addresses: [],
    apps: [[Object], [Object], [Object], [Object]],
    contacts: [],
    createdAt: '2020-07-02T02:45:26.818',
    email: 'dung+octopus4@101digital.io',
    employmentDetails: [],
    firstName: 'Nguyen',
    kycDetails: {documents: [Array]},
    lastLoginAt: '2023-03-04T04:08:31.928',
    lastName: 'Dung',
    listCustomFields: [[Object], [Object], [Object]],
    listRoles: ['Member'],
    memberships: [[Object]],
    passwordExpired: false,
    permissions: [],
    status: 'Active',
    updatedAt: '2023-03-04T04:08:31.953',
    userId: 'd2258c8d-96b2-48e4-9e4f-0316e3f98059',
    userName: '97113774-131f-497c-9db9-b201934e8024',
  },
  status: {code: '000000', message: 'Request processed successfully'},
};
