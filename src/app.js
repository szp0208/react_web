import React from 'react';
import {BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory, IndexLink} from 'react-router-dom';
import Home from './controller/Home';
import Page1 from './controller/Page1';
import Page2 from './controller/Page2';
import Page3 from './controller/Page3';
import HeaderComponent from './controller/HeaderComponent';
import { Layout } from 'antd';  //ui组件
import 'antd/dist/antd.css';


class App extends React.Component {
    constructor(props) {    //构造函数
        super(props);
        this.state = {
            name: '我是组件app',
            value: '我是APP的子组件view',
        }
    };
    
    
    render() {
        const {
            Header, Footer, Sider, Content,
        } = Layout;

        return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )

        // return (
        //     <HashRouter history={this.hashHistory} >
        //         <div>
        //             <Layout>
        //                 <Header>
        //                     <HeaderComponent></HeaderComponent>
        //                 </Header>
        //                 <Layout>
        //                     <Sider>Sider</Sider>
        //                     <Content>
        //                         <Route path="/Home" component={Home} />
        //                         <Route path="/Page1" component={Page1} />
        //                         <Route path="/Page2" component={Page2} />
        //                         <Route path="/Page3" component={Page3} />
        //                     </Content>
        //                 </Layout>
        //                 <Footer>Footer</Footer>
        //             </Layout>
        //         </div>
        //     </HashRouter>
        // )
    }
}

export default App;