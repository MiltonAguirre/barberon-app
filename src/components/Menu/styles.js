import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR, THIRD_COLOR} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('95%'),
    height: hp('8%'),
    marginBottom: 5,
    padding: 4,
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
    padding:5,
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: LIGHT_COLOR,
    textShadowColor: DARK_COLOR,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
});
export default styles;
