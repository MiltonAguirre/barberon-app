import React, {useState, useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import messaging from '@react-native-firebase/messaging';
import MyDrawer from './Drawer';
/** Pages ***/
import Splash from '../pages/Splash';
import Login from '../pages/auth/LogIn';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import SignUp from '../pages/auth/SignUp';
import LogOut from '../pages/auth/LogOut';
import Barbershop from '../pages/Barbershop';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const MainStack = () => {
  // const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Home');

  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          console.log('All data: ', remoteMessage.data);
          // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        setLoading(false);
      });

    return messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
  }, []);

  if (loading) {
    return null;
  }
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="Home"
        component={MyDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Barbershop"
        component={Barbershop}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Logout"
        component={LogOut}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator navig initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
