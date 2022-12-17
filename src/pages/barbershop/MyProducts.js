import React, { useState, useEffect } from 'react'
import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native'
import { createProducts, getMyProducts } from '../../API'
import { connect } from 'react-redux';
import Products from '../../containers/barbershop/Products';
import { setSuccess, setLoading } from '../../actions/SessionActions'

const MyProducts = (props) => {
  const [myProducts, setMyProducts] = useState(null)

  const getData = async () => {
    const {token} = props
    const response = await getMyProducts(token)
    setMyProducts(response.data)
  }
  const newProduct = async (name, description, price, hours, minutes, photo) => {
    const { token, setLoading, setSuccess } = props
    setLoading()
    const response = await createProducts(token, name, price, description, hours, minutes, photo);
    if(!response.data.errors)  setMyProducts(response.data.products)
    setSuccess()

  }
  const updateProduct = async (id, name, price, description, hours, minutes) => {
    console.log('Edit product');
  }
  const goBack = () => {
    props.navigation.navigate('HomeBarbershop')
  }

  useEffect(() => {
    const { setLoading, setSuccess } = props
    setLoading()
    getData()
    setSuccess()
  }, [])

  return (
    <>
      {
        props.isLoading ?
          (
            <ActivityIndicator />
          )
          :
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Products products={myProducts} newProduct={newProduct} updateProduct={updateProduct} goBack={goBack} />
          </View>

      }
    </>
  );
}


function mapToProps({ session }) {
  return session
}
export default connect(mapToProps, { setSuccess, setLoading })(MyProducts);
