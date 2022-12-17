import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {LIGHT_COLOR} from '../utils/constants';
import BarberList from '../shares/BarberList';
import Header from '../shares/Header';
import Searcher from '../shares/Searcher';
import Menu from '../shares/Menu';
const Home = ({items, goToBarber, goToHome, setSearch, search, openDrawer}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Menu
        pageSelected={0}
        goToHome={goToHome}
        openDrawer={openDrawer}
        title="Barberias"
      />
      <Searcher search={search} onChange={setSearch} />
      <View style={{margin: hp('2.5%')}}>
        <BarberList barbers={items} goToBarber={goToBarber} />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: LIGHT_COLOR,
    width: wp('100%'),
  },
});
