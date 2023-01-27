import {API_HOST} from './environment';
import axios from 'axios';
const headers = {
  'Content-Type': 'application/json;',
  'X-Requested-With': 'XMLHttpRequest',
  Authorization: '',
  jd2inwy0odhhn2m4snd:
    'NjBiYzcxYf12wYjc0NTEiLCJpYXQiOjE2MDc1MTg4MjksIznXjESLxN8E2Uv9F4QqXxLeQeleCYh8Atx_xeeT4_HeMypQs3XA8rtwLoy9_EWHe_03D_fdOZYX39eaWLYQph0vA2XHF56ZNpBEmnhBbXmzx7HUO9vswZPH6GI-PzT-vrBI_G67IUKXz_GINzFTQs-pJL7TWxEnd4AFR7eNC2tRhcbAkXt75bhOIzq8Wt2oenCetllLYvXvAoCt3rzL92X3ZSF2mPGAq68MhbVbESfa5pDFZk9S4uO9rAHAt4N-Yv0-UNVr2AL3B3oCxGzdivjIBHNgKa8tH9cwd2E3LfXGeiIKDjlZ3JTj16daSj24n3kE06_Rcgn8xKdo8CqsUi-7dCQAa8GJrm5oW2hbkSBkbTxpsagGdbfS8lH8AMpqCtazXaN71LqL2X7acfAGzwm4PIn5_Y9EznB2dPpYxdB4cyGtPadj0orbF2v_zimf86COeXgoIF59HMQIKCc6NahH_RLerMqcfw25v93U31-zAckRe1hwsoJDe9T0MuV_Jm0dEPDgCuj27PgJlMc74BuFiNMQZvYMUxUv3d7j2VpeNa9Fl_POPETUYH4n8Fg&3!*+};3!%&#/VB-kw2JCVIphkJA8I6VO6_dgs4cQ1IY7G3UyCC7zwZzn9pXQtyyTkVOwO',
};

/**
 * Function to get data in home.
 *
 * @param token.
 * @returns {none}
 */

//***Auth endpoints*****************************************//
export const signUp = (
  first_name,
  last_name,
  email,
  country,
  zip,
  role,
  password,
  password_confirmation,
) => {
  console.log('API signUp');
  const formData = new FormData();
  formData.append('first_name', first_name);
  formData.append('last_name', last_name);
  formData.append('email', email);
  formData.append('country', country);
  formData.append('zip', zip);
  formData.append('role', role);
  formData.append('password', password);
  formData.append('password_confirmation', password_confirmation);

  return new Promise((resolve, rejected) => {
    axios
      .post(`${API_HOST}/api/auth/signup`, formData, {headers})
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const login = (email, password) => {
  console.log('API login');
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  return new Promise((resolve, rejected) => {
    axios
      .post(`${API_HOST}/api/auth/login`, formData, {headers})
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const logout = token => {
  console.log('API logout');
  return new Promise((resolve, rejected) => {
    axios
      .get(`${API_HOST}/api/auth/logout`, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
//***Get data endpoints*****************************************//
export const getBarbershops = () => {
  console.log('API get barbershops');
  return new Promise((resolve, rejected) => {
    axios
      .get(`${API_HOST}/api/barbershops`, {
        headers,
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const getBarbershop = barbershop_id => {
  console.log('API get barbershop');
  return new Promise((resolve, rejected) => {
    axios
      .get(`${API_HOST}/api/barbershops/${barbershop_id}`, {
        headers,
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const getMyBarbershop = token => {
  console.log('API get My barbershop');
  return new Promise((resolve, rejected) => {
    axios
      .get(`${API_HOST}/api/barbershops/my-barbershop`, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const getMyProfile = token => {
  console.log('API get my profile');
  return new Promise((resolve, rejected) => {
    axios
      .get(`${API_HOST}/api/users/profile`, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const getProfile = (token, user_id) => {
  console.log('API get user profile');
  return new Promise((resolve, rejected) => {
    axios
      .get(`${API_HOST}/api/auth/user/profile/${user_id}`, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const getUserTurns = token => {
  console.log('API get user turns');
  return new Promise((resolve, rejected) => {
    axios
      .get(`${API_HOST}/api/auth/user/turns`, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
/*export const getTurn = (token, turn_id) => {
    console.log("API get turn");
    return new Promise((resolve, rejected) => {
        axios
            .get(`${API_HOST}/api/auth/turns/turn/${turn_id}`, {
                headers: { ...headers, 'Authorization': 'Bearer ' + token }
            })
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                console.log("API ERROR: ")
                console.log(error.message)
                rejected(error)
            })
    })
}
*/
export const getBarbershopTurns = token => {
  console.log('API get barbershop turns');
  return new Promise((resolve, rejected) => {
    axios
      .get(`${API_HOST}/api/auth/barbershops/turns/all`, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const getProducts = ({token, barbershop_id}) => {
  console.log('API get Products of barbershop ' + barbershop_id);
  return new Promise((resolve, rejected) => {
    axios
      .get(`${API_HOST}/api/barbershops/products/${barbershop_id}`, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
//***Post data endpoints*****************************************//
export const createBarbershops = (
  token,
  name,
  phone,
  zip,
  country,
  address,
  city,
  state,
  days,
  opens,
  closes,
) => {
  console.log('API create barbershop');
  const formData = new FormData();
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('country', country);
  formData.append('zip', zip);
  formData.append('address', address);
  formData.append('city', city);
  formData.append('state', state);
  days.forEach(element => {
    formData.append('days[]', element);
  });
  opens.forEach(element => {
    formData.append('opens[]', element);
  });
  closes.forEach(element => {
    formData.append('closes[]', element);
  });
  return new Promise((resolve, rejected) => {
    axios
      .post(`${API_HOST}/api/barbershops`, formData, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const createProducts = (
  token,
  name,
  description,
  price,
  hours,
  minutes,
  photo,
) => {
  console.log('API create product');
  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('hours', hours);
  formData.append('minutes', minutes);
  formData.append('photo', {
    name: photo.split('/').pop(),
    type: 'image/jpg',
    uri: photo,
  });
  return new Promise((resolve, rejected) => {
    axios
      .post(`${API_HOST}/api/products`, formData, {
        headers: {
          ...headers,
          Authorization: 'Bearer ' + token,
          'Content-type': 'multipart/form-data',
        },
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const acceptTurn = (token, turn_id) => {
  console.log('API accept turn as barber');
  return new Promise((resolve, rejected) => {
    axios
      .post(`${API_HOST}/api/auth/barbershops/turns/accept/${turn_id}`, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const cancelBarbershopTurn = (token, turn_id) => {
  console.log('API cancel turn as barber');
  return new Promise((resolve, rejected) => {
    axios
      .post(`${API_HOST}/api/auth/barbershops/turns/cancel/${turn_id}`, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const createTurn = (token, product_id, start) => {
  console.log('API create turn');
  const formData = new FormData();
  formData.append('start', start);
  formData.append('product_id', product_id);
  console.log(formData);
  return new Promise((resolve, rejected) => {
    axios
      .post(`${API_HOST}/api/auth/user/turns`, formData, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
export const cancelUserTurn = (token, turn_id) => {
  console.log('API cancel turn as user');
  return new Promise((resolve, rejected) => {
    axios
      .post(`${API_HOST}/api/auth/user/turns/cancel/${turn_id}`, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
//***Delete endpoints*****************************************//
export const destroyProduct = (token, product_id) => {
  console.log('API destroy product: ', product_id);
  return new Promise((resolve, rejected) => {
    axios
      .delete(`${API_HOST}/api/barbershops/products/${product_id}`, {
        headers: {...headers, Authorization: 'Bearer ' + token},
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('API ERROR: ');
        console.log(error.message);
        rejected(error);
      });
  });
};
