import React, {useEffect} from 'react';
import {View} from 'react-native';
import SignIn from '../../containers/auth/SignIn';
import useUser from '../../hooks/useUser';

const SignInScreen = ({navigation}) => {
  const {user, error, loading, signIn} = useUser();
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };
  const goToHome = () => {
    navigation.replace('MainStack');
  };
  useEffect(() => {
    if (user) {
      navigation.replace('MainStack');
    }
  }, [user]);
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <SignIn
        goToHome={goToHome}
        goToSignUp={goToSignUp}
        submit={signIn}
        loading={loading}
        isEreror={error}
      />
    </View>
  );
};

export default SignInScreen;
