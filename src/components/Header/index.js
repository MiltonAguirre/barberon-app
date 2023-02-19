import React from 'react';
import {Text} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {PRIMARY_COLOR, DARK_COLOR} from '../../utils/constants';
import styles from './styles';
function Header() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={[DARK_COLOR, PRIMARY_COLOR]}
      style={styles.header}>
      <Text style={styles.title}>Hair</Text>
      <Text style={[styles.title, styles.hub]}>hub</Text>
    </LinearGradient>
  );
}

export default Header;
