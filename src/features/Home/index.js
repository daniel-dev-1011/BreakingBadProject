import React from 'react';
import { ActivityIndicator, FlatList, RefreshControl, View } from 'react-native';
import { Screen } from '../../components';
import { useTripDetailFacade } from './hooks';
import Item from './Item';

const HomeScreen = (props) => {
  const { characters, isLoading, isRefreshing, isLoadMore,
    _onLoadMore, _onRefresh, _onNavigateDetailChar } = useTripDetailFacade(props);
  let onEndReachedCalledDuringMomentum = true;

  const renderFooter = () => {
    if (!isLoadMore) return null;
    return (
      <ActivityIndicator
        style={{ color: '#000' }}
      />
    );
  }

  return (
    <Screen loading={isLoading && !isRefreshing && !isLoadMore} title="Home">
      <FlatList
        style={{ flex: 1 }}
        data={characters}
        extraData={isRefreshing}
        refreshControl={(
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => _onRefresh()}
          />
        )}
        ListFooterComponent={() => renderFooter()}
        onEndReachedThreshold={0.4}
        onMomentumScrollBegin={() => onEndReachedCalledDuringMomentum = false }
        onEndReached={() => {
          if (!onEndReachedCalledDuringMomentum) {
            _onLoadMore();
            onEndReachedCalledDuringMomentum = true;
          }
        }}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ height: 16 }} />
        )}S
        renderItem={({ item }) => (
          <Item
            character={item}
            onNavigateDetailChar={() => _onNavigateDetailChar(item.char_id)} />
        )} />
    </Screen>
  )
};

export default HomeScreen;
