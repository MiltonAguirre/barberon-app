import {useState, useEffect} from 'react';
import {getProducts} from '../API';
import {checkInternetConection} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const useProducts = barbershop_id => {
  const [products, setProducts] = useState(null);
  const navigation = useNavigation();
  const {token} = useSelector(state => state.session);
  const apiGetProducts = async () => {
    try {
      const internet = await checkInternetConection();
      if (!internet) {
        console.error('Verify network connection failed');
      } else {
        const {data, status} = await getProducts(token, barbershop_id);
        if (status == 200) {
          setProducts(data);
        }
      }
    } catch (err) {
      console.error('CATCH ERROR useProducts: ', err);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      apiGetProducts();
    });
    return unsubscribe;
  }, []);
  const deleteProduct = async id => {
    try {
      const internet = await checkInternetConection();
      if (!internet) {
        console.error('Verify network connection failed');
      } else {
        const {data, status} = await destroyProduct(token, id);
        if (status == 200) {
          setProducts(data?.products);
        }
      }
    } catch (error) {
      console.error('Catch error New product: ', error);
    }
  };
  const newProduct = async ({
    name,
    description,
    price,
    hours,
    minutes,
    photo,
  }) => {
    try {
      const internet = await checkInternetConection();
      if (!internet || !token) {
        console.error('Verify network connection failed');
      } else {
        const {data, status} = await createProducts(
          token,
          name,
          price,
          description,
          hours,
          minutes,
          photo,
        );
        if (status == 200) {
          setProducts(data?.products);
        }
      }
    } catch (error) {
      console.error('Catch error New product: ', error);
    }
  };
  return {products, deleteProduct, newProduct};
};

export default useProducts;
