import React from 'react';
import {useForm} from 'react-hook-form';
import {cleanup, renderHook} from '@testing-library/react-native';
import {create} from 'react-test-renderer';

import {AppDateInput} from './AppDateInput';

/**
 * Run test command
 * yarn test -u -t="AppDateInput"
 */

afterEach(cleanup);

describe('AppDateInput', () => {
  test('should render correctly', () => {
    const {result} = renderHook(() => {
      return useForm();
    });

    const {control} = result.current;

    const tree = create(
      <AppDateInput
        control={control}
        name={'test-input'}
        label={'test-label'}
        placeholder={'test-input'}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();

    expect(1).toBeDefined();
  });
});
