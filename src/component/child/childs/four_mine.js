import React,{ Component } from 'react';
import '../../../css/mineCom.css';
import Img from '../../../img/server.png';
import { Button } from 'antd';
import 'antd/dist/antd.css'; 

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
                    <h3>加入我们</h3>
                </header>
                <main className="txt">
                    <div className="second">
                        luckin coffee不止于提供一杯高品质的新鲜咖啡，我们同时将互联网体验融入咖啡的消费流程，开创出全新的商业模式。 加入我们，一起探索更多新鲜事。
                    </div>
                </main>
                <footer className="footBanner">
                    <div className="imgFoot">
                        <img src={Img} />
                    </div>
                    <div className="btn">
                        <Button type="primary" ghost>查看更多职位　></Button>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Twomine;