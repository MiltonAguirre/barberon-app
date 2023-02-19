import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {LIGHT_COLOR, DARK_COLOR} from '../../../utils/constants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: DARK_COLOR,
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
  card: {
    width: wp('95%'),
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  labelInput: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginTop: 4,
  },
  sublabel: {
    color: '#FFF',
    fontSize: hp('1.8%'),
    textAlign: 'center',
    marginBottom: hp('.5%'),
  },
  input: {
    width: '75%',
    backgroundColor: LIGHT_COLOR,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: DARK_COLOR,
    textAlign: 'center',
    paddingVertical: 1,
    margin: 4,
    color: DARK_COLOR,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp('2%'),
    textAlignVertical: 'center',
  },
  btnContainer: {
    width: wp('30%'),
    backgroundColor: DARK_COLOR,
    borderStyle: 'solid',
    borderColor: LIGHT_COLOR,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 4,
  },
  error: {
    borderColor: 'red',
    color: 'red',
  },
  checkAge: {
    marginLeft: 15,
    borderColor: LIGHT_COLOR,
    borderRadius: 7,
  },
  checkAgeText: {
    color: DARK_COLOR,
    opacity: 1,
  },
});
