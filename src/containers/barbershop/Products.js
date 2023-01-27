import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PRIMARY_COLOR, DARK_COLOR, LIGHT_COLOR} from '../../utils/constants';
import ProductsList from '../../shares/MyProductsList';
import NewProductForm from './NewProduct';
import Header from '../../shares/Header';

const Products = ({products, newProduct, goBack, deleteProduct}) => {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(!visible);
  };
  /*const [editVisible, setEditVisible] = useState(false);
  const toggleModalEdit = () => {
    setEditVisible(!editVisible);
  };*/

  const submit = (name, price, description, hours, minutes, image) => {
    toggleModal();
    newProduct(name, price, description, hours, minutes, image);
  };
  return (
    <View style={styles.container}>
      <Header />
      <Button
        type="clear"
        icon={
          <Icon
            type="font-awesome"
            name="chevron-circle-left"
            size={25}
            color={DARK_COLOR}
          />
        }
        title="Atras"
        titleStyle={{color: DARK_COLOR, padding: 2}}
        onPress={goBack}
        containerStyle={{alignSelf: 'flex-start'}}
      />
      <Text style={styles.title}>Productos y servicios</Text>
      <Button
        icon={
          <Icon
            name="plus"
            type="font-awesome"
            size={15}
            color="white"
            iconStyle={{paddingRight: 4}}
          />
        }
        onPress={toggleModal}
        title="Nuevo"
        buttonStyle={styles.btnNew}
      />
      <NewProductForm
        submit={submit}
        closeModal={toggleModal}
        visible={visible}
      />
      {products && products.length ? (
        <ProductsList products={products} deleteProduct={deleteProduct}/>
      ) : (
        <Text
          style={{
            color: DARK_COLOR,
            alignSelf: 'center',
            marginTop: 25,
          }}>
          No ha agregado ningún producto a su tienda
        </Text>
      )}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
    width: wp('100%'),
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    paddingHorizontal: 8,
    paddingBottom: 4,
    fontSize:36,
    fontWeight: 'bold',
    color: LIGHT_COLOR,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(90, 90, 90, .75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  btnNew: {
    alignSelf: 'flex-end',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 24,
    marginHorizontal:10,
    marginBottom:5,
  },
});
