import React from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {Text, Icon, Badge, Button, Image} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  DARK_COLOR,
  LIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
} from '../utils/constants';

const DAYS = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'jueves',
  'Viernes',
  'Sábado',
];
const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiember',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
const MONTHS_SHORT = [
  'ENE',
  'FEB',
  'MAR',
  'ABR',
  'MAY',
  'JUN',
  'JUL',
  'AGO',
  'SEP',
  'OCT',
  'NOV',
  'DIC',
];

const ModalTurn = ({
  closeModal,
  visible,
  state,
  start,
  barbershop,
  product,
  user,
  imBarber,
  id,
  cancelTurn,
  confirmTurn,
  ending,
}) => {
  const date = new Date(start);
  const dateTurn =
    DAYS[date.getDay()] +
    ' ' +
    date.getDate() +
    ' ' +
    MONTHS_SHORT[date.getMonth()] +
    ' ' +
    date.getFullYear().toString().slice(-2);
  const hourTurn = date.getHours() + ':' + (date.getMinutes() || '00') + ' hs';
  const jobTime = product['hours'] + ':' + (product['minutes'] || '00') + ' hs';
  const status = ['danger', 'warning', 'success', 'primary'];

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalContent}>
        <View style={styles.modal}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <Badge
              status={status[state]}
              value=" "
              containerStyle={styles.badge}
            />
            <Icon
              name="close"
              size={25}
              color={DARK_COLOR}
              onPress={closeModal}
            />
          </View>
          <View style={styles.contentTitle}>
            <Text style={[styles.date, {marginTop: 5}]}>{dateTurn}</Text>
            <Text style={[styles.date, {marginBottom: 5}]}>{hourTurn}</Text>
          </View>
          <View style={[styles.info, {borderTopWidth: 0}]}>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <View style={styles.row}>
                <Icon
                  name="content-cut"
                  color={THIRD_COLOR}
                  iconStyle={{paddingRight: 10}}
                  size={28}
                />
                <Text style={styles.textName}>{product.name}</Text>
              </View>
              <View style={styles.row}>
                <Icon name="attach-money" color={DARK_COLOR} />
                <Text style={styles.price}>{product.price}</Text>
              </View>
            </View>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <Text style={styles.desc}>{product.description}</Text>
              <View style={styles.row}>
                <Icon
                  name="schedule"
                  color={DARK_COLOR}
                  iconStyle={{paddingRight: 10}}
                />
                <Text style={styles.price}>{ending}</Text>
              </View>
            </View>
          </View>
          {imBarber ? (
            <View style={styles.info}>
              <View style={styles.row}>
                <Icon
                  name="face"
                  color={THIRD_COLOR}
                  iconStyle={{paddingRight: 10}}
                  size={28}
                />
                <Text style={styles.textName}>
                  {user.data_user.first_name + ' ' + user.data_user.last_name}
                </Text>
              </View>
              <View style={styles.row}>
                <Icon
                  name="mail"
                  color={THIRD_COLOR}
                  iconStyle={{paddingRight: 10}}
                />
                <Text style={styles.text}>{user.email}</Text>
              </View>
              <View style={styles.row}>
                <Icon
                  name="phone"
                  color={THIRD_COLOR}
                  iconStyle={{paddingRight: 10}}
                />
                <Text style={styles.text}>{user.data_user.phone || ' - '}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.info}>
              <View style={styles.row}>
                <Icon
                  name="storefront"
                  color={THIRD_COLOR}
                  iconStyle={{paddingRight: 10}}
                  size={28}
                />
                <Text style={styles.textName}>{barbershop.name}</Text>
              </View>
              <View style={styles.row}>
                <Icon
                  name="phone"
                  color={THIRD_COLOR}
                  iconStyle={{paddingRight: 10}}
                />
                <Text style={styles.text}>{barbershop.phone}</Text>
              </View>
              <View style={styles.row}>
                <Icon
                  name="place"
                  color={THIRD_COLOR}
                  iconStyle={{paddingRight: 10}}
                />
                <Text style={styles.text}>
                  {barbershop.location.address +
                    ' (CP: ' +
                    barbershop.location?.zip +
                    ') ' +
                    barbershop.location?.country}
                </Text>
              </View>
              <View style={styles.row}>
                <Icon
                  name="location-city"
                  color={THIRD_COLOR}
                  iconStyle={{paddingRight: 10}}
                />
                <Text style={styles.text}>
                  {barbershop.location?.city +
                    ' - ' +
                    barbershop.location?.state}
                </Text>
              </View>
            </View>
          )}
          <View style={styles.contentBtns}>
            <View style={[styles.row, {justifyContent: 'space-around'}]}>
              <Button
                icon={<Icon name="clear" color={LIGHT_COLOR} />}
                title="Cancelar"
                titleStyle={{color: LIGHT_COLOR}}
                buttonStyle={{backgroundColor: DARK_COLOR}}
                onPress={() => cancelTurn(id)}
              />
              <Button
                icon={<Icon name="check" color={LIGHT_COLOR} />}
                title="Confirmar"
                buttonStyle={{backgroundColor: PRIMARY_COLOR}}
                onPress={() => confirmTurn(id)}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ModalTurn;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2.5%'),
  },
  modal: {
    backgroundColor: LIGHT_COLOR,
    borderWidth: 3,
    borderColor: DARK_COLOR,
    width: wp('90%'),
    justifyContent: 'center',
    margin: 5,
    padding: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    padding: 10,
    marginBottom: 10,
    borderTopColor: THIRD_COLOR,
    borderTopWidth: 1,
  },
  textName: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  desc: {
    fontSize: 14,
    color: DARK_COLOR,
    marginTop: 5,
    fontStyle: 'italic',
  },
  price: {
    fontSize: 18,
    color: PRIMARY_COLOR,
    fontWeight: '700',
    textAlignVertical: 'center',
  },
  text: {
    fontSize: 14,
    color: DARK_COLOR,
    textAlignVertical: 'center',
  },
  date: {
    color: LIGHT_COLOR,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
  },
  badge: {
    position: 'absolute',
    top: 17,
    left: 17,
  },
  contentTitle: {
    backgroundColor: PRIMARY_COLOR,
    padding: 5,
    margin: 15,
    borderRadius: 20,
    alignSelf: 'center',
    width: wp('70%'),
  },
});
