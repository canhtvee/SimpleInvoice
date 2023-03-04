import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';

export const renderWithNavigator = (element: JSX.Element) => {
  return render(<NavigationContainer>{element}</NavigationContainer>);
};
