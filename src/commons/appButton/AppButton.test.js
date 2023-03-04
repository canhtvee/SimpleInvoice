import React from 'react';

import {cleanup, fireEvent, render} from '@testing-library/react-native';

import {AppButton} from './AppButton';

/**
 * Run test command
 * yarn test -u -t="AppButton"
 */

afterEach(cleanup);

describe('AppButton', () => {
  test('should render correctly', () => {
    const tree = render(
      <AppButton title="AppButton" containerStyle={{padding: 50}} />,
    );

    expect(tree).toMatchSnapshot();
  });

  test('should invoke onPressMock if pressed ', () => {
    const onPressMock = jest.fn();

    const tree = render(
      <AppButton
        title="AppButton"
        containerStyle={{padding: 50}}
        onPress={onPressMock}
      />,
    );

    fireEvent.press(tree.getByText('AppButton'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
