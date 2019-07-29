import { RouteComponentProps } from 'react-router-dom';

import { IAuthorityOut } from '../redux/actions/authorityAction';

export interface IProps extends RouteComponentProps {
  hasAuthority: boolean;
  groupId: number;
  groupName: string;
  mobile: string;
  authorityOutFun(): IAuthorityOut;
}

export interface IState {
  menuArray: ISubMenu[];
}

interface IMenuItem {
  key: string;
  value: string;
  link: string;
}

interface ISubMenu {
  icon: string;
  key: string;
  value: string;
  items: IMenuItem[];
}