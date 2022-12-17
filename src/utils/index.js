// import NetInfo from '@react-native-community/netinfo';
import {API_HOST} from '../environment';
import NetInfo from '@react-native-community/netinfo';
import {PermissionsAndroid} from 'react-native';

export const validateEmail = (email) => { //bassed on https://blog.mailtrap.io/react-native-email-validation/
    const expression = /\S+@\S+\.\S+/;
    if(!email || email.length<6 || !expression.test(String(email)))  return false;
    else return true;
}
export const validateString = (string) => {
  if (!string || string.length<3)
    return false;
  return true;
}
export const validateLocation = (location) => {
  const expression = /^[A-Za-z0-9Ññ ]*$/u;
  if(!location || location.length<3 || !expression.test(String(location)))  return false;
  else return true;
}
export const validateName = (name) => {
  const expression = /^[A-Za-zÑñ ]*$/u;
  if(!name || name.length<3 || !expression.test(String(name)))  return false;
  else return true;
}
export const validatePhone = (string) => {
  if (!string || string.length<15 || string.length>30)  return false;
  else return true;
}
export const validatePasswords = (pass, repass) => {
  if (!pass || pass.length<8 || pass!==repass)  return false;
  else return true;
}

export const getFullPathImage = (image) => {
  return `${API_HOST}/storage/${image}`;
}


export const optionsPhoto = {
  title: 'Please choise a picture',
  mediaType: 'photo',
  cancelButtonTitle: 'Cancel',
  cameraType: 'back',
  takePhotoButtonTitle: 'Picture',
  chooseFromLibraryButtonTitle: 'Choice álbum',
  quality: 0.5,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  saveToPhotos: true,
};
export async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(permission, {
    title: 'Image gallery app permission',
    message: 'Image gallery needs your permission to access your photos',
    buttonPositive: 'Ok',
  });
  return status === 'granted';
}
export async function hasAndroidPermissionCamera() {
  const permission = PermissionsAndroid.PERMISSIONS.CAMERA;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(permission, {
    title: "App Camera Permission",
    message: "The app needs access to your camera.",
    buttonNegative: "Cancel",
    buttonPositive: "OK"
  });
  return status === 'granted';
}

export const checkInternetConection = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const state = await NetInfo.fetch();
      resolve(state.isConnected);
    } catch (error) {
      console.log('CHECK NETWORK ERROR ');
      reject(error);
    }
  });
};

export const timeAgo = date => {
  const seconds = Math.abs(new Date() - date) / 1000;
  interval = Math.floor(seconds / 604800);
  if (interval > 1) {
    return interval + ' semanas';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' dias';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' horas';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutos';
  }
  return Math.floor(seconds) + ' segundos';
};
export const timeOfLife = (dateBorn, datePhoto) => {
  const seconds = Math.abs(datePhoto.getTime() - dateBorn.getTime()) / 1000;
  interval = Math.floor(seconds / 604800);
  if (interval > 1) {
    return interval + ' semanas';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' dias';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' horas';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutos';
  }
  return 'El primer instante';
};

// export const checkInternetConection = () => {
//   return new Promise((resolve,reject) => {
//     return NetInfo.fetch().then(state => {
//       resolve(state.isConnected);
//     }).catch( (error) => {
//       console.log("CHECK NETWORK ERROR ")
//       rejected();
//     });
//   })
// }



// export function calculate_age(dob) {  // bassed on https://www.w3resource.com/javascript-exercises/javascript-date-exercise-18.php
//   var diff_ms = Date.now() - dob.getTime();
//   var age_dt = new Date(diff_ms); 
//   return Math.abs(age_dt.getUTCFullYear() - 1970);
// }