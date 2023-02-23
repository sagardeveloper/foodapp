import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {COLORS, icons} from '../constants';
import {Scale} from '../constants/Scale';
import {StackNavigationProp} from '@react-navigation/stack';
import {Header} from '../components/common/Header';
import {Restaurant} from '../types';
import {HomeRestaurantItem} from '../components/home/HomeRestaurantItem';
import {restaurantsWithCategories, initialCurrentLocation} from '../dummy-data';

type SearchScreenNavigationProp = StackNavigationProp<'Search'>;

type Props = {
  navigation: SearchScreenNavigationProp;
};

export const Search = ({navigation}: Props) => {
  const [serachText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState(restaurantsWithCategories);
  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation,
  );

  const handelSearchText = (text: String) => {
    let _restaurantList = restaurantsWithCategories;
    if (text) {
      const newData = _restaurantList.filter((item: any) => {
        const itemData = item?.name
          ? item?.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearchText(text);
      setRestaurants(newData);
    } else {
      setSearchText(text);
      setRestaurants(_restaurantList);
    }
  };

  function renderItem({item, index}: {item: Restaurant; index: any}) {
    return (
      <HomeRestaurantItem
        item={item}
        index={index}
        onPress={(item) =>
          navigation.navigate('Restaurant', {
            item,
            currentLocation,
          })
        }
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'none'}
        style={styles.keyBoardStyle}>
        <Header
          leftIcon={icons.back}
          headerText={'Search'}
          leftPress={() => navigation.goBack()}
        />

        <View style={styles.searchView}>
          <View style={{flex: 0.9}}>
            <TextInput
              placeholder="Search..."
              value={serachText}
              onChangeText={(text) => handelSearchText(text)}
              style={{}}
            />
          </View>
          <TouchableOpacity style={{flex: 0.1}}>
            <Image
              source={icons.search}
              resizeMode="cover"
              style={styles.imageStyleOfSearch}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.scrollViewMainStyle}>
          <FlatList
            data={restaurants}
            keyExtractor={(item: Restaurant) => `${item.id}`}
            renderItem={renderItem}
          />
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
  keyBoardStyle: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: Scale(10),
  },
  scrollViewMainStyle: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchView: {
    height: Scale(40),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: Scale(20),
    borderColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: Scale(15),
    marginVertical: Scale(20),
  },
  imageStyleOfSearch: {
    width: Scale(20),
    height: Scale(20),
  },
});
