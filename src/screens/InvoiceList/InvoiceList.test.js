import React from 'react';
import {cleanup} from '@testing-library/react-native';

import {renderWithNavigator} from '../../utils';
import {InvoiceList} from './InvoiceList';

/**
 * Run test command
 * yarn test -u -t="InvoiceList"
 */

afterEach(cleanup);

describe('InvoiceList', () => {
  test('should render correctly', () => {
    const tree = renderWithNavigator(<InvoiceList />);

    expect(tree).toMatchSnapshot();
  });
});
