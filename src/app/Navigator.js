import React from 'react';
import { Link } from 'react-router-dom';
import './navigator.less';

class Navigator extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return <div id="navigator">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/calculator">在线计算器</Link>
                </li>
                <li>
                    <Link to="/timer">在线倒计时</Link>
                </li>
            </ul>
        </div>
    }
}

export default Navigator;