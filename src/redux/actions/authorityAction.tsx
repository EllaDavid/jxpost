import * as constants from '../constants/authorityConstant'
import { IStore } from '../types/store';

/**
 * 权限 action
 */
export interface IAuthorityIn {
  data: IStore;
  type: constants.AUTHORITY_IN;
}

export interface IAuthorityOut {
  type: constants.AUTHORITY_OUT;
}

export type AuthorityAction = IAuthorityIn | IAuthorityOut;

export function authorityInFun(data: IStore): IAuthorityIn {
  return {
    data,
    type: constants.AUTHORITY_IN,
  }
}

export function authorityOutFun(): IAuthorityOut {
  return {
    type: constants.AUTHORITY_OUT
  }
}