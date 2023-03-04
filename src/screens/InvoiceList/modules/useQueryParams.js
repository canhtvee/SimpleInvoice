import {useWatch} from 'react-hook-form';

export function useQueryParams(TAG) {
  const sortOrder = useWatch({name: 'sortOrder', exact: true});
  const searchTerm = useWatch({name: 'searchTerm', exact: true});

  const params = {
    pageSize: 10,
    dateType: 'INVOICE_DATE',
    sortBy: 'CREATED_DATE',
  };
  let tag = TAG;

  if (sortOrder) {
    params.sortBy = sortOrder;
    tag = tag + sortOrder;
  }

  if (searchTerm) {
    params.keyword = searchTerm;
    tag = tag + searchTerm;
  }

  return {sortOrder, searchTerm, tag, params};
}
