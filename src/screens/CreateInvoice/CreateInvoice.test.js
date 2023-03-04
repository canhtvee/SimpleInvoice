import React from 'react';
import {cleanup, render} from '@testing-library/react-native';

import {CreateInvoice} from './CreateInvoice';

/**
 * Run test command
 * yarn test -u -t="CreateInvoice"
 */

afterEach(cleanup);

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const {ScrollView} = require('react-native');

  return {
    KeyboardAwareScrollView: ScrollView,
  };
});

describe('CreateInvoice', () => {
  test('should render correctly', () => {
    const tree = render(<CreateInvoice />);

    expect(tree).toMatchSnapshot();
  });
});
