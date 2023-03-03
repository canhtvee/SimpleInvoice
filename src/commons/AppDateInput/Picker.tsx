import React from 'react';
import DatePicker, {DatePickerProps} from 'react-native-date-picker';

export interface PickerProps extends Omit<DatePickerProps, 'open'> {
  ref: (instance: any) => void;
}

export const Picker = React.forwardRef((props: PickerProps, ref: any) => {
  const [openModal, setOpenModal] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    show: () => setOpenModal(true),
    hide: () => setOpenModal(false),
  }));

  return <DatePicker open={openModal} {...props} />;
});
