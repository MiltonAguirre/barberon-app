import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {createBarbershops, getMyBarbershop} from '../API';
import {checkInternetConection} from '../utils';

const useMyBarbershops = () => {
  const [barbershop, setBarbershop] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const {token} = useSelector(state => state.session);
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
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const apiGetMyBarbershop = async () => {
    try {
      setLoading(true);
      const internet = await checkInternetConection();
      if (!internet) {
        setError('Verifica tu conexión a internet');
      } else {
        const response = await getMyBarbershop(token);
        if (response.status == 200) {
          setBarbershop(response.data);
        }
      }
    } catch (err) {
      console.log('CATCH ERROR useMyBarbershop: ', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    apiGetMyBarbershop();
    return navigation.addListener('focus', () => {
      apiGetMyBarbershop();
    });
  }, []);

  return {barbershop, error, loading, submitNewBarbershop};
};

export default useMyBarbershops;
