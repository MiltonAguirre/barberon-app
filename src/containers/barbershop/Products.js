import React from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import {
    Button,
    Icon
} from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PRIMARY_COLOR, DARK_COLOR, LIGHT_COLOR } from '../../utils/constants';
import ProductsList from '../../shares/MyProductsList';
import NewProductForm from './NewProduct';
import Header from '../../shares/Header';

const Products = ({ products, newProduct, updateProduct, goBack }) => {
    const [visible, setVisible] = React.useState(false);
    const toggleModal = () => {
        setVisible(!visible)
    }
    const [editVisible, setEditVisible] = React.useState(false);
    const toggleModalEdit = () => {
        setEditVisible(!editVisible)
    }

    const submit = (name, price, description, hours, minutes, image) => {
        toggleModal()
        newProduct(name, price, description, hours, minutes, image)

    }
    const edit = (id, name, price, description, hours, minutes) => {
        toggleModalEdit()
        updateProduct(id, name, price, description, hours, minutes)
    }
    return (
        <View style={styles.container}>
            <Header />
            <Icon
                type="font-awesome"
                name="chevron-circle-left"
                size={hp('5%')}
                color={DARK_COLOR}
                containerStyle={{ alignSelf: 'flex-start', paddingLeft: wp('2.5%'), paddingTop: hp('1%') }}
                onPress={goBack}
            />
            <Text style={styles.title}>Productos y servicios</Text>
            <Button
                icon={
                    <Icon
                        name="plus"
                        type="font-awesome"
                        size={hp('1.5%')}
                        color="white"
                        containerStyle={{ marginRight: wp('1.5%') }}
                    />
                }
                onPress={toggleModal}
                title="Nuevo"
                buttonStyle={styles.btnNew}
            />
            <NewProductForm
                submit={submit}
                closeModal={toggleModal}
                visible={visible}
            />
            {
                (products && products.length)
                    ? <ProductsList products={products} editProduct={edit} />
                    : <Text style={{ color: DARK_COLOR, alignSelf: 'center', marginTop: hp('10%') }}>
                        No ha agregado ningún producto a su tienda
                    </Text>
            }

        </View>
    )
}

export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LIGHT_COLOR,
        width: wp('100%'),

    },
    header: {
        height: hp('20%'),
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'flex-end',
        width: wp('100%')
    },
    titleHeader: {
        fontSize: hp('9%'),
        fontWeight: '700',
        color: LIGHT_COLOR
    },
    row: {
        flexDirection: 'row'
    },
    title: {
        paddingHorizontal: wp('5%'),
        fontSize: hp('5%'),
        fontWeight: 'bold',
        color: LIGHT_COLOR,
        textTransform: 'uppercase',
        paddingBottom: hp('1%'),
        textShadowColor: 'rgba(90, 90, 90, .75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    },
    subtitle: {
        fontSize: hp('2.8%'),
        fontWeight: '600',
        color: PRIMARY_COLOR,
        marginBottom: hp('1.2%')
    },
    imageSide: {
        width: wp('42.5%'),
        height: hp('80%')

    },
    section: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: DARK_COLOR,
        borderWidth: 1,
        borderRadius: hp('1%'),
        width: wp('52.5%'),
        height: hp('20%'),
        padding: wp('1.5%'),
        marginVertical: hp('2%')
    },
    textData: {
        color: LIGHT_COLOR
    },
    btnNew: {
        width: wp('25%'),
        alignSelf: 'flex-end',
        backgroundColor: PRIMARY_COLOR,
        borderRadius: hp('2.5%'),
        marginHorizontal: wp('5%'),
        marginBottom: hp('1.5'),
    },


});