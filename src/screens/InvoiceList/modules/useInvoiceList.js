import dayjs from 'dayjs';
import {useWatch} from 'react-hook-form';
import {useInvoices} from './invoiceStorage';

export function useInvoiceList() {
  const invoices = useInvoices();

  const sortOrder = useWatch({name: 'sortOrder', exact: true});
  const searchTerm = useWatch({name: 'searchTerm', exact: true});

  let _invoices = [...invoices];

  if (searchTerm) {
    _invoices = [
      ..._invoices.filter(item => item?.dueDate?.includes(searchTerm)),
    ];
  }

  console.log(sortOrder);
  if (sortOrder) {
    const sorted =
      sortOrder === 'NEWEST'
        ? _invoices.sort((a, b) => dayjs(a.dueDate) - dayjs(b.dueDate))
        : _invoices.sort((a, b) => dayjs(b.dueDate) - dayjs(a.dueDate));

    _invoices = [...sorted];
  }

  return _invoices;
}
