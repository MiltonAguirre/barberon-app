import {useState, useEffect} from 'react';
import {getBarbershops} from '../API';
import {checkInternetConection} from '../utils';

const useBarbershops = () => {
  const [barbershops, setBarbershops] = useState(null);
  const [error, setError] = useState('');
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
    apiGetBarbershops();
  }, []);

  return {barbershops, error};
};

export default useBarbershops;
