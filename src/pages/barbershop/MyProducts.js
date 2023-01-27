import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {createProducts, destroyProduct} from '../../API';
import Products from '../../containers/barbershop/Products';
import useProducts from '../../hooks/useProducts';
import {checkInternetConection} from '../../utils';

const MyProducts = ({navigation, route}) => {
  const {token} = useSelector(state => state.session);
  const {barbershop_id} = route.params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const {products, deleteProduct, newProduct} = useProducts(barbershop_id);
  
  const goBack = () => {
    navigation.navigate('BarbershopScreen');
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Products
        {...{deleteProduct, goBack, loading, newProduct, products}}
      />
    </View>
  );
};
export default MyProducts;
