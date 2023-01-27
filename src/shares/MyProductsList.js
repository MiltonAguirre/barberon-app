import React from 'react';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MyProductCard from './MyProductCard';

const ProductsList = ({products, deleteProduct}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={products}
          renderItem={item => (
            <MyProductCard {...item.item} deleteProduct={deleteProduct} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: hp('1%'),
  },
});
