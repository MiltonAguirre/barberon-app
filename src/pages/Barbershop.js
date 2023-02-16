import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import BarberShop from '../containers/Barbershop';
import useProducts from '../hooks/useProducts';
import useTurns from '../hooks/useTurns';
const BarbershopScreen = ({navigation, route}) => {
  const {barbershop} = route.params;
  const {products} = useProducts(barbershop.id);
  const {role_id} = useSelector(state => state.session);
  const {saveTurn} = useTurns();
  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <BarberShop
        {...barbershop}
        products={products}
        goBack={goToHome}
        saveTurn={saveTurn}
        myRole={role_id}
      />
    </View>
  );
};
export default BarbershopScreen;
