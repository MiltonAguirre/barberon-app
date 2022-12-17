import * as React from 'react';
import {   Text, TextInput, View, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { validatePasswords } from '../../utils';
import { PRIMARY_COLOR, DARK_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../../utils/constants';

const ResetPassword =  (props) => {
  const [password, onChangePassword] = React.useState('');
  const [ePassword, setEPassword] = React.useState(false);
  const [repassword, onChangeRepassword] = React.useState('');
  
  const submit = () => {
    const v_password = validatePasswords(password, repassword);
    setEPassword(!v_password)

    if (v_password) {
        ////SUBMIT!!!!!!!
    }
  }
    return (

      <View style={styles.container}>
        <Button
          title="Back"
          type="clear"
          titleStyle={{color:'#000'}}
          icon={
            <Icon name="arrow-back" color="#000" containerStyle={{marginRight:wp('1%')}}/>
          }
          onPress={() => {props.navigation.navigate('Login')}}
        />
        <View style={styles.section}>
          <Text style={styles.title}>Create New Password</Text>
          <Text style={styles.text}>Your new password must be different from previous used passwords.</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry
            style={[styles.input, ePassword ? styles.error : ""]}
          />
          <Text style={{fontSize:14, color:THIRD_COLOR}}>Must be at least 8 characters.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            placeholder="Re-password"
            value={repassword}
            onChangeText={onChangeRepassword}
            secureTextEntry
            style={[styles.input, ePassword ? styles.error : ""]}
          />
          <Text style={{fontSize:14, color:THIRD_COLOR}}>Both passwords must match.</Text>
        </View>

        <View style={styles.sectionBottom}>
          <Button
          title="Reset Password"
          buttonStyle={{backgroundColor:SECONDARY_COLOR}}
          containerStyle={{borderRadius:5, width:wp('90%')}}
          onPress={submit}
          />
        </View>
        
      </View>
    );
  }

  export default ResetPassword;

  const styles = StyleSheet.create({
    container: {
      flex:1, 
      alignItems:'flex-start', 
      backgroundColor:'#FFF'
    },
    section: {
      marginVertical:hp('1.5%'), 
      paddingHorizontal:wp('5%')
    },
    sectionBottom:{
      marginVertical:hp('2.5%'), 
      alignItems:'center', 
      width:wp('100%')
    },
    title: {
      fontSize:24, 
      fontWeight:'bold', 
      color:'#000'
    },
    label: {
      fontSize:20, 
      fontWeight:'bold', 
      color:'#000'
    },
    text: {
      fontSize:16, 
      color:'#000', 
      marginVertical:hp('2%')
    },
    input: {
      borderColor:DARK_COLOR, 
      borderRadius:5, 
      borderWidth:1, 
      padding:5, 
      width:wp('90%'),
      alignSelf:'center', 
      marginBottom:hp('.5%'), 
      marginTop:hp('1.5%')
    },
    error:{
      borderColor:'red',
      color:'red'
    }
  });