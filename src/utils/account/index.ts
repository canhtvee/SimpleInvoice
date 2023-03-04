import {useEffect, useState} from 'react';
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

  set: (value?: object) => {
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

function useAppAccount() {
  const [account, setAccount] = useState(() => AppAccount.get());

  useEffect(() => {
    const listener = MMKVwithID.addOnValueChangedListener(() =>
      setAccount(AppAccount.get()),
    );

    return () => {
      listener?.remove();
    };
  }, []);

  return account;
}

export {AppAccount, useAppAccount};

// const _ = {
//   access_token: '09abbc45-d4eb-3c81-9c68-c186d91092cc',
//   addresses: [],
//   apps: [
//     {appName: 'dakkoapp'},
//     {appName: '101d pay'},
//     {appName: 'bankadminconsole'},
//     {appName: 'xeroapp'},
//   ],
//   contacts: [],
//   createdAt: '2020-07-02T02:45:26.818',
//   email: 'dung+octopus4@101digital.io',
//   employmentDetails: [],
//   expires_in: 3147,
//   firstName: 'Nguyen',
//   id_token:
//     'eyJ4NXQiOiJOVEF4Wm1NeE5ETXlaRGczTVRVMVpHTTBNekV6T0RKaFpXSTRORE5sWkRVMU9HRmtOakZpTVEiLCJraWQiOiJOVEF4Wm1NeE5ETXlaRGczTVRVMVpHTTBNekV6T0RKaFpXSTRORE5sWkRVMU9HRmtOakZpTVFfUlMyNTYiLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiVmNnNmcwbktMbU02OU9QUlVBSklDZyIsInN1YiI6Ijk3MTEzNzc0LTEzMWYtNDk3Yy05ZGI5LWIyMDE5MzRlODAyNCIsImFtciI6WyJwYXNzd29yZCJdLCJpc3MiOiJodHRwczpcL1wvbG9jYWxob3N0Ojk0NDNcL29hdXRoMlwvdG9rZW4iLCJncm91cHMiOlsiSW50ZXJuYWxcL2V2ZXJ5b25lIiwiSW50ZXJuYWxcL3NlbGZzaWdudXAiXSwiZ2l2ZW5fbmFtZSI6Ik5ndXllbiIsInVzZXJpZCI6ImQyMjU4YzhkLTk2YjItNDhlNC05ZTRmLTAzMTZlM2Y5ODA1OSIsImF1ZCI6WyJvTzhCTVRlc1NnOVZsM19qQXlLcGJPZDJmSUVhIiwiaHR0cDpcL1wvb3JnLndzbzIuYXBpbWd0XC9nYXRld2F5XHQiXSwibmJmIjoxNjc3NzUyMzgzLCJhenAiOiJvTzhCTVRlc1NnOVZsM19qQXlLcGJPZDJmSUVhIiwiZXhwIjoxNjc3NzU1OTgzLCJpYXQiOjE2Nzc3NTIzODMsImZhbWlseV9uYW1lIjoiRHVuZyJ9.R9iJBPPbRghMFCWGL5wQeRW8U6YX0McojFPxoXoX-cnkJ1B2YZYMTSfp18XLwrbnoIOkJGe3RWSaqCtaWsAYCVgYYttR8mRSPJ72ZYE5J7xqWMwxQFIIINpZNoy3vArRvqKwlnMIl1hwYBQH3OOzyprRnrPUnsSuChfnoxpmqqbaVqcbxitPY3WJKJf8dLMSL9yY8SL1n4iCCWtKoOaiLvweVND9i6NBAgUtVoiEgPjI1k0g6Vn7XWimbHZu105EzYdqfnDFA2NCpngknrm1gDKcUxiUtk0C6qF6DHkkd4h_6ob9Q3kZbG30ishXPi0rfbYUi7-e3EGnOJRSqsRz4w',
//   kycDetails: {documents: []},
//   lastLoginAt: '2023-03-02T10:19:43.194',
//   lastName: 'Dung',
//   listCustomFields: [
//     {
//       customFieldId: 'cae86e97-9dfc-4226-8956-2be8068bb067',
//       customKey: 'emailVerified',
//       customValue: 'true',
//     },
//     {
//       customFieldId: 'b96b4743-9ed4-4781-a2fe-0c1318e51a5e',
//       customKey: 'mobileVerified',
//       customValue: 'false',
//     },
//     {
//       customFieldId: '2e604f6e-8f86-4442-a37c-88d5b4018f18',
//       customKey: 'accountLocked',
//       customValue: 'false',
//     },
//   ],
//   listRoles: ['Member'],
//   memberships: [
//     {
//       membershipId: '2dd76c02-f768-4abe-a53a-2849f537b508',
//       organisationId: '6bf32cc4-2dfb-40c6-bd41-a6aea55fd4dc',
//       roleName: 'OrganisationOwner',
//       token:
//         'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxMDFEIiwiaHR0cDpcL1wvd3NvMi5vcmdcL2NsYWltc1wvYXBwbGljYXRpb25uYW1lIjoiMTAxRFBheUFwcCIsIm1lbWJlcnNoaXBJZCI6IjJkZDc2YzAyLWY3NjgtNGFiZS1hNTNhLTI4NDlmNTM3YjUwOCIsImV4cCI6MTY3Nzc1NTk4MywidXNlcklkIjoiZDIyNThjOGQtOTZiMi00OGU0LTllNGYtMDMxNmUzZjk4MDU5Iiwib3JnSWQiOiI2YmYzMmNjNC0yZGZiLTQwYzYtYmQ0MS1hNmFlYTU1ZmQ0ZGMiLCJsaXN0Um9sZXMiOlsiT3JnYW5pc2F0aW9uT3duZXIiXSwiaHR0cDpcL1wvd3NvMi5vcmdcL2NsYWltc1wvZW50aXR5SWQiOiIxMDFEIn0.TFhE7auXlzKkjejo6Y6K1KDLa53oCqmhFInwKCDXxwk',
//     },
//   ],
//   passwordExpired: false,
//   permissions: [],
//   refresh_token: '53abdff5-25c0-3438-99e7-f17d2a47fb6d',
//   scope: 'openid',
//   status: 'Active',
//   token: 'aaa',
//   token_type: 'Bearer',
//   updatedAt: '2023-03-02T10:19:43.217',
//   userId: 'd2258c8d-96b2-48e4-9e4f-0316e3f98059',
//   userName: '97113774-131f-497c-9db9-b201934e8024',
// };
