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
import {COLORS, SIZES, FONTS, images, icons} from '../constants';
import {Scale} from '../constants/Scale';
import {profileIcon, logoImg, showIcon, hideIcon} from '../assets/assets';
import {StackNavigationProp} from '@react-navigation/stack';
import {Header} from '../components/common/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  Profile: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export const Profile = ({navigation}: Props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('userdetail');
      AsyncStorage.getItem('isLogin');
      const currentUser = await JSON.parse(savedUser);
      setUserName(currentUser?.name);
      setUserEmail(currentUser?.email);
      setMobileNumber(currentUser?.phoneNumber);
      setPassword(currentUser?.password);
    } catch (error) {}
  };

  const handleUserNameText = (text: string, type: string) => {
    if (type === 'Name') {
      setUserName(text);
    } else if (type === 'Email') {
      setUserEmail(text);
    } else if (type === 'Mobile') {
      setMobileNumber(text);
    } else if (type === 'Password') {
      setPassword(text);
    }
  };

  const handleUpdateProfile = async () => {
    const value = {
      name: userName,
      email: userEmail,
      phoneNumber: mobileNumber,
      password: password,
    };

    await AsyncStorage.setItem('userdetail', JSON.stringify(value));
    Alert.alert('Alert', 'Profile updated successfully.', [
      {text: 'Ok', onPress: () => navigation.navigate('Home')},
    ]);
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('isLogin');
      navigation.navigate('Login');
    } catch (e) {}
  };

  const handleLogout = () => {
    Alert.alert('Alert', 'Do you want to Logout ?', [
      {text: 'Cancel', onPress: () => null},
      {text: 'Ok', onPress: () => removeValue()},
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'none'}
        style={styles.keyBoardStyle}>
        <Header
          leftIcon={icons.back}
          headerText={'Profile'}
          leftPress={() => navigation.goBack()}
        />
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.scrollViewMainStyle}>
          <View style={styles.imageViewStyle}>
            <Image
              source={profileIcon}
              resizeMode="contain"
              style={styles.imageLogoStyle}
            />
          </View>
          <View style={styles.loginTextViewStyle}>
            <Text style={styles.emailAddressTextStyle}>Name</Text>
            <TextInput
              style={styles.userNameTextInputStyle}
              placeholder="Enter name"
              placeholderTextColor={'#A0A1AC'}
              keyboardType={'email-address'}
              onChangeText={(text) => handleUserNameText(text, 'Name')}
              value={userName}
              maxLength={50}
              returnKeyType={'done'}
            />

            <Text style={styles.emailAddressTextStyle}>Phone Number</Text>
            <TextInput
              style={styles.userNameTextInputStyle}
              placeholder="Enter mobile number"
              placeholderTextColor={'#A0A1AC'}
              keyboardType={'email-address'}
              onChangeText={(text) => handleUserNameText(text, 'Mobile')}
              value={mobileNumber}
              maxLength={50}
              returnKeyType={'done'}
            />

            <Text style={styles.emailAddressTextStyle}>Email</Text>
            <TextInput
              style={styles.userNameTextInputStyle}
              placeholder="Enter email"
              placeholderTextColor={'#A0A1AC'}
              keyboardType={'email-address'}
              onChangeText={(text) => handleUserNameText(text, 'Email')}
              value={userEmail}
              maxLength={50}
              returnKeyType={'done'}
            />

            <Text style={styles.emailAddressTextStyle}>Password</Text>
            <TextInput
              style={styles.userNameTextInputStyle}
              placeholder="Enter password"
              placeholderTextColor={'#A0A1AC'}
              keyboardType={'default'}
              onChangeText={(text) => handleUserNameText(text, 'Password')}
              value={password}
              maxLength={50}
              returnKeyType={'done'}
            />

            <TouchableOpacity
              onPress={() => handleUpdateProfile()}
              style={styles.buttonViewStyle}>
              <Text style={[styles.emailAddressTextStyle, {color: '#fff'}]}>
                Update Profile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleLogout()}
              style={{
                ...styles.buttonViewStyle,
                backgroundColor: 'blue',
                marginBottom: Scale(20),
              }}>
              <Text style={[styles.emailAddressTextStyle, {color: '#fff'}]}>
                Logout
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
    paddingVertical: Scale(20),
  },

  backIconStyle: {
    width: Scale(25),
    height: Scale(25),
    marginVertical: Scale(20),
  },
  imageViewStyle: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogoStyle: {width: Scale(60), height: Scale(60)},
  loginTextStyle: {
    color: COLORS.darkgray,
    ...FONTS.h4,
  },

  loginTextViewStyle: {
    flex: 0.7,
    backgroundColor: '#fff',
  },

  emailAddressTextStyle: {
    color: COLORS.darkgray,
    ...FONTS.body2,
  },
  userNameTextInputStyle: {
    width: '100%',
    height: Platform.OS === 'android' ? Scale(40) : Scale(30),
    backgroundColor: '#fff',
    borderBottomWidth: 1.5,
    borderColor: COLORS.light,
    marginVertical: Scale(5),
    ...FONTS.body3,
  },
  buttonViewStyle: {
    width: '100%',
    height: Scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Scale(15),
    alignSelf: 'center',
    marginVertical: Scale(15),
    backgroundColor: COLORS.third,
  },
});
