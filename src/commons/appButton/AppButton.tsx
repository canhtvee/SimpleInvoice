import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  StyleProp,
  TextStyle,
  Pressable,
  PressableProps,
  ViewStyle,
} from 'react-native';

import {Colors, Sizes} from '../../utils';

export interface AppButtonProps extends PressableProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  isLoading?: boolean;
}

export function AppButtonNormal({
  title,
  titleStyle,
  style,
  isLoading,
  disabled,
  onPress,
  ...touchProps
}: AppButtonProps) {
  let content;
  if (isLoading) {
    content = <ActivityIndicator color={Colors.onPrimary} size={Sizes.icon} />;
  } else {
    content = (
      <Text style={[styles.title, {color: Colors.onPrimary}, titleStyle]}>
        {title}
      </Text>
    );
  }

  return (
    <Pressable
      hitSlop={Sizes.paddinglx}
      disabled={disabled || isLoading}
      style={({pressed}) => {
        return StyleSheet.flatten([
          styles.primaryButton,
          {
            backgroundColor: Colors.primary,
            opacity: pressed ? 0.6 : 1,
          },
          style,
        ]) as ViewStyle;
      }}
      onPress={onPress}
      {...touchProps}>
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Sizes.wpx(40),
    paddingHorizontal: Sizes.padding * 2,
    borderRadius: Sizes.borderRadius,
  },

  title: {fontSize: Sizes.button, fontWeight: '600'},
});
