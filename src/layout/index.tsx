import * as React from 'react';
import { Layout, Menu, Icon  } from 'antd';

import { IProps, IState } from './type';
import TestContent from '../content/testContent';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class BaseLayout extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh', color: 'white' }} >
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px', padding: '6px' }} >
            通用Web前台
          </div>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Icon type='pie-chart' />
              <span>Helloworld</span>
            </Menu.Item>
            <SubMenu key='sub1' title={<span><Icon type='dashboard' /><span>Dashboard</span></span>} >
               <Menu.Item key='2'>分析页</Menu.Item>
               <Menu.Item key='3'>监控页</Menu.Item>
               <Menu.Item key='4'>工作台</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#FFFFFF', textAlign: 'center', padding: 0 }} >
            页头
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <TestContent />
          </Content>
          <Footer style={{ background: '#FFFFFF', textAlign: 'center' }}>
            页脚
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BaseLayout;