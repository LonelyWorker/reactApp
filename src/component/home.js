import React, { Component } from 'react';
import { Item } from 'antd-mobile/lib/tab-bar';
class Home extends Component{
    constructor(){
        super();
        this.state={
            list:["首页","关于我们","最新活动"]
        }
    }
    render(){
        return (
            <div id ="home">
                <header className = "head">
                    <div className = "head_l">

                    </div>
                    <nav className = "head_r">
                        <ul>
                            {
                                this.state.list.map((item,idx) => {
                                    return <li onClick="{idx}">{item}</li>
                                })
                            }
                        </ul>
                    </nav>
                </header>
                <footer className = "foot">222</footer>
            </div>
        );
    }
}
export default Home;