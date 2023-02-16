import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {Button} from 'react-native-elements';
import SecondaryButton from '../../../shares/SecondaryButton';
import styles from './styles';

const SignInForm = ({goToSignUp, submit, isError, goToHome, loading}) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const onSubmit = () => {
    submit(username, password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HairHUB</Text>
      <Text style={styles.subtitle}>Barberias a tu alcance</Text>
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
            <Text style={styles.errorText}>
              {isError}
            </Text>
          </View>
        )}
        <View style={{flex: 1, marginTop: 15}}>
          <Button
            title={'Continuar sin logearse'}
            titleStyle={{color: 'white'}}
            type="clear"
            onPress={goToHome}
          />
          <SecondaryButton onPress={onSubmit} title="INGRESAR" loading={loading}/>
          <SecondaryButton onPress={goToSignUp} title="REGISTRAR" />
        </View>
      </View>
    </View>
  );
};
export default SignInForm;
