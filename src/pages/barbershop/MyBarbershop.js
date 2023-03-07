import React from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import MyBarberContainer from '../../containers/barbershop/MyBarber';
import FormBarber from '../../containers/barbershop/FormBarber';
import useMyBarbershops from '../../hooks/useMyBarbershop';

const MyBarbershop = ({navigation}) => {
  const {barbershop, submitNewBarbershop, loading, error} = useMyBarbershops();

  const goToMyProducts = () => {
    if (!barbershop) {
      Alert.alert('Ups, algo salió mal', 'No detectamos la barbería');
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

  return (
    <React.Fragment>
      {loading ? (
        <ActivityIndicator size={'large'} />
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
export default MyBarbershop;
