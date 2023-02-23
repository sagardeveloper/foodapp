import React from 'react';
import {StyleSheet, View, Image, Text, TextInput} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import Scale from '../../constants/Scale';

type OrderDestinationHeaderProps = {
  streetName: string;
  duration: number;
};

export const OrderDestinationHeader = ({
  streetName,
  duration,
}: OrderDestinationHeaderProps) => {
  const [location, setLocation] = React.useState(
    'Mile End Rd, Bethnal Green, London E1 4NS, United Kingdom',
  );

  const handleLocation = (text: 'string') => {
    setLocation(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image source={icons.red_pin} style={styles.headerImage} />
        <View style={styles.contentTextWrapper}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',

              height: 38,
            }}>
            <TextInput
              style={styles.contentText}
              value={location}
              onChangeText={(text: string) => handleLocation(text)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 10,
    left: 0,
    right: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width * 0.9,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginRight: SIZES.padding / 2,
    position: 'relative',
    left: -10,
  },
  contentTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
  },
  contentText: {
    ...FONTS.body3,
    paddingLeft: Scale(0),
  },
});
