import React from 'react';
import {act, cleanup, fireEvent, render} from '@testing-library/react-native';

import {Login} from './Login';

/**
 * Run test command
 * yarn test -u -t="Login"
 */

afterEach(cleanup);

const mockLogin = jest.fn();
const mockFetchUser = jest.fn();

jest.mock('../../utils/fetchApi/FetchApi', () => ({
  FetchApi: {
    login: data => mockLogin(data),
    getUserProfile: () => mockFetchUser(),
  },
}));

const getElement = tree => {
  const clientId = tree.getByPlaceholderText('Enter ClientId');
  const clientSecret = tree.getByPlaceholderText('Enter Client Secret');
  const loginSubmit = tree.getByText('Login');

  return {clientId, clientSecret, loginSubmit};
};

describe('Login', () => {
  test('should render correctly', () => {
    const tree = render(<Login />);

    expect(tree).toMatchSnapshot();

    const {clientId, clientSecret} = getElement(tree);

    expect(clientId.props.value).toBe('oO8BMTesSg9Vl3_jAyKpbOd2fIEa');
    expect(clientSecret.props.value).toBe('0Exp4dwqmpON_ezyhfm0o_Xkowka');
  });

  test('should not login if input empty', async () => {
    const tree = render(<Login />);

    const {clientId, clientSecret, loginSubmit} = getElement(tree);

    await act(async () => {
      fireEvent.changeText(clientId, '');
      fireEvent.changeText(clientSecret, '');
      fireEvent.press(loginSubmit);
    });

    expect(mockLogin).toHaveBeenCalledTimes(0);
  });

  test('should login if input valid', async () => {
    const tree = render(<Login />);

    const {clientId, clientSecret, loginSubmit} = getElement(tree);

    await act(async () => {
      fireEvent.changeText(clientId, 'test');
      fireEvent.changeText(clientSecret, 'test');
      fireEvent.press(loginSubmit);
    });

    expect(mockLogin).toBeCalledWith({
      clientId: 'test',
      clientSecret: 'test',
    });
  });
});
