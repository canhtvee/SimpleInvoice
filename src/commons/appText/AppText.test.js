import React from 'react';

import {cleanup} from '@testing-library/react-native';
import {create} from 'react-test-renderer';

import {AppText} from './AppText';

/**
 * Run test command
 * yarn test -u -t="AppText"
 */

afterEach(cleanup);

describe('AppText', () => {
  test('should render correctly', () => {
    const tree = create(<AppText />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
