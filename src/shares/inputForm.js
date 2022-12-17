import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  DARK_COLOR,
  LIGHT_COLOR,
} from '../utils/constants';

function InputForm({label, val, errorInput, onChange}) {
  return (
    <React.Fragment>
      <TextInput
        style={[styles.input, errorInput ? styles.error : '']}
        onChangeText={val => onChange(val)}
        keyboardType="email-address"
        value={val}
        inputStyle={{color: 'white'}}
        placeholder={label}
        placeholderTextColor={LIGHT_COLOR}
      />
    </React.Fragment>
  );
}

export default InputForm;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    backgroundColor: DARK_COLOR,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 8,
    color: PRIMARY_COLOR,
  },
  error: {
    borderColor: 'red',
    color: 'red',
  },
});
