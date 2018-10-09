import React, { Component } from 'react';
import './App.css';
import Home from './component/home';
import 'bootstrap/dist/css/bootstrap.css';
import './css/antd-mobile.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
