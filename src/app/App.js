import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./Home";
import Navigator from "./Navigator";
import Calculator from "./Calculator";
import Timer from "./Timer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navigator/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/calculator' component={Calculator}/>
            <Route exact path='/timer' component={Timer}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;