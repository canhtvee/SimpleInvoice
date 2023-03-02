import {useInfiniteQuery} from '@tanstack/react-query';

import {FetchApi} from '../../utils';
import {convertInvoicePageToList} from './convertInvoicePageToList';

const TAG = 'invoice-list';

export function useQueryInvoiceList() {
  const {data = {}, ...queryReturn} = useInfiniteQuery(
    [`${TAG}`],
    ({pageParam = 1}) =>
      FetchApi.getInvoices({
        pageNum: pageParam,
        pageSize: 10,
        dateType: 'INVOICE_DATE',
        sortBy: 'CREATED_DATE',
        ordering: 'ASCENDING',
      }),
    {
      getNextPageParam: lastPage => {
        const {pageNumber, pageSize, totalRecords} = lastPage?.paging || {};

        if (pageNumber * pageSize < totalRecords) {
          return pageNumber + 1;
        }

        return undefined;
      },
    },
  );

  const invoiceList = convertInvoicePageToList(data?.pages);

  // console.log('useQueryInvoiceList:data', data);
  // console.log('useQueryInvoiceList:invoiceList', invoiceList);

  return {invoiceList, ...queryReturn};
}
