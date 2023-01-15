import React from 'react';
import {View} from 'react-native';
import Profile from '../containers/Profile';
import useUser from '../hooks/useUser';

const ProfileScreen = () => {
  const {user} = useUser();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Profile {...user} />
    </View>
  );
};
export default ProfileScreen;
