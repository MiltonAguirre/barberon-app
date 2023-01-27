import React from 'react';
import {View} from 'react-native';
import {createTurn} from '../API';
import BarberShop from '../containers/Barbershop';

const BarbershopScreen = ({navigation, route}) => {
  const {barbershop} = route.params;
  con
  const newTurn = async (product_id, start) => {
    if (!role_id) {
      try {
        const response = await createTurn(token, product_id, start);
        console.log(response);
        if (response && response.status === 200) {
          navigation.navigate('Turns');
        }
        setSuccess();
      } catch (error) {
        console.log(error);
      } 
    }
  };
  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <BarberShop
        {...barbershop}
        goBack={goToHome}
        newTurn={newTurn}
        myRole={role_id}
      />
    </View>
  );
};
export default BarbershopScreen;
