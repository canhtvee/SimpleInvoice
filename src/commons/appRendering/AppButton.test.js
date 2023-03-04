import React from 'react';

import {cleanup} from '@testing-library/react-native';
import {create} from 'react-test-renderer';

import {AppContentEmpty} from './AppContentEmpty';

/**
 * Run test command
 * yarn test -u -t="AppContentEmpty"
 */

afterEach(cleanup);

describe('AppContentEmpty', () => {
  test('should render correctly', () => {
    const tree = create(<AppContentEmpty />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
