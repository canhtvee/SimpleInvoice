import React from 'react';
import {AppTextInput} from './AppTextInput';

type FieldItem = {
  key: string;
  children?: Array<FieldItem>;
};

type FieldShape = Array<FieldItem>;

export function renderFields(
  shape: FieldShape,
  path: string,
  config: object,
): any {
  return shape.map(item => {
    if (!item?.key) {
      return null;
    }

    if (!item?.children || item.children.length === 0) {
      const fieldPath = `${path}.${item.key}`;

      return React.createElement(AppTextInput, {
        ...config,
        key: fieldPath,
        name: fieldPath,
        label: item.key,
        placeholder: 'Enter ' + fieldPath,
      });
    }

    return renderFields(item.children, `${path}.${item.key}`, config);
  });
}
