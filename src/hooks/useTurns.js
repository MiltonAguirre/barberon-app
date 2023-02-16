import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {createTurn, getBarbershopTurns, getUserTurns} from '../API';
const turnsByRole = {
  1: getBarbershopTurns,
  2: getUserTurns,
};
const useTurns = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [turns, setTurns] = useState(null);
  const {token, role_id} = useSelector(state => state.session);
  const getTurns = async () => {
    try {
      setLoading(true);
      if (token) {
        let response = await turnsByRole[role_id](token);
        if (response.status == 200) {
          console.log("Turns => ",response.data);
          setTurns(response.data);
        }
      }
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      setLoading(false);
    }
  };
  const saveTurn = async ({product_id, start}) => {
    try {
      setLoading(true);
      if (token) {
        let response = await createTurn(token, product_id, start);
        if (response.status == 200) {
          // setTurns(response.data);
          navigation.navigate('Turns');
        }
      }
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      setLoading(false);
    }
  };
  const cancelTurn = () => {
    console.log('Cancel Turn');
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
    getTurns();
  }, []);

  return {turns, saveTurn, cancelTurn, confirmTurn, turnsByFilter};
};

export default useTurns;
