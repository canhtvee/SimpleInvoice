import {authOption, commonCall} from './commonCall';
import {Apis} from './apis';
import {GetInvoiceParams} from './types';
import {AppAccount} from '../account';

export const mockApi = (data: any) =>
  new Promise(resolve => {
    setTimeout(() => resolve(data), 2000);
  });

export const FetchApi = {
  getInvoices: async (params: GetInvoiceParams) => {
    const account = AppAccount.get();

    const header = {
      method: 'GET',
      headers: {
        'org-token': account.memberships[0].token,
      },
    };
    const api = Apis.invoiceList(params);
    return commonCall(api, header);
  },

  login: async (data: any) => {
    const header = {
      method: 'POST',
      body: new URLSearchParams({
        client_id: data.clientId,
        client_secret: data.clientSecret,
        grant_type: 'password',
        scope: 'openid',
        username: 'dung+octopus4@101digital.io',
        password: 'Abc@123456',
      }).toString(),

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const api = Apis.login;

    return commonCall(api, header, authOption);
  },

  getUserProfile: async () => {
    const header = {
      method: 'GET',
    };

    const api = Apis.userProfile;

    return commonCall(api, header);
  },
};
