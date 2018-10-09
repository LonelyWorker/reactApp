import React, { Component } from 'react';
import Index from './index';
import '../css/home.css';

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
                    <div className="row">
                        <div className="col-4 head_l">
                        </div>
                        <div className="col-8 head_r">
                            <nav className="nav">
                             <ul>
                                {
                                    this.state.list.map((item, key) => {
                                        return <li key={key}>{item}</li>
                                    })
                                }
                             </ul>
                            </nav>
                        </div> 
                    </div>
                </header>
                <main className="main">
                    <Index />
                </main>
                <footer className = "foot">
                  <div className="dir">
                    <div className="txt">瑞幸咖啡（北京）有限公司    京ICP备17074868号</div>
                  </div>
                  <div className="address">
                    <div>电话：010-87689999</div>
                    <div>地址：中关村东路118号</div>
                    <div>营业执照编码：91110108MA018FG04E</div>
                    <div>食品经营许可编码：JY21108111531829</div>
                    <div>Copyright©2018 www.luckincoffee.com All Rights Reserved</div>
                  </div>
                </footer>
            </div>
        );
    }
}


export default Home;