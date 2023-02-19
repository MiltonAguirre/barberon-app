import React from 'react';
import {Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../components/Logo';
import {DARK_COLOR, PRIMARY_COLOR} from '../../utils/constants';
import styles from './styles';

const Splash = () => {
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={require('../../../assets/images/barbershop2.jpg')}>
      <LinearGradient
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[
          'transparent',
          DARK_COLOR,
          PRIMARY_COLOR,
          DARK_COLOR,
          'transparent',
        ]}>
        <Logo size={130} />
        <Text style={styles.title}>Hair hub</Text>
        <Text style={styles.subtitle}>Conectá con tu estilo</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Splash;
