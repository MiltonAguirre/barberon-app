import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DARK_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR, THIRD_LIGTH_COLOR } from '../utils/constants';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems:'center'
    },
    labelBarText: {
        color: DARK_COLOR,
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    labelBar: {
        backgroundColor: THIRD_LIGTH_COLOR,
        width: wp('25%'),
        borderRadius: 5,
        padding: 2,
        marginTop: 7

    },
    body: {
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: '#FFF',
        borderColor: PRIMARY_COLOR,
        borderWidth: 2,
        borderRadius: 5,
        padding: 7,
    },
    btnBuy: {
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 7,
        padding: 5,
        marginBottom: 3,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: .8,
        shadowOffset: { width: 1, height: 2 },
        elevation: 3
    },
    btnSpread: {
        justifyContent: 'space-around',
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        marginLeft: 2
    },
    card: {
        backgroundColor: '#FFF',
        width: wp('90%'),
        marginVertical: hp('1%'),
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 1, height: 1
        },
        shadowOpacity: .8,
        shadowRadius: 4,
        elevation: 3
    },
    comments: {
        backgroundColor: THIRD_LIGTH_COLOR,
        padding: 5,
        margin: 3,
        borderRadius: 7,
        alignSelf: 'center'
    },
    footer: {
        padding: 2,
        borderTopWidth: 1,
        borderColor: THIRD_LIGTH_COLOR,
        paddingHorizontal: 5
    },
    footerLive: {
        justifyContent: 'space-between',
        padding: 10,
        borderTopWidth: 1,
        borderColor: THIRD_LIGTH_COLOR
    },
    reviews: {
        fontSize: 8,
        fontWeight: 'bold',
        padding: 2,
        borderWidth: 1,
        borderColor: THIRD_COLOR,
        marginLeft: 1
    },
    timeContent: {
        width: wp('20%'),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 2,
    },
});
export default Styles;