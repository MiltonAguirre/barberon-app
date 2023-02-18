import React from 'react';
import {Icon, Input} from 'react-native-elements';
import {View} from 'react-native';
import {DARK_COLOR, SECONDARY_COLOR} from '../utils/constants';

const Searcher = ({search, onChange}) => {
  return (
    <View style={styles.row}>
      <Input
        containerStyle={styles.inputContainer}
        inputContainerStyle={{borderBottomWidth: 0, height: 40}}
        onChangeText={search => onChange(search)}
        value={search}
        inputStyle={styles.input}
        placeholder="Buscar por nombre..."
        placeholderTextColor={DARK_COLOR}
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
