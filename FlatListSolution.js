import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const DATA = Array.from({ length: 1000 }).map((_, i) => ({ id: i, title: `Item ${i}` }));

const Item = React.memo(({ item }) => {
  // The Memoization here ensures that the item won't re-render if the props haven't changed
  return (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );
});

const FlatListSolution = () => {
  const memoizedData = useMemo(() => DATA, []); // Memoize DATA to prevent unnecessary recalculation

  const renderItem = ({ item }) => {
    // Optimization for renderItem, which renders the items in the FlatList
    return <Item item={item} />
  };

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default FlatListSolution;