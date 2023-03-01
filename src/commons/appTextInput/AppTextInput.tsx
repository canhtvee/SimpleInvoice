import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Controller, UseControllerProps, useFormState} from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';

import {Colors, Sizes} from '../../utils';

import {AppText} from '../appText';

export interface AppTextInputProps
  extends UseControllerProps,
    Omit<TextInputProps, 'defaultValue'> {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  leftChild?: JSX.Element;
  rightChild?: JSX.Element;
}

export function AppTextInput({
  control,
  name,
  label,
  labelStyle,
  errorStyle,
  defaultValue = '',
  rules,
  secureTextEntry,
  inputStyle,
  inputContainerStyle,
  containerStyle,
  maxLength,
  ...textInputProps
}: AppTextInputProps) {
  const {errors} = useFormState({control, name});
  const [secure, setSecure] = useState(secureTextEntry);

  return (
    <View style={containerStyle}>
      {label && <AppText style={labelStyle}>{label}</AppText>}
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <Controller
          defaultValue={defaultValue}
          name={name}
          control={control}
          rules={rules}
          render={({field: {onChange, value, onBlur, ref}}) => (
            <TextInput
              onBlur={onBlur}
              ref={ref}
              onChange={onChange}
              value={value}
              maxLength={rules?.maxLength?.value || maxLength}
              autoCapitalize={'none'}
              autoCorrect={false}
              spellCheck={false}
              style={[
                styles.input,
                {
                  color: Colors.text,
                },
                inputStyle,
              ]}
              secureTextEntry={secure}
              {...textInputProps}
            />
          )}
        />

        {secureTextEntry && (
          <Feather
            name={secure ? 'eyes' : 'eyesOff'}
            style={{paddingRight: Sizes.paddinglx}}
            onPress={() => setSecure(prev => !prev)}
          />
        )}
      </View>

      {errors[name] && errors[name]?.message && (
        <AppText
          style={[
            {
              color: Colors.error,
              marginTop: Sizes.paddinglx,
            },
            errorStyle,
          ]}>
          {errors[name]?.message as string}
        </AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: Sizes.borderWidth,
    borderRadius: Sizes.borderRadius,
  },
  input: {
    flex: 1,
    fontSize: Sizes.regular,
    paddingHorizontal: Sizes.paddinglx,
  },
});
