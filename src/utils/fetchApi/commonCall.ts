import {parseString} from 'xml2js';

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

  try {
    const headers = {
      'Content-Type': 'application/json',
      ...header?.headers,
    };

    // If use access token
    if (withToken) {
      const account = AppAccount.get();
      // console.log('account', account);
      headers.Authorization = `Bearer ${account.access_token}`;
    }
    const _header = {...header, headers};

    let response = await fetch(api, _header);

    let result;
    if (
      response.headers?.map['content-type'] === 'application/xml; charset=UTF-8'
    ) {
      parseString(await response.text(), (_, _result) => {
        result = _result;
      });
    } else {
      result = await response.json();
    }

    // If use refresh token

    console.log(result);

    if (
      response.status === 401 &&
      result['ams:fault'] &&
      result['ams:fault']['ams:message'] &&
      result['ams:fault']['ams:message'][0] === Constants.INVALID_CREDENTIAL &&
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
    console.log(result);

    return result;
  } catch (error) {
    console.log('commonCall-error *** ', api, ' *** ', error);
    throw error;
  }
}

const authOption = {withRefreshToken: false, withToken: false};

export {commonCall, authOption};

// const _ = (
//   <ams:fault xmlns:ams="http://wso2.org/apimanager/security">
//     <ams:code>900901</ams:code>
//     <ams:message>Invalid Credentials</ams:message>
//     <ams:description>
//       Access failure for API: /invoice-service/1.0.0, version: 1.0.0 status:
//       (900901) - Invalid Credentials. Make sure you have given the correct
//       access token
//     </ams:description>
//   </ams:fault>
// );
