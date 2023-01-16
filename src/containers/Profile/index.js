import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {Icon, Image} from 'react-native-elements';
import {DARK_COLOR, SECONDARY_COLOR} from '../../utils/constants';
import Header from '../../shares/Header';
import styles from './styles';

const Profile = ({
  id,
  email,
  first_name,
  last_name,
  phone,
  address,
  city,
  state,
  country,
  zip,
}) => {
  return (
    <React.Fragment>
      <Header />
      <Image
        source={require('../../../assets/images/bg_barberon.jpg')}
        style={styles.imgHeader}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.container}>
            <Text style={styles.title}>Mi perfíl</Text>

            {!id ? (
              <View
                style={styles.loadingContainer}>
                <ActivityIndicator
                  color={DARK_COLOR}
                  size="large"
                  style={{margin: 10}}
                />
                <Text style={styles.textData}>Cargando datos de usuario</Text>
              </View>
            ) : (
              <>
                <View style={styles.section}>
                  <Text style={styles.subtitle}>Contacto</Text>
                  <View style={[styles.row, styles.rowData]}>
                    <Icon
                      name="person"
                      color={SECONDARY_COLOR}
                      iconStyle={styles.icon}
                    />
                    <Text style={styles.textData}>
                      {first_name + ' ' + last_name}
                    </Text>
                  </View>
                  {phone && (
                    <View style={[styles.row, styles.rowData]}>
                      <Icon
                        name="phone"
                        color={SECONDARY_COLOR}
                        iconStyle={styles.icon}
                      />
                      <Text style={styles.textData}>{phone}</Text>
                    </View>
                  )}
                  <View style={[styles.row, styles.rowData]}>
                    <Icon
                      name="mail"
                      color={SECONDARY_COLOR}
                      iconStyle={styles.icon}
                    />
                    <Text style={[styles.textData, {fontStyle: 'italic'}]}>
                      {email}
                    </Text>
                  </View>
                </View>

                <View style={styles.section}>
                  <Text style={styles.subtitle}>Ubicación</Text>
                  {city && state && (
                    <View style={[styles.row, styles.rowData]}>
                      <Icon
                        name="place"
                        color={SECONDARY_COLOR}
                        iconStyle={styles.icon}
                      />
                      <Text style={styles.textData}>{city + ', ' + state}</Text>
                    </View>
                  )}
                  <View style={[styles.row, styles.rowData]}>
                    <Icon
                      name="public"
                      color={SECONDARY_COLOR}
                      iconStyle={styles.icon}
                    />
                    <Text style={styles.textData}>
                      {'(' + zip + ') ' + country}
                    </Text>
                  </View>
                  {address && (
                    <View style={[styles.row, styles.rowData]}>
                      <Icon
                        name="location-city"
                        color={SECONDARY_COLOR}
                        iconStyle={styles.icon}
                      />
                      <Text style={styles.textData}>{address}</Text>
                    </View>
                  )}
                </View>
              </>
            )}
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Profile;
