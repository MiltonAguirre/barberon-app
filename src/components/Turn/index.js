import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Icon, Badge} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {
  DARK_COLOR,
  LIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
} from '../../utils/constants';
import styles from './styles';
const Turn = ({
  id,
  start,
  turn_state,
  barbershop_name,
  product_name,
  user_name,
  price,
  imBarber,
  cancelTurn,
}) => {
  const status = ['danger', 'warning', 'success', 'primary'];
  const owned = imBarber ? user_name : barbershop_name;
  const rows = [
    {icon: 'event', title: start.slice(2, -3) + 'hs'},
    {icon: 'content-cut', title: product_name},
    {icon: imBarber ? 'person' : 'storefront', title: owned},
  ];
  return (
    <React.Fragment>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[DARK_COLOR, PRIMARY_COLOR]}
        style={styles.card}>
        <TouchableOpacity
          style={{flex: 1, alignSelf: 'flex-start', padding: 5, width: '85%'}}
          onPress={() => console.log('Now will open turn')}>
          {rows.map((row, index) => (
            <View style={styles.row} key={index}>
              <Icon key={index} name={row.icon} color={SECONDARY_COLOR} iconStyle={{marginHorizontal:5}}/>
              <Text style={[!index ? styles.titleCard: styles.subtitleCard]}>
                {row.title}
              </Text>
            </View>
          ))}
        </TouchableOpacity>

        <View style={styles.buttonsBox}>
          {turn_state !== 0 && turn_state !== 3 && (
            <Icon
              name="delete"
              size={20}
              color="red"
              onPress={() => cancelTurn(id)}
            />
          )}
        </View>
      </LinearGradient>
    </React.Fragment>
  );
};

export default Turn;
