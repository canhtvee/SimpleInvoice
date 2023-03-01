import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';
const deviceType = Platform.select({ios: 'IOS', android: 'ANDROID'});
const appVersion = Platform.select({ios: '0.0.1', android: '0.0.1'});

/**
 * config information of App
 */

//production
const host = {
  api: 'https://api.app.com',
};

export {isIOS, host, deviceType, appVersion};
