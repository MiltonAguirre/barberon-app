import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../utils/constants'
import { Icon, Image, Button } from 'react-native-elements';
import { getFullPathImage } from '../utils';
import EditProductForm from '../containers/barbershop/EditProduct';

const MyProductCard = ({ id, name, images, description, price, hours, minutes, editProduct }) => {
    const [editVisible, setEditVisible] = React.useState(false);
    const toggleModalEdit = () => {
        setEditVisible(!editVisible)
    }
    return (
        <View style={styles.product}>
            <EditProductForm
                submit={editProduct}
                closeModal={toggleModalEdit}
                visible={editVisible}
                id={id} name={name} description={description}
                price={price} hours={hours} minutes={minutes}
            />
            <Image
                style={styles.image}
                source={{ uri: getFullPathImage(images[0].path) }}
                PlaceholderContent={<ActivityIndicator/>}
            />
            <View style={styles.info}>
                <View style={styles.subInfo}>
                    <Text style={styles.titleProduct}>{name}</Text>
                    <Text style={styles.desc}>{description}</Text>
                    <View style={[styles.row, { justifyContent: 'space-evenly' }]}>
                        <Icon
                            name="attach-money"
                            color={SECONDARY_COLOR}
                            size={25}
                        />
                        <Text style={styles.price}>{price}</Text>
                        <Icon
                            name="schedule"
                            color={SECONDARY_COLOR}
                            size={23}

                        />
                        <Text style={styles.delay}>{hours + ":" + (minutes || "00") + "hs"}</Text>

                    </View>
                </View>
                <View style={[styles.row, { marginVertical: 0 }]}>

                    <Icon
                        name="delete"
                        size={32.5}
                        color="red"
                        containerStyle={{ display: 'flex', justifyContent: 'center' }}
                    />
                    <Button
                        icon={
                            <Icon
                                name="edit"
                                size={24}
                                color={DARK_COLOR}
                                iconStyle={{ marginRight: wp('1%') }}
                            />
                        }
                        title="Editar"
                        type='clear'
                        titleStyle={{ color: SECONDARY_COLOR }}
                        onPress={toggleModalEdit}
                    />
                </View>

            </View>

        </View>
    )
};

export default MyProductCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: hp('1%'),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp('1.5%')
    },
    image: {
        height: hp('24%'),
        width: wp('58%'),
        borderTopRightRadius: wp('2%'),
        borderTopLeftRadius: wp('2%'),
        shadowColor: 'rgba(0,0,0,.75)',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowRadius: 5,
        shadowOpacity: .8,
        zIndex: 2
    },
    info: {
        backgroundColor: LIGHT_COLOR,
        height: hp('25%'),
        width: wp('58%'),
        borderBottomRightRadius: wp('2%'),
        borderBottomLeftRadius: wp('2%'),
        padding: wp('2.5%'),
        shadowColor: 'rgba(0,0,0,.75)',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowRadius: 8,
        shadowOpacity: .8,
        elevation: 2,

    },
    subInfo: {
        height: hp('17.5%'),
        padding: wp('.5%')
    },

    titleProduct: {
        fontSize: hp('2.5%'),
        color: SECONDARY_COLOR,
        fontWeight: '700',
        textAlignVertical: 'center',

    },
    desc: {
        fontSize: hp('2%'),
        color: DARK_COLOR,
        fontWeight: '600',
        textAlignVertical: 'center',
        marginTop: hp('2%')


    },
    price: {
        fontSize: hp('2.2%'),
        color: DARK_COLOR,
        fontWeight: '700',
        textAlignVertical: 'center',
        marginRight: wp('5%')
    },
    delay: {
        fontSize: hp('1.9%'),
        color: DARK_COLOR,
        textAlignVertical: 'center',

    },
    product: {
        borderRadius: wp('2%'),
        width: wp('60%'),
        height: hp('50%'),
        marginHorizontal: wp('2.5%'),
        marginVertical: hp('1%'),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
    }

});
