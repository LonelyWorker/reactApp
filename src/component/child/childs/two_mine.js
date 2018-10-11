import React,{ Component } from 'react';
import '../../../css/mineCom.css';
import Img from '../../../img/movie.png';

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
                    <h3>品牌主张</h3>
                </header>
                <main className="txt">
                    <div className="first">
                    luckin coffee相信一个崭新时代的源头永远始于改变，我们以高性价比改变咖啡消费观念， 以规格原料与制程改变咖啡消费品质，以新零售模式改变咖啡消费体验。
                    </div>
                    <div className="second">
                        luckin coffee(瑞幸咖啡)luckin coffee面向职场和年轻一代消费者，鼓励他们充满自信，突破以往，勇于改变。     
                    </div>
                </main>
                <footer className="footBanner">
                    <div className="imgFoot">
                        <p style={font}>改变, 才能改变</p>
                        <img src={Img} />
                    </div>
                </footer>
            </div>
        )
    }
}
export default Twomine;