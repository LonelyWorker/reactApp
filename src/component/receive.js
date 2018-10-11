import React, { Component } from 'react';
import '../css/receive.css';
import { Button } from 'antd';
import 'antd/dist/antd.css'; 
class Receive extends Component{
    render(){
        return(
          <div id="receive">
            <Button type="primary" ghost>领取更多</Button>
          </div>
        )
    }
}

export default Receive;