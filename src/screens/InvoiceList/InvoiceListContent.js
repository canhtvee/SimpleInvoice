import React from 'react';
import {RefreshControl} from 'react-native';
import {FlatList} from 'react-native';

import {AppContentEmpty, AppViewLoading} from '../../commons';
import {Colors, Sizes} from '../../utils';

import {useQueryInvoiceList} from './modules';
import {InvoiceListItem} from './InvoiceListItem';

export function InvoiceListContent() {
  const {
    invoiceList,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
    isRefetching,
  } = useQueryInvoiceList();

  return (
    <FlatList
      data={invoiceList}
      contentContainerStyle={{
        paddingBottom: Sizes.padding * 2,
        backgroundColor: Colors.ripple,
        paddingTop: Sizes.paddinglxx,
      }}
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
      onEndReached={() => hasNextPage && fetchNextPage()}
      renderItem={({item, index}) => (
        <InvoiceListItem data={item} index={index} />
      )}
      keyExtractor={(item, index) => `${item.invoiceId}-${index}`}
      ListEmptyComponent={
        isLoading ? (
          <AppViewLoading containerStyle={{marginTop: Sizes.space3x}} />
        ) : (
          <AppContentEmpty containerStyle={{marginTop: Sizes.space3x}} />
        )
      }
      ListFooterComponent={
        isFetchingNextPage ? (
          <AppViewLoading
            containerStyle={{
              marginTop: Sizes.padding,
            }}
          />
        ) : null
      }
      onEndReachedThreshold={0.1}
    />
  );
}
