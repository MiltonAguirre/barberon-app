import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  DARK_COLOR,
  LIGHT_COLOR,
  THIRD_COLOR,
} from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
const MyBarberContent = ({
  name,
  phone,
  address,
  city,
  state,
  zip,
  country,
  goToMyProducts,
  goToHome,
  openDrawer,
}) => {
  return (
    <React.Fragment>
      <Header />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[LIGHT_COLOR, LIGHT_COLOR, DARK_COLOR]}
        style={styles.container}>
        <Menu
          pageSelected={2}
          goToHome={goToHome}
          openDrawer={openDrawer}
          title="Barbería"
        />
        <Text style={styles.title}>{name}</Text>
        <View style={styles.dataContainer}>
          {city && state && (
            <View style={[styles.row, styles.rowData]}>
              <Icon
                name="place"
                color={DARK_COLOR}
                iconStyle={{paddingRight: wp('.5%')}}
              />
              <Text style={styles.textData}>{city + ', ' + state}</Text>
            </View>
          )}
          <View style={[styles.row, styles.rowData]}>
            <Icon
              name="public"
              color={DARK_COLOR}
              iconStyle={{paddingRight: wp('.5%')}}
            />
            <Text style={styles.textData}>{'(' + zip + ') ' + country}</Text>
          </View>
          {address && (
            <View style={[styles.row, styles.rowData]}>
              <Icon
                name="location-city"
                color={DARK_COLOR}
                iconStyle={{paddingRight: wp('.5%')}}
              />
              <Text style={styles.textData}>{address}</Text>
            </View>
          )}
          <View style={[styles.row, styles.rowData]}>
            <Icon
              name="phone"
              color={DARK_COLOR}
              iconStyle={{paddingRight: wp('1%')}}
            />
            <Text style={styles.textData}>{phone}</Text>
          </View>
          <TouchableOpacity onPress={goToMyProducts} style={styles.cardTouch}>
            <View
              style={[
                styles.row,
                {justifyContent: 'center', alignItems: 'center'},
              ]}>
              <Icon
                name="style"
                color={SECONDARY_COLOR}
                iconStyle={{marginRight: 5}}
              />
              <Text style={styles.titleTouch}>Productos y servicios</Text>
            </View>
            <Text style={styles.subtitleTouch}>Administrar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </React.Fragment>
  );
};

export default MyBarberContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: LIGHT_COLOR,
    width: wp('100%'),
  },
  row: {
    flexDirection: 'row',
    width: wp('50%'),
    justifyContent: 'flex-start',
  },
  rowData: {
    marginVertical: 4,
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  dataContainer: {
    flex: 1,
    marginBottom: 20,
    paddingVertical: 8,
  },
  title: {
    fontSize: 36,
    fontFamily: 'Poppins-Bold',
    color: DARK_COLOR,
    textShadowColor: PRIMARY_COLOR,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    padding: 5,
  },
  textData: {
    color: DARK_COLOR,
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'Poppins-Italic',
    paddingHorizontal: 2,
  },
  cardTouch: {
    width: '100%',
    backgroundColor: DARK_COLOR,
    borderRadius: 12,
    padding: 10,
    marginTop: 15,
    alignItems: 'center',
    shadowOffset: {width: 2, height: 1},
    shadowColor: SECONDARY_COLOR,
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 2,
  },
  titleTouch: {
    fontFamily: 'Poppins-Bold',
    color: LIGHT_COLOR,
    fontSize: 14,
    paddingTop: 2,
  },
  subtitleTouch: {
    color: THIRD_COLOR,
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
  },
});
