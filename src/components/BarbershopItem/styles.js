import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {LIGHT_COLOR, SECONDARY_COLOR} from '../../utils/constants';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    padding: 5,
  },
  card: {
    width: wp('75%'),
    backgroundColor: LIGHT_COLOR,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFF',
    margin: 5,
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
  },
  titleCard: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: SECONDARY_COLOR,
  },
  subtitleCard: {
    fontFamily: 'Poppins-Regular',
    color: LIGHT_COLOR,
    fontSize: 12,
  },
  badge: {position: 'absolute', right: 4, top: 4},
});
export default styles;
