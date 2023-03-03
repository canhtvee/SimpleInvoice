import React from 'react';
import {AppTextInput, AppTextInputProps} from './AppTextInput';

type FieldItem = {
  key: string;
  children?: Array<FieldItem>;
  config?: AppTextInputProps;
};

type FieldShape = Array<FieldItem>;

export function renderFields(
  shape: FieldShape,
  path: string,
  generalConfig: object,
): any {
  return shape.map(item => {
    if (!item?.key) {
      return null;
    }

    if (!item?.children || item.children.length === 0) {
      const fieldPath = `${path}.${item.key}`;

      return React.createElement(AppTextInput, {
        key: fieldPath,
        name: fieldPath,
        label: item.key,
        placeholder: 'Enter ' + fieldPath,
        ...generalConfig,
        ...item.config,
      });
    }

    return renderFields(item.children, `${path}.${item.key}`, generalConfig);
  });
}
