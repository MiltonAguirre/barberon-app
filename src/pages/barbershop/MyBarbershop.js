import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { setSuccess, setLoading } from '../../actions/SessionActions'
import MyBarberContainer from '../../containers/barbershop/MyBarber'
import FormBarber from '../../containers/barbershop/FormBarber'
import { ActivityIndicator } from 'react-native';
import { getMyBarbershop, createBarbershops } from '../../API';

const MyBarbershop = (props) => {
  const [barbershop, setBarbershop] = useState(null)
  const getData = async () => {
    const { token } = props
    const response = await getMyBarbershop(token);
    setBarbershop(response.data)
  }

  const submitNewBarbershop = async (name, phone, zip, country, address, city, state, days, opens, closes) => {
    const { token, setLoading, setSuccess } = props
    setLoading()
    const response = await createBarbershops(token, name, phone, zip, country, address, city, state, days, opens, closes)
    setSuccess()
    setBarbershop(response.data)

  }
  const goToMyProducts = () => {
    const { navigation } = props
    navigation.navigate('MyProducts');

  }

  const goToHome = () => {
    props.navigation.navigate('Home')
  }

  const openDrawer = () => {
    props.navigation.toggleDrawer()
  }
  useEffect(() => {
    const { setLoading, setSuccess } = props
    setLoading()
    getData()
    setSuccess()
  }, [])

  return (
    <React.Fragment >
      {
        props.isLoading ?
          (
            <ActivityIndicator />
          )
          : (
            barbershop
              ? <MyBarberContainer {...barbershop} goToMyProducts={goToMyProducts} goToHome={goToHome} openDrawer={openDrawer} />
              : <FormBarber submit={submitNewBarbershop} goToHome={goToHome} openDrawer={openDrawer} />
          )

      }
    </React.Fragment>
  );
}

function mapToProps({ session }) {
  return session
}
export default connect(mapToProps, { setSuccess, setLoading })(MyBarbershop);
