import queryString from 'query-string';

import {apiHost} from '../system';

export const Apis = {
  login: `${apiHost}/token`,
  userProfile: `${apiHost}/membership-service/1.2.0/users/me`,
  invoiceList: (params: object) =>
    `${apiHost}/invoice-service/1.0.0/invoices?${queryString.stringify(
      params,
    )}`,

  createInvoice: `${apiHost}/invoice-service/2.0.0/invoices`,
};
