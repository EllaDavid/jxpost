import * as React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Breadcrumb, Row, Col  } from 'antd';
import { Link, Route, Redirect } from 'react-router-dom';

import { IProps, IState } from './type';
import { menuAuthorityCom } from '../communication/menu/menu';

import HelloContent from '../content/helloContent';
import TestContent from '../content/testContent';
import UploadContent from '../content/uploadContent';
import UploadDetailViewContent from '../content/uploadDetailViewContent';
import CreateMailDetailReportContent from '../content/createMailDetailReportContent';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class BaseLayout extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = { menuArray: menuAuthorityCom(this.props.groupId) };
  }

  public render() {
    // 构造面包屑
    const breadcrumbNameMap: any = {
      '/main': '主页',
      '/main/helloContent': '你好',
      '/main/uploadContent': '文件上传',
      '/main/uploadDetailViewContent': '上传文件列表',
      '/main/createMailDetailReportContent': '生成寄递成本文件',
      '/main/testContent': '测试'
    };
    const pathSnippets = this.props.location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${ pathSnippets.slice(0, index + 1).join('/') }`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            { breadcrumbNameMap[url] }
          </Link>
        </Breadcrumb.Item>
      );
    });

    // 在最前面增加一个 HOME 标签
    // const breadcrumbItems = [(
    //   <Breadcrumb.Item key="home">
    //     <Link to="/">Home</Link>
    //   </Breadcrumb.Item>
    // )].concat(extraBreadcrumbItems);

    const subMenu = (
      this.state.menuArray.map(v => (
        <SubMenu key={ v.key } title={<span><Icon type={ v.icon } />{ v.value }</span>} >
          { v.items.map(value => (
            <Menu.Item key={ value.key }><Link to={ value.link }>{ value.value }</Link></Menu.Item>
          )) }
        </SubMenu>
      ))
    );

    return (
      <Layout>
        <Sider width={ 256 } style={{ minHeight: '100vh', color: 'white' }} >
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px', padding: '6px' }} >
            通用Web前台
          </div>
          <Menu theme='dark' mode="inline" style={{ height: '100%', borderRight: 0 }}>
            { subMenu }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#FFFFFF', textAlign: 'center', padding: 0 }} >
            <Row>
              <Col span={ 6 }>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  { extraBreadcrumbItems }
                </Breadcrumb>
              </Col>
              <Col span={ 3 } offset={ 15 }>
                <div>
                  登录
                </div>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <Content style={{ background: '#E8E8E8', padding: 24, margin: 0, minHeight: 280 }}>
              <Route path='/main/helloContent' component={ HelloContent } />
              <Route path='/main/uploadContent' component={ UploadContent } />
              <Route path='/main/uploadDetailViewContent' component={ UploadDetailViewContent } />
              <Route path='/main/createMailDetailReportContent' component={ CreateMailDetailReportContent } />
              <Route path='/main/testContent' component={ TestContent } />
              <Redirect to='/main/helloContent' />
            </Content>
          </Content>
          <Footer style={{ background: '#FFFFFF', textAlign: 'center' }}>
            中国邮政集团公司嘉兴分公司 @2019 Created by David
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = () => {
  return({});
};

const actionCreator = {
};

const MainLayout = connect(mapStateToProps, actionCreator)(BaseLayout);

export default MainLayout;