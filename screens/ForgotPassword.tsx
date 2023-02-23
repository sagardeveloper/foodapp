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
} from 'react-native';
import {COLORS, icons} from '../constants';
import {Scale} from '../constants/Scale';
import {logoImg} from '../assets/assets';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export const ForgotPassword = ({navigation}: Props) => {
  const [userEmail, setUserEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showLoginButton, setShowLoginButton] = useState(false);

  const handleUserNameText = (text: string) => {
    setUserEmail(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!reg.test(userEmail)) {
      setEmailError('Please enter valid email address.');
    } else {
      setEmailError('');
    }
    setTimeout(() => {
      validateForm();
    }, 100);
  };

  const validateForm = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!reg.test(userEmail)) {
      setShowLoginButton(false);
    } else {
      setShowLoginButton(true);
    }
  };

  const handleGoBack = () => {
    navigation.goBack('');
  };

  const handleForgotPassword = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'none'}
        style={styles.keyBoardStyle}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.scrollViewMainStyle}>
          <TouchableOpacity onPress={() => handleGoBack()}>
            <Image
              source={icons.back}
              resizeMode="contain"
              style={styles.backIconStyle}
            />
          </TouchableOpacity>
          <View style={styles.imageViewStyle}>
            <Image
              source={logoImg}
              resizeMode="contain"
              style={styles.imageLogoStyle}
            />
            <Text style={styles.loginTextStyle}>Forgot Password</Text>
          </View>

          <View style={styles.loginTextViewStyle}>
            <Text style={styles.emailAddressTextStyle}>Email Address</Text>
            <TextInput
              style={[
                styles.userNameTextInputStyle,
                {
                  borderColor: emailError.length > 0 ? 'red' : '#c1bdbd',
                  color: emailError.length > 0 ? 'red' : 'black',
                },
              ]}
              placeholder="Enter your email"
              placeholderTextColor={'#A0A1AC'}
              keyboardType={'email-address'}
              onChangeText={(text) => handleUserNameText(text)}
              value={userEmail}
              maxLength={50}
              returnKeyType={'done'}
            />
            {emailError.length > 0 ? (
              <Text style={styles.nameErrorStyle}>{emailError}</Text>
            ) : null}
            <TouchableOpacity
              onPress={() => handleForgotPassword()}
              disabled={showLoginButton ? false : true}
              style={{
                ...styles.buttonViewStyle,
                backgroundColor: showLoginButton
                  ? COLORS.primary
                  : COLORS.secondary,
              }}>
              <Text style={[styles.emailAddressTextStyle, {color: '#fff'}]}>
                Forgot Passord
              </Text>
            </TouchableOpacity>
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
    paddingHorizontal: Scale(20),
  },
  backIconStyle: {
    width: Scale(25),
    height: Scale(25),
    marginTop: Scale(20),
  },
  imageViewStyle: {
    flex: 0.4,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogoStyle: {width: Scale(100), height: Scale(100)},

  loginTextViewStyle: {
    flex: 0.6,
    backgroundColor: '#fff',
  },
  emailAddressTextStyle: {
    color: COLORS.darkgray,
    fontSize: Scale(16),
    fontFamily: 'Roboto-Regular',
  },
  loginTextStyle: {
    color: COLORS.darkgray,
    fontSize: Scale(18),
    fontFamily: 'Roboto-Bold',
  },
  userNameTextInputStyle: {
    width: '100%',
    height: Scale(50),
    padding: '4%',
    fontSize: Scale(14),
    backgroundColor: '#fff',
    borderWidth: Scale(1.5),
    borderRadius: Scale(15),
    borderColor: COLORS.light,
    marginVertical: Scale(15),
    fontFamily: 'Roboto-Regular',
  },
  buttonViewStyle: {
    width: '100%',
    height: Scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Scale(15),
    alignSelf: 'center',
    backgroundColor: COLORS.third,
    marginVertical: Scale(40),
  },
  nameErrorStyle: {
    marginLeft: Scale(10),
    fontSize: Scale(13),
    marginBottom: Scale(5),
    color: 'red',
  },
});
