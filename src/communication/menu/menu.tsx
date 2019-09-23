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
      items: [{
        key: '101',
        link: '/main/global/uploadContent',
        value: '文件上传'
      }, {
        key: '102',
        link: '/main/global/uploadDetailViewContent',
        value: '上传文件列表'
      }],
      icon: 'folder',
      key: '1',
      value: '文件处理'
    }, {
      items: [{
        key: '201',
        link: '/main/mail/testContent',
        value: '测试菜单'
      }],
      icon: 'red-envelope',
      key: '2',
      value: '寄递事业'
    }]
  );
}