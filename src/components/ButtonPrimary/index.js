import React from 'react';
import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  PRIMARY_COLOR,
  LIGHT_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
} from '../../utils/constants';
const ButtonPrimary = ({title, onPress, loading}) => {
  const bgColor =
    title == 'INGRESAR'
      ? [SECONDARY_COLOR, PRIMARY_COLOR]
      : [LIGHT_COLOR, THIRD_COLOR];
  const color = title == 'INGRESAR' ? LIGHT_COLOR : PRIMARY_COLOR;
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={bgColor}
        style={{
          alignItems: 'center',
          borderRadius: 15,
          height: 45,
          marginVertical: 5,
          justifyContent: 'center',
        }}>
        {!loading ? (
          <Text
            style={{
              color: color,
              fontWeight: 'bold',
              fontSize: 14,
            }}>
            {title}
          </Text>
        ) : (
          <ActivityIndicator size="small" color={LIGHT_COLOR} />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
