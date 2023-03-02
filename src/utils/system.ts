import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';
const deviceType = Platform.select({ios: 'IOS', android: 'ANDROID'});
const appVersion = Platform.select({ios: '0.0.1', android: '0.0.1'});

/**
 * config information of App
 */

//production
const apiHost = 'https://sandbox.101digital.io';

export {isIOS, apiHost, deviceType, appVersion};
