import React from 'react';
import {
  View,
  ActivityIndicator,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Colors, Sizes} from '../../utils';

export interface AppViewLoadingProps {
  spinnerColor?: string;
  containerStyle: StyleProp<ViewStyle>;
}

export function AppViewLoading({containerStyle}: AppViewLoadingProps) {
  const indicatorConfig = Platform.select<any>({
    ios: {
      size: 'small',
      color: Colors.onBackground,
    },
    android: {
      size: Sizes.wpx(24),
      color: Colors.primary,
    },
  });

  return (
    <View
      style={[
        {
          backgroundColor: Colors.background,
          justifyContent: 'center',
          alignItems: 'center',
        },
        containerStyle,
      ]}>
      <ActivityIndicator {...indicatorConfig} />
    </View>
  );
}
