import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {TextInputMask} from 'react-native-masked-text';
import Header from '../../components/Header';
import SchedulesForm from '../../shares/SchedulesForm';
import InputForm from '../../shares/inputForm';
import {
  PRIMARY_COLOR,
  DARK_COLOR,
  LIGHT_COLOR,
  THIRD_COLOR,
} from '../../utils/constants';
import {validateString, validatePhone, validateLocation} from '../../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function FormBarber({submit}) {
  const [name, onChangeName] = useState('');
  const [eName, setEName] = useState(false);

  const [address, onChangeAddress] = useState('');
  const [eAddress, setEAddress] = useState(false);

  const [city, onChangeCity] = useState('');
  const [eCity, setECity] = useState(false);

  const [state, onChangeState] = useState('');
  const [eState, setEState] = useState(false);

  const [zip, onChangeZip] = useState('');
  const [eZip, setEZip] = useState(false);

  const [country, onChangeCountry] = useState('');
  const [eCountry, setECountry] = useState(false);

  const [phone, onChangePhone] = useState('');
  const [ePhone, setEPhone] = useState(false);

  const [open, setOpen] = useState(new Date());
  const [close, setClose] = useState(new Date());
  const [checked, setChecked] = useState(0);

  const sendForm = () => {
    const v_name = !validateString(name);
    const v_phone = !validatePhone(phone);
    const v_address = !validateLocation(address);
    const v_city = !validateLocation(city);
    const v_state = !validateLocation(state);
    const v_country = !validateLocation(country);
    const v_hour = !(open.getHours() && open.getHours() < close.getHours());
    const v_days = !(Number.isInteger(checked) && checked < 3);
    setEName(v_name);
    setEPhone(v_phone);
    setEAddress(v_address);
    setECity(v_city);
    setEState(v_state);
    if (
      !v_name &&
      !v_phone &&
      !v_address &&
      !v_city &&
      !v_state &&
      !v_country &&
      !v_hour &&
      !v_days
    ) {
      let days;
      switch (checked) {
        case 0:
          days = [0, 0, 1, 1, 1, 1, 1];
          break;
        case 1:
          days = [1, 0, 1, 1, 1, 1, 1];
          break;
        case 2:
          days = [1, 1, 1, 1, 1, 1, 1];
          break;
        default:
          break;
      }
      const opens = [open.getHours()];
      const closes = [close.getHours()];
      submit(
        name,
        phone,
        zip,
        country,
        address,
        city,
        state,
        days,
        opens,
        closes,
      );
    }
  };
  useEffect(() => {
    const aux_open = open;
    const aux_close = close;
    aux_open.setHours(8);
    aux_open.setMinutes(0);
    aux_close.setHours(20);
    aux_close.setMinutes(0);
    setOpen(aux_open);
    setClose(aux_close);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Crear mi barbería</Text>

        <ScrollView>
          <View style={styles.card}>
            <InputForm
              val={name}
              label={'Nombre'}
              errorInput={eName}
              onChange={onChangeName}
              secure={false}
            />
            <TextInputMask
              style={[styles.input, ePhone ? styles.error : '']}
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '+54 (999)',
              }}
              value={phone}
              onChangeText={phone => onChangePhone(phone)}
              placeholder="Telefono"
            />
            <Text style={styles.sublabel}>
              (Sin el 15, anteponiendo código de área sin el cero)
            </Text>
            <InputForm
              val={zip}
              label={'Codigo postal'}
              errorInput={eZip}
              onChange={onChangeZip}
              secure={false}
            />
            <InputForm
              val={country}
              label={'Pais'}
              errorInput={eCountry}
              onChange={onChangeCountry}
              secure={false}
            />

            <InputForm
              val={address}
              label={'Dirección'}
              errorInput={eAddress}
              onChange={onChangeAddress}
              secure={false}
            />
            <InputForm
              val={city}
              label={'Ciudad'}
              errorInput={eCity}
              onChange={onChangeCity}
              secure={false}
            />
            <InputForm
              val={state}
              label={'Localidad'}
              errorInput={eState}
              onChange={onChangeState}
              secure={false}
            />

            <SchedulesForm
              open={open}
              close={close}
              checked={checked}
              setOpen={setOpen}
              setClose={setClose}
              setChecked={setChecked}
            />
            <Button
              disabled={
                !validateString(name) ||
                !validateString(phone) ||
                !validateString(address) ||
                !validateString(city) ||
                !validateString(state)
              }
              title="Crear"
              buttonStyle={styles.btnContainer}
              onPress={sendForm}
            />
          </View>
        </ScrollView>
      </View>
    </React.Fragment>
  );
}

export default FormBarber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: LIGHT_COLOR,
    width: wp('100%'),
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: hp('5%'),
    fontWeight: 'bold',
    color: LIGHT_COLOR,
    textTransform: 'uppercase',
    paddingVertical: hp('2%'),
    textShadowColor: 'rgba(90, 90, 90, .75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  card: {
    width: wp('90%'),
    backgroundColor: LIGHT_COLOR,
    borderRadius: hp('2%'),
    borderWidth: 2,
    borderColor: '#FFF',
    paddingVertical: hp('2.5%'),
    marginVertical: hp('2%'),
    alignSelf: 'center',
    alignItems: 'center',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 2,
  },
  input: {
    width: '80%',
    backgroundColor: LIGHT_COLOR,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: THIRD_COLOR,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 8,
    paddingVertical: 2,
    color: DARK_COLOR,
    fontWeight: 'bold',
  },
  btnContainer: {
    width: wp('70%'),
    backgroundColor: PRIMARY_COLOR,
    borderStyle: 'solid',
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: wp('2.5%'),
    marginVertical: hp('2%'),
  },
  label: {
    color: DARK_COLOR,
    fontSize: hp('1.8%'),
    textAlign: 'center',
    padding: wp('1.5%'),
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  sublabel: {
    color: DARK_COLOR,
    fontSize: hp('1.8%'),
    textAlign: 'center',
    marginBottom: hp('.5%'),
  },
  error: {
    borderColor: 'red',
    color: 'red',
  },
  inputDay: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  btnTime: {
    height: hp('4%'),
    width: wp('20%'),
    marginLeft: wp('1%'),
    marginRight: wp('5%'),
    borderRadius: wp('2.5%'),
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    backgroundColor: DARK_COLOR,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  schedules: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('2.5%'),
  },
});
