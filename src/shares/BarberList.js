import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Text, Icon, Badge} from 'react-native-elements';
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

function checkIdOpen(schedules, days) {
  const now = new Date();
  let days_array = days.split(',');
  const now_wday = now.getDay();
  let res = false;
  if (days_array[now_wday]) {
    schedules.forEach(schedule => {
      if (schedule.open <= now.getHours() && schedule.close > now.getHours()) {
        res = true;
      }
    });
  }
  return res;
}

const Item = ({name, country, zip, days, schedules, goToBarber}) => {
  const isOpen = checkIdOpen(schedules, days);
  return (
    <TouchableOpacity onPress={goToBarber} style={styles.card}>
      <Badge
        status={isOpen ? 'success' : 'error'}
        containerStyle={styles.badge}
        value={isOpen ? 'Open' : 'Close'}
      />
      <View style={styles.row}>
        <View style={styles.icons}>
          <Icon name="storefront" color={DARK_COLOR} iconStyle={styles.icon} />
          <Icon name="place" color={DARK_COLOR} iconStyle={styles.icon} />
        </View>
        <View style={styles.texts}>
          <Text style={styles.titleCard}>{name}</Text>
          <Text style={[styles.subtitleCard, {fontStyle: 'italic'}]}>
            {'(' + zip + ') ' + country}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const BarberList = ({barbers, goToBarber}) => {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={barbers}
          renderItem={({item, index}) => (
            <Item {...item} goToBarber={() => goToBarber(index)} />
          )}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={
            <Text style={styles.messageEmpty}>No hay barberías en tu zona</Text>
          }
        />
      </SafeAreaView>
    </React.Fragment>
  );
};
export default BarberList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    width: wp('75%'),
    backgroundColor: LIGHT_COLOR,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFF',
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
  },
  titleCard: {
    fontSize: 18,
    fontWeight: '700',
    padding: 5,
    color: SECONDARY_COLOR,
    textTransform: 'uppercase',
  },
  subtitleCard: {
    color: DARK_COLOR,
    fontSize: 12,
  },
  messageEmpty: {
    color: DARK_COLOR,
    alignSelf: 'center',
    marginVertical: hp('1.5%'),
  },
  texts: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('55%'),
  },
  icons: {
    width: wp('12.5%'),
    borderRightColor: PRIMARY_COLOR,
    borderRightWidth: wp('.5%'),
    marginRight: wp('2.5%'),
  },
  icon: {paddingHorizontal: wp('3%'), marginVertical: hp('.5%')},
  badge: {position: 'absolute', right: 7, top: 7},
});
