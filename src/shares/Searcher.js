import React from 'react';
import {Icon, Input} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  DARK_COLOR,
  LIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../utils/constants';

const Searcher = ({search, onChange}) => {
  return (
    <View style={styles.row}>
      <Input
        containerStyle={styles.input}
        inputContainerStyle={{borderBottomWidth: 0, height: 40}}
        onChangeText={search => onChange(search)}
        value={search}
        inputStyle={{
          color: DARK_COLOR,
          textAlign: 'center',
          fontSize: 14,
          textAlignVertical: 'center',
        }}
        placeholder="Buscar por nombre..."
        placeholderTextColor={PRIMARY_COLOR}
        underlineColorAndroid="transparent"
        rightIcon={
          <Icon
            name="search"
            size={16}
            reverse
            color={DARK_COLOR}
            reverseColor={SECONDARY_COLOR}
            containerStyle={{margin: 0, padding: 0}}
          />
        }
      />
    </View>
  );
};

export default Searcher;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  input: {
    backgroundColor: LIGHT_COLOR,
    width: wp('80%'),
    height: 45,
    borderRadius: 50,
    color: 'white',
    borderColor: DARK_COLOR,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 3,
    paddingHorizontal: 0,
  },
});
