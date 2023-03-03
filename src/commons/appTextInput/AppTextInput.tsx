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

import {Colors, CommonStyles, Sizes} from '../../utils';

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
              onChangeText={text => onChange(text)}
              value={`${value}`}
              maxLength={rules?.maxLength?.value || maxLength}
              autoCapitalize={'none'}
              autoCorrect={false}
              spellCheck={false}
              style={[
                styles.input,
                CommonStyles.textInputPadding,
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
            name={secure ? 'eye' : 'eye-off'}
            style={{paddingRight: Sizes.paddinglx}}
            onPress={() => setSecure(prev => !prev)}
            size={Sizes.icon}
            color={Colors.icon}
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
    borderColor: Colors.border,
  },
  input: {
    flex: 1,
    fontSize: Sizes.regular,
    paddingHorizontal: Sizes.paddinglx,
  },
});
