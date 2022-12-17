import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR } from '../utils/constants';

const Menu = ({ pageSelected, goToHome, title, openDrawer }) => {
  return (
    <View style={[styles.container, styles.row]}>
      <Icon
        name="menu"
        color={DARK_COLOR}
        size={28}
        onPress={openDrawer}
      />
      <Text style={styles.title}>{title}</Text>
      <Icon
        name="home"
        type="font-awesome-5"
        color={DARK_COLOR}
        size={28}
        iconStyle={pageSelected === 0 && styles.selectPage}
        onPress={goToHome}
      />
    </View>
  )
}
export default Menu;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('100%'),
    height: hp('10%'),
    marginBottom: 10,
    padding: hp('1.5%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  selectPage: {
    borderBottomWidth: 2,
    borderColor: PRIMARY_COLOR,
    paddingBottom: 3
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: LIGHT_COLOR,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(90, 90, 90, .75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1

  },
})