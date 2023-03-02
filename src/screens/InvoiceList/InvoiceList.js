import React from 'react';
import {RefreshControl} from 'react-native';
import {FlatList, View} from 'react-native';

import {AppContainer, AppContentEmpty, AppViewLoading} from '../../commons';
import {Colors, Sizes} from '../../utils';

import {InvoiceListItem} from './InvoiceListItem';

import {useQueryInvoiceList} from './useQueryInvoiceList';

const Line = () => (
  <View style={{height: 1, backgroundColor: Colors.onBackground}} />
);

export function InvoiceList() {
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
    <AppContainer>
      <FlatList
        data={invoiceList || []}
        contentContainerStyle={{
          paddingBottom: Sizes.padding * 2,
        }}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        onEndReached={() => hasNextPage && fetchNextPage()}
        renderItem={({item, index}) => (
          <InvoiceListItem data={item} index={index} />
        )}
        keyExtractor={(item, index) => `${item.invoiceId}-${index}`}
        ItemSeparatorComponent={Line}
        ListEmptyComponent={
          isLoading ? <AppViewLoading /> : <AppContentEmpty />
        }
        ListFooterComponent={
          isFetchingNextPage ? (
            <AppViewLoading containerStyle={{marginTop: Sizes.padding}} />
          ) : null
        }
      />
    </AppContainer>
  );
}
