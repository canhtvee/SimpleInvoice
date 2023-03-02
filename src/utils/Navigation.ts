import React from 'react';
import {
  NavigationContainerRef,
  NavigationState,
  StackActions,
} from '@react-navigation/native';

const navigationRef: React.Ref<NavigationContainerRef<any>> = React.createRef();

export const AppNavigation = {
  navigationRef,
  navigate: (name: string, params?: object) => {
    navigationRef.current?.navigate(name, params);
  },
  reset: (config: NavigationState) => {
    navigationRef.current?.reset(config);
  },
  push: (name: string, params: object) => {
    navigationRef.current?.dispatch(StackActions.push(name, params));
  },
};
