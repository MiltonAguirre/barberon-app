import { combineReducers } from 'redux';

import session from './sessionReducer';

const reducer = combineReducers({
  session,
});
export default reducer;
