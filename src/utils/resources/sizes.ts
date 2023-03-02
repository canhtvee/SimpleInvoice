import {Dimensions, PixelRatio} from 'react-native';

/**
 * base screen size = 700:380
 */
const BASE_WIDTH = 380;
const BASE_HEIGHT = 700;

// Retrieve initial screen's width and screen's height
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const _wpxToDPUnit = screenWidth / BASE_WIDTH;
const _hpxToDPUnit = screenHeight / BASE_HEIGHT;

const _wpxToDP = (inPixel: number) => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(inPixel * _wpxToDPUnit);
};
const _hpxToDP = (inPixel: number) => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(inPixel * _hpxToDPUnit);
};

const Sizes = {
  deviceWidth: screenWidth,
  deviceHeight: screenHeight,

  wpx: (px: number) => _wpxToDP(px),
  hpx: (px: number) => _hpxToDP(px),

  padding2x: _wpxToDP(16),
  padding: _wpxToDP(12),
  paddinglx: _wpxToDP(8),
  paddinglxx: _wpxToDP(4),

  regular: _wpxToDP(14),
  button: _wpxToDP(15),
  icon: _wpxToDP(18),

  headline3x: _wpxToDP(26),
  headline2x: _wpxToDP(24),
  headline: _wpxToDP(22),

  title3x: _wpxToDP(20),
  title2x: _wpxToDP(18),
  title: _wpxToDP(16),
  body: _wpxToDP(15),

  borderWidth: 1,
  borderWidthlx: 0.5,

  borderRadius: 6,
  borderRadiuslx: 4,

  space1x: _wpxToDP(10),
  space2x: _wpxToDP(20),
  space3x: _wpxToDP(30),
};

export {Sizes};
