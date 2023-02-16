import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {setError} from '../../actions/SessionActions';
import MyBarberContainer from '../../containers/barbershop/MyBarber';
import FormBarber from '../../containers/barbershop/FormBarber';
import {ActivityIndicator} from 'react-native';
import {getMyBarbershop, createBarbershops} from '../../API';
import {checkInternetConection} from '../../utils';

const MyBarbershop = ({navigation, token}) => {
  const [barbershop, setBarbershop] = useState(null);
  const [loading, setLoading] = useState(false);
  const [trySubmit, setTrySubmit] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const internet = await checkInternetConection();
      if (!internet) {
        setError('Verifica tu conexión a internet');
        setTrySubmit(!trySubmit);
      } else {
        const response = await getMyBarbershop(token);
        setBarbershop(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submitNewBarbershop = async (
    name,
    phone,
    zip,
    country,
    address,
    city,
    state,
    days,
    opens,
    closes,
  ) => {
    try {
      setLoading(true);
      const internet = await checkInternetConection();
      if (!internet) {
        setError('Verifica tu conexión a internet');
        setTrySubmit(!trySubmit);
      } else {
        const response = await createBarbershops(
          token,
          name,
          phone,
          zip,
          country,
          address,
          city,
          state,
          days,
          opens,
          closes,
        );
        setBarbershop(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const goToMyProducts = () => {
    if (!barbershop) {
      Alert.alert('Ups, algo salió mal', 'Lo sentimos, intentelo más tarde');
    } else {
      navigation.navigate('MyProducts', {barbershop_id: barbershop.id});
    }
  };

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <ActivityIndicator />
      ) : barbershop ? (
        <MyBarberContainer
          {...barbershop}
          goToMyProducts={goToMyProducts}
          goToHome={goToHome}
          openDrawer={openDrawer}
        />
      ) : (
        <FormBarber
          submit={submitNewBarbershop}
          goToHome={goToHome}
          openDrawer={openDrawer}
        />
      )}
    </React.Fragment>
  );
};

function mapToProps({session}) {
  return session;
}
export default connect(mapToProps, {setError})(MyBarbershop);
