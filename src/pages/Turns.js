import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import { setLoading, setSuccess } from '../actions/SessionActions';
import { getBarbershopTurns, getUserTurns } from '../API';
import MyTurns from '../containers/MyTurns';

const Turns = (props) => {
    const [filter, setFilter] = useState(1)
    const [turns, setTurns] = useState(null)
    const [turn, setTurn] = useState(null)
    const [turnsFilter, setTurnsFilter] = useState([])

    const callApiGetTurns = async () => {
        const { token, role_id } = props
        try {
            if (token) {
                if (role_id === 2) {
                    let response = await getUserTurns(token)
                    if (response.status == 200) {
                        setTurns(response.data)
                    }
                } else {
                    let response = await getBarbershopTurns(token)
                    if (response.status == 200) {
                        setTurns(response.data)
                    }
                }
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    const [modalVisible, setModalVisible] = React.useState(false);
    const toggleModal = (index) => {
        if (turn) {
            setModalVisible(false)
            setTurn(null)
        } else {
            setModalVisible(true)
            showTurn(index)
        }
    }
    const showTurn = (index) => {
        const { token, setLoading, setSuccess } = props
        setLoading()
        if (turnsFilter && turnsFilter[index]) {
            setTurn(turnsFilter[index])
        }
        setSuccess()
    }
    const cancelTurn = () => {
        console.log('Cancel Turn');
    }
    const confirmTurn = () => {
        console.log('Confirm Turn');
    }
    const onChangeFilter = (value) => {
        console.log('on change Filter');

        setFilter(value)
    }
    const filter_turns = () => {
        let result = null
        if (turns && turns.length) {
            result = turns.filter(elem => elem.state == filter);
        }
        if (result) setTurnsFilter(result)
    }

    const goToHome = () => {
        const role = props.role_id === 1 ? 1 : 0
        if (role)
            props.navigation.navigate('HomeBarbershop')
        else
            props.navigation.navigate('Home')

    }
    const openDrawer = () => {
        props.navigation.toggleDrawer()
    }
    useEffect(() => {
        const { setLoading, setSuccess } = props
        setLoading()
        if (!turns) {
            callApiGetTurns()
        }
        filter_turns()
        setSuccess()
    }, [turns, filter])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            {
                props.isLoading
                    ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator /></View>
                    :
                    <MyTurns turns={turnsFilter} cancelTurn={cancelTurn} turn={turn} toggleModal={toggleModal} modalVisible={modalVisible} confirmTurn={confirmTurn}
                        setFilter={onChangeFilter} filter={filter} goToHome={goToHome} openDrawer={openDrawer} imBarber={props.role_id === 1 ? 1 : 0} />

            }
        </View>
    );
}

function mapToProps({ session }) {
    return session
}
export default connect(mapToProps, { setSuccess, setLoading })(Turns);