/**
 * 项目的 store 类型
 */
export interface IStore {
  hasAuthority: boolean;
  userId: number;
  mobile: string;
  roleId: number;
  roleName: string;
}

export interface IAuthorityStore {
  AuthorityReducer: IStore;
}