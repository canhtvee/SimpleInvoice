export const convertInvoicePageToList = pages => {
  const invoiceList = [];
  pages?.forEach(page => {
    invoiceList.push(...page.data);
  });

  return invoiceList;
};
