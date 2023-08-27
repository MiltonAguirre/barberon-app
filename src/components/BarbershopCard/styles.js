import {StyleSheet} from 'react-native';
import {DARK_COLOR, LIGHT_COLOR, THIRD_COLOR} from '../../utils/constants';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    padding: 5,
  },
  card: {
    width: wp('90%'),
    backgroundColor: DARK_COLOR,
    borderRadius: 20,
    margin: 5,
    padding: 10,
    paddingTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: DARK_COLOR,
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
  },
  titleCard: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: LIGHT_COLOR,
  },
  subtitleCard: {
    fontFamily: 'Poppins-Regular',
    color: THIRD_COLOR,
  },
  badge: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  icon: {
    paddingBottom: 4,
    marginHorizontal: 2,
  },
  italic: {fontFamily: 'Poppins-Italic'},
  rowDays: {
    justifyContent: 'space-around',
    width: '60%',
    marginHorizontal: 'auto',
  },
  textActive: {color: LIGHT_COLOR, fontFamily: 'Poppins-Bold'},
  textDesactive: {color: '#BBB', fontFamily: 'Poppins-Regular'},
});
export default styles;
