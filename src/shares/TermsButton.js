import React, { useCallback } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Icon } from 'react-native-elements'
import { API_HOST } from '@env'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../utils/constants';

import {
  StyleSheet,
  Linking,
} from 'react-native';

const termsURL = API_HOST + "/terminos-y-condiciones";

const TermsButton = ({ children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(termsURL);

    if (supported) {
      await Linking.openURL(termsURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${termsURL}`);
    }
  }, [termsURL]);
  return <Button
    icon={
      <Icon
        reverse
        reverseColor={PRIMARY_COLOR}
        name="visibility"
        size={12}
        color={SECONDARY_COLOR}
      />
    }
    titleStyle={styles.btnTitle}
    buttonStyle={styles.btnStyle}
    title={children}
  />;
};

export default TermsButton;

const styles = StyleSheet.create({
  btnStyle: {
    width: wp('60%'),
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  btnTitle: {
    color: '#fff',
    fontSize: hp('2%'),
    fontWeight: '600'
  }
})
