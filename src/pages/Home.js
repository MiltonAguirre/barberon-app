import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Home from '../containers/Home';
import {connect} from 'react-redux';
import {setError, setSuccess, setLoading} from '../actions/SessionActions';
import {getBarbershop, getBarbershops} from '../API';
import {checkInternetConection} from '../utils';

const HomeScreen = props => {
  const [search, onChangeSearch] = useState('');
  const [barbershops, setBarbershops] = useState(null);
  const [trySubmit, setTrySubmit] = useState(false);
  const {navigation} = props;

  const apiGetBarbershops = async () => {
    const {setLoading, setSuccess, setError} = props;
    setLoading(true);
    try {
      const internet = await checkInternetConection();
      if (!internet) {
        setError('Verifica tu conexión a internet');
        setTrySubmit(!trySubmit);
      } else {
        const response = await getBarbershops();
        if (response.status == 200) {
          if (response.data?.errors) {
            setError('Verifica tus credenciales y vuelve a intentarlo');
          } else {
            setBarbershops(response.data);
            setSuccess();
          }
        }
      }
    } catch (error) {
      console.log('CATCH ERROR Home: ', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      apiGetBarbershops();
    });
    const {isError, isSuccess, message} = props;
    if (message) {
      if (isError) {
        showMessage({
          message: message,
          type: 'danger',
          duration: 3000,
        });
        clearMessages();
      } else if (isSuccess) {
        clearMessages();
      }
    }
    return unsubscribe;
  }, [navigation, trySubmit]);

  const goToBarber = idx => {
    navigation.navigate('Barbershop', {barbershop: barbershops[idx]});
  };
  const goToHome = () => {
    navigation.navigate('Home');
  };
  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Home
        items={barbershops ?? []}
        goToBarber={goToBarber}
        goToHome={goToHome}
        openDrawer={openDrawer}
        setSearch={onChangeSearch}
        search={search}
        isLoading={props.isLoading}
      />
    </View>
  );
};

function mapToProps({session}) {
  return session;
}
export default connect(mapToProps, {setSuccess, setLoading, setError})(
  HomeScreen,
);
