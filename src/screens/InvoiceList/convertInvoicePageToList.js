export const convertInvoicePageToList = pages => {
  const invoiceList = [];
  pages?.forEach(page => {
    page?.data && invoiceList.push(...page.data);
  });

  return invoiceList;
};
