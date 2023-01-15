import React from 'react';
import {View} from 'react-native';
import {createTurn} from '../API';
import BarberShop from '../containers/Barbershop';

const BarbershopScreen = ({navigation, role_id, route}) => {
  const {barbershop} = route.params;
  const newTurn = async (product_id, start) => {
    if (!myRole) {
      const {token, setLoading, setSuccess} = props;
      setLoading(true);
      try {
        const response = await createTurn(token, product_id, start);
        console.log(response);
        if (response && response.status === 200) {
          navigation.navigate('Turns');
        }
        setSuccess();
      } catch (error) {
      } finally {
        setLoading(false);
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
