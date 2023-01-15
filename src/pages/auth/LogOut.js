import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {signOut, setLoading, setSuccess} from '../../actions/SessionActions';
import {logout} from '../../API';
import {checkInternetConection} from '../../utils';

const SignOut = props => {
  const [isLogged, setIsLogged] = useState(true);
  const logOutApi = async () => {
    const {signOut, setLoading, setError, token} = props;
    setLoading();
    const internet = await checkInternetConection();
    if (!internet) {
      setError('Verifica tu conexión a internet');
      setIsLogged(!isLogged);
    } else {
      try {
        const response = await logout(token);
        if (response.status == 200) {
          if (response.data?.errors) {
            setError('Verifica tus credenciales y vuelve a intentarlo');
          } else {
            signOut();
          }
        }
      } catch (error) {
        console.log('CATCH ERROR LogOut: ', error);
        setError(error);
      } finally {
        setIsLogged(!isLogged);
      }
    }
  };
  useEffect(() => {
    const {setLoading, setSuccess, isLoading, token} = props;
    setLoading();
    if (isLogged) {
      logOutApi();
    }
    setSuccess();
    if (!isLoading && !token && !isLogged) props.navigation.replace('AuthStack');
  }, [isLogged]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator />
    </View>
  );
};
const mapStateToProps = ({session}) => {
  return session;
};
const mapDispatchToProps = {
  setSuccess,
  setLoading,
  signOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
