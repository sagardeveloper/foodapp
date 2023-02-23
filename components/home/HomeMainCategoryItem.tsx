import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import {CategoryData} from '../../types';
import {AppStyles} from '../../AppStyles';
import {Scale} from '../../constants/Scale';

type HomeMainCategoryProps = {
  item: CategoryData;
  selectedCategory: CategoryData | null;
  onSelectCategory: (item: CategoryData) => void;
};

export const HomeMainCategoryItem = ({
  item,
  selectedCategory,
  onSelectCategory,
}: HomeMainCategoryProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.itemContainer,
      }}
      onPress={() => onSelectCategory(item)}>
      <View
        style={{
          ...styles.item,
          backgroundColor:
            selectedCategory?.id === item.id
              ? COLORS.primary
              : COLORS.lightGray,
        }}>
        <Image
          source={item.icon}
          resizeMode="contain"
          style={styles.itemImage}
        />
      </View>
      <Text
        style={{
          ...styles.itemText,
          color:
            selectedCategory?.id === item.id ? COLORS.primary : COLORS.black,
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: Scale(10),
    paddingBottom: Scale(5),
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Scale(5),
    ...AppStyles.shadow,
  },
  item: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Scale(15),
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  itemImage: {
    width: 40,
    height: 40,
  },
  itemText: {
    marginTop: SIZES.padding,
    ...FONTS.body2,
  },
});
