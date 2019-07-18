import { AuthorityAction } from '../actions/authorityAction';
import { AUTHORITY_IN, AUTHORITY_OUT } from '../constants/authorityConstant';
import { IStore } from '../types/store';

/**
 * 权根 reducer
 */
// 初始化状态
const initStore = {
  roleId: 0,
  roleName: '',
  hasAuthority: false,
  mobile: '',
  userId: 0
}

export function AuthorityReducer(state = initStore, action: AuthorityAction): IStore {
  switch(action.type) {
    case AUTHORITY_IN:
      return {
        ...state,
        roleId: action.data.roleId,
        roleName: action.data.roleName,
        hasAuthority: action.data.hasAuthority,
        mobile: action.data.mobile,
        userId: action.data.userId
      }
    case AUTHORITY_OUT:
      return { ...state, hasAuthority: false }
  }

  return state;
}