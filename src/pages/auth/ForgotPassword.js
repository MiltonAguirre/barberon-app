import * as React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { validateEmail } from '../../utils';
import { PRIMARY_COLOR, DARK_COLOR, SECONDARY_COLOR } from '../../utils/constants';
import CheckEmail from '../../containers/auth/CheckEmail';

const FormReset = ({email, onChangeEmail, eEmail, submit, goBack}) => (
  <View style={styles.container}>
    <Button
      title="Back"
      type="clear"
      titleStyle={{ color: '#000' }}
      icon={
        <Icon name="arrow-back" color="#000" containerStyle={{ marginRight: wp('1%') }} />
      }
      onPress={goBack}
    />
    <View style={styles.section}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.text}>Enter the e-mail associated with your account and we'll send an email with instructions to reset your password.</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.label}>E-mail Address</Text>
      <TextInput
        placeholder="mail@gmail.com"
        style={[styles.input, eEmail ? styles.error : ""]}
        keyboardType="email-address"
        onChangeText={val => onChangeEmail(val)}
        value={email}
      />
    </View>
    <View style={styles.sectionBottom}>
      <Button
        title="Send"
        buttonStyle={{ backgroundColor: SECONDARY_COLOR }}
        containerStyle={{ borderRadius: 5, width: wp('90%') }}
        onPress={submit}
      />
    </View>

  </View>
)
const ForgotPassword = (props) => {
  const [email, onChangeEmail] = React.useState('');
  const [eEmail, setEEmail] = React.useState(false);
  const [showCheck, setShowCheck] = React.useState(false);

  const submit = () => {
    const v_email = validateEmail(email);
    setEEmail(!v_email)

    if (v_email) {
      ////SUBMIT!!!!!!!
      setShowCheck(!showCheck)

    }
  }
  const goBack = () => { 
    props.navigation.navigate('Login') 
  }
  return (
    <React.Fragment>
      {
        !showCheck
        ?
          <FormReset submit={submit} goBack={goBack} email={email} eEmail={eEmail} onChangeEmail={onChangeEmail}/>
        :
          <CheckEmail/>
      }
    </React.Fragment>
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
  },
  section: {
    marginVertical: hp('1.5%'),
    paddingHorizontal: wp('5%')
  },
  sectionBottom: {
    marginVertical: hp('2.5%'),
    alignItems: 'center',
    width: wp('100%')
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000'
  },
  text: {
    fontSize: 16,
    color: '#000',
    marginVertical: hp('2%')
  },
  input: {
    borderColor: DARK_COLOR,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    width: wp('90%'),
    alignSelf: 'center',
    marginBottom: hp('.5%'),
    marginTop: hp('1.5%')
  },
  error: {
    borderColor: 'red',
    color: 'red'
  }
})