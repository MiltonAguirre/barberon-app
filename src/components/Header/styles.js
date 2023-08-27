import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  PRIMARY_COLOR,
  LIGHT_COLOR,
  DARK_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
} from '../../utils/constants';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: DARK_COLOR,
    justifyContent: 'center',
    width: wp('100%'),
    borderColor: THIRD_COLOR,
    borderBottomWidth: 3,
    shadowColor: PRIMARY_COLOR,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: LIGHT_COLOR,
  },
  hub: {
    backgroundColor: SECONDARY_COLOR,
    color: LIGHT_COLOR,
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    borderRadius: 5,
    padding: 2,
    paddingBottom: 0,
  },
});
export default styles;
