import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {DARK_COLOR} from '../utils/constants';
import styles from './styles';

const Menu = ({pageSelected, goToHome, title, openDrawer}) => {
  return (
    <View style={[styles.container, styles.row]}>
      <Icon name="menu" color={DARK_COLOR} size={28} onPress={openDrawer} />
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
  );
};
export default Menu;
