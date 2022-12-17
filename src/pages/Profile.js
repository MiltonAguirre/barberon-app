import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { connect } from 'react-redux';
import { setSuccess, setLoading } from '../actions/SessionActions'
import { getMyProfile } from '../API';
import Profile from '../containers/Profile';

const ProfileScreen = (props) => {
  const [dataUser, setDataUser] = useState({})

  const callApiGetProfile = async (token) => {
    const response = await getMyProfile(token)
    setDataUser(response.data)
  }

  useEffect(() => {
    try {
      const { token, role_id, user_id, setLoading, setSuccess } = props;
      setLoading()
      if (token && user_id && role_id) {
        callApiGetProfile(token)
      }
      setSuccess()
    } catch (error) {
      console.log("Error: ", error);
      setSuccess()
    }
  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      {
        props.isLoading ?
          <ActivityIndicator />
          :
          <Profile {...dataUser} />
      }
    </View>
  );
}


function mapToProps({ session }) {
  return session
}
export default connect(mapToProps, { setSuccess, setLoading })(ProfileScreen);