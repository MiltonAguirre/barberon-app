import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {
  DARK_COLOR,
  LIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../utils/constants';

const ItemMenu = ({focused, name, nameIcon}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon
        name={nameIcon}
        size={24}
        color={focused ? SECONDARY_COLOR : LIGHT_COLOR}
      />
      {focused ? (
        <Text
          style={{
            color: SECONDARY_COLOR,
            fontWeight: '700',
            fontSize: 18,
          }}>
          {' '}
          {name}
        </Text>
      ) : (
        <Text style={{color: LIGHT_COLOR, fontSize: 16}}> {name}</Text>
      )}
    </View>
  );
};

export default ItemMenu;
