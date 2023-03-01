import {Alert} from 'react-native';
import {Constants} from '../resources';
import {AppAccount} from '../account';

import {Apis} from './apis';

/**
 * To advoid duplicated refresh token
 */
let refreshTokenQueue: any;
/**
 * Refesh token routine
 */
async function handleRefreshToken() {
  const account = AppAccount.get();
  const api = Apis.login;

  const header = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh_token: account?.refresh_token,
    }),
  };

  try {
    const response = await fetch(api, header);
    console.log('refreshToken-header', header);
    console.log('refreshToken-response', response);

    const result = await response.json();
    console.log('refreshToken-result', result);

    if (!result?.token) {
      Alert.alert('Session expired');
      //Reset to login
      throw new Error(Constants.SESSION_EXPIRED);
    }

    AppAccount.set(result);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function refreshToken() {
  if (!refreshTokenQueue) {
    refreshTokenQueue = handleRefreshToken();
  }

  const result = await refreshTokenQueue;
  refreshTokenQueue = undefined;

  return result?.token;
}
