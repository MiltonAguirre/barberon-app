import React from 'react';
import { View } from 'react-native';
import { Icon, Text} from 'react-native-elements'
import { DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../utils/constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const ItemMenu = ({focused,name, nameIcon}) => {
    return (
      <View style={{flexDirection: 'row', alignItems:'center'}} >
        <Icon
        name={nameIcon}
        size={hp('3.25%')}
        color={focused ? PRIMARY_COLOR : LIGHT_COLOR}
        />
        {
          focused ? 
          (
            <Text style={{color: LIGHT_COLOR, fontWeight:'700',fontSize: hp('2.5%'), }} > {name}</Text>
          )
          :
          (
            <Text style={{color: LIGHT_COLOR, fontSize: hp('2.25%')}} > {name}</Text>
          )
        }

      </View>
    )
  }

  export default ItemMenu;