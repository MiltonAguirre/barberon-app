import React from 'react';
import {View, StyleSheet, TextInput, Text, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CheckBox, Button} from 'react-native-elements';
import {validateString, validateEmail} from '../../utils';
import TermsButton from '../../shares/TermsButton';
import InputForm from '../../shares/inputForm';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  LIGHT_COLOR,
  DARK_COLOR,
} from '../../utils/constants';

function SignUp({myOnPress, goBack}) {
  const [email, onChangeEmail] = React.useState('');
  const [eEmail, setEEmail] = React.useState(false);

  const [firstName, onChangeFirstName] = React.useState('');
  const [eFirstName, setEFirstName] = React.useState(false);

  const [lastName, onChangeLastName] = React.useState('');
  const [eLastName, setELastName] = React.useState(false);

  const [country, onChangeCountry] = React.useState('');
  const [eCountry, setECountry] = React.useState(false);

  const [zip, onChangeZip] = React.useState(null);
  const [eZip, setEZip] = React.useState(false);

  const [password, onChangepassword] = React.useState('');
  const [epassword, setEpassword] = React.useState(false);
  const [password2, onChangepassword2] = React.useState('');

  const [checked, setChecked] = React.useState(false);
  const [isBarber, setIsBarber] = React.useState(false);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BarberON</Text>
      <Text style={styles.subtitle}>Barberias a tu alcance</Text>
      <View style={styles.card}>
        <Text style={{color: PRIMARY_COLOR, fontSize: 24, fontWeight: '700'}}>
          Registrarme
        </Text>
        <ScrollView
          style={{marginVertical: 5, width: wp('90%'), height: hp('50%')}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            {[
              {
                error: eEmail,
                label: 'Correo electrónico',
                onChange: onChangeEmail,
                val: email,
              },
              {
                error: eFirstName,
                label: 'Nombre',
                onChange: onChangeFirstName,
                val: firstName,
                secure: false,
              },
              {
                error: eLastName,
                label: 'Apellidos',
                onChange: onChangeLastName,
                val: lastName,
                secure: false,
              },
              {
                error: eCountry,
                label: 'País',
                onChange: onChangeCountry,
                val: country,
                secure: false,
              },
              {
                error: eZip,
                label: 'Código postal',
                onChange: onChangeZip,
                val: zip,
                secure: false,
              },
            ].map((item, index) => (
              <InputForm
                key={index}
                val={item.val}
                label={item.label}
                errorInput={item.error}
                onChange={item.onChange}
                secure={item.secure}
              />
            ))}
            <Text style={styles.labelInput}>Contraseña</Text>
            <TextInput
              style={styles.input}
              onChangeText={password => onChangepassword(password)}
              inputStyle={{color: LIGHT_COLOR}}
              value={password}
              secureTextEntry={true}
            />
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
    </View>
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
    fontSize: hp('10%'),
    color: PRIMARY_COLOR,
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: hp('4%'),
    color: LIGHT_COLOR,
    fontWeight: '700',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
    marginBottom: hp('4.75%'),
  },
  card: {
    backgroundColor: DARK_COLOR,
    width: wp('95%'),
    borderStyle: 'solid',
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  labelInput: {
    color: '#FFF',
    fontSize: hp('2.5%'),
    fontWeight: '400',
    textAlign: 'center',
    marginTop: hp('1%'),
  },
  sublabel: {
    color: '#FFF',
    fontSize: hp('1.8%'),
    textAlign: 'center',
    marginBottom: hp('.5%'),
  },
  input: {
    width: wp('70%'),
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    textAlign: 'center',
    paddingVertical: wp('1%'),
    margin: hp('1%'),
    color: PRIMARY_COLOR,
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
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 11,
    marginHorizontal: wp('2%'),
  },
  error: {
    borderColor: 'red',
    color: 'red',
  },
  checkAge: {
    marginLeft: wp('6%'),
    backgroundColor: SECONDARY_COLOR,
    borderColor: PRIMARY_COLOR,
    borderRadius: 10,
    opacity: 0.8,
  },
  checkAgeText: {
    color: '#FFF',
    fontSize: hp('2%'),
    opacity: 1,
  },
});
