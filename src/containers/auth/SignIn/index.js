import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import FadeInView from '../../../components/FadeInView';
import Logo from '../../../components/Logo';
import SecondaryButton from '../../../shares/SecondaryButton';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../utils/constants';
import styles from './styles';

const SignInForm = ({goToSignUp, submit, isError, goToHome, loading}) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const onSubmit = () => {
    submit(username, password);
  };
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={[DARK_COLOR, PRIMARY_COLOR, DARK_COLOR]}
      style={styles.container}>
      <Logo />
      <Text style={styles.title}>Hair hub</Text>
      <FadeInView duration={2500}>
        <Text style={styles.subtitle}>Conectá con tu estilo</Text>
      </FadeInView>
      <View style={styles.card}>
        <TextInput
          keyboardType="email-address"
          placeholder="Usuario"
          placeholderTextColor="white"
          style={styles.inputStyle}
          onChangeText={username => onChangeUsername(username)}
          value={username}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.inputStyle}
          placeholderTextColor="white"
          onChangeText={password => onChangePassword(password)}
          value={password}
          autoCapitalize="none"
          secureTextEntry={true}
          leftIcon={{type: 'font-awesome', name: 'lock', color: '#FFA800'}}
        />
        {isError && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{isError}</Text>
          </View>
        )}
        <View style={{flex: 1, marginTop: 15}}>
          <Button
            title={'Continuar sin logearse'}
            titleStyle={{color: 'white'}}
            type="clear"
            onPress={goToHome}
          />
          <SecondaryButton
            onPress={onSubmit}
            title="INGRESAR"
            loading={loading}
          />
          <SecondaryButton onPress={goToSignUp} title="REGISTRAR" />
        </View>
      </View>
    </LinearGradient>
  );
};
export default SignInForm;
