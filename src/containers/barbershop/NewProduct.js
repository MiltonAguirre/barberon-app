import React, {useState, useEffect} from 'react';
import {Alert, View, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {launchImageLibrary} from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR} from '../../utils/constants';
import InputForm from '../../shares/inputForm';
import {hasAndroidPermissionGallery} from '../../utils';
const options = {
  title: 'Please choise a picture',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Picture',
  chooseFromLibraryButtonTitle: 'Choice álbum',
  quality: 0.75,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const NewProductForm = ({submit, closeModal, visible}) => {
  const [name, setName] = useState('');
  const [ename, seteName] = useState(false);

  const [description, setDescription] = useState('');
  const [edescription, seteDescription] = useState(false);

  const [delay, setDelay] = useState(new Date());
  const [edelay, seteDelay] = useState(false);

  const [price, setPrice] = useState('');
  const [eprice, setePrice] = useState(false);

  const [photo, setPhoto] = useState(null);
  const [ephoto, setePhoto] = useState(false);

  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || delay;
    setShow(!show);
    setDelay(currentDate);
  };
  const showTimepicker = () => {
    setShow(true);
  };
  const attachPhoto = async () => {
    console.log('attachPhoto');

    const status = await hasAndroidPermissionGallery();
    console.log(status);
    if (status) {
      const response = await launchImageLibrary(options);
      if (response.didCancel) {
        setPhoto(null);
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        if (response.assets[0].uri) {
          setPhoto(response.assets[0].uri);
        }
      }
    }
  };
  const preSubmit = () => {
    if ((name, price, description, delay, photo)) {
      submit(
        name,
        price,
        description,
        delay.getHours(),
        delay.getMinutes(),
        photo,
      );
    }
  };
  useEffect(() => {
    const aux_delay = delay;
    aux_delay.setHours(1);
    aux_delay.setMinutes(0);
    setDelay(aux_delay);
  }, [delay]);

  const inputs = [
    {
      errorInput: ename,
      label: 'Nombre',
      onChange: setName,
      val: name,
    },
    {
      errorInput: edescription,
      label: 'Descripción',
      onChange: setDescription,
      val: description,
    },
    {
      errorInput: eprice,
      label: 'Precio',
      onChange: setPrice,
      val: price,
    },
  ];
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContent}>
        <View style={styles.modal}>
          <Text style={styles.textModal}>Crear Producto</Text>
          {inputs.map((item, index) => (
            <InputForm key={index} {...item} />
          ))}
          <TouchableOpacity style={styles.btnDelay} onPress={showTimepicker}>
            <Icon name="person" color={LIGHT_COLOR} />
            <Text style={{color: LIGHT_COLOR, textAlign: 'center'}}>
              {delay.getHours() + ':' + (delay.getMinutes() || '00') + 'hs'}
            </Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={delay}
              mode="time"
              is24Hour={true}
              display="spinner"
              onChange={onChange}
              minuteInterval={30}
            />
          )}
          <TouchableOpacity
            style={[styles.btnPhoto, photo && {backgroundColor: PRIMARY_COLOR}]}
            onPress={attachPhoto}>
            <Icon
              name="photo"
              size={30}
              color={photo ? LIGHT_COLOR : DARK_COLOR}
            />
            <Text style={[styles.btnText, photo && {color: LIGHT_COLOR}]}>
              Foto de muestra
            </Text>
          </TouchableOpacity>

          <View style={styles.rowButtons}>
            <Button
              onPress={closeModal}
              title="Cancelar"
              titleStyle={{color: PRIMARY_COLOR}}
              buttonStyle={[
                styles.btn,
                {
                  backgroundColor: LIGHT_COLOR,
                },
              ]}
            />
            <Button
              onPress={preSubmit}
              title="Nuevo"
              titleStyle={{color: LIGHT_COLOR}}
              buttonStyle={[
                styles.btn,
                {
                  backgroundColor: PRIMARY_COLOR,
                },
              ]}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default NewProductForm;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    opacity: 0.97,
  },
  modal: {
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
    backgroundColor: DARK_COLOR,
  },
  rowButtons: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
    width: wp('60%'),
  },
  btnModal: {
    marginHorizontal: wp('10%'),
  },
  textModal: {
    fontSize: 16,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('5%'),
    color: 'white',
    fontWeight: 'bold',
  },
  btnPhoto: {
    height: hp('5%'),
    width: wp('45%'),
    marginVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: LIGHT_COLOR,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: DARK_COLOR,
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
  },
  btnDelay: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: wp('70%'),
    margin: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    backgroundColor: DARK_COLOR,
    textAlign: 'center',
    justifyContent: 'center',
  },
  btn: {
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  input: {
    width: wp('70%'),
    height: 40,
    backgroundColor: DARK_COLOR,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 8,
    color: PRIMARY_COLOR,
  },
  error: {
    borderColor: 'red',
    color: 'red',
  },
});
