import React, {useState} from 'react';
import {View, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';

import {DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR} from '../../utils/constants';
import InputForm from '../../shares/inputForm';
const DATE = new Date();
const EditProductForm = ({
  submit,
  closeModal,
  visible,
  id,
  name,
  price,
  description,
  hours,
  minutes,
}) => {
  DATE.setHours(hours);
  DATE.setMinutes(minutes);
  DATE.setSeconds(0);
  const [nameForm, setName] = useState(name);
  const [ename, seteName] = useState(false);

  const [descriptionForm, setDescription] = useState(description);
  const [edescription, seteDescription] = useState(false);

  const [delayForm, setDelay] = useState(DATE);
  const [edelay, seteDelay] = useState(false);

  const [priceForm, setPrice] = useState(price.toString());
  const [eprice, setePrice] = useState(false);

  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || delayForm;
    setShow(!show);
    setDelay(currentDate);
  };

  const showTimepicker = () => {
    setShow(true);
  };
  const preSubmit = () => {
    closeModal();
    submit(
      id,
      nameForm,
      priceForm,
      descriptionForm,
      delayForm.getHours(),
      delayForm.getMinutes(),
    );
  };
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContent}>
        <View style={styles.modal}>
          <Text style={styles.textModal}>Editar Producto</Text>
          <InputForm
            label="Nombre"
            val={nameForm}
            errorInput={ename}
            onChange={setName}
          />
          <InputForm
            label="Precio"
            val={priceForm}
            errorInput={eprice}
            onChange={setPrice}
          />
          <TouchableOpacity style={styles.btnDelay} onPress={showTimepicker}>
            <Text style={{color: LIGHT_COLOR, textAlign: 'center'}}>
              {'Demora ' +
                delayForm.getHours() +
                ':' +
                (delayForm.getMinutes() || '00') +
                'hs'}
            </Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={delayForm}
              mode="time"
              is24Hour={true}
              display="spinner"
              onChange={onChange}
              minuteInterval={30}
            />
          )}
          <InputForm
            label="Descripción"
            val={descriptionForm}
            errorInput={edescription}
            onChange={setDescription}
          />

          <View style={styles.rowButtons}>
            <Button
              onPress={closeModal}
              title="Cancelar"
              titleStyle={{color: PRIMARY_COLOR}}
              buttonStyle={{
                backgroundColor: DARK_COLOR,
                borderRadius: hp('2.5%'),
                paddingHorizontal: wp('3.5%'),
              }}
            />
            <Button
              onPress={preSubmit}
              title="Guardar"
              buttonStyle={{
                backgroundColor: PRIMARY_COLOR,
                borderRadius: hp('2.5%'),
                paddingHorizontal: wp('3.5%'),
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default EditProductForm;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    opacity: 0.97,
  },
  modal: {
    height: hp('60%'),
    width: wp('80%'),
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 2,
    padding: 2,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: LIGHT_COLOR,
  },
  rowButtons: {
    flexDirection: 'row',
    marginVertical: hp('2%'),
    justifyContent: 'space-between',
    width: wp('60%'),
  },
  btnModal: {
    marginHorizontal: wp('10%'),
  },
  textModal: {
    fontSize: hp('2.5%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('5%'),
    color: DARK_COLOR,
    fontWeight: 'bold',
  },
  btnDelay: {
    height: hp('3.75%'),
    width: wp('70%'),
    margin: hp('1%'),
    borderRadius: wp('5%'),
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    backgroundColor: DARK_COLOR,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
