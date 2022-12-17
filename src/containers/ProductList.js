import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR} from '../utils/constants';
import ProductPreview from '../shares/ProductPreview';
import ProductCard from '../shares/ProductCard';
const newDate = new Date();
const ProductsList = ({products, newTurn, myRole}) => {
  newDate.setMinutes(0);
  const [showModal, setShowModal] = React.useState(false);
  const [productIdx, setProductIdx] = React.useState(-1);
  const [dateTime, setDateTime] = React.useState(newDate);
  const [date, setDate] = React.useState(newDate);

  const showProduct = index => {
    setShowModal(!showModal);
    setProductIdx(index);
  };
  const submitNewTurn = product_id => {
    let start =
      date.getFullYear() +
      '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2) +
      ' ';
    start +=
      ('0' + dateTime.getHours()).slice(-2) +
      ':' +
      ('0' + dateTime.getMinutes()).slice(-2);
    setShowModal(!showModal);
    newTurn(product_id, start);
  };

  const [showTime, setShowTime] = React.useState(false);
  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate || dateTime;
    setShowTime(!showTime);
    setDateTime(currentDate);
  };
  const showTimepicker = () => {
    setShowTime(true);
  };

  const [showDate, setShowDate] = React.useState(false);
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(!showDate);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDate(true);
  };
  console.log('myRole : ', myRole);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{height: hp('25%'), paddingVertical: hp('1.5%')}}>
        <FlatList
          data={products}
          renderItem={({item, index}) => (
            <ProductPreview
              {...item}
              index={index}
              onPressProduct={showProduct}
            />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          ListEmptyComponent={
            <Text style={styles.messageEmpty}>
              La barbería no ha cargado ningún producto
            </Text>
          }
        />

        {showModal && products[productIdx] && (
          <Modal visible={showModal} animationType="fade" transparent>
            <View style={styles.modal}>
              <Button
                onPress={() => setShowModal(!showModal)}
                icon={{name:'times', type:'font-awesome-5', color:PRIMARY_COLOR}}
                buttonStyle={styles.closeBtn}
              />
              <ProductCard {...products[productIdx]} />

              <>
                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    style={styles.btnDelay}
                    onPress={showDatepicker}>
                    <Text style={styles.textDelay}>
                      {'Día: ' + date.toLocaleDateString()}
                    </Text>
                  </TouchableOpacity>
                  {showDate && (
                    <DateTimePicker
                      testID="datePicker"
                      value={date}
                      onChange={onChangeDate}
                    />
                  )}
                  <TouchableOpacity
                    style={styles.btnDelay}
                    onPress={showTimepicker}>
                    <Text style={styles.textDelay}>
                      {'Horario: ' +
                        dateTime.getHours() +
                        ':' +
                        (dateTime.getMinutes() || '00') +
                        'hs'}
                    </Text>
                  </TouchableOpacity>
                  {showTime && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={dateTime}
                      mode="time"
                      display="spinner"
                      is24Hour={true}
                      onChange={onChangeTime}
                      minuteInterval={30}
                    />
                  )}
                </View>

                <View style={[styles.row, {marginTop: hp('2.5%')}]}>
                  <Button
                    onPress={() => submitNewTurn(products[productIdx].id)}
                    title="Obtener Turno"
                    titleStyle={{
                      color: LIGHT_COLOR,
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                    }}
                    buttonStyle={[
                      styles.bottomBtns,
                      {backgroundColor: PRIMARY_COLOR},
                    ]}
                    disabled={myRole == null}
                  />
                </View>
              </>
            </View>
          </Modal>
        )}
      </SafeAreaView>
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    width: wp('85%'),
    alignItems: 'center',
  },
  modal: {
    height: hp('100%'),
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  messageEmpty: {
    color: DARK_COLOR,
    textAlign: 'center',
    padding: hp('2.5%'),
    margin: hp('2.5%'),
  },
  btnDelay: {
    height: hp('4%'),
    width: wp('70%'),
    margin: hp('1%'),
    borderRadius: wp('2.5%'),
    backgroundColor: '#000',
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: LIGHT_COLOR,
    borderWidth: 1,
  },
  bottomBtns: {
    height: hp('7.5%'),
    backgroundColor: LIGHT_COLOR,
    borderRadius: 10,
  },
  textDelay: {
    color: LIGHT_COLOR,
    fontWeight: '700',
    textAlign: 'center',
  },
  closeBtn: {
    alignSelf: 'flex-end',
    padding: 5,
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
  },
});
