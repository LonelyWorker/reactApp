import React,{ Component } from 'react';
import '../../../css/mineCom.css';
import Img from '../../../img/lu.png';

class Twomine extends Component{
    render(){
        var font = {
            fontSize: 20,
            fontWeight: 'bold',
        };
        return (
            <div id="mineCom">
                <header className="head_title">
                    <i></i>
                    <h3>进场合作</h3>
                </header>
                <main className="txt">
                    <div className="first">
                        <div>进场合作热线：4000-100-100</div>
                        <div>邮箱：hz@luckincoffee.com</div>
                    </div>
                    <div className="second">
                        <div>为大型企业、中高端写字楼提供专业咖啡配套。</div>
                        <div>欢迎各类咖啡厅转让。</div>      
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
export default Twomine;