import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Modal,
} from 'react-native';
import {Button} from 'react-native-elements';
import ProductPreview from '../../shares/ProductPreview';
import ProductCard from '../../shares/ProductCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DARK_COLOR, LIGHT_COLOR} from '../../utils/constants';

const ProductsList = ({products}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [productIdx, setProductIdx] = React.useState(-1);

  const showProduct = index => {
    setShowModal(!showModal);
    setProductIdx(index);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{height: hp('25%'), paddingVertical: hp('1.5%')}}>
        <FlatList
          data={products}
          renderItem={({item, index}) => (
            <ProductPreview
              {...item}
              index={index}
              onPressProduct={showProduct}
            />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          ListEmptyComponent={
            <Text style={styles.messageEmpty}>
              La barbería no ha cargado ningún producto
            </Text>
          }
        />

        {showModal && products[productIdx] && (
          <Modal visible={true} animationType="fade" transparent>
            <View style={styles.modal}>
              <ProductCard {...products[productIdx]} />

              <View style={[styles.row, {marginTop: hp('2.5%')}]}>
                <Button
                  onPress={() => setShowModal(!showModal)}
                  title="X"
                  titleStyle={{
                    color: LIGHT_COLOR,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                  buttonStyle={styles.bottomBtns}
                />
              </View>
            </View>
          </Modal>
        )}
      </SafeAreaView>
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    width: wp('85%'),
    alignItems: 'center',
    height: hp('20%'),
  },
  modal: {
    height: hp('100%'),
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  messageEmpty: {
    color: DARK_COLOR,
    textAlign: 'center',
    padding: hp('2.5%'),
    margin: hp('2.5%'),
  },
  bottomBtns: {
    width: wp('20%'),
    height: hp('7.5%'),
    borderColor: LIGHT_COLOR,
    borderRadius: wp('2.5%'),
    borderWidth: 1,
    backgroundColor: DARK_COLOR,
  },
});
