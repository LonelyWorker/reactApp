import React, { Component } from 'react';
import '../css/home.css';

import {Route,NavLink,Switch,withRouter} from 'react-router-dom'


//引入组件
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
            tabs:[
				{
					id:1,
					text:'首页',
					path:'/home'
				},
				{
					id:2,
					text:'关于我们',
					path:'/mine'
				},
				{
					id:3,
					text:'最新活动',
					path:'/hover'
				}
			]
		}
    }
    go(path){
		/*
			编程式导航获取history方式
				* 利用Route渲染Index
				* 利用withRouter包装组件(推荐)
				* 利用context
		 */
		console.log(this)
		// let {history} = this.props;

		let {history} = this.context.router;

		history.push({pathname:path});
		// history.replace(path);
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
                                    this.state.tabs.map(tab => {
                                        return <li key={tab.id} onClick={this.go.bind(this,tab.path)}><span>{tab.text}</span></li>
                                    })
                                }
                             </ul>
                            </nav>
                        </div> 
                    </div>
                </header>
                <main className="main">
                     {/* <Index /> */}
                    {/*<Mine/>
                    <Onemine />
                    <Twomine />
                    <Threemine/>
                    <Fourmine/>
                    <Receive/> */}
                    {/* <Switch> */}
                        {/* <Route path="/home" component={Home} />
                        <Route path="/index" component={Index} />
                        <Route path="/receive" component={Receive} /> */}
                    {/* </Switch> */}
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