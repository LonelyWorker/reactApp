import React, { Component } from 'react';
import '../css/home.css';
import Index from './index';
import Receive from './receive';
import Mine from './child/mine';
import Onemine from './child/childs/one_mine';
import Twomine from './child/childs/two_mine';
import Threemine from './child/childs/three_mine';
import Fourmine from './child/childs/four_mine';



class Home extends Component{
    constructor(){
        super();
        this.state={
            tab:["首页","关于我们","最新活动"]
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
                            <nav >
                             <ul className="nav">
                                {
                                    this.state.tab.map((item, key) => {
                                        return <li key={key}><span>{item}</span></li>
                                    })
                                }
                             </ul>
                            </nav>
                        </div> 
                    </div>
                </header>
                <main className="main">
                    {/* <Index />
                    <Mine/>
                    <Onemine />
                    <Twomine />
                    <Threemine/>
                    <Fourmine/> */}
                    <Receive/>
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