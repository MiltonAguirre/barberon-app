import React from 'react';
import {View} from 'react-native';
import Products from '../../containers/barbershop/Products';
import useProducts from '../../hooks/useProducts';

const MyProducts = ({navigation, route}) => {
  const {barbershop_id} = route.params;
  const {products, deleteProduct, newProduct, loading} =
    useProducts(barbershop_id);

  const goBack = () => {
    navigation.navigate('BarbershopScreen');
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Products {...{deleteProduct, goBack, loading, newProduct, products}} />
    </View>
  );
};
export default MyProducts;
