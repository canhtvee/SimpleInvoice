import React from 'react';
import {Text, TextProps} from 'react-native';
import {Colors, Sizes} from '../../utils';

export function AppText({children, style, ...props}: TextProps) {
  return (
    <Text
      style={[{fontSize: Sizes.regular, color: Colors.text}, style]}
      {...props}>
      {children}
    </Text>
  );
}
