/**
 * Fix getrandomvalues-not-supported
 * https://github.com/LinusU/react-native-get-random-values#readme
 */
import 'react-native-get-random-values';
import {v4} from 'uuid';

export const uuid = () => v4();
