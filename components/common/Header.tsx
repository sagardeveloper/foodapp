import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import Scale from '../../constants/Scale';

type HeaderProps = {
  leftIcon: any;
  rightIcon: any;
  headerText?: string;
  leftPress?: Function;
  rightPress?: Function;
};

export const Header = ({
  leftIcon,
  rightIcon,
  headerText,
  leftPress,
  rightPress,
}: HeaderProps) => (
  <>
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headerImageContainer}
        onPress={() => !!leftPress && leftPress()}>
        <Image
          source={leftIcon}
          resizeMode="contain"
          style={styles.headerImage}
        />
      </TouchableOpacity>

      <View style={styles.headerLocationContainer}>
        <View style={styles.headerLocationTextWrapper}>
          <Text style={{...FONTS.h3}}>{headerText}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.headerRightImageContainer}
        onPress={() => !!rightPress && rightPress()}>
        <Image
          source={rightIcon}
          resizeMode="contain"
          style={styles.headerImage}
        />
      </TouchableOpacity>
    </View>
  </>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 50,
    marginVertical: 10,
  },
  headerImageContainer: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  headerImage: {
    width: Scale(25),
    height: Scale(25),
  },
  headerLocationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLocationTextWrapper: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  headerRightImageContainer: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
  },
});
