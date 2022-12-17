import React from 'react';
import {
    StyleSheet, SafeAreaView, View,
    FlatList, Text
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DARK_COLOR, LIGHT_COLOR } from '../utils/constants';
import Header from '../shares/Header';
import ButtonsFilter from '../shares/ButtonsFilter';
import ModalTurn from '../shares/ModalTurn';
import Turn from './Turn';
import Menu from '../shares/Menu';

const MyTurns = ({ turns, cancelTurn,confirmTurn, setFilter, filter, goToHome, openDrawer, turn, toggleModal, modalVisible, imBarber}) => {
    return (
        <React.Fragment>
            <Header />
            <View style={styles.container}>
                <Menu title="Turnos" pageSelected={1} goToHome={goToHome} openDrawer={openDrawer} />
                <ButtonsFilter filter={filter} setFilter={setFilter} />
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={turns}
                        renderItem={({ item, index }) => <Turn {...item} cancelTurn={cancelTurn} idx={index} toggleModal={toggleModal} imBarber={imBarber}/>}
                        keyExtractor={item => item.id.toString()}
                        ListEmptyComponent={
                            <Text style={styles.messageEmpty}>
                                Usted no posee ningún turno en esta sección
                            </Text>
                        }
                    />
                </SafeAreaView>

            {
                (modalVisible && turn) &&
                <ModalTurn
                    closeModal={toggleModal}
                    visible={modalVisible}
                    {...turn}
                    imBarber={imBarber}
                    cancelTurn={cancelTurn}
                    confirmTurn={confirmTurn}
                />
            }
            </View>
        </React.Fragment>
    );
}
export default MyTurns;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: LIGHT_COLOR,
        width: wp('100%'),
        justifyContent: 'center'
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
    messageEmpty: {
        color: DARK_COLOR,
        alignSelf: 'center',
        paddingVertical: hp('2.5%')
    },
    modalContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: hp('2.5%'),
    },
    modal: {
        backgroundColor: DARK_COLOR,
        height: hp("55%"),
        width: wp("90%"),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: wp('1%'),
        padding: wp('1%'),
        borderRadius: wp('5%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 4,
    },
});