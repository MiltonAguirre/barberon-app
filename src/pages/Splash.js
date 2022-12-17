import React, {useEffect} from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useStore} from 'react-redux';
import {PRIMARY_COLOR, LIGHT_COLOR} from '../utils/constants';

const SplashScreen = ({navigation}) => {
  const {session} = useStore().getState();

  const navigateToMain = () => {
    setTimeout(function () {
      if (session.token) {
        navigation.replace('MainStack');
      } else {
        navigation.replace('AuthStack');
      }
    }, 2000);
  };
  useEffect(() => {
    navigateToMain();
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/barbershop2.jpg')}>
      <Text style={styles.title}>BarberON</Text>
      <Text style={styles.subtitle}>Barberias a tu alcance</Text>
    </ImageBackground>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: hp('10%'),
    color: PRIMARY_COLOR,
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: hp('4%'),
    color: LIGHT_COLOR,
    fontWeight: '700',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
    marginBottom: hp('1%'),
  },
});
