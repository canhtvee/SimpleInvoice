import React from 'react';
import {View} from 'react-native';
import {useFieldArray, useFormContext} from 'react-hook-form';

import {AppButtonNormal, AppText, renderFields} from '../../commons';
import {Colors, Sizes, uuid} from '../../utils';

export function CreateInvoiceDocument() {
  const {control} = useFormContext();

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'documents',
  });

  return (
    <>
      <AppText
        style={{
          marginTop: Sizes.space3x,
          fontWeight: 'bold',
          borderRadius: Sizes.borderRadius,
        }}>
        Documents
      </AppText>

      {fields.map((field, index) => {
        const path = `documents.${index}`;

        return (
          <View
            key={field.id}
            style={{
              backgroundColor: Colors.ripple,
              borderRadius: Sizes.borderRadius,
              marginTop: Sizes.padding,
            }}>
            <AppButtonNormal
              title="Delete"
              style={{alignSelf: 'flex-end', marginTop: Sizes.padding}}
              onPress={() => remove(index)}
            />
            {renderFields(
              [
                {key: 'documentId'},
                {key: 'documentName'},
                {key: 'documentUrl'},
              ],
              path,
              {control},
            )}
          </View>
        );
      })}

      <AppButtonNormal
        title="Upload Document"
        style={{alignSelf: 'flex-end', marginTop: Sizes.space3x}}
        onPress={() => {
          const id = uuid();
          append({
            documentId: id,
            documentName: 'Canh',
            documentUrl: `http://url.com/#${id}`,
          });
        }}
      />
    </>
  );
}
