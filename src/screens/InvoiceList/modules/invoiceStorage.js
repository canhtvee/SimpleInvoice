import {useEffect, useState} from 'react';
import {MMKV} from 'react-native-mmkv';

const TAG = 'invoice';

const mmkvId = `mmkv-${TAG}`;
const mmkvKey = `key-${TAG}`;

const MMKVwithID = new MMKV({
  id: mmkvId,
});

const InvoiceService = {
  get: () => {
    const data = MMKVwithID.getString(mmkvKey);
    try {
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  },

  set: invoice => {
    if (!invoice) {
      return MMKVwithID.set(mmkvKey, JSON.stringify([]));
    }
    const oldValue = InvoiceService.get();
    oldValue.push(invoice);
    const newValue = JSON.stringify(oldValue);

    MMKVwithID.set(mmkvKey, newValue);
  },
};

function useInvoices() {
  const [invoices, setInvoices] = useState(() => InvoiceService.get());

  useEffect(() => {
    const listener = MMKVwithID.addOnValueChangedListener(() => {
      setInvoices(InvoiceService.get());
    });

    return () => {
      listener?.remove();
    };
  }, []);

  return invoices;
}

export {InvoiceService, useInvoices};
