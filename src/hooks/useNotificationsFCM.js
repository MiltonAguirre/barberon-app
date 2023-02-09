import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {registerTokenDevice} from '../API';

const useNotificationsFCM = () => {
  const {token} = useSelector(state => state.session);
  const [fcmToken, setFcmToken] = useState('');

  const getTokenDevice = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    setFcmToken(token);
  };
  useEffect(() => {
    if (token) {
      if (!fcmToken) {
        getTokenDevice();
      } else {
        registerTokenDevice(token, fcmToken)
          .then(res =>
            console.log('Response register TokenDevice: ', res.status),
          )
          .catch(err => console.log('Error catch register TokenDevice: ', err));
      }
    }
  }, [fcmToken]);

  return {fcmToken};
};
export default useNotificationsFCM;
