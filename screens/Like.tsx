import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  FlatList,
} from 'react-native';
import {COLORS, SIZES, FONTS, icons, images} from '../constants';
import {Scale} from '../constants/Scale';
import {likeIcon} from '../assets/assets';
import {StackNavigationProp} from '@react-navigation/stack';
import {Header} from '../components/common/Header';

type RootStackParamList = {
  Like: undefined;
};

type LikeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Like'>;

type Props = {
  navigation: LikeScreenNavigationProp;
};

const favouriteData = [
  {
    name: 'Pizza',
    address: '340 Pleasant Valley Road, Port Hueneme, CA 93041-2746',
    image: images.fries_restaurant,
  },
  {
    name: 'Burger',
    address: '200 S Oxnard Blvd, Oxnard, Port Hueneme, LA 93041-28471',
    image: images.japanese_restaurant,
  },
  {
    name: 'Momos',
    address: '147 WA Yelboard , Port Yard, Port Hueneme, CA 93041-28471',
    image: images.honey_mustard_chicken_burger,
  },
  {
    name: 'Hot Dogs',
    address: '424 E. 2nd St., Los Angeles, (213) 229-8200',
    image: images.burger_restaurant_2,
  },
  {
    name: 'Pizza',
    address: '1500 S Oxnard Blvd, Oxnard, Port Hueneme, CA 93041-2746',
    image: images.burger_restaurant_1,
  },
  {
    name: 'Fish',
    address: '340 Pleasant Valley Road, Port Hueneme, CA 93041-2746',
    image: images.fries_restaurant,
  },
  {
    name: 'Burger',
    address: '200 S Oxnard Blvd, Oxnard, Port Hueneme, LA 93041-28471',
    image: images.japanese_restaurant,
  },
  {
    name: 'Momos',
    address: '147 WA Yelboard , Port Yard, Port Hueneme, CA 93041-28471',
    image: images.honey_mustard_chicken_burger,
  },
  {
    name: 'Hot Dogs',
    address: '424 E. 2nd St., Los Angeles, (213) 229-8200',
    image: images.burger_restaurant_2,
  },
  {
    name: 'Noodles',
    address: '1500 S Oxnard Blvd, Oxnard, Port Hueneme, CA 93041-2746',
    image: images.burger_restaurant_1,
  },
];

export const Like = ({navigation}: Props) => {
  const showCard = ({item}) => {
    return (
      <View style={styles.cardViewStyle}>
        <View style={styles.imageViewStyle}>
          <View style={styles.imageLogoViewStyle}>
            <Image
              source={item?.image}
              resizeMode="cover"
              style={styles.imageLogoStyle}
            />
          </View>
          <View style={{flex: 0.65}}>
            <Text style={styles.loginTextStyle}>{item.name}</Text>
            <Text
              numberOfLines={2}
              style={{
                color: COLORS.darkGray,
                ...FONTS.body3,
              }}>
              {item?.address}
            </Text>
          </View>
          <View style={styles.lickIconViewStyle}>
            <Image
              source={likeIcon}
              resizeMode="cover"
              style={styles.likeLogoStyle}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'none'}
        style={styles.keyBoardStyle}>
        <Header
          leftIcon={icons.back}
          headerText={'Favourite'}
          leftPress={() => navigation.goBack()}
        />
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.scrollViewMainStyle}>
          <View style={styles.loginTextViewStyle}>
            <FlatList
              data={favouriteData}
              keyExtractor={(item: any) => `${item.id}`}
              renderItem={(item: any) => showCard(item)}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  keyBoardStyle: {flex: 1},
  scrollViewMainStyle: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: Scale(10),
  },
  loginTextViewStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },

  cardViewStyle: {
    backgroundColor: '#fff',
    borderRadius: Scale(15),
    flex: 0.6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: COLORS.veryDarkGray,
    paddingVertical: Scale(10),
    marginVertical: Scale(10),
    paddingHorizontal: Scale(10),
    marginHorizontal: Scale(10),
  },
  imageViewStyle: {
    flex: 0.3,
    flexDirection: 'row',
  },
  imageLogoStyle: {
    width: Scale(60),
    height: Scale(60),
    borderRadius: Scale(50),
  },
  loginTextStyle: {
    color: COLORS.black,
    ...FONTS.h4,
  },
  foodDetialView: {
    flex: 0.3,
    marginVertical: Scale(5),
    paddingVertical: Scale(15),
  },
  dateViewStyle: {
    flex: 0.2,
    flexDirection: 'row',
    marginVertical: Scale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Scale(10),
  },
  statusButtonView: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: Scale(10),
    paddingVertical: Scale(10),
  },

  listContainer: {
    paddingVertical: SIZES.padding * 2,
    marginHorizontal: 10,
  },
  likeLogoStyle: {
    width: Scale(20),
    height: Scale(20),
  },
  lickIconViewStyle: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageLogoViewStyle: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Scale(10),
  },
});
