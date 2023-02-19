import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {DARK_COLOR, LIGHT_COLOR, THIRD_COLOR} from '../utils/constants';

function InputForm({label, val, errorInput, onChange, secure}) {
  return (
    <React.Fragment>
      <TextInput
        style={[styles.input, errorInput ? styles.error : '']}
        onChangeText={val => onChange(val)}
        keyboardType="email-address"
        value={val}
        inputStyle={{color: 'white'}}
        placeholder={label}
        secureTextEntry={secure}
      />
    </React.Fragment>
  );
}

export default InputForm;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    backgroundColor: LIGHT_COLOR,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: THIRD_COLOR,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 8,
    paddingVertical: 2,
    color: DARK_COLOR,
    fontWeight: 'bold',
  },
  error: {
    borderColor: 'red',
    color: 'red',
  },
});
