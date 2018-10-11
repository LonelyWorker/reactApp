import React,{ Component } from 'react';
import '../../../css/mineCom.css';
import Img from '../../../img/luckin.png';

class Onemine extends Component{
    render(){
        return (
            <div id="mineCom">
                <header className="head_title">
                    <i></i>
                    <h3>商业模式</h3>
                </header>
                <main className="txt">
                    <div className="title">
                        专业咖啡新模式
                    </div>
                    <div className="first">
                        luckin coffee(瑞幸咖啡)中国新零售咖啡典型代表，致力于成为中国领先的高品质咖啡品牌和专业化的咖啡服务提供商。     
                    </div>
                    <div className="second">
                        luckin coffee(瑞幸咖啡)中国新零售咖啡典型代表，致力于成为中国领先的高品质咖啡品牌和专业化的咖啡服务提供商。     
                    </div>
                </main>
                <footer className="footBanner">
                    <div className="imgFoot">
                        <img src={Img} />
                    </div>
                </footer>
            </div>
        )
    }
}
export default Onemine;