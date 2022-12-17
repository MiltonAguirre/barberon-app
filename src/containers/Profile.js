import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native'
import {
    Icon,
    Image
} from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PRIMARY_COLOR, DARK_COLOR, LIGHT_COLOR, SECONDARY_COLOR } from '../utils/constants';
import Header from '../shares/Header';

const Profile = ({ id, email, first_name, last_name, phone, address, city, state, country, zip }) => {
    return (
        <React.Fragment>
            <Header />
            <Image
                source={require('../../assets/images/bg_barberon.jpg')}
                style={{ width: wp('100%'), height: hp('12.5%') }}
                PlaceholderContent={<ActivityIndicator />}
            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Mi perfíl</Text>

                        <View style={styles.section}>
                            <Text style={styles.subtitle}>Contacto</Text>
                            <View style={[styles.row, styles.rowData]}>
                                <Icon
                                    name='person'
                                    color={SECONDARY_COLOR}
                                    iconStyle={{ paddingRight: wp('.5%') }}
                                />
                                <Text style={styles.textData}>{first_name + " " + last_name}</Text>
                            </View>
                            {
                                phone &&
                                <View style={[styles.row, styles.rowData]}>
                                    <Icon
                                        name='phone'
                                        color={SECONDARY_COLOR}
                                        iconStyle={{ paddingRight: wp('.5%') }}
                                    />
                                    <Text style={styles.textData}>{phone}</Text>
                                </View>
                            }
                            <View style={[styles.row, styles.rowData]}>
                                <Icon
                                    name='mail'
                                    color={SECONDARY_COLOR}
                                    iconStyle={{ paddingRight: wp('.5%') }}
                                />
                                <Text style={[styles.textData, { fontStyle: 'italic' }]}>{email}</Text>
                            </View>

                        </View>

                        <View style={styles.section}>
                            <Text style={styles.subtitle}>Ubicación</Text>
                            {
                                city && state &&
                                <View style={[styles.row, styles.rowData]}>
                                    <Icon
                                        name='place'
                                        color={SECONDARY_COLOR}
                                        iconStyle={{ paddingRight: wp('.5%') }}
                                    />
                                    <Text style={styles.textData}>{city+", "+state}</Text>
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
                        </View>

                    </View>
                </View>
            </View>
        </React.Fragment>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: LIGHT_COLOR,
        width: wp('100%'),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    rowData: {
        marginVertical: hp('.5%'),
        paddingHorizontal: wp('.5%'),
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
    subtitle: {
        fontSize: hp('2.8%'),
        fontWeight: '700',
        color: PRIMARY_COLOR,
        marginBottom: hp('1.2%')
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
        borderColor: "#FFF",
        borderWidth: 2,
        paddingVertical: hp('2.5%'),
        elevation: 2,
        backgroundColor: LIGHT_COLOR,
        shadowColor: '#000',
        shadowOpacity: .8,
        shadowRadius: 5,
        shadowOffset: {
            width: 3,
            height: 3
        },
        zIndex: 3
    },
    textData: {
        color: DARK_COLOR,
        alignSelf: 'center',
        marginVertical: hp('0.5%'),

    }

});