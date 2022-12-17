import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../utils/constants';

const ButtonsFilter = ({ filter, setFilter }) => {
    return (
        <View style={styles.row}>
            <Button
                icon={
                    <Icon
                        name="date-range"
                        size={20}
                        color={filter == 1 ? PRIMARY_COLOR : SECONDARY_COLOR}
                    />
                }
                onPress={() => setFilter(1)}
                buttonStyle={styles.btnFilter}
                title="Pendientes"
                titleStyle={[styles.btnText, filter == 1 && { color: PRIMARY_COLOR }]}
            />
            <Button
                icon={
                    <Icon
                        name="event"
                        size={20}
                        color={filter == 2 ? PRIMARY_COLOR : SECONDARY_COLOR}
                    />
                }
                onPress={() => setFilter(2)}
                buttonStyle={styles.btnFilter}
                title="Activos"
                titleStyle={[styles.btnText, filter == 2 && { color: PRIMARY_COLOR }]}
            />
            <Button
                icon={
                    <Icon
                        name="event-busy"
                        size={20}
                        color={filter == 0 ? PRIMARY_COLOR : SECONDARY_COLOR}
                    />
                }
                onPress={() => setFilter(0)}
                buttonStyle={styles.btnFilter}
                title="Cancelados"
                titleStyle={[styles.btnText, filter == 0 && { color: PRIMARY_COLOR }]}

            />

            <Button
                icon={
                    <Icon
                        name="event-available"
                        size={20}
                        color={filter == 3 ? PRIMARY_COLOR : SECONDARY_COLOR}
                    />
                }
                onPress={() => setFilter(3)}
                buttonStyle={styles.btnFilter}
                title="Concluidos"
                titleStyle={[styles.btnText, filter == 3 && { color: PRIMARY_COLOR }]}
            />
        </View>
    )
}
export default ButtonsFilter;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: wp('95%'),
        marginVertical: hp('2%')
    },
    messageEmpty: {
        color: DARK_COLOR,
        alignSelf: 'center',
        paddingVertical: hp('2.5%')
    },
    btnFilter: {
        backgroundColor: LIGHT_COLOR,
        alignItems: 'center',
    },
    btnText: {
        fontSize: 12,
        color: SECONDARY_COLOR
    }
});