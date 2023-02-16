import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  LIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../utils/constants';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
  },
  card: {
    width: wp('85%'),
    backgroundColor: LIGHT_COLOR,
    borderRadius: 12,
    paddingVertical: 4,
    marginVertical: 4,
    alignItems: 'center',
    shadowColor: PRIMARY_COLOR,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.75,
    shadowRadius: 10,
    elevation: 4,
  },
  titleCard: {
    fontSize: 16,
    padding: 4,
    color: SECONDARY_COLOR,
    fontWeight: 'bold',
  },
  subtitleCard: {
    color: LIGHT_COLOR,
    fontSize: 14,
    padding: 3,
    marginTop: 2,
    fontWeight: '700',
  },
  buttonsBox: {
    flex: 1,
    padding: 2,
    backgroundColor: LIGHT_COLOR,
    borderRadius: 5,
    position: 'absolute',
    top: 8,
    right: 8,
    shadowColor: LIGHT_COLOR,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 2,
  },
});
export default styles;
