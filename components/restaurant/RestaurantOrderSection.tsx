import React from 'react';
import {StyleSheet, Platform, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import Scale from '../../constants/Scale';

type RestaurantOrderSectionProps = {
  basketCount: number;
  total: number;
  placeOrder: () => void;
};

export const RestaurantOrderSection = ({
  basketCount,
  total,
  placeOrder,
}: RestaurantOrderSectionProps) => {
  return total > 0 ? (
    <View style={styles.container}>
      <View style={styles.amountDetailsContainer}>
        <Text style={{...FONTS.h3}}>{basketCount} items in cart</Text>
        <Text style={{...FONTS.h3}}>${total.toFixed(2)}</Text>
      </View>
      <View style={styles.cardDetailsContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image source={icons.pin} resizeMode="contain" style={styles.image} />
          <Text style={styles.text}>Location</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={icons.master_card}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.text}>8888</Text>
        </View>
      </View>

      {/* Order Button */}
      <View style={styles.orderButtonContainer}>
        <TouchableOpacity
          style={{
            ...styles.orderButton,
            ...(total <= 0 ? styles.disabledOrderButton : {}),
          }}
          disabled={total <= 0}
          onPress={() => placeOrder()}>
          <Text style={styles.orderButtonText}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: Scale(230),
  },
  amountDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
    borderBottomColor: COLORS.lightGray2,
    borderBottomWidth: 1,
  },
  cardDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
  },
  image: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkgray,
  },
  text: {
    marginLeft: SIZES.padding,
    ...FONTS.h4,
  },
  orderButtonContainer: {
    padding: SIZES.padding * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderButton: {
    width: SIZES.width * 0.85,
    height: Platform.OS === 'android' ? Scale(50) : Scale(60),
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Platform.OS === 'android' ? Scale(15) : Scale(15),
  },
  disabledOrderButton: {
    backgroundColor: COLORS.secondary,
  },
  orderButtonText: {
    color: COLORS.white,
    ...FONTS.h2,
  },
});
