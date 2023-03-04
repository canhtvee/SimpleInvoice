import React from 'react';
import {cleanup, render} from '@testing-library/react-native';

import {InvoiceDetail} from './InvoiceDetail';

/**
 * Run test command
 * yarn test -u -t="InvoiceDetail"
 */

afterEach(cleanup);

jest.mock('@react-navigation/native', () => {
  return {
    useRoute: () => ({
      params: {invoice: {}},
    }),
  };
});

describe('InvoiceDetail', () => {
  test('should render correctly', () => {
    const tree = render(<InvoiceDetail />);

    expect(tree).toMatchSnapshot();
  });
});
