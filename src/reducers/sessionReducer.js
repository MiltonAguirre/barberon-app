import {
  ERROR, SUCCESS, LOADING,
  CLEAR_MESSAGE, LOG_OUT, UPDATE_SESSION
} from '../actions/types/SessionTypes'

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  token: null,
  user_id: null,
  role_id: null,
  profile_img: null,
  first_name: '',
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        isError: true,
        isSuccess: false,
        message: action.payload,
        isLoading: false
      }
    case SUCCESS:
      return {
        ...state,
        isError: false,
        isSuccess: true,
        message: action.payload,
        isLoading: false
      }
    case LOADING:
      return {
        ...state,
        isLoading: true,
        message: '',
        isError: false
      }
    case UPDATE_SESSION:
      return {
        ...state,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: '',
        token: action.access_token,
        user_id: action.user_id,
        role_id: action.role_id,
        profile_img: action.profile_img,
        first_name: action.first_name
      }
    case LOG_OUT:
      return INITIAL_STATE
    case CLEAR_MESSAGE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: '',
      }
    default:
      return state
  }
}
