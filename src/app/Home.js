import React from 'react';
import './home.less';
import calImg from '../images/calculator.png';
import timerImg from '../images/timer.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (<div className="home">
    <div id="content">
      <div class="content-header">
        <h1>在线实用工具</h1>
      </div>
      <div class="content-body">
        <div class="content-body-kit1">
          <img src={calImg} width="200px"/>
          <br/>
          <Link to="/calculator">计算器</Link>
        </div>
        <div class="content-body-kit2">
          <img src={timerImg} width="200px"/>
          <br/>
          <Link to="/timer">倒计时器</Link>
        </div>
      </div>
    </div>
  </div>);
};

export default Home;