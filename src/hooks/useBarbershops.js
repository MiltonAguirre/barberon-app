import {useState, useEffect} from 'react';
import {getBarbershops} from '../API';
import {checkInternetConection} from '../utils';
import {useNavigation} from '@react-navigation/native';

const useBarbershops = () => {
  const [barbershops, setBarbershops] = useState(null);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const apiGetBarbershops = async () => {
    try {
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
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      apiGetBarbershops();
    });
    return unsubscribe;
  }, []);

  return {barbershops, error};
};

export default useBarbershops;
