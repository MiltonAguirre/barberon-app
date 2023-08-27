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

const BarbershopCard = ({name, country, zip, days, schedules, goToBarber}) => {
  const isOpen = checkIsOpen(schedules, days);
  const rows = [
    {icon: 'storefront', title: name},
    {icon: 'place', title: '(' + zip + ') ' + country},
  ];
  const weekDays = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  let days_work = [];
  if (days && typeof days === 'string') {
    days_work = days.split(',');
  }
  console.log('SCHEDULES: ', schedules);
  return (
    <TouchableOpacity onPress={goToBarber}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[DARK_COLOR, PRIMARY_COLOR, SECONDARY_COLOR]}
        style={styles.card}>
        <Badge
          status={isOpen ? 'success' : 'error'}
          containerStyle={styles.badge}
          value={isOpen ? 'Abierto' : 'Cerrado'}
          textStyle={styles.italic}
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
        <View style={[styles.row, styles.rowDays]}>
          {weekDays.map((weekDay, index) => {
            const active = days_work[index];
            return (
              <View key={index}>
                <Text
                  style={[
                    active > 0 ? styles.textActive : styles.textDesactive,
                  ]}>
                  {weekDay[0]}
                </Text>
              </View>
            );
          })}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default BarbershopCard;
