import React from 'react';
import {BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory, IndexLink} from 'react-router-dom';

class HeaderComponent extends React.Component {
    constructor(props) {    //构造函数
        super(props);
        this.state = {
            name: '我是头部',
        }
    };
    
    render() {
        return (
            <ul className="header">
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Page1">Page1</Link>
                </li>
                <li>
                    <Link to="/Page2">Page2</Link>
                </li>
                <li>
                    <Link to="/Page3">Page3</Link>
                </li>
            </ul>
        )
    }
}




export default HeaderComponent;