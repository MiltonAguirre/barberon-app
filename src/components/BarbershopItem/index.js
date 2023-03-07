import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Icon, Badge} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {checkIsOpen} from '../../utils';
import {
  DARK_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
} from '../../utils/constants';
import styles from './styles';

const BarbershopItem = ({
  name,
  country,
  zip,
  days,
  schedules,
  onChangeSelected,
}) => {
  const isOpen = checkIsOpen(schedules, days);
  const rows = [
    {icon: 'storefront', title: name},
    {icon: 'place', title: '(' + zip + ') ' + country},
  ];
  return (
    <TouchableOpacity onPress={onChangeSelected}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[PRIMARY_COLOR,PRIMARY_COLOR, SECONDARY_COLOR]}
        style={styles.card}>
        <Badge
          status={isOpen ? 'success' : 'error'}
          containerStyle={styles.badge}
          value={isOpen ? 'A' : 'C'}
          textStyle={{fontFamily: 'Poppins-Regular'}}
        />
        {rows.map((row, index) => (
          <View style={styles.row} key={index}>
            <Icon
              key={index}
              name={row.icon}
              color={THIRD_COLOR}
              iconStyle={styles.icon}
            />
            <Text style={[!index ? styles.titleCard : styles.subtitleCard]}>
              {row.title}
            </Text>
          </View>
        ))}
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default BarbershopItem;
