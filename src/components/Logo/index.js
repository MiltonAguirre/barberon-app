import React from 'react';
import {View, Text} from 'react-native';
import {DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR} from '../../utils/constants';

const Logo = ({size}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: DARK_COLOR,
        borderWidth: 2,
        margin: 5,
        borderRadius: 25,
        backgroundColor: PRIMARY_COLOR,
        shadowColor: PRIMARY_COLOR,
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowOffset: {width: 2, height: 2},
        elevation: 4,
      }}>
      <Text
        style={{
          fontSize: size / 2,
          color: LIGHT_COLOR,
          fontWeight: 'bold',
          fontFamily: 'Poppins-Bold',
        }}>
        H
      </Text>
    </View>
  );
};
export default Logo;
Logo.defaultProps = {
  size: 100,
};
