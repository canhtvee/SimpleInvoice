import React from 'react';
import {InvoiceDetailField} from './InvoiceDetailField';

export function renderInvoiceDetailFields(data, rootPath) {
  return Object.keys(data).map(key => {
    if (!data[key]) {
      return null;
    }

    const _path = rootPath ? `${rootPath}.${key}` : key;

    if (typeof data[key] !== 'object') {
      return React.createElement(InvoiceDetailField, {
        key: _path,
        label: _path,
        value: `${data[key]}`,
      });
    }

    return renderInvoiceDetailFields(data[key], _path);
  });
}
