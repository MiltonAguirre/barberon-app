import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native'
import {
    Icon
} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PRIMARY_COLOR, SECONDARY_COLOR, DARK_COLOR, LIGHT_COLOR } from '../../utils/constants';
import Header from '../../shares/Header'
import Menu from '../../shares/Menu'
const MyBarberContent = ({ name, phone, address, city, state, zip, country, products, goToMyProducts, goToHome, openDrawer }) => {
    return (
        <React.Fragment>
            <Header />
            <View style={styles.container}>
            <Menu pageSelected={2} goToHome={goToHome} openDrawer={openDrawer} title="Mi Barbería"/>
                
                <View style={styles.card}>
                    <Text style={styles.titleCard}>
                        {name}
                    </Text>
                    <ScrollView>
                        <View style={styles.subCard}>
                            <Text style={styles.subtitleCard}>Ubicación</Text>
                            {
                                city && state &&
                                <View style={[styles.row, styles.rowData]}>
                                    <Icon
                                        name='place'
                                        color={SECONDARY_COLOR}
                                        iconStyle={{ paddingRight: wp('.5%') }}
                                    />
                                    <Text style={styles.textData}>{city + ", " + state}</Text>
                                </View>
                            }
                            <View style={[styles.row, styles.rowData]}>
                                <Icon
                                    name='public'
                                    color={SECONDARY_COLOR}
                                    iconStyle={{ paddingRight: wp('.5%') }}
                                />
                                <Text style={styles.textData}>{"(" + zip + ") " + country}</Text>
                            </View>
                            {
                                address &&
                                <View style={[styles.row, styles.rowData]}>
                                    <Icon
                                        name='location-city'
                                        color={SECONDARY_COLOR}
                                        iconStyle={{ paddingRight: wp('.5%') }}
                                    />
                                    <Text style={styles.textData}>{address}</Text>
                                </View>
                            }
                            <Text style={styles.subtitleCard}>Contacto</Text>
                            <View style={[styles.row, styles.rowData]}>
                                <Icon
                                    name='phone'
                                    color={SECONDARY_COLOR}
                                    iconStyle={{ paddingRight: wp('1%') }}
                                />
                                <Text style={styles.textData}>{phone}</Text>
                            </View>
                        </View>

                        <TouchableOpacity onPress={goToMyProducts} style={styles.cardTouch}>

                            <View style={[styles.row, { justifyContent: 'center', alignItems: 'center'}]}>
                                <Icon
                                    name='style'
                                    color={PRIMARY_COLOR}
                                    iconStyle={{marginRight:5}}
                                />
                                <Text style={styles.titleCardTouch}>Productos y servicios</Text>
                            </View>
                            <Text style={styles.subtitleCardTouch}>Administre sus productos y servicios</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </React.Fragment>
    )
}

export default MyBarberContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: LIGHT_COLOR,
        width: wp('100%'),

    },
    row: {
        flexDirection: 'row'
    },
    rowData: {
        marginVertical: hp('.5%'),
        paddingHorizontal: wp('.5%'),
        alignItems:'center'
    },
    title: {
        fontSize: hp('5%'),
        fontWeight: 'bold',
        color: LIGHT_COLOR,
        textTransform: 'uppercase',
        paddingVertical: hp('2%'),
        textShadowColor: 'rgba(90, 90, 90, .75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    },
    card: {
        width: wp('92.5%'),
        height: hp('60%'),
        backgroundColor: LIGHT_COLOR,
        borderRadius: 10,
        paddingVertical: 15,
        marginVertical: 20,
        alignSelf: 'center',
        alignItems: 'center',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#000',
        shadowOpacity: .75,
        shadowRadius: 10,
        elevation: 2
    },
    subCard: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius:15,
        paddingVertical: 8,
        backgroundColor:LIGHT_COLOR,
        shadowOffset: { width: 2, height: 1, },
        shadowColor: '#000',
        shadowOpacity: .60,
        shadowRadius: 10,
        elevation: 1
    },
    titleCard: {
        fontSize: hp('5%'),
        fontWeight: '700',
        color: SECONDARY_COLOR,
        textTransform: 'uppercase',
        textShadowColor: 'rgba(90, 90, 90, .75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    },
    subtitleCard: {
        fontWeight: '700',
        color: PRIMARY_COLOR,
        fontSize: hp('1.8%'),
        alignSelf: 'center',
        padding:5,
        marginTop:10
    },
    textData: {
        color: DARK_COLOR,
        fontSize: hp('2%'),
        textAlign: 'left'
    },
    cardTouch: {
        width: wp('70%'),
        height: hp('10%'),
        backgroundColor: LIGHT_COLOR,
        borderRadius:15,
        marginVertical: 5,
        padding: 10,
        alignItems: 'center',
        shadowOffset: { width: 2, height: 1, },
        shadowColor: '#000',
        shadowOpacity: .60,
        shadowRadius: 10,
        elevation: 3
    },
    imgCardTouch: {
        borderRadius: hp('2%'),
    },
    titleCardTouch: {
        paddingVertical: hp('.5%'),
        color: DARK_COLOR,
        fontSize: hp('2.5%'),
        fontWeight: '700',
    },
    subtitleCardTouch: {
        color: SECONDARY_COLOR,
        fontSize: hp('1.5%'),
        fontWeight: '700',

    },
});