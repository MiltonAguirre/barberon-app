import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CheckBox, Button} from 'react-native-elements';
import {validateString, validateEmail} from '../../../utils';
import TermsButton from '../../../shares/TermsButton';
import InputForm from '../../../shares/inputForm';
import {PRIMARY_COLOR, LIGHT_COLOR, DARK_COLOR} from '../../../utils/constants';
import Logo from '../../../components/Logo';
import LinearGradient from 'react-native-linear-gradient';

function SignUp({myOnPress, goBack}) {
  const [email, onChangeEmail] = useState('');
  const [eEmail, setEEmail] = useState(false);

  const [firstName, onChangeFirstName] = useState('');
  const [eFirstName, setEFirstName] = useState(false);

  const [lastName, onChangeLastName] = useState('');
  const [eLastName, setELastName] = useState(false);

  const [country, onChangeCountry] = useState('');
  const [eCountry, setECountry] = useState(false);

  const [zip, onChangeZip] = useState(null);
  const [eZip, setEZip] = useState(false);

  const [password, onChangepassword] = useState('');
  const [epassword, setEpassword] = useState(false);
  const [password2, onChangepassword2] = useState('');

  const [checked, setChecked] = useState(false);
  const [isBarber, setIsBarber] = useState(false);

  const submit = () => {
    const v_password = password !== password2;
    const v_email = !validateEmail(email);
    const role = isBarber ? '1' : '2';
    setEpassword(v_password);
    setEEmail(v_email);
    if (!v_password && !v_email && checked) {
      myOnPress(
        firstName,
        lastName,
        email,
        country,
        zip,
        role,
        password,
        password2,
      );
    }
  };
  const inputs = [
    {
      errorInput: eEmail,
      label: 'Correo electrónico',
      onChange: onChangeEmail,
      val: email,
    },
    {
      errorInput: eFirstName,
      label: 'Nombre',
      onChange: onChangeFirstName,
      val: firstName,
      secure: true,
    },
    {
      errorInput: eLastName,
      label: 'Apellidos',
      onChange: onChangeLastName,
      val: lastName,
      secure: false,
    },
    {
      errorInput: eCountry,
      label: 'País',
      onChange: onChangeCountry,
      val: country,
      secure: false,
    },
    {
      errorInput: eZip,
      label: 'Código postal',
      onChange: onChangeZip,
      val: zip,
      secure: false,
    },

    {
      errorInput: epassword,
      label: 'Contraseña',
      onChange: onChangepassword,
      val: password,
      secure: true,
    },
  ];
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={[DARK_COLOR, PRIMARY_COLOR, DARK_COLOR]}
      style={styles.container}>
      <Logo size={100} />
      <Text style={styles.title}>Hair hub</Text>
      <Text style={styles.subtitle}>Conectá con tu estilo</Text>
      <View style={styles.card}>
        <ScrollView
          style={{marginVertical: 5, width: wp('90%'), height: hp('50%')}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            {inputs.map((item, index) => (
              <InputForm key={index} {...item} />
            ))}
            <Text style={styles.labelInput}>Repita Contraseña</Text>
            <TextInput
              style={[styles.input, epassword ? styles.error : '']}
              onChangeText={password2 => onChangepassword2(password2)}
              inputStyle={{color: LIGHT_COLOR}}
              value={password2}
              errorMessage={
                epassword
                  ? 'No coinciden las contraseñass o son muy cortas'
                  : ''
              }
              secureTextEntry={true}
            />
            <TermsButton>Términos y condiciones</TermsButton>
            <CheckBox
              center
              title="Soy barbero/a"
              checked={isBarber}
              onPress={() => {
                setIsBarber(!isBarber);
              }}
              containerStyle={styles.checkAge}
              checkedColor={PRIMARY_COLOR}
              size={15}
              textStyle={styles.checkAgeText}
            />
            <CheckBox
              center
              title="Soy mayor de 18 años"
              checked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
              containerStyle={styles.checkAge}
              checkedColor={PRIMARY_COLOR}
              size={15}
              textStyle={styles.checkAgeText}
            />
          </View>
        </ScrollView>
        <View style={styles.row}>
          <Button
            title="Volver"
            buttonStyle={styles.btnContainer}
            onPress={goBack}
          />
          <Button
            disabled={
              !validateString(email) ||
              password.length < 6 ||
              password2.length < 6 ||
              !checked
            }
            title="Registrarme"
            buttonStyle={[
              styles.btnContainer,
              {backgroundColor: PRIMARY_COLOR},
            ]}
            onPress={submit}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: DARK_COLOR,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: LIGHT_COLOR,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  subtitle: {
    fontFamily: 'Arial',
    fontSize: 14,
    color: LIGHT_COLOR,
    letterSpacing: 1.5,
  },
  card: {
    width: wp('95%'),
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  labelInput: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginTop: 4,
  },
  sublabel: {
    color: '#FFF',
    fontSize: hp('1.8%'),
    textAlign: 'center',
    marginBottom: hp('.5%'),
  },
  input: {
    width: '75%',
    backgroundColor: LIGHT_COLOR,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: DARK_COLOR,
    textAlign: 'center',
    paddingVertical: 1,
    margin: 4,
    color: DARK_COLOR,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp('2%'),
    textAlignVertical: 'center',
  },
  btnContainer: {
    width: wp('30%'),
    backgroundColor: DARK_COLOR,
    borderStyle: 'solid',
    borderColor: LIGHT_COLOR,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 4,
  },
  error: {
    borderColor: 'red',
    color: 'red',
  },
  checkAge: {
    marginLeft: 15,
    borderColor: LIGHT_COLOR,
    borderRadius: 7,
  },
  checkAgeText: {
    color: DARK_COLOR,
    opacity: 1,
  },
});
