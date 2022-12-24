import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {PRIMARY_COLOR, LIGHT_COLOR, DARK_COLOR} from '../utils/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SignOut from '../pages/auth/LogOut';
import TabHome from './TabHome';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import ItemMenu from '../shares/ItemMenu';
import {connect} from 'react-redux';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const {goToLogin, signOut, token} = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Seguinos"
        labelStyle={styles.label}
        icon={() => (
          <Icon
            name="logo-instagram"
            type="ionicon"
            style={styles.icon}
            color={PRIMARY_COLOR}
            size={25}
            containerStyle={styles.icon}
          />
        )}
        onPress={() => Linking.openURL('https://www.instagram.com')}
      />
      <DrawerItem
        label="Solicitá ayuda"
        labelStyle={styles.label}
        icon={() => (
          <Icon
            name="whatsapp"
            type="font-awesome"
            size={25}
            color={PRIMARY_COLOR}
          />
        )}
        onPress={() =>
          Linking.openURL(
            'whatsapp://send?text=Hola,%20necesito%20ayuda&phone=+543425784942',
          )
        }
      />
      {!token ? (
        <DrawerItem
          label="Ingresar"
          labelStyle={styles.label}
          icon={() => (
            <Icon
              name="sign-in-alt"
              type="font-awesome-5"
              style={styles.icon}
              color={PRIMARY_COLOR}
              size={25}
              containerStyle={styles.icon}
            />
          )}
          onPress={goToLogin}
        />
      ) : (
        <DrawerItem
          label="Salir"
          labelStyle={styles.label}
          icon={() => (
            <Icon
              name="sign-out-alt"
              type="font-awesome-5"
              style={styles.icon}
              color={PRIMARY_COLOR}
              size={25}
              containerStyle={styles.icon}
            />
          )}
          onPress={signOut}
        />
      )}
    </DrawerContentScrollView>
  );
}
const MyDrawer = props => {
  const {navigation, token} = props;
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent
          {...props}
          goToLogin={() => navigation.replace('AuthStack')}
          signOut={() => navigation.navigate('Logout')}
          token={token}
        />
      )}
      drawerStyle={styles.menu}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: DARK_COLOR,
          width: 240,
        },
      }}>
      <Drawer.Screen
        options={{
          drawerLabel: ({focused}) => (
            <ItemMenu name="Inicio" nameIcon="home" focused={focused} />
          ),
          activeTintColor: LIGHT_COLOR,
        }}
        name="TabHome"
        component={TabHome}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: DARK_COLOR,
    opacity: 1,
    height: hp('100%'),
    width: wp('60%'),
    paddingVertical: hp('2.5%'),
  },
  label: {
    color: LIGHT_COLOR,
    fontSize: hp('2%'),
  },
});
function mapStateToProps({session}) {
  return session;
}
export default connect(mapStateToProps)(MyDrawer);
