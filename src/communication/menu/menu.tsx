/**
 * 暂时用数据代替
 */
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

export function menuAuthorityCom(groupId: number): ISubMenu[] {
  return (
    [{
      icon: 'user',
      items: [{
        key: '101',
        link: '/main/uploadContent',
        value: '文件上传'
      }, {
        key: '102',
        link: '/main/uploadDetailViewContent',
        value: '上传文件列表'
      }, {
        key: '103',
        link: '/main/createMailDetailReportContent',
        value: '生成寄递成本文件'
      }, {
        key: '104',
        link: '/main/testContent',
        value: '测试'
      }],
      key: '1',
      value: '客户管理'
    }, {
      icon: 'laptop',
      items: [{
        key: '201',
        link: '',
        value: '子菜单二零一'
      }, {
        key: '202',
        link: '',
        value: '子菜单二零二'
      }, {
        key: '303',
        link: '/main/testContent',
        value: '测试菜单'
      }],
      key: '2',
      value: '主菜单二'
    }]
  );
}