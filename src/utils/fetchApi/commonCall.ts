import {AppAccount} from '../account';
import {Constants} from '../resources';

import {refreshToken} from './refreshToken';

async function commonCall(
  api: string,
  header: any,
  options?: {withRefreshToken?: boolean; withToken?: boolean},
) {
  // To handle all cases by changing option
  const {withToken = true, withRefreshToken = true} = options || {};
  const account = AppAccount.get();

  try {
    const headers = {
      'Content-Type': 'application/json',
      ...header?.headers,
    };

    // If use access token
    withToken && (headers.Authorization = `Bearer ${account.access_token}`);
    const _header = {...header, headers};

    let response = await fetch(api, _header);

    let result;
    if (
      response.headers?.map['content-type'] === 'application/xml; charset=UTF-8'
    ) {
      result = await response.text();
    } else {
      result = await response.json();
    }

    // If use refresh token
    if (
      response.status === 401 &&
      (result?.error?.code === Constants.INVALID_TOKEN ||
        result?.error?.code === Constants.TOKEN_EXPIRED) &&
      withRefreshToken
    ) {
      const newToken = await refreshToken();

      // To refetch api
      _header.Authorization = `Bearer ${newToken}`;
      response = await fetch(api, _header);
      result = await response.json();
      console.log('refetchResponse', response);
      console.log('refetchResult', result);
    }

    if (
      response.status === 500 ||
      response.status === 502 ||
      response.status === 504
    ) {
      throw new Error(Constants.SERVER_ERROR);
    }

    __DEV__ &&
      console.log('=======================================================');
    console.log(_header);
    console.log(response);
    console.log('result', result);

    return result;
  } catch (error) {
    console.log('commonCall-error *** ', api, ' *** ', error);
    throw error;
  }
}

const authOption = {withRefreshToken: false, withToken: false};

export {commonCall, authOption};
