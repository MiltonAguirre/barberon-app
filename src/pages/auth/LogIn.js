import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import SignIn from '../../containers/auth/SignIn';
import {connect} from 'react-redux';
import {login} from '../../API';
import {
  setSession,
  setSuccess,
  setError,
} from '../../actions/SessionActions';

const SignInScreen = props => {
  const [isLogged, setIsLogged] = useState(null);
  const [loading, setLoading] = useState(false);
  const {navigation} = props;
  const submit = async (email, password) => {
    const {setSession, setSuccess} = props;
    setLoading(true);
    try {
      const response = await login(email, password);
      if (response.status === 200) {
        setSession(response.data);
        setIsLogged(true);
      }
    } catch (error) {
      console.log('CATCH ERROR: ', error);
      setError(true);
    } finally {
      setLoading(false);
    }
    setSuccess();
  };
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };
  const goToHome = () => {
    navigation.replace('MainStack');
  };

  useEffect(() => {
    const {token, role_id, navigation, isError} = props;
    if (isLogged && !isError && token && role_id) {
      navigation.replace('MainStack');
    }
  }, [isLogged]);

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <SignIn
        goToHome={goToHome}
        goToSignUp={goToSignUp}
        submit={submit}
        loading={loading}
        {...props}
      />
    </View>
  );
};

function mapToProps({session}) {
  return session;
}
export default connect(mapToProps, {
  setSession,
  setSuccess,
  setError,
})(SignInScreen);
