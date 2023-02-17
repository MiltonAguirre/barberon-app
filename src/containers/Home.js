import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {PRIMARY_COLOR} from '../utils/constants';
import Header from '../shares/Header';
import Searcher from '../shares/Searcher';
import Menu from '../shares/Menu';
import Styles from '../utils/styles';
import BarberList from './BarberList';

const Home = ({
  items,
  goToBarber,
  goToHome,
  setSearch,
  search,
  openDrawer,
  loading,
}) => {
  return (
    <View style={Styles.container}>
      <Header />
      <Menu
        pageSelected={0}
        goToHome={goToHome}
        openDrawer={openDrawer}
        title="Tiendas"
      />
      <Searcher search={search} onChange={setSearch} />
      <View style={{margin: 5}}>
        {loading ? (
          <View style={styles.container}>
            <ActivityIndicator
              color={PRIMARY_COLOR}
              size="large"
              style={{margin: 10}}
            />
            <Text style={Styles.text}>Cargando tiendas</Text>
          </View>
        ) : (
          <BarberList {...{items, goToBarber}} />
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
});
