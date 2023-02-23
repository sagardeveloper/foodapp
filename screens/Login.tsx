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
  Login: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export const Login = ({navigation}: Props) => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showLoginButton, setShowLoginButton] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userDetail, setUserDetial] = useState({});

  useEffect(() => {
    getUser();
  }, [password]);

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('userdetail');
      const currentUser = await JSON.parse(savedUser);
      setUserDetial(currentUser);
    } catch (error) {}
  };

  const handleUserNameText = (text: string, type: string) => {
    if (type === 'Email') {
      setUserEmail(text);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (!reg.test(userEmail)) {
        setEmailError('Please enter valid email address.');
      } else {
        setEmailError('');
      }
    } else {
      setPassword(text);
      if (password.length < 4) {
        setPasswordError('Please enter atleast 4 chracter.');
      } else {
        setPasswordError('');
      }
    }
    setTimeout(() => {
      validateForm();
    }, 100);
  };

  const validateForm = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!reg.test(userEmail) || password.length < 4) {
      setShowLoginButton(false);
    } else {
      setShowLoginButton(true);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNavigation = () => {
    navigation.navigate('SignUp');
  };

  const handleGoToHome = () => {
    if (userDetail?.email === userEmail && userDetail?.password === password) {
      AsyncStorage.setItem('isLogin', 'true');
      navigation.navigate('Home');
      setUserEmail('');
      setPassword('');
    } else {
      Alert.alert('Alert', 'You entered wrong details', [
        {
          text: 'OK',
          onPress: () => null,
          style: 'destructive',
        },
      ]);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'none'}
        style={styles.keyBoardStyle}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.scrollViewMainStyle}>
          <View style={styles.imageViewStyle}>
            <Image
              source={logoImg}
              resizeMode="contain"
              style={styles.imageLogoStyle}
            />
            <Text style={styles.loginTextStyle}>Login</Text>
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
              onChangeText={(text) => handleUserNameText(text, 'Email')}
              value={userEmail}
              maxLength={50}
              returnKeyType={'done'}
            />

            {emailError.length > 0 ? (
              <Text style={styles.nameErrorStyle}>{emailError}</Text>
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
                  height: Scale(40),
                  justifyContent: 'center',
                }}>
                <TextInput
                  style={{
                    ...styles.textInputStyle,
                    color: passwordError.length > 0 ? 'red' : 'black',
                  }}
                  placeholder="Enter your password"
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

            <TouchableOpacity
              onPress={() => handleForgotPassword()}
              style={styles.forgotPasswordView}>
              <Text style={[styles.emailAddressTextStyle]}>
                Forgot Password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleGoToHome()}
              disabled={showLoginButton ? false : true}
              style={{
                ...styles.buttonViewStyle,
                backgroundColor: showLoginButton
                  ? COLORS.primary
                  : COLORS.secondary,
              }}>
              <Text style={[styles.emailAddressTextStyle, {color: '#fff'}]}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNavigation()}
              style={[
                styles.forgotPasswordView,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Text style={styles.emailAddressTextStyle}>
                Don't have an account? Sign Up
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
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogoStyle: {width: Scale(100), height: Scale(100)},

  loginTextViewStyle: {
    flex: 0.7,
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
  nameErrorStyle: {
    marginLeft: Scale(10),
    fontSize: Scale(13),
    marginBottom: Scale(5),
    color: 'red',
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
});
