import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {
  DARK_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
} from '../../utils/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const InfoDayModal = ({items, close}) => {
  return (
    <View
      style={{
        flex: 1,
        width: wp('90%'),
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowOffset: {width: 0, height: 2},
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
      }}>
      <View style={{width: '100%'}}>
        <Button
          buttonStyle={{alignSelf: 'flex-end'}}
          titleStyle={{color: DARK_COLOR, fontWeight: 'bold'}}
          type="clear"
          onPress={close}
          iconRight
          icon={
            <Icon
              name="times"
              type="font-awesome-5"
              color={SECONDARY_COLOR}
              size={24}
              iconStyle={{marginLeft: 10}}
            />
          }
        />
        <View
          style={{
            borderWidth: 1,
            borderColor: PRIMARY_COLOR,
            borderRadius: 5,
            padding: 5,
            margin: 5,
            backgroundColor: SECONDARY_COLOR,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 16,
              color: '#FFF',
            }}>
            Día{' '}
            {items[0].date.toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </View>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={items && items.reverse()}
          renderItem={({item}) => (
            <View
              style={{
                borderWidth: 1,
                padding: 5,
                borderRadius: 5,
                margin: 5,
                borderColor: THIRD_COLOR,
                width: wp('75%'),
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 14}}>
                {item.plant.name}
              </Text>
              <Text style={{fontStyle: 'italic', fontSize: 11}}>
                {item.plant.bank}
              </Text>
              <Text style={[{color: SECONDARY_COLOR, fontSize: 24}]}>
                {item.title}
              </Text>
              <Text
                style={[{color: DARK_COLOR, fontWeight: 'bold', fontSize: 18}]}>
                {item.date.getHours()}:
                {item.date.getMinutes().toString().length < 2
                  ? '0' + item.date.getMinutes()
                  : item.date.getMinutes()}{' '}
                hs
              </Text>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};
export default InfoDayModal;
