import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {COLORS, SIZES, FONTS, icons, images} from '../constants';
import {Scale} from '../constants/Scale';
import {logoImg} from '../assets/assets';
import {StackNavigationProp} from '@react-navigation/stack';
import {Header} from '../components/common/Header';

type RootStackParamList = {
  Orders: undefined;
};

type OrdersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Orders'
>;

type Props = {
  navigation: OrdersScreenNavigationProp;
};

export const Orders = ({navigation}: Props) => {
  //

  function showCard() {
    return (
      <View style={styles.cardViewStyle}>
        <View style={styles.imageViewStyle}>
          <View style={styles.profileImageStyle}>
            <Image
              source={images.fries_restaurant}
              resizeMode="cover"
              style={styles.imageLogoStyle}
            />
          </View>
          <View style={{flex: 0.8}}>
            <Text style={styles.loginTextStyle}>Hangries</Text>
            <Text
              numberOfLines={2}
              style={{
                color: COLORS.darkGray,
                ...FONTS.body3,
              }}>
              424 E. 2nd Street.{'\n'}Los Angeles, (213) 229-8200
            </Text>
          </View>
        </View>

        <View style={styles.foodDetialView}>
          <Text style={{...styles.loginTextStyle, marginTop: Scale(10)}}>
            Farm Fresh
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: COLORS.darkGray,
              ...FONTS.body2,
            }}>
            1x Medium, Cheese Burst
          </Text>
          <Text style={{...styles.loginTextStyle, marginTop: Scale(10)}}>
            Tandoori Paneer Pizza
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: COLORS.darkGray,
              ...FONTS.body2,
            }}>
            1x Regular, Cheese Burst
          </Text>
        </View>

        <View style={styles.dateViewStyle}>
          <Text style={{...styles.loginTextStyle, color: COLORS.darkGray}}>
            31 Dec 2022 at 7:45PM
          </Text>
          <Text style={{...styles.loginTextStyle}}>₹ 744</Text>
        </View>

        <View style={styles.statusButtonView}>
          <View style={styles.deliverdViewStyle}>
            <Text
              style={{
                ...styles.loginTextStyle,
                color: COLORS.white,
              }}>
              Deliverd
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'none'}
        style={styles.keyBoardStyle}>
        <Header
          leftIcon={icons.back}
          headerText={'Orders'}
          leftPress={() => navigation.goBack()}
        />
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.scrollViewMainStyle}>
          <View style={styles.loginTextViewStyle}>
            <FlatList
              data={[1, 1, 1, 1, 1]}
              keyExtractor={(item: any) => `${item.id}`}
              renderItem={showCard}
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
    alignItems: 'center',
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
  deliverdViewStyle: {
    borderRadius: Scale(10),
    paddingHorizontal: Scale(10),
    backgroundColor: 'green',
    width: Scale(100),
    height: Scale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageStyle: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Scale(10),
  },
});
