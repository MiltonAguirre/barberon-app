import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {LIGHT_COLOR, DARK_COLOR} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
    backgroundColor: DARK_COLOR,
    paddingTop: wp('35%'),
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
  gradient: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
