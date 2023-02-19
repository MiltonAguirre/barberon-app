import React, {useEffect} from 'react';
import {useStore} from 'react-redux';
import Splash from '../containers/Splash';

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

  return <Splash />;
};

export default SplashScreen;
