import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR} from '../utils/constants';
import Header from '../components/Header';
import Turn from '../components/Turn';
import Menu from '../components/Menu';
import LinearGradient from 'react-native-linear-gradient';

const Turns = ({
  cancelTurn,
  goToHome,
  openDrawer,
  toggleModal,
  imBarber,
  turnsByFilter,
}) => {
  const status = ['Cancelados', 'Pendientes', 'Activos', 'Terminados'];
  return (
    <>
      <Header />
      <Menu
        title="Turnos"
        pageSelected={1}
        goToHome={goToHome}
        openDrawer={openDrawer}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <ScrollView
          horizontal={true}
          style={styles.scroll}
          snapToAlignment="center"
          decelerationRate="normal"
          snapToInterval={
            Dimensions.get('window').width -
            (5 / 100) * Dimensions.get('window').width
          }>
          {status.map((st, idx) => {
            const turnsState = turnsByFilter(idx);
            return (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={[LIGHT_COLOR, 'white']}
                key={st}
                style={[styles.slideContainer]}>
                <View style={[styles.rowCardHead]}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.titleCardHead}>{st}</Text>
                  </View>
                </View>
                <View
                  style={{
                    minHeight: '80%',
                    width: '98%',
                  }}>
                  {turnsState && (
                    <>
                      <SafeAreaView>
                        <FlatList
                          data={turnsState}
                          renderItem={({item, index}) => (
                            <Turn
                              {...item}
                              cancelTurn={cancelTurn}
                              idx={index}
                              toggleModal={toggleModal}
                              imBarber={imBarber}
                            />
                          )}
                          keyExtractor={item => item.id.toString()}
                          ListEmptyComponent={
                            <Text style={styles.messageEmpty}>
                              No hay turnos en esta sección
                            </Text>
                          }
                        />
                      </SafeAreaView>
                    </>
                  )}
                </View>
              </LinearGradient>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};
export default Turns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: LIGHT_COLOR,
    width: '100%',
    justifyContent: 'center',
  },

  slideContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    margin: wp('2.5%'),
    marginTop: 0,
    width: wp('90%'),
    borderRadius: 12,
    shadowColor: PRIMARY_COLOR,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.75,
    shadowRadius: 10,
    elevation: 2,
  },
  scroll: {
    padding: 10,
    paddingTop: 2,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: LIGHT_COLOR,
    textTransform: 'uppercase',
    paddingVertical: 10,
    textShadowColor: 'rgba(90, 90, 90, .75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  titleCardHead: {
    fontSize: 20,
    color: DARK_COLOR,
    padding: 4,
    letterSpacing: 1.2,
    fontWeight: 'bold',
  },
  rowCardHead: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginVertical: 5,
    width: '100%',
  },
  messageEmpty: {
    color: DARK_COLOR,
    alignSelf: 'center',
    paddingVertical: 12,
  },
});
