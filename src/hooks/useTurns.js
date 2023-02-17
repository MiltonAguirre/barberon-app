import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  cancelBarbershopTurn,
  cancelUserTurn,
  createTurn,
  getBarbershopTurns,
  getUserTurns,
} from '../API';
const turnsByRole = {
  get: {1: getBarbershopTurns, 2: getUserTurns},
  cancel: {1: cancelBarbershopTurn, 2: cancelUserTurn},
};
const useTurns = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [turns, setTurns] = useState(null);
  const {token, role_id} = useSelector(state => state.session);
  const getTurns = async () => {
    try {
      setLoading(true);
      if (!token) {
        navigation.replace('AuthStack');
      } else {
        let response = await turnsByRole.get[role_id](token);
        if (response.status == 200) {
          console.log('Turns => ', response.data);
          setTurns(response.data);
        }
      }
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      setLoading(false);
    }
  };
  const saveTurn = async (product_id, start) => {
    try {
      setLoading(true);
      if (!token) {
        navigation.replace('AuthStack');
      } else {
        let response = await createTurn(token, product_id, start);
        if (response.status == 200) {
          navigation.navigate('Turns');
        }
      }
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      setLoading(false);
    }
  };
  const cancelTurn = async id => {
    console.log('Cancel Turn: ', id);

    try {
      setLoading(true);
      if (!token) {
        navigation.replace('AuthStack');
      } else {
        await turnsByRole.cancel[role_id](token, id);
      }
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      setLoading(false);
    }
  };
  const confirmTurn = () => {
    console.log('Confirm Turn');
  };
  const turnsByFilter = filter => {
    if (turns && turns.length && !isNaN(filter)) {
      const result = turns.filter(elem => elem.turn_state == filter);
      return result;
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getTurns();
    });
    return unsubscribe;
  }, []);

  return {loading, turns, saveTurn, cancelTurn, confirmTurn, turnsByFilter};
};

export default useTurns;
