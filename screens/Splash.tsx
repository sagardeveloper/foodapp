import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {COLORS} from '../constants';
import {splashLogo} from '../assets/assets';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('screen');

type RootStackParamList = {
  Splash: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;

type Props = {
  navigation: SplashScreenNavigationProp;
};

export const Splash = ({navigation}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      getUser();
    }, 3000);
  });

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('isLogin');
      const isLogin = await JSON.parse(savedUser);
      if (isLogin && isLogin != null) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Image
        source={splashLogo}
        resizeMode="stretch"
        style={styles.imageLogoStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  imageLogoStyle: {width: width, height: height},
});
