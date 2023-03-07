import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  DARK_COLOR,
  LIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
} from '../../utils/constants';

const Logo = ({size}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[DARK_COLOR, PRIMARY_COLOR, THIRD_COLOR]}
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: PRIMARY_COLOR,
        borderWidth: 1,
        margin: 5,
        borderRadius: 25,
        shadowColor: SECONDARY_COLOR,
        shadowOpacity: 0.8,
        shadowRadius: 15,
        shadowOffset: {width: 2, height: 2},
        elevation: 5,
      }}>
      <Text
        style={{
          fontSize: size / 2,
          color: LIGHT_COLOR,
          fontWeight: 'bold',
          fontFamily: 'Poppins-Bold',
          textShadowColor: DARK_COLOR,
          textShadowOffset: {width: 0, height: 0},
          textShadowRadius: 15,
        }}>
        H
      </Text>
    </LinearGradient>
  );
};
export default Logo;
Logo.defaultProps = {
  size: 100,
};
