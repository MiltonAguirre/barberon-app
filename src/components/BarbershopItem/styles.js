import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {DARK_COLOR, LIGHT_COLOR, THIRD_COLOR} from '../../utils/constants';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    padding: 5,
  },
  card: {
    minWidth: wp('55%'),
    backgroundColor: LIGHT_COLOR,
    borderRadius: 20,
    margin: 5,
    paddingVertical: 10,
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
    right: 8,
    top: 8,
  },
  icon: {
    paddingBottom: 4,
    marginHorizontal: 2,
  },
});
export default styles;
