import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Image} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PRIMARY_COLOR, DARK_COLOR, LIGHT_COLOR} from '../utils/constants';
import Header from '../components/Header';
import ProductsList from './ProductList';
import {ScrollView} from 'react-native-gesture-handler';

const BarberShop = ({
  name,
  phone,
  zip,
  country,
  products,
  goBack,
  saveTurn,
  myRole,
}) => {
  const [visible, setVisible] = React.useState(false);
  const toggleProducts = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={require('../../assets/images/bg_barberon.jpg')}
        style={{width: wp('100%'), height: hp('10%')}}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Button
        title="Atras"
        type="clear"
        titleStyle={styles.textBtnBack}
        containerStyle={styles.btnBack}
        onPress={goBack}
        icon={
          <Icon
            type="font-awesome"
            name="chevron-circle-left"
            size={25}
            color={DARK_COLOR}
          />
        }
      />
      <Text style={styles.title}>BarberShop</Text>

      <ScrollView>
        {
          <View style={styles.card}>
            <Text style={styles.textName}>{name}</Text>
            <View style={[styles.row, styles.rowData]}>
              <Icon
                name="phone"
                color={PRIMARY_COLOR}
                iconStyle={{paddingRight: wp('3.5%')}}
              />
              <Text style={styles.text}>{phone}</Text>
            </View>
            <View style={[styles.row, styles.rowData]}>
              <Icon
                name="place"
                color={PRIMARY_COLOR}
                iconStyle={{paddingRight: wp('3.5%')}}
              />
              <Text style={styles.text}>{'(CP: ' + zip + ') ' + country}</Text>
            </View>
            <View style={[styles.productsLink, styles.row]}>
              <Button
                title={visible ? 'Ocultar' : 'Ver productos y servicios'}
                onPress={toggleProducts}
                icon={
                  <Icon
                    name={visible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                    color={DARK_COLOR}
                    size={hp('5%')}
                  />
                }
                titleStyle={styles.textBtnBack}
                iconRight
                type="clear"
              />
            </View>
            {products && visible && (
              <ProductsList
                products={products}
                saveTurn={saveTurn}
                myRole={myRole}
              />
            )}
          </View>
        }
      </ScrollView>
    </View>
  );
};

export default BarberShop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: LIGHT_COLOR,
  },
  card: {
    width: wp('95%'),
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    backgroundColor: LIGHT_COLOR,
    borderColor: '#FFF',
    borderWidth: 2,
    elevation: 3,
    marginVertical: 5,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: LIGHT_COLOR,
    textTransform: 'uppercase',
    paddingVertical: 4,
    textShadowColor: 'rgba(90, 90, 90, .75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowData: {
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  text: {
    color: DARK_COLOR,
    alignSelf: 'center',
    marginVertical: 4,
  },
  textName: {
    fontSize: 28,
    fontWeight: '700',
    color: DARK_COLOR,
    marginBottom: 10,
  },
  productsLink: {
    marginVertical: 5,
    paddingVertical: 2,
    borderTopWidth: 1,
    borderTopColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  btnBack: {
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    marginBottom: 0,
  },
  textBtnBack: {
    color: DARK_COLOR,
    textAlign: 'center',
  },
});
