/* eslint-disable react-native/no-inline-styles */
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
  Alert,
} from 'react-native';
import {COLORS, icons} from '../constants';
import {Scale} from '../constants/Scale';
import {logoImg, showIcon, hideIcon} from '../assets/assets';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  SignUp: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

export const SignUp = ({navigation}: Props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const [showLoginButton, setShowLoginButton] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswdError, setConfirmPasswdError] = useState('');

  const handleUserNameText = (text: string, type: string) => {
    if (type === 'Name') {
      setUserName(text);
      if (userName.length < 3) {
        setNameError('Please enter atleast 4 chracter.');
      } else {
        setNameError('');
      }
    } else if (type === 'Email') {
      setUserEmail(text);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (!reg.test(userEmail)) {
        setEmailError('Please enter valid email address.');
      } else {
        setEmailError('');
      }
    } else if (type === 'Mobile') {
      setMobileNumber(text);
      if (mobileNumber.length < 9) {
        setMobileError('Please enter valid mobile number.');
      } else {
        setMobileError('');
      }
    } else if (type === 'Password') {
      setPassword(text);
      if (password.length < 4) {
        setPasswordError('Please enter atleast 4 chracter.');
      } else {
        setPasswordError('');
      }
    } else if (type === 'Confirm Password') {
      setConfirmPassword(text);
      if (password !== text) {
        setConfirmPasswdError('Password not matched.');
      } else {
        setConfirmPasswdError('');
      }
    }
  };

  useEffect(() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (
      userName.length < 3 ||
      !reg.test(userEmail) ||
      mobileNumber.length < 9 ||
      password.length < 4 ||
      password !== confirmPassword
    ) {
      setShowLoginButton(false);
    } else {
      setShowLoginButton(true);
    }
  }, [userName, userEmail, mobileNumber, password, confirmPassword]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleNavigation = () => {
    navigation.navigate('Login');
  };

  const handleSignup = async () => {
    const value = {
      name: userName,
      email: userEmail,
      phoneNumber: mobileNumber,
      password: password,
      confirmPassword: confirmPassword,
    };

    await AsyncStorage.setItem('userdetail', JSON.stringify(value));
    Alert.alert('Alert', 'Account created successfully.', [
      {text: 'Ok', onPress: () => navigation.navigate('Login')},
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'none'}
        style={styles.keyBoardStyle}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.scrollViewMainStyle}>
          <View style={styles.imageViewStyle}>
            <Image
              source={logoImg}
              resizeMode="contain"
              style={styles.imageLogoStyle}
            />
            <Text style={styles.loginTextStyle}>Sign Up</Text>
          </View>
          <View style={styles.loginTextViewStyle}>
            <Text style={styles.emailAddressTextStyle}>Name</Text>
            <TextInput
              style={{
                ...styles.userNameTextInputStyle,
                borderColor: nameError.length > 0 ? 'red' : '#c1bdbd',
                color: nameError.length > 0 ? 'red' : 'black',
              }}
              placeholder="Enter name"
              placeholderTextColor={'#A0A1AC'}
              keyboardType={'default'}
              onChangeText={(text) => handleUserNameText(text, 'Name')}
              value={userName}
              maxLength={50}
              returnKeyType={'done'}
            />
            {nameError.length > 0 ? (
              <Text style={styles.nameErrorStyle}>{nameError}</Text>
            ) : null}

            <Text style={styles.emailAddressTextStyle}>Email Address</Text>
            <TextInput
              style={{
                ...styles.userNameTextInputStyle,
                borderColor: emailError.length > 0 ? 'red' : '#c1bdbd',
                color: emailError.length > 0 ? 'red' : 'black',
              }}
              placeholder="Enter email"
              placeholderTextColor={'#A0A1AC'}
              keyboardType={'email-address'}
              onChangeText={(text) => handleUserNameText(text, 'Email')}
              value={userEmail}
              maxLength={50}
              returnKeyType={'done'}
            />
            {emailError.length > 0 ? (
              <Text style={styles.nameErrorStyle}>{emailError}</Text>
            ) : null}

            <Text style={styles.emailAddressTextStyle}>Mobile Number</Text>
            <TextInput
              style={{
                ...styles.userNameTextInputStyle,
                borderColor: mobileError.length > 0 ? 'red' : '#c1bdbd',
                color: mobileError.length > 0 ? 'red' : 'black',
              }}
              placeholder="Enter mobile number"
              placeholderTextColor={'#A0A1AC'}
              keyboardType={'number-pad'}
              onChangeText={(text) => handleUserNameText(text, 'Mobile')}
              value={mobileNumber}
              maxLength={10}
              returnKeyType={'done'}
            />
            {mobileError.length > 0 ? (
              <Text style={styles.nameErrorStyle}>{mobileError}</Text>
            ) : null}
            <Text style={styles.emailAddressTextStyle}>Password</Text>
            <View
              style={{
                ...styles.passwordViewStyle,
                borderColor: passwordError.length > 0 ? 'red' : '#c1bdbd',
              }}>
              <View
                style={{
                  flex: 0.85,
                  justifyContent: 'center',
                }}>
                <TextInput
                  style={{
                    ...styles.textInputStyle,
                    color: passwordError.length > 0 ? 'red' : 'black',
                  }}
                  placeholder="Enter password"
                  placeholderTextColor={'#A0A1AC'}
                  keyboardType={'default'}
                  onChangeText={(text) => handleUserNameText(text, 'Password')}
                  value={password}
                  maxLength={50}
                  returnKeyType={'done'}
                  secureTextEntry={showPassword}
                />
              </View>

              <TouchableOpacity
                onPress={() => handleShowPassword()}
                style={styles.iconViewStyle}>
                <Image
                  source={showPassword ? hideIcon : showIcon}
                  style={styles.showIconStyle}
                />
              </TouchableOpacity>
            </View>

            {passwordError.length > 0 ? (
              <Text style={styles.nameErrorStyle}>{passwordError}</Text>
            ) : null}

            <Text style={styles.emailAddressTextStyle}>Confirm Password</Text>
            <View
              style={{
                ...styles.passwordViewStyle,
                borderColor: confirmPasswdError.length > 0 ? 'red' : '#c1bdbd',
              }}>
              <View
                style={{
                  flex: 0.85,
                  justifyContent: 'center',
                }}>
                <TextInput
                  style={{
                    ...styles.textInputStyle,
                    color: confirmPasswdError.length > 0 ? 'red' : 'black',
                  }}
                  placeholder="Enter confirm password"
                  placeholderTextColor={'#A0A1AC'}
                  keyboardType={'default'}
                  onChangeText={(text) =>
                    handleUserNameText(text, 'Confirm Password')
                  }
                  value={confirmPassword}
                  maxLength={50}
                  returnKeyType={'done'}
                  secureTextEntry={showConfirmPassword}
                />
              </View>

              <TouchableOpacity
                onPress={() => handleShowConfirmPassword()}
                style={styles.iconViewStyle}>
                <Image
                  source={showConfirmPassword ? hideIcon : showIcon}
                  style={styles.showIconStyle}
                />
              </TouchableOpacity>
            </View>

            {confirmPasswdError.length > 0 ? (
              <Text style={styles.nameErrorStyle}>{confirmPasswdError}</Text>
            ) : null}

            <TouchableOpacity
              onPress={() => handleSignup()}
              disabled={showLoginButton ? false : true}
              style={{
                ...styles.buttonViewStyle,
                backgroundColor: showLoginButton
                  ? COLORS.primary
                  : COLORS.secondary,
              }}>
              <Text style={[styles.emailAddressTextStyle, {color: '#fff'}]}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNavigation()}
              style={[
                styles.forgotPasswordView,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Text style={styles.emailAddressTextStyle}>
                Already have an account? Sign In
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

  imageViewStyle: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogoStyle: {width: Scale(100), height: Scale(100)},

  loginTextViewStyle: {
    flex: 0.8,
    backgroundColor: '#fff',
  },
  emailAddressTextStyle: {
    color: COLORS.darkgray,
    fontSize: Scale(14),
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
    marginVertical: Scale(10),
    fontFamily: 'Roboto-Regular',
  },
  passwordViewStyle: {
    width: '100%',
    height: Scale(50),
    backgroundColor: '#fff',
    borderWidth: Scale(1.5),
    borderRadius: Scale(15),
    borderColor: COLORS.light,
    marginVertical: Scale(15),
    flexDirection: 'row',
    paddingHorizontal: Scale(2),
  },

  textInputStyle: {
    fontSize: Scale(14),
    paddingHorizontal: Scale(10),
    fontFamily: 'Roboto-Regular',
  },
  iconViewStyle: {
    flex: 0.15,
    justifyContent: 'center',
  },
  showIconStyle: {
    width: Scale(25),
    height: Scale(25),
    tintColor: 'gray',
  },
  forgotPasswordView: {
    height: Scale(20),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttonViewStyle: {
    width: '100%',
    height: Scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Scale(15),
    alignSelf: 'center',
    marginVertical: Scale(25),
  },
  nameErrorStyle: {
    marginLeft: Scale(10),
    fontSize: Scale(13),
    marginBottom: Scale(5),
    color: 'red',
  },
});
