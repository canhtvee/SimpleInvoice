import {useInfiniteQuery} from '@tanstack/react-query';
import {FetchApi, mockApi} from '../../utils';
import {mockInvoiceList} from './mocking';

const TAG = 'invoice-list';

export function useQueryInvoiceList() {
  const {data = {}, ...queryReturn} = useInfiniteQuery(
    [`${TAG}`],
    ({pageParam = 1}) => mockApi(mockInvoiceList),
    {
      getNextPageParam: lastPage => {
        console.log('getNextPageParam', lastPage.length);
      },
    },
  );

  console.log('useQueryInvoiceList:data', data);

  return {invoiceList: mockInvoiceList, ...queryReturn};
}
