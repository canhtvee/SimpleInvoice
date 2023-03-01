import {MMKV} from 'react-native-mmkv';

const TAG = 'account';

const mmkvId = `mmkv-${TAG}`;
const mmkvKey = `key-${TAG}`;

const MMKVwithID = new MMKV({
  id: mmkvId,
});

const AppAccount = {
  get: (): any => {
    const data = MMKVwithID.getString(mmkvKey);
    try {
      return JSON.parse(data as string);
    } catch (error) {
      return {};
    }
  },

  set: (value: object) => {
    if (!value) {
      return MMKVwithID.set(mmkvKey, JSON.stringify({}));
    }
    const oldValue = AppAccount.get();
    const newValue = JSON.stringify({
      ...oldValue,
      ...value,
    });

    MMKVwithID.set(mmkvKey, newValue);
  },
};

export {AppAccount};
