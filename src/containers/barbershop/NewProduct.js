import React, {useState, useEffect} from 'react';
import {
  View,
  Modal,
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {launchImageLibrary} from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR} from '../../utils/constants';
import InputForm from '../../shares/inputForm';
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
async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(permission, {
    title: 'Image gallery app permission',
    message: 'Image gallery needs your permission to access your photos',
    buttonPositive: 'Ok',
  });
  return status === 'granted';
}
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

    const status = await hasAndroidPermission();
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
    if ((name, price, description, delay, photo))
      submit(
        name,
        price,
        description,
        delay.getHours(),
        delay.getMinutes(),
        photo,
      );
  };
  useEffect(() => {
    const aux_delay = delay;
    aux_delay.setHours(1);
    aux_delay.setMinutes(0);
    setDelay(aux_delay);
  }, []);
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContent}>
        <View style={styles.modal}>
          <Text style={styles.textModal}>Crear Producto</Text>
          <InputForm
            label="Nombre"
            val={name}
            errorInput={ename}
            onChange={setName}
          />

          <TextInput
            style={[styles.input, eprice ? styles.error : '']}
            onChangeText={val => setPrice(val)}
            keyboardType="numeric"
            value={price}
            inputStyle={{color: 'white'}}
            placeholder="Precio"
            placeholderTextColor={LIGHT_COLOR}
          />
          <TouchableOpacity style={styles.btnDelay} onPress={showTimepicker}>
            <Text style={{color: LIGHT_COLOR, textAlign: 'center'}}>
              {'Demora ' +
                delay.getHours() +
                ':' +
                (delay.getMinutes() || '00') +
                'hs'}
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
          <InputForm
            label="Descripción"
            val={description}
            errorInput={edescription}
            onChange={setDescription}
          />
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
              buttonStyle={{
                backgroundColor: LIGHT_COLOR,
                borderRadius: 12,
                paddingHorizontal: 10,
              }}
            />
            <Button
              onPress={preSubmit}
              title="Nuevo"
              buttonStyle={{
                backgroundColor: PRIMARY_COLOR,
                borderRadius: 12,
                paddingHorizontal: 10,
              }}
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
    height: 10,
    width: wp('70%'),
    margin: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    backgroundColor: DARK_COLOR,
    textAlign: 'center',
    justifyContent: 'center',
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
