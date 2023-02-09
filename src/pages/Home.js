import React, {useState} from 'react';
import {View} from 'react-native';
import Home from '../containers/Home';
import useBarbershops from '../hooks/useBarbershops';
import useNotificationsFCM from '../hooks/useNotificationsFCM';

const HomeScreen = ({isLoading, navigation}) => {
  const [search, onChangeSearch] = useState('');
  const {barbershops} = useBarbershops();
  const goToBarber = idx => {
    navigation.navigate('Barbershop', {barbershop: barbershops[idx]});
  };
  const goToHome = () => {
    navigation.navigate('Home');
  };
  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  const {fcmToken} = useNotificationsFCM();
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Home
        items={barbershops ?? []}
        goToBarber={goToBarber}
        goToHome={goToHome}
        openDrawer={openDrawer}
        setSearch={onChangeSearch}
        search={search}
        isLoading={isLoading}
      />
    </View>
  );
};

export default HomeScreen;
