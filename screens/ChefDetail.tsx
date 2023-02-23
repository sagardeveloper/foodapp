import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';
import {Scale} from '../constants/Scale';
import {StackNavigationProp} from '@react-navigation/stack';
import {Header} from '../components/common/Header';
import {RouteProp} from '@react-navigation/native';
import {RootTabParamList} from '../types';

type ChefScreenNavigationProp = StackNavigationProp<'Chef'>;
type RestaurantScreenRouteProp = RouteProp<RootTabParamList, 'Restaurant'>;

type Props = {
  route: RestaurantScreenRouteProp;
  navigation: ChefScreenNavigationProp;
};

export const Chef = ({navigation, route}: Props) => {
  const {item} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon={icons.back}
        headerText={'Chef Details'}
        leftPress={() => navigation.goBack()}
      />
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={styles.scrollViewMainStyle}>
        <View style={{flex: 0.4}}>
          <Image
            source={item?.chefDetail?.avatar}
            resizeMode="cover"
            style={{width: SIZES.width, height: SIZES.height * 0.35}}
          />
        </View>

        <View style={styles.bottomViewStyle}>
          <View style={{flex: 0.1, padding: Scale(20)}}>
            <Text numberOfLines={1} style={styles.chefNameStyle}>
              {item?.chefDetail?.name}
            </Text>
          </View>

          <View style={styles.cardViewStyle}>
            <View style={styles.firstCardStyle}>
              <Image
                source={images.clock}
                resizeMode="contain"
                style={styles.watchIconStyle}
              />
              <Text numberOfLines={1}>{item?.chefDetail?.time}</Text>
            </View>

            <View
              style={{
                ...styles.firstCardStyle,
                backgroundColor: '#fef0da',
              }}>
              <Image
                source={images.emoji}
                resizeMode="cover"
                style={styles.emojiStyle}
              />
              <Text>{item?.chefDetail?.review}</Text>
            </View>

            <View
              style={{
                ...styles.firstCardStyle,
                backgroundColor: '#e6f0f9',
              }}>
              <Image
                source={icons.star}
                resizeMode="contain"
                style={styles.ratingIconStyle}
              />
              <Text>{item?.rating}</Text>
            </View>
          </View>

          <View style={styles.addressViewStyle}>
            <Text numberOfLines={1} style={styles.chefNameStyle}>
              Address
            </Text>
            <Text numberOfLines={3} style={styles.addressStyle}>
              {item?.chefDetail?.address}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollViewMainStyle: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bottomViewStyle: {
    flex: 0.6,
    backgroundColor: 'white',
    borderTopLeftRadius: Scale(30),
    borderTopRightRadius: Scale(30),
    top: -Scale(40),
    height: Scale(500),
  },
  chefNameStyle: {
    ...FONTS.body1,
    color: COLORS.black,
  },
  cardViewStyle: {
    flex: 0.3,
    marginVertical: Scale(15),
    paddingHorizontal: Scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firstCardStyle: {
    flex: 0.3,
    borderRadius: Scale(20),
    backgroundColor: '#ddf1e6',
    height: Scale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  watchIconStyle: {
    width: SIZES.h1 * 2,
    height: SIZES.h1 * 1.5,
    marginBottom: 10,
  },
  emojiStyle: {
    width: SIZES.h1 * 3,
    height: SIZES.h1 * 1.6,
    marginBottom: 10,
  },
  ratingIconStyle: {
    width: SIZES.h1 * 1.5,
    height: SIZES.h1 * 1.5,
    marginBottom: 10,
  },
  addressViewStyle: {
    flex: 0.4,
    paddingHorizontal: Scale(20),
    marginVertical: Scale(30),
    justifyContent: 'flex-start',
  },
  addressStyle: {
    ...FONTS.body1,
    color: COLORS.darkgray,
    width: Scale(300),
  },
});
