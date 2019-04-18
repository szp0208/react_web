import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import Home from './controller/Home';
import Page1 from './controller/Page1';
import Page2 from './controller/Page2';
import Page3 from './controller/Page3';
import { Layout, Menu, Icon } from 'antd';  //ui组件
import 'antd/dist/antd.less';
import headerImg from './img/header.jpg';


const SubMenu = Menu.SubMenu;
class App extends React.Component {
    constructor(props) {    //构造函数
        super(props);
        this.state = {
            collapsed: false,   //左侧边栏收起放开控制
            routerConfig: [ //路由地址方法配置参数
                {path: '/Home', component: Home},
                {path: '/Page1', component: Page1},
                {path: '/Page2', component: Page2},
                {path: '/Page3', component: Page3},
            ],
            routerNavigation: [ //路由导航方法配置参数
                {
                    mainMenu: {name: '材料管理', icon: 'skin', key: 'sub1'}, 
                    items: [
                        {name: 'Home', path: '/Home'},
                        {name: 'Page1', path: '/Page1'},
                        {name: 'Page2', path: '/Page2'},
                        {name: 'Page3', path: '/Page3'},
                    ]
                },
                {
                    mainMenu: {name: '员工管理', icon: 'user', key: 'sub2'}, 
                    items: [
                        {name: 'Home', path: 'Home'},
                        {name: 'Page1', path: 'Page1'},
                        {name: 'Page2', path: 'Page2'},
                        {name: 'Page3', path: 'Page3'},
                    ]
                },
                {
                    mainMenu: {name: '账单管理', icon: 'pay-circle', key: 'sub3'}, 
                    items: [
                        {name: 'Home', path: 'Home'},
                        {name: 'Page1', path: 'Page1'},
                        {name: 'Page2', path: 'Page2'},
                        {name: 'Page3', path: 'Page3'},
                    ]
                }
            ]
        }
    };

    //侧边栏收缩事件处理
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    //点击导航路由跳转事件
    routerClick = (path) => {
        this.props.history.push(path);
    }
    
    render() {
        const {
            Header, Footer, Sider, Content,
        } = Layout;

        return (
            <Layout>
                <Sider
                style={{height: '100%'}}
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                >
                    <div className="logo"><img src={headerImg} alt=""/></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {
                            this.state.routerNavigation.map((item, index) =>{
                                return (
                                    <SubMenu key={item.mainMenu.key} title={<span><Icon type={item.mainMenu.icon} /><span>{item.mainMenu.name}</span></span>}>
                                        {
                                            item.items.map((item_, index_) => {
                                                return (
                                                    <Menu.Item key={item.mainMenu.key + index_} onClick={(this.routerClick.bind(this, item_.path))}>{item_.name}</Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                        style={{marginLeft: '16px'}}
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,}}>
                        {
                            this.state.routerConfig.map((item, index) => {
                                return(
                                    <Route key={'route' + index} path={item.path} component={item.component} />
                                )
                            })
                        }
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(App);