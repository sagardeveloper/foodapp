import React from 'react';
import {LogBox} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './navigation/tabs';
import {
  Splash,
  Login,
  SignUp,
  ForgotPassword,
  RestaurantScreen,
  OrderDeliveryScreen,
  Search,
  Chef,
} from './screens';
// import {enableLatestRenderer} from 'react-native-maps';

const Stack = createStackNavigator();
LogBox.ignoreAllLogs(); //Ignore all log notifications
// enableLatestRenderer();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Splash'}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="OrderDelivery" component={OrderDeliveryScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Chef" component={Chef} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
