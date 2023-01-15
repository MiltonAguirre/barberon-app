import {useState, useEffect} from 'react';
import {getMyProfile} from '../API';
import {checkInternetConection} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const useUser = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const {token} = useSelector(state => state.session);
  const callApiGetProfile = async () => {
    try {
      const internet = await checkInternetConection();
      if (!internet) {
        setError('Verifica tu conexión a internet');
      } else {
        const response = await getMyProfile(token);
        setUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      callApiGetProfile();
    });
    return unsubscribe;
  }, []);

  return {user, error};
};
export default useUser;
