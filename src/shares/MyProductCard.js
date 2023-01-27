import React from 'react';
import {Text, StyleSheet, View, ActivityIndicator, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DARK_COLOR, LIGHT_COLOR, SECONDARY_COLOR} from '../utils/constants';
import {Button, Icon, Image} from 'react-native-elements';
import {getFullPathImage} from '../utils';
//import EditProductForm from '../containers/barbershop/EditProduct';

const MyProductCard = ({
  id,
  name,
  images,
  description,
  price,
  hours,
  minutes,
  deleteProduct,
}) => {
  return (
    <View style={styles.product}>
      {/* <EditProductForm
        submit={editProduct}
        closeModal={toggleModalEdit}
        visible={editVisible}
        id={id}
        name={name}
        description={description}
        price={price}
        hours={hours}
        minutes={minutes}
      /> */}
      <Image
        style={styles.image}
        source={{uri: getFullPathImage(images[0].path)}}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Button
        icon={{name: 'delete', color: 'red', raised: true}}
        type="clear"
        containerStyle={{position: 'absolute', top: 0, right: 3}}
        buttonStyle={{padding: 0}}
        onPress={() =>
          Alert.alert(
            'Eliminar ' + name,
            'Estas seguro de eliminar el producto?',
            [
              {text: 'Aceptar', onPress: () => deleteProduct(id)},
              {text: 'Cancelar'},
            ],
          )
        }
      />

      <View style={styles.info}>
        <Text style={styles.titleProduct}>{name}</Text>
        <Text style={styles.desc}>{description}</Text>
        <View style={[styles.row, {marginVertical: 5}]}>
          <View style={styles.row}>
            <Icon name="attach-money" color={SECONDARY_COLOR} size={25} />
            <Text style={styles.price}>{price}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="schedule" color={SECONDARY_COLOR} size={23} />
            <Text style={styles.delay}>
              {hours + ':' + (minutes || '00') + 'hs'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    shadowColor: 'rgba(0,0,0,.75)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
    zIndex: 2,
  },
  info: {
    width: '100%',
    padding: 5,
    backgroundColor: LIGHT_COLOR,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    shadowColor: 'rgba(0,0,0,.75)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 2,
  },
  titleProduct: {
    fontSize: 28,
    color: SECONDARY_COLOR,
    fontWeight: 'bold',
    padding: 4,
  },
  desc: {
    fontSize: 14,
    color: DARK_COLOR,
    textAlignVertical: 'center',
    padding: 4,
  },
  price: {
    fontSize: 18,
    color: DARK_COLOR,
    fontWeight: '700',
  },
  delay: {
    fontSize: 18,
    color: DARK_COLOR,
  },
  product: {
    borderRadius: 5,
    width: wp('98%'),
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
});
