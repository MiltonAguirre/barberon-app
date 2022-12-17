import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {signUp} from '../../API';
import SignUpForm from '../../containers/auth/SignUp';
import {connect} from 'react-redux';
import {setSession, setLoading} from '../../actions/SessionActions';

const SignUpScreen = props => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const {token, role_id, navigation, isError} = props;
    if (isLogged && !isError && token && role_id) {
      navigation.replace('MainStack');
    }
  }, [isLogged]);
  const submit = async (
    first_name,
    last_name,
    email,
    country,
    zip,
    role,
    password,
    password_confirmation,
  ) => {
    const {setSession, setLoading} = props;
    try {
      setLoading();
      const response = await signUp(
        first_name,
        last_name,
        email,
        country,
        zip,
        role,
        password,
        password_confirmation,
      );
      setSession(response.data);
      setIsLogged(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const goBack = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <SignUpForm goBack={goBack} myOnPress={submit} />
    </View>
  );
};

function mapToProps({session}) {
  return session;
}
export default connect(mapToProps, {setLoading, setSession})(SignUpScreen);
