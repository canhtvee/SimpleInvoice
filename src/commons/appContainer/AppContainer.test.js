import React from 'react';
import {Text} from 'react-native';

import {cleanup} from '@testing-library/react-native';
import {create} from 'react-test-renderer';

import {AppContainer} from './AppContainer';

/**
 * Run test command
 * yarn test -u -t="AppContainer"
 */

afterEach(cleanup);

describe('AppContainer', () => {
  test('should render children', () => {
    const component = create(
      <AppContainer
        style={{backgroundColor: 'red'}}
        edges={['bottom', 'left', 'right']}>
        <Text>AppContainer_Test</Text>
      </AppContainer>,
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.root.findAllByProps({type: 'Circle'}).length).toEqual(0);
    expect(component.root.findByType('Text').children).toEqual([
      'AppContainer_Test',
    ]);
  });
});
