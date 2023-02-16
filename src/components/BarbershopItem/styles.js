import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  DARK_COLOR,
  LIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../utils/constants';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    width: wp('75%'),
    backgroundColor: LIGHT_COLOR,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFF',
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
  },
  titleCard: {
    fontSize: 18,
    fontWeight: '700',
    padding: 5,
    color: DARK_COLOR,
    textTransform: 'uppercase',
  },
  subtitleCard: {
    color: PRIMARY_COLOR,
    fontSize: 12,
  },
  messageEmpty: {
    color: DARK_COLOR,
    alignSelf: 'center',
    marginVertical: hp('1.5%'),
  },
  texts: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('55%'),
  },
  icons: {
    width: wp('12.5%'),
    borderRightColor: SECONDARY_COLOR,
    borderRightWidth: wp('.5%'),
    marginRight: wp('2.5%'),
  },
  icon: {paddingHorizontal: wp('3%'), marginVertical: hp('.5%')},
  badge: {position: 'absolute', right: 4, top: 4},
});
export default styles;
