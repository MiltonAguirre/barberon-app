import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR} from '../utils/constants';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Turns from '../pages/Turns';

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        options={{
          header: () => {
            return null;
          },
        }}
        component={Home}
      />
    </HomeStack.Navigator>
  );
}
const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        options={{
          header: () => {
            return null;
          },
        }}
        component={Profile}
      />
    </ProfileStack.Navigator>
  );
}
const TurnsStack = createNativeStackNavigator();
function TurnsStackScreen() {
  return (
    <TurnsStack.Navigator>
      <TurnsStack.Screen
        name="TurnsScreen"
        options={{
          header: () => {
            return null;
          },
        }}
        component={Turns}
      />
    </TurnsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  const {token} = useSelector(state => state.session);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Turns':
              iconName = 'schedule';
              break;
            case 'Profile':
              iconName = 'person';
              break;
          }
          return (
            <View style={styles.container}>
              <Icon
                name={iconName}
                reverseColor={focused ? PRIMARY_COLOR : ''}
                reverse={focused}
                color={LIGHT_COLOR}
                size={hp('3.5%')}
              />
            </View>
          );
        },
        tabBarStyle: {backgroundColor: DARK_COLOR, height: hp('8%')},
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        style={{paddingBottom: 12}}
        showLabel={false}
        name="Home"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      {token && (
        <>
          <Tab.Screen
            style={{paddingBottom: 12}}
            showLabel={false}
            name="Turns"
            component={TurnsStackScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen
            style={{paddingBottom: 12}}
            showLabel={false}
            name="Profile"
            component={ProfileStackScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="MyTabs"
        options={{
          header: () => null,
        }}
        component={MyTabs}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
