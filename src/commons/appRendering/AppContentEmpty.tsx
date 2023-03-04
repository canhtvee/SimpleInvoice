import React from 'react';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';

import {Sizes, Strings} from '../../utils';

import {AppText} from '../appText';

export interface AppContentEmptyProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export function AppContentEmpty({
  titleStyle,
  containerStyle,
}: AppContentEmptyProps) {
  return (
    <View
      style={[
        {
          width: '100%',
          alignItems: 'center',
          marginTop: Sizes.wpx(60),
        },
        containerStyle,
      ]}>
      <AppText
        style={[
          {
            paddingHorizontal: Sizes.padding,
            textAlign: 'center',
          },
          titleStyle,
        ]}>
        {Strings.contentEmpty}
      </AppText>
    </View>
  );
}
