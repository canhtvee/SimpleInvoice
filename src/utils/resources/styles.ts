import {StyleSheet, Platform} from 'react-native';
import {Sizes} from './sizes';

export const CommonStyles = StyleSheet.create({
  shadow: {
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    shadowColor: 'black',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderRadius: Sizes.borderRadius,
    borderWidth: Sizes.borderWidthlx,
    overflow: 'hidden',
  },

  textInputPadding: {
    paddingVertical: Platform.select({
      ios: Sizes.wpx(12),
      android: Sizes.wpx(6),
    }),
    paddingHorizontal: Sizes.paddinglx,
  },
});
