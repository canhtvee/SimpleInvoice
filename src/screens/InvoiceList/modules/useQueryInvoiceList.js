import {useInfiniteQuery} from '@tanstack/react-query';

import {FetchApi} from '../../../utils';
import {convertInvoicePageToList} from './convertInvoicePageToList';
import {useQueryParams} from './useQueryParams';

const TAG = 'invoice-list';

export function useQueryInvoiceList() {
  const {tag, params} = useQueryParams(TAG);

  const {data = {}, ...queryReturn} = useInfiniteQuery(
    [tag],
    ({pageParam = 1}) =>
      FetchApi.getInvoices({
        ...params,
        pageNum: pageParam,
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

  return {invoiceList, ...queryReturn};
}
