import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Turns from '../containers/Turns';
import useTurns from '../hooks/useTurns';
import Styles from '../utils/styles';
const TurnsSceen = ({navigation}) => {
  const {role_id} = useSelector(state => state.session);
  const {cancelTurn, confirmTurn, turnsByFilter} = useTurns();
  const goToHome = () => {
    navigation.navigate('Home');
  };
  const goToCalendar = () => {
    navigation.navigate('Calendar');
  };
  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={Styles.container}>
      <Turns
        cancelTurn={cancelTurn}
        confirmTurn={confirmTurn}
        turnsByFilter={turnsByFilter}
        goToHome={goToHome}
        goToCalendar={goToCalendar}
        openDrawer={openDrawer}
        imBarber={role_id === 1 ? 1 : 0}
      />
    </View>
  );
};

export default TurnsSceen;
