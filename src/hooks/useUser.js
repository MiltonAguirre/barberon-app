import {useState, useEffect} from 'react';
import {getMyProfile, login} from '../API';
import {checkInternetConection} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setSession} from '../actions/SessionActions';

const useUser = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {token} = useSelector(state => state.session);
  const dispatch = useDispatch();
  const getMyData = async () => {
    if (token) {
      try {
        setLoading(true);
        const internet = await checkInternetConection();
        if (!internet) {
          setError('Verifica tu conexión a internet');
        } else {
          const response = await getMyProfile(token);
          if (response.status === 200) {
            setUser(response.data);
          }
        }
      } catch (error) {
        console.log(error);
        setError('Ups! algo salio mal, vuelva a intentarlo.');
      } finally {
        setLoading(false);
      }
    }
  };
  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const internet = await checkInternetConection();
      if (!internet) {
        setError('Verifica tu conexión a internet');
      } else {
        const response = await login(email, password);
        if (response.status === 200) {
          dispatch(setSession(response.data));
          setUser(response.data);
        }
      }
    } catch (error) {
      console.log('CATCH ERROR: ', error);
      setError('Ups! algo salio mal, vuelva a intentarlo.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getMyData();
    });
    return unsubscribe;
  }, []);

  return {user, error, loading, signIn};
};
export default useUser;
