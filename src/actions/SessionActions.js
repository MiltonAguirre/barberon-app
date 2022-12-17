import * as type from './types/SessionTypes';

export const setSession = ({access_token,role_id,user_id,profile_img,first_name}) => ({
  type: type.UPDATE_SESSION,
  access_token,
  role_id,
  user_id,
  first_name,
  profile_img
});
export const setError = payload => ({
  type: type.ERROR,
  payload,
});
export const setSuccess = payload => ({
  type: type.SUCCESS,
  payload,
});
export const setLoading = () => ({
  type: type.LOADING,
});

export const signOut = () => ({
  type: type.LOG_OUT,
});

export const clearAllMessages = () => ({
  type: type.CLEAR_MESSAGE,
});