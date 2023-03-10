import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PRIMARY_COLOR, LIGHT_COLOR, DARK_COLOR} from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: DARK_COLOR,
  },
  loading: {
    marginVertical: hp('10%'),
  },
  error: {
    color: 'red',
    marginTop: hp('2%'),
    fontSize: 18,
    alignSelf: 'center',
  },
  card: {
    width: wp('75%'),
    height: hp('30%'),
    marginTop: hp('2.5%'),
    justifyContent: 'center',
    alignContent: 'center',
  },
  inputStyle: {
    backgroundColor: DARK_COLOR,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    textAlign: 'center',
    paddingVertical: hp('1%'),
    marginVertical: hp('.5%'),
    color: 'white',
  },
  title: {
    fontSize: hp('8%'),
    color: PRIMARY_COLOR,
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 28,
    color: LIGHT_COLOR,
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
    marginBottom: hp('1%'),
  },
  errorContainer: {
    backgroundColor: LIGHT_COLOR,
    borderRadius: 10,
    padding: 5,
    borderColor: DARK_COLOR,
    borderWidth: 1,
  },
  errorText: {color: 'red', textAlign: 'center'},
});
export default styles;
