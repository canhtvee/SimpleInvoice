export type GetInvoiceParams = {
  pageNum: number;
  pageSize: number;
  dateType: 'INVOICE_DATE';
  sortBy: 'CREATED_DATE';
  ordering: 'ASCENDING' | 'DESCENDING';
  status?: 'Paid';
  keyword?: string;
};
