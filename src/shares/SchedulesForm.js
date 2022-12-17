import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import {
    CheckBox
} from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PRIMARY_COLOR, DARK_COLOR, LIGHT_COLOR } from '../utils/constants';
import DateTimePickerModal from "react-native-modal-datetime-picker";

function SchedulesForm({ open, close, checked, setOpen, setClose, setChecked }) {
    const [showOpen, setShowOpen] = React.useState(false);
    const [showClose, setShowClose] = React.useState(false);

    const onChangeOpen = (event, selectedDate) => {
        const currentDate = selectedDate || open;
        setShowOpen(!showOpen);
        setOpen(currentDate);

    };
    const showTimepickerOpen = () => {
        setShowOpen(!showOpen);
    };
    const onChangeClose = (event, selectedDate) => {
        const currentDate = selectedDate || close;
        setShowClose(!showClose);
        setClose(currentDate);

    };
    const showTimepickerClose = () => {
        setShowClose(!showClose);
    };
    const cancelPickerOpen = () => {
        setOpen(null)
        setShowOpen(false)
    }
    const cancelPickerClose = () => {
        setClose(null)
        setShowClose(false)

    }
    return (
        <React.Fragment>
            <Text style={[styles.label, { marginVertical: hp('1%') }]}>Jornada laboral</Text>
            <View style={[styles.row, { justifyContent: 'space-evenly', paddingHorizontal: wp('2.5%') }]}>

                <CheckBox
                    center
                    title='Mar a Sab'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={checked == 0}
                    containerStyle={styles.inputDay}
                    onPress={() => setChecked(0)}
                />
                <CheckBox
                    center
                    title='Mar a Dom'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={checked == 1}
                    containerStyle={styles.inputDay}
                    onPress={() => setChecked(1)}
                />
                <CheckBox
                    center
                    title='Todos los dias'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={checked == 2}
                    containerStyle={styles.inputDay}
                    onPress={() => setChecked(2)}
                />
            </View>
            <Text style={[styles.label, { marginTop: hp('1%') }]}>Horario</Text>
            <View style={[styles.row, styles.schedules]}>
                <Text style={styles.sublabel}>Apertura</Text>
                <TouchableOpacity style={styles.btnTime} onPress={showTimepickerOpen}>
                    <Text style={{ color: LIGHT_COLOR, textAlign: 'center' }}>
                        {open.getHours() + ":00hs"}
                    </Text>
                </TouchableOpacity>
                {
                    showOpen &&
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="time"
                        onConfirm={onChangeOpen}
                        onCancel={cancelPickerOpen}
                    />
                }

                <Text style={styles.sublabel}>Cierre</Text>
                <TouchableOpacity style={styles.btnTime} onPress={showTimepickerClose}>
                    <Text style={{ color: LIGHT_COLOR, textAlign: 'center' }}>
                        {close.getHours() + ":00hs"}
                    </Text>
                </TouchableOpacity>
                {
                    showClose &&
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="time"
                        onConfirm={onChangeClose}
                        onCancel={cancelPickerClose}
                    />
                }
            </View>
        </React.Fragment>
    )
}

export default SchedulesForm

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    label: {
        color: DARK_COLOR,
        fontSize: hp('1.8%'),
        textAlign: 'center',
        padding: wp('1.5%'),
        textTransform: 'uppercase',
        fontWeight: '700'

    },
    sublabel: {
        color: DARK_COLOR,
        fontSize: hp('1.8%'),
        textAlign: 'center',
        marginBottom: hp('.5%'),
    },
    error: {
        borderColor: 'red',
        color: 'red'
    },
    inputDay: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        margin: 0
    },
    btnTime: {
        height: hp("4%"),
        width: wp("20%"),
        marginLeft: wp('1%'),
        marginRight: wp('5%'),
        borderRadius: wp("2.5%"),
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        backgroundColor: DARK_COLOR,
        textAlign: "center",
        justifyContent: "center",
        alignSelf: 'center'
    },
    schedules: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp('2.5%')
    },
});