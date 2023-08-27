import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('100%'),
    height: hp('10%'),
    marginBottom: 10,
    padding: hp('1.5%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectPage: {
    borderBottomWidth: 2,
    borderColor: PRIMARY_COLOR,
    paddingBottom: 3,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    color: LIGHT_COLOR,
    letterSpacing: 1.5,
    textShadowColor: DARK_COLOR,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 8,
  },
});
export default styles;
