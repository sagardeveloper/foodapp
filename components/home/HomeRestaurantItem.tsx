import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {AppStyles} from '../../AppStyles';
import {affordable, expensive, fairPrice} from '../../dummy-data';
import {Restaurant} from '../../types';
import {unLikeIcon, likeIcon} from '../../assets/assets';
import Scale from '../../constants/Scale';
import {COLORS, FONTS, icons, SIZES} from '../../constants';

type HomeRestaurantItemProps = {
  item: Restaurant;
  onPress: (item: Restaurant) => void;
  index: Restaurant;
  navigate: (item: Restaurant) => void;
};

export const HomeRestaurantItem = ({
  item,
  onPress,
  index,
  navigate,
}: HomeRestaurantItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <View style={styles.itemWrapper}>
        <Image
          source={item.photo}
          resizeMode="cover"
          style={styles.itemImage}
        />
        <TouchableOpacity
          onPress={() => navigate(item)}
          style={styles.userImageViewStyle}>
          <Image
            source={item?.chefDetail?.avatar}
            resizeMode="cover"
            style={{width: 60, height: 60, borderRadius: 60}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeLabelStyle}>
          <Image
            source={item.isLiked ? likeIcon : unLikeIcon}
            resizeMode="cover"
            style={styles.likeLogoStyle}
          />
        </TouchableOpacity>
        <View style={styles.itemLabel}>
          <Text style={{...FONTS.h4}}>{item.duration}</Text>
        </View>
      </View>
      <Text style={{...FONTS.body2, fontWeight: '700'}}>{item.name}</Text>
      <View style={styles.itemRatingContainer}>
        <Image source={icons.star} style={styles.itemRatingImage} />
        <Text style={styles.itemRatingText}>{item.rating}</Text>
        <View style={styles.itemCategoriesContainer}>
          {item.categoryNames?.map((category, index) => (
            <View style={styles.itemCategory} key={item.categories[index]}>
              <Text style={{...FONTS.body3}}>{category}</Text>
              <Text style={styles.categorySeparator}>{'\u25cf'}</Text>
            </View>
          ))}
          {[affordable, fairPrice, expensive].map(
            (priceRating: number, index: number) => (
              <Text
                key={`${index}-${priceRating}`}
                style={{
                  ...FONTS.body3,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}>
                $
              </Text>
            ),
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.padding * 2,
  },
  itemWrapper: {
    marginBottom: SIZES.padding,
    height: 200,
  },
  likeLogoStyle: {
    width: 40,
    height: 40,
  },
  itemImage: {
    width: '100%',
    height: 200,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderRadius: SIZES.h1 * 0.5,
  },
  likeLabelStyle: {
    position: 'absolute',
    marginRight: SIZES.h1 * 1.5,
    height: SIZES.h1 * 2,
    width: SIZES.width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    ...AppStyles.shadow,
    alignSelf: 'flex-end',
  },
  userImageViewStyle: {
    position: 'absolute',
    marginRight: SIZES.h1 * 2,
    height: SIZES.h1 * 2,
    width: SIZES.width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    ...AppStyles.shadow,
    alignSelf: 'flex-start',
    borderRadius: Scale(30),
    borderWidth: 1.5,
    borderColor: '#fff',
    margin: 10,
  },
  itemLabel: {
    bottom: SIZES.radius * 1.7,
    marginRight: 10,
    height: SIZES.h1 * 1.5,
    width: SIZES.width * 0.3,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius * 2,
    alignItems: 'center',
    justifyContent: 'center',
    ...AppStyles.shadow,
    alignSelf: 'flex-end',
  },
  itemRatingContainer: {
    marginTop: SIZES.padding,
    flexDirection: 'row',
  },
  itemRatingImage: {
    height: 20,
    width: 20,
    tintColor: COLORS.primary,
    marginRight: 10,
  },
  itemRatingText: {
    ...FONTS.body3,
    marginRight: 10,
  },
  itemCategoriesContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  itemCategory: {
    flexDirection: 'row',
  },
  categorySeparator: {
    color: COLORS.darkgray,
    textAlignVertical: 'center',
    marginHorizontal: 10,
  },
});
