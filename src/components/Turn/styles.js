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
    justifyContent:'flex-start',
    alignItems: 'center',
    width: '90%'
  },
  card: {
    width: wp('85%'),
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 12,
    paddingVertical: 4,
    marginVertical: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.75,
    shadowRadius: 10,
    elevation: 3,
  },
  titleCard: {
    fontSize: 16,
    padding: 4,
    color: DARK_COLOR,
  },
  subtitleCard: {
    color: DARK_COLOR,
    fontSize: 14,
    padding: 3,
    marginTop: 2,
  },
  texts: {
    justifyContent: 'center',
    width: '65%',
    padding: 4,
  },
  icons: {
    width: '15%',
    borderRightColor: SECONDARY_COLOR,
    borderRightWidth: 1,
    paddingTop: 5,
    justifyContent: 'center',
  },
  buttonsBox: {
    flex: 1,
    padding: 5,
    backgroundColor:LIGHT_COLOR,
    borderColor: SECONDARY_COLOR,
    borderRadius:10,
    borderWidth: 2, 
    position: 'absolute',
    top: 8,
    right: 5,
    shadowColor: PRIMARY_COLOR,
    shadowOffset:{width:0, height:1},
    shadowOpacity:.8,
    shadowRadius:10,
    elevation: 2,
  },
});
export default styles;
