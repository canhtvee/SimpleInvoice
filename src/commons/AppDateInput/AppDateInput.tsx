import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
} from 'react-native';
import {Controller, useFormState, UseControllerProps} from 'react-hook-form';
import dayjs from 'dayjs';

import {Colors, Sizes} from '../../utils';
import {AppText} from '../appText';
import {Picker, PickerProps} from './Picker';

export interface AppDateInputProps
  extends UseControllerProps,
    Omit<PickerProps, 'ref' | 'date'> {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  rightChild?: JSX.Element;
}

export function AppDateInput({
  control,
  name,
  rules,
  label,
  labelStyle,
  errorStyle,
  containerStyle,
  defaultValue = '',
  mode = 'date',
  modal = true,
  minimumDate = new Date('1900-01-01'),
  ...pickerProps
}: AppDateInputProps) {
  const {errors} = useFormState({control, name});
  const pickerRef = useRef<any>();

  return (
    <View style={containerStyle}>
      {label && (
        <AppText style={[{marginBottom: Sizes.paddinglx}, labelStyle]}>
          {label}
        </AppText>
      )}

      <Controller
        defaultValue={defaultValue}
        name={name}
        control={control}
        rules={rules}
        render={({field: {onChange, value}}) => (
          <View>
            <Pressable
              onPress={() => {
                pickerRef.current?.show();
              }}
              style={[styles.textContainer, {borderColor: Colors.border}]}>
              {value ? (
                <Text style={[styles.text, {color: Colors.text}]}>
                  {dayjs(value).format('YYYY-MM-DD')}
                </Text>
              ) : (
                <Text style={[styles.text, {color: Colors.placeholder}]}>
                  YYYY-MM-DD
                </Text>
              )}
            </Pressable>

            <Picker
              ref={pickerRef}
              modal={modal}
              minimumDate={minimumDate}
              mode={mode}
              date={value || new Date()}
              title={null}
              onConfirm={date => {
                pickerRef.current?.show();
                onChange(date);
              }}
              onCancel={() => {
                pickerRef.current?.show();
              }}
              {...pickerProps}
            />
          </View>
        )}
      />

      {errors[name] && !!errors[name]?.message && (
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
  text: {
    flex: 1,
    fontSize: Sizes.regular,
    paddingVertical: Sizes.padding,
    paddingHorizontal: Sizes.paddinglx,
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: Sizes.borderWidth,
    borderRadius: Sizes.borderRadius,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
});
