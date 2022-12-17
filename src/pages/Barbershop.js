import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
import {setSuccess, setLoading} from '../actions/SessionActions';
import {getBarbershop, createTurn} from '../API';
import BarberShop from '../containers/Barbershop';

const BarbershopScreen = props => {
  const [barbershop, setBarbershop] = useState(null);
  const [myRole, setMyRole] = useState(null);
  const {navigation} = props;
  const getBarbershop = async () => {
    const {barbershop} = await props.route.params;
    setBarbershop(barbershop);
  };
  const newTurn = async (product_id, start) => {
    if (!myRole) {
      const {token, setLoading, setSuccess} = props;
      setLoading();
      try {
        const response = await createTurn(token, product_id, start);
        console.log(response);
        if (response && response.status === 200) {
          navigation.navigate('Turns');
        }
        setSuccess();
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const {role_id} = props;
    setMyRole(role_id);
    try {
      const {setLoading, setSuccess} = props;
      setLoading();
      getBarbershop();
      setSuccess();
    } catch (error) {
      console.log('Error: ', error);
    }
  }, []);

  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      {props.isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator />
        </View>
      ) : (
        <React.Fragment>
          <BarberShop
            {...barbershop}
            goBack={goToHome}
            newTurn={newTurn}
            myRole={myRole}
          />
        </React.Fragment>
      )}
    </View>
  );
};

function mapToProps({session}) {
  return session;
}
export default connect(mapToProps, {setSuccess, setLoading})(BarbershopScreen);
