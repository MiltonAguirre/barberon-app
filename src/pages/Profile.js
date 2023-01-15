import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
import {getMyProfile} from '../API';
import Profile from '../containers/Profile';
import {setError} from '../actions/SessionActions';
import {checkInternetConection} from '../utils';
const ProfileScreen = props => {
  const [dataUser, setDataUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [trySubmit, setTrySubmit] = useState(false);
  const callApiGetProfile = async () => {
    try {
      setLoading(true);
      const internet = await checkInternetConection();
      if (!internet) {
        setError('Verifica tu conexión a internet');
        setTrySubmit(!trySubmit);
      } else {
        const {token} = props;
        const response = await getMyProfile(token);
        setDataUser(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callApiGetProfile();
  }, [trySubmit]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {loading ? <ActivityIndicator /> : <Profile {...dataUser} />}
    </View>
  );
};

function mapToProps({session}) {
  return session;
}
export default connect(mapToProps, {setError})(ProfileScreen);
