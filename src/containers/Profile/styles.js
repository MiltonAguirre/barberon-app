import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PRIMARY_COLOR, DARK_COLOR, LIGHT_COLOR, SECONDARY_COLOR} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: wp('100%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowData: {
    marginVertical: 4,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: LIGHT_COLOR,
    textTransform: 'uppercase',
    paddingVertical: hp('2%'),
    textShadowColor: 'rgba(90, 90, 90, .75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: SECONDARY_COLOR,
    marginBottom: 5
  },
  imageSide: {
    width: wp('42.5%'),
    height: hp('72%'),
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp('2.5%'),
    width: wp('75%'),
    marginTop: hp('1.5%'),
    borderColor: '#FFF',
    borderWidth: 2,
    paddingVertical: hp('2.5%'),
    elevation: 2,
    backgroundColor: LIGHT_COLOR,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    zIndex: 3,
  },
  textData: {
    color: LIGHT_COLOR,
    alignSelf: 'center',
    marginVertical: hp('0.5%'),
  },
  icon: {paddingRight: 4},
  imgHeader: {
    width: wp('100%'),
    height: hp('12.5%'),
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
export default styles;
