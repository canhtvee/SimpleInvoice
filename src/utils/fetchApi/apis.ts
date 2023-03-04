import {apiHost} from '../system';
const queryString = require('query-string');

export const Apis = {
  login: `${apiHost}/token`,
  userProfile: `${apiHost}/membership-service/1.2.0/users/me`,
  invoiceList: (params: object) => {
    return `${apiHost}/invoice-service/1.0.0/invoices?${queryString.stringify(
      params,
    )}`;
  },

  createInvoice: `${apiHost}/invoice-service/2.0.0/invoices`,
};
