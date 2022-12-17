import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Icon, Badge } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../utils/constants';

const Turn = ({ id, state, start, product, barbershop, user, idx, imBarber, toggleModal, cancelTurn }) => {
    return (
        <React.Fragment>
            <TouchableOpacity style={styles.card} onPress={() => toggleModal(idx)}>
                <View style={styles.row}>
                    <View style={styles.icons}>
                        <Icon
                            name='content-cut'
                            color={SECONDARY_COLOR}
                            iconStyle={{ paddingHorizontal: wp('3%'), marginVertical: hp('.5%') }}
                        />
                        <Icon
                            name='event'
                            color={SECONDARY_COLOR}
                            iconStyle={{ paddingHorizontal: wp('3%'), marginVertical: hp('.5%') }}
                        />
                        <Icon
                            name={imBarber ? 'person' : 'storefront'}
                            color={SECONDARY_COLOR}
                            iconStyle={{ paddingHorizontal: wp('3%'), marginVertical: hp('.5%') }}
                        />
                    </View>
                    <View style={styles.texts}>
                        <Text style={[styles.titleCard]}>
                            {product.name}
                        </Text>
                        <Text style={styles.subtitleCard}>
                            {start.slice(2, -3) + "hs"}
                        </Text>
                        <Text style={[styles.titleCard, { textTransform: 'none', fontSize: 16 }]}>
                            {
                                imBarber
                                    ? user.data_user.first_name + ' ' + user.data_user.last_name
                                    : barbershop.name
                            }
                        </Text>
                    </View>
                    <View style={styles.buttonsBox}>

                        {
                            !state
                                ?
                                <Badge
                                    status="danger"
                                    value=" "
                                    containerStyle={styles.badge}
                                />
                                : state === 1
                                    ?
                                    <Badge
                                        status="warning"
                                        value=" "
                                        containerStyle={styles.badge}
                                    />
                                    : state === 2
                                        ?
                                        <Badge
                                            status="success"
                                            value=" "
                                            containerStyle={styles.badge}
                                        />
                                        :
                                        <Badge
                                            status="primary"
                                            value=" "
                                            containerStyle={styles.badge}

                                        />
                        }
                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            {
                                state !== 0 && state !== 3
                                &&
                                <Icon
                                    name="cancel"
                                    size={20}
                                    color='red'
                                    onPress={() => cancelTurn(id)}
                                />
                            }
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </React.Fragment>
    )
};

export default Turn;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        width: wp('82.5%'),
        backgroundColor: LIGHT_COLOR,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: SECONDARY_COLOR,
        paddingVertical: 10,
        marginVertical: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: .75,
        shadowRadius: 10,
        elevation: 3
    },
    titleCard: {
        fontSize: 18,
        fontWeight: '700',
        padding: 5,
        color: DARK_COLOR,
        textTransform: 'uppercase',
    },
    subtitleCard: {
        color: DARK_COLOR,
        fontSize: 14,
        padding: 3,
        marginTop: 2
    },
    texts: {
        justifyContent: 'center',
        width: wp('55%')
    },
    icons: {
        width: wp('12.5%'),
        borderRightColor: PRIMARY_COLOR,
        borderRightWidth: 2,
        marginRight: 10,
        paddingTop: 5
    },
    buttonsBox: {
        width: wp('12.5%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    badge: {
        position: 'absolute',
        top: 2,
        right: 18
    },
});