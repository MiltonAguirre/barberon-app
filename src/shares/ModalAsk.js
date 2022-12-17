import React from 'react';
import { Alert, Modal, StyleSheet, TextInput, View } from 'react-native';
import { Avatar, Button, Icon, Image, Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DARK_COLOR, PRIMARY_COLOR, THIRD_COLOR } from '../utils/constants';
import Styles from '../utils/styles';
import { PermissionsAndroid, Platform } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Please choise',
    cancelButtonTitle: 'Cancel',
    takePhotoButtonTitle: 'Picture',
    chooseFromLibraryButtonTitle: 'Choice álbum',
    quality: 0.75,
    allowsEditing: true,
    noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
        return true;
    }

    const status = await PermissionsAndroid.request(permission, {
        title: 'Image gallery app permission',
        message: 'Image gallery needs your permission to access your photos',
        buttonPositive: 'Ok'
    });
    return status === 'granted';
}
const FooterButtons = ({ submit, addPhoto }) => {
    return (
        <View style={{ marginTop: hp('5%') }}>
            <View style={[styles.row, { justifyContent: 'space-between', width: wp('75%') }]}>
                <Button icon={<Icon name="add-a-photo" />} buttonStyle={styles.btnCam} onPress={addPhoto} />
                <Button title="Run it" buttonStyle={styles.btnRunIt} titleStyle={{ color: '#FFF', fontSize: 12 }} onPress={submit} />
            </View>
        </View>
    )
}

const ModalAsk = ({ name, urlImage, toggleModal, modalVisible, submit }) => {
    const [question, onChangeQuestion] = React.useState('')
    const [photo, setPhoto] = React.useState(null)
    const preSubmit = () => {
        submit(question, photo)
    }
    const onChangePhoto = async () => {
        const status = await hasAndroidPermission()
        if(status){
            const response = await launchImageLibrary(options);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                Alert.alert(response.customButton);
            } else {
                if (response.assets[0].uri) setPhoto(response.assets[0].uri);
            }
    
        }
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                toggleModal()
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={[styles.row, { width: wp('80%') }]}>
                        <Avatar
                            rounded
                            size="medium"
                            source={{ uri: urlImage }}
                        />
                        <View style={styles.headSection}>
                            <Text style={styles.title}>{name}</Text>
                        </View>
                        <View style={{ width: wp('45%'), alignItems: 'flex-end', alignSelf: 'flex-start' }}>
                            <Icon name="close" onPress={toggleModal} />
                        </View>
                    </View>
                    <View style={{ padding: 5, margin: 5, alignSelf: 'center' }}>
                        <View style={[Styles.card, styles.inputContainer]}>
                            <View style={[styles.row, { justifyContent: 'flex-start' }]}>
                                <Icon name="person" size={25} iconStyle={styles.iconQuestion} containerStyle={{ padding: 0, margin: 0, marginTop: 14 }} />
                                <Icon name="contact-support" size={20} containerStyle={[styles.iconQuestion, styles.subIconQuestion]} />
                                <TextInput
                                    placeholder="Ask Question..."
                                    placeholderTextColor={THIRD_COLOR}
                                    onChangeText={onChangeQuestion}
                                    value={question}
                                    style={{ fontSize: 18, width: wp('50%') }}
                                />
                            </View>
                        </View>
                    </View>
                    {
                        photo &&
                        <Image source={{ uri: photo }} style={{height: 200, width:250, resizeMode: 'contain' }} />
                    }
                    <FooterButtons submit={preSubmit} addPhoto={onChangePhoto} />
                </View>

            </View>
        </Modal>
    )
}
export default ModalAsk;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: wp('90%'),
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        paddingVertical: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    row: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
    },
    headSection: {
        padding: 4,
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 5,
        margin: 10
    },
    inputContainer: {
        padding: 10,
        width: wp('82.5%'),
        height: hp('9%'),
    },
    btnRunIt: {
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 3,
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5
    },
    btnCam: {
        backgroundColor: '#FFF',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    iconQuestion: {
        padding: 0,
        margin: 0,
    },
    subIconQuestion: {
        position: 'relative',
        right: 10,
        bottom: 5
    }
})