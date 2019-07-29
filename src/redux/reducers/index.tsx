import { combineReducers } from 'redux';
import { AuthorityReducer } from '../reducers/authorityReducer';

/**
 * 合并所有 reducer
 */
const rootReducers = combineReducers({
  // 对象形式存储 reducer
  AuthorityReducer
});

export default rootReducers;