import React, {useState} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {PRIMARY_COLOR} from '../utils/constants';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Styles from '../utils/styles';
import BarberList from './BarberList';
import BarbershopCard from '../components/BarbershopCard';

const Home = ({items, goToBarber, goToHome, openDrawer, loading}) => {
  const [selected, setSelected] = useState(0);
  const onChangeSelected = val => {
    if (items && items[val]) {
      setSelected(val);
    }
  };
  return (
    <View style={Styles.container}>
      <Header />
      <Menu
        pageSelected={0}
        goToHome={goToHome}
        openDrawer={openDrawer}
        title="Tiendas"
      />
      {/* <Searcher search={search} onChange={setSearch} /> */}
      <View style={styles.m5}>
        {loading ? (
          <View style={styles.container}>
            <ActivityIndicator
              color={PRIMARY_COLOR}
              size="large"
              style={styles.m10}
            />
            <Text style={Styles.text}>Cargando tiendas</Text>
          </View>
        ) : !items ? (
          <View style={styles.flexCenter}>
            <Text style={styles.emptyMessage}>
              No hay barberías disponibles
            </Text>
          </View>
        ) : (
          <>
            <BarbershopCard
              {...items[selected]}
              goToBarber={() => goToBarber(selected)}
            />
            <BarberList {...{items, onChangeSelected}} />
          </>
        )}
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  flexCenter: {flex: 1, alignItems: 'center'},
  emptyMessage: {padding: 4, fontFamily: 'Poppins-Regular'},
  m5: {margin: 5},
  m10: {margin: 10},
});
