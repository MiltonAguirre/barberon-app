import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import SignIn from '../../containers/auth/SignIn';
import {connect} from 'react-redux';
import {login} from '../../API';
import {
  setSession,
  setLoading,
  setSuccess,
  setError,
} from '../../actions/SessionActions';

const SignInScreen = props => {
  console.log('Login screen: ', props.isLoading);
  const [isLogged, setIsLogged] = useState(null);
  const {navigation} = props;
  const submit = async (email, password) => {
    console.log('sign');
    const {setSession, setLoading, setSuccess} = props;
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
        {...props}
      />
    </View>
  );
};

function mapToProps({session}) {
  return session;
}
export default connect(mapToProps, {
  setLoading,
  setSession,
  setSuccess,
  setError,
})(SignInScreen);
