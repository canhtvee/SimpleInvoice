import {AppAccount} from './account';
import {AppNavigation} from './Navigation';

export function resetToHome(navigation?: any) {
  const _reset = navigation ? navigation.reset : AppNavigation.reset;
  _reset({
    index: 0,
    routes: [
      {
        name: 'InvoiceList',
      },
    ],
  });
}

export function resetToLogin(navigation?: any) {
  AppAccount.set();
  const _reset = navigation ? navigation.reset : AppNavigation.reset;
  _reset({
    index: 0,
    routes: [
      {
        name: 'Login',
      },
    ],
  });
}
