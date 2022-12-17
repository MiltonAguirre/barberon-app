import React from 'react';
import { Icon, Input } from 'react-native-elements';
import { View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DARK_COLOR, PRIMARY_COLOR } from '../utils/constants'

const Searcher = ({ search, onChange }) => {
    return (
        <View style={styles.row}>
            <Input
                containerStyle={styles.input}
                inputContainerStyle={{ borderBottomWidth: 0, height:hp('5%')}}
                onChangeText={search => onChange(search)}
                value={search}
                inputStyle={{ color: DARK_COLOR, textAlign: 'center', fontSize:14, textAlignVertical:'center'}}
                placeholder="Buscar por nombre..."
                placeholderTextColor={'#777'}
                underlineColorAndroid="transparent"
                rightIcon={
                    <Icon
                        name="search"
                        size={hp('2%')}
                        color={DARK_COLOR}
                        reverse
                        reverseColor={PRIMARY_COLOR}
                        containerStyle={{margin:0, padding:0}}
                        style={{backgroundColor:'green'}}
                    />
                }
            />
        </View>
    )
}

export default Searcher;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 0,

    },
    input: {
        backgroundColor: '#F0F0FF',
        width: wp('75%'),
        height: hp('5.25%'),
        borderRadius: 50,
        color: 'white',
        borderColor: DARK_COLOR,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 3,
        paddingHorizontal: 0,
    },
});