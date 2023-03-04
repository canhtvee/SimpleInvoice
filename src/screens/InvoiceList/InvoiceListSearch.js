import React, {useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native';

import {useFormContext} from 'react-hook-form';
import {Colors, CommonStyles, Sizes} from '../../utils';

export function InvoiceListSearch() {
  const {setValue} = useFormContext();
  const timer = useRef();
  const [state, setState] = useState();

  useEffect(() => {
    timer.current && clearTimeout(timer.current);

    timer.current = setTimeout(() => setValue('searchTerm', state), 1000);
  }, [state]);

  useEffect(() => {
    return () => timer.current && clearTimeout(timer.current);
  }, []);

  return (
    <TextInput
      style={[
        {
          fontSize: Sizes.regular,
          paddingHorizontal: Sizes.paddinglx,
          borderColor: Colors.border,
          borderWidth: 1,
          borderRadius: Sizes.borderRadius,
          margin: Sizes.padding,
        },
        CommonStyles.textInputPadding,
      ]}
      placeholder={'Search Invoice By DueDate'}
      value={state}
      onChangeText={text => setState(text)}
      clearButtonMode={'always'}
    />
  );
}
