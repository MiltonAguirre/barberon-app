import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import BarbershopItem from '../components/BarbershopItem';
import Styles from '../utils/styles';
const BarberList = ({items, omChangeSelected}) => {
  return (
    <React.Fragment>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
        horizontal
          data={items}
          renderItem={({item, index}) => (
            <BarbershopItem {...item} omChangeSelected={() => omChangeSelected(index)} />
          )}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={
            <Text style={Styles.text}>No hay barberías en tu zona</Text>
          }
        />
      </SafeAreaView>
    </React.Fragment>
  );
};
export default BarberList;
