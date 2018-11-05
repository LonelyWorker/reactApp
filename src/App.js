import React, { Component } from 'react';
import './App.css';
import Home from './component/home';
import 'bootstrap/dist/css/bootstrap.css';
import './css/antd-mobile.css';
import {Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Router> */}
        <Home/>
      {/* </Router> */}
      </div>
    );
  }
}

export default App;
