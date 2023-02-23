import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SIZES} from '../../constants';
import {Restaurant} from '../../types';
import {HomeRestaurantItem} from './HomeRestaurantItem';

type HomeRestaurantsListProps = {
  restaurants: Restaurant[];
  onPress: (item: Restaurant) => void;
  navigate: (item: Restaurant) => void;
};

export const HomeRestaurantsList = ({
  restaurants,
  onPress,
  navigate,
}: HomeRestaurantsListProps) => {
  //
  function renderItem({item, index}: {item: Restaurant; index: any}) {
    return (
      <HomeRestaurantItem
        item={item}
        index={index}
        onPress={(item) => onPress(item)}
        navigate={(item) => navigate(item)}
      />
    );
  }

  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item: Restaurant) => `${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding * 2,
    paddingBottom: 30,
  },
});
