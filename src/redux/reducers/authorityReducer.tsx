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
  userId: 0,
  userName: ''
}

export function AuthorityReducer(state = initStore, action: AuthorityAction): IStore {
  switch(action.type) {
    case AUTHORITY_IN:
      return {
        ...state,
        hasAuthority: action.data.hasAuthority,
        roleId: action.data.roleId,
        roleName: action.data.roleName,
        userId: action.data.userId,
        userName: action.data.userName
      }
    case AUTHORITY_OUT:
      return { ...state, hasAuthority: false }
  }

  return state;
}