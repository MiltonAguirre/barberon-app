import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Icon, Badge} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {checkIdOpen} from '../../utils';
import {DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR} from '../../utils/constants';
import styles from './styles';

const BarbershopItem = ({name, country, zip, days, schedules, goToBarber}) => {
  const isOpen = checkIdOpen(schedules, days);
  return (
    <TouchableOpacity onPress={goToBarber}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[LIGHT_COLOR,SECONDARY_COLOR]}
        style={styles.card}>
        <Badge
          status={isOpen ? 'success' : 'error'}
          containerStyle={styles.badge}
          value={isOpen ? 'Open' : 'Close'}
        />
        <View style={styles.row}>
          <View style={styles.icons}>
            <Icon
              name="storefront"
              color={DARK_COLOR}
              iconStyle={styles.icon}
            />
            <Icon name="place" color={DARK_COLOR} iconStyle={styles.icon} />
          </View>
          <View style={styles.texts}>
            <Text style={styles.titleCard}>{name}</Text>
            <Text style={[styles.subtitleCard, {fontStyle: 'italic'}]}>
              {'(' + zip + ') ' + country}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default BarbershopItem;
