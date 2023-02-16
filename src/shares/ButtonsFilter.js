import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
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

const ButtonsFilter = ({filter, onChange}) => {
  const isActiveTitle = val => {
    return filter == val && {color: PRIMARY_COLOR};
  };
  console.log(filter, onChange);
  const buttons = [
    {
      title: 'Pendientes',
      value: 1,
      icon: {
        name: 'date-range',
        color: filter == 1 ? PRIMARY_COLOR : SECONDARY_COLOR,
      },
      onPress: val => onChange(val),
      titleStyle: val => isActiveTitle(val),
    },
    {
      title: 'Activos',
      value: 2,
      icon: {
        name: 'event',
        color: filter == 2 ? PRIMARY_COLOR : SECONDARY_COLOR,
      },
      onPress: val => onChange(val),
      titleStyle: val => isActiveTitle(val),
    },
    {
      title: 'Cancelados',
      value: 0,
      icon: {
        name: 'event-busy',
        color: filter == 0 ? PRIMARY_COLOR : SECONDARY_COLOR,
      },
      onPress: val => onChange(val),
      titleStyle: val => isActiveTitle(val),
    },
    {
      title: 'Concluidos',
      value: 3,
      icon: {
        name: 'event-available',
        color: filter == 3 ? PRIMARY_COLOR : SECONDARY_COLOR,
      },
      onPress: val => onChange(val),
      titleStyle: val => isActiveTitle(val),
    },
  ];
  return (
    <View style={styles.row}>
      {buttons.map((btn, index) => {
        return (
          <Button
            key={btn.value}
            icon={btn.icon}
            onPress={() => btn.onPress(btn.value)}
            buttonStyle={styles.btnFilter}
            title={btn.title}
            titleStyle={[styles.btnText, btn.titleStyle(btn.value)]}

          />
        );
      })}
    </View>
  );
};
export default ButtonsFilter;

const styles = StyleSheet.create({
  row: {
    backgroundColor:'green',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  messageEmpty: {
    color: DARK_COLOR,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  btnFilter: {
    backgroundColor: LIGHT_COLOR,
    alignItems: 'center',
    padding:0
  },
  btnText: {
    fontSize: 14,
    color: SECONDARY_COLOR,
  },
});
