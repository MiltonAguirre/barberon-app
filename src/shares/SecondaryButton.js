import React from 'react';
import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';
import {PRIMARY_COLOR, LIGHT_COLOR} from '../utils/constants';
const SecondaryButton = ({title, onPress, loading}) => {
  const bgColor = title == 'INGRESAR' ? PRIMARY_COLOR : LIGHT_COLOR;
  const color = title == 'INGRESAR' ? LIGHT_COLOR : PRIMARY_COLOR;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        alignItems: 'center',
        borderRadius: 15,
        height: 45,
        marginVertical: 5,
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <React.Fragment>
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
      </React.Fragment>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
