const Palette = {
  // To use for light theme
  blue_500: '#2196f3',
  blue_500_light: '#6ec6ff',
  blue_500_dark: '#0069c0',
  red_500: '#F44336',
  red_300: '#e57373',
  red_700: '#d32f2f',
  orange_400: '#ffa726',
  orange_300: '#ffb74d',
  orange_700: '#f57c00',
  green_400: '#66bb6a',
  green_300: '#81c784',
  greee_700: '#388e3c',
  white: '#FFFFFF',
  black: '#000000',
};

const Colors = {
  primary: Palette.blue_500,
  background: Palette.white,
  surface: Palette.white,
  error: Palette.red_500,

  onPrimary: Palette.white,
  onBackground: Palette.black,
  onSurface: Palette.black,
  onError: Palette.white,

  warning: Palette.orange_400,
  success: Palette.green_400,

  text: Palette.black,
};

export {Colors, Palette};
