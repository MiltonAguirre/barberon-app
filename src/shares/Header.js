import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PRIMARY_COLOR, LIGHT_COLOR, DARK_COLOR} from '../utils/constants';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.titleHeader}>hairhub</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: hp('4%'),
    alignItems: 'center',
    backgroundColor: DARK_COLOR,
    justifyContent: 'flex-end',
    width: wp('100%'),
    borderColor: PRIMARY_COLOR,
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  titleHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: LIGHT_COLOR,
    letterSpacing: 10,
    textTransform: 'uppercase',
  },
});
