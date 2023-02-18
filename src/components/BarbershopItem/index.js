import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Icon, Badge} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {checkIdOpen} from '../../utils';
import {
  DARK_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../utils/constants';
import styles from './styles';

const BarbershopItem = ({name, country, zip, days, schedules, goToBarber}) => {
  const isOpen = checkIdOpen(schedules, days);
  const rows = [
    {icon: 'storefront', title: name},
    {icon: 'place', title: '(' + zip + ') ' + country},
  ];
  return (
    <TouchableOpacity onPress={goToBarber}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[PRIMARY_COLOR, DARK_COLOR]}
        style={styles.card}>
        <Badge
          status={isOpen ? 'success' : 'error'}
          containerStyle={styles.badge}
          value={isOpen ? 'Abierto' : 'Cerrado'}
          textStyle={{fontFamily: 'Poppins-Italic'}}
        />
        {rows.map((row, index) => (
          <View style={styles.row} key={index}>
            <Icon
              key={index}
              name={row.icon}
              color={SECONDARY_COLOR}
              iconStyle={{paddingBottom: 4}}
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
