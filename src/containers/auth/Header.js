import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SECONDARY_COLOR, PRIMARY_COLOR, LIGHT_COLOR, DARK_COLOR } from '../utils/constants';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.titleHeader}>
        BARBERON
      </Text>
    </View>
  )
}


export default Header;

const styles = StyleSheet.create({
  header: {
    height: hp('20%'),
    alignItems: 'center',
    backgroundColor: DARK_COLOR,
    justifyContent: 'flex-end',
    width: wp('100%'),
    borderColor: PRIMARY_COLOR,
    borderBottomWidth: hp('2.5%'),
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  titleHeader: {
    fontSize: hp('9%'),
    fontWeight: '700',
    color: LIGHT_COLOR,
  },
})
