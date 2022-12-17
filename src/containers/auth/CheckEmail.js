import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SECONDARY_COLOR, THIRD_COLOR } from '../../utils/constants';

const CheckEmail = (props) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/gmail.png')}
                style={styles.imgLogo} />
            <Text style={styles.title}>Check your mail</Text>
            <View style={{width:wp('90%'), padding:5, alignItems:'center'}}>
                <Text style={styles.text}>We have sent a password recover instructions to your email</Text>
            </View>

            <Button
                title="Open email"
                buttonStyle={styles.btn}
                onPress={() => console.log('Press open email')}
            />

            <Button
                title="Skip, I'll confirm later"
                titleStyle={styles.text}
                type='clear'
                onPress={() => console.log('Press skip')}
            />
        </View>
    );
}

export default CheckEmail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent:'center'
    },
    title: {
        fontSize:24,
        fontWeight:'700',
        padding:5,
    },
    text: {
        textAlign:'center',
        fontSize:18,
        padding:5,
        color:THIRD_COLOR
    },
    imgLogo:{
        width: wp('20%'), 
        height: hp('15%'), 
        resizeMode: 'contain',
    },
    btn: {
        backgroundColor:SECONDARY_COLOR,
        paddingHorizontal:25,
        paddingVertical:6,
        margin:20
    }

})