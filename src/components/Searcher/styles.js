import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {DARK_COLOR, LIGHT_COLOR} from '../../utils/constants';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  inputContainer: {
    backgroundColor: LIGHT_COLOR,
    width: wp('80%'),
    height: 45,
    borderRadius: 50,
    color: 'white',
    borderColor: DARK_COLOR,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 3,
    paddingHorizontal: 0,
  },
  input: {
    color: DARK_COLOR,
    textAlign: 'center',
    fontSize: 14,
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
