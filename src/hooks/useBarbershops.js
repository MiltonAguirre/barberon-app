import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {getBarbershops} from '../API';
import {checkInternetConection} from '../utils';

const useBarbershops = () => {
  const [barbershops, setBarbershops] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const apiGetBarbershops = async () => {
    try {
      setLoading(true);
      const internet = await checkInternetConection();
      if (!internet) {
        setError('Verifica tu conexión a internet');
      } else {
        const response = await getBarbershops();
        if (response.status == 200) {
          setBarbershops(response.data);
        }
      }
    } catch (err) {
      console.log('CATCH ERROR useBarbershops: ', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    apiGetBarbershops();
    return navigation.addListener('focus', () => {
      apiGetBarbershops();
    });
  }, []);
  return {barbershops, error, loading};
};

export default useBarbershops;
