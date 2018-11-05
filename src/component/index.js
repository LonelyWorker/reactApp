import React, { Component } from 'react';
import '../css/index.css';


//引入文件
import Code from '../img/code.png';

class Index extends Component {
    render() {
        return (
            <div id="index">
                {/* autoMovie */}
                <div className="autoMovie"></div>
                {/* favorBr */}
                <div className="favorBr"></div>
                {/* favorContent */}
                <div className="favorContent">
                    <div className="imgContent">
                        <img src={Code} />
                        <div className="spanContent">
                            <div>关注微信</div>
                            <div>与幸运打个招呼</div>
                            <div>Follow our WeChat</div>
                            <div>and good luck!</div>
                        </div>
                    </div>
                </div>
                {/* intro */}
                <div className="intro">
                    <div className="intro_l"></div>
                    <div className="intro_r">
                        <div className="first">
                            <div className="big">优选上等阿拉比卡豆</div>
                            <div className="small">High Quality Arabica Beans</div>
                            <div className="big">我们从四大咖啡产区，为您精心挑选阿拉比卡豆。</div>
                            <div className="small">Our coffee beans come directly from top coffee producing regions, and we make sure each and every bean is Arabica.</div>
                        </div>
                        <div className="seconde">
                            <div className="big">WBC冠军团队精心拼配</div>
                            <div className="small">Blended by the WBC Champions</div>
                            <div className="big">来自意大利、日本、中国的咖啡大师们，为您拼配。</div>
                            <div className="small">Every batch of our coffee is carefully blended by our team of the WBC champions, hailing from Italy, Japan, and China.</div>
                        </div>
                        <div className="three">
                            <div className="big">新鲜烘焙 新鲜现磨</div>
                            <div className="small">Freshly roasted, freshly ground.</div>
                            <div className="big">您品尝的每一杯luckin，均为烘焙熟豆的最佳赏味期。</div>
                            <div className="small">Every cup of our coffee is made fresh just for you, guaranteed.</div>
                        </div>
                    </div>
                </div>
                {/* mine */}
                <div className="mine">
                    <div className="top"></div>
                    <div className="center">
                        luckin coffee（瑞幸咖啡）,全球领先的咖啡新鲜式：优选上等阿拉比卡豆，由WBC（世界咖啡师大赛）冠军团队精心拼配，新鲜烘焙，新鲜现磨。 luckin coffee倡导更灵活的购买体验，遍布各商圈写字楼，可自提可配送，已成为咖啡新零售代表连锁品牌。
                    </div>
                    <div className="bottom">
                        luckin coffee is the world's leading brand for serving fresh coffees. Our coffee is freshly roasted, and ground with high quality Arabica beans, which are carefully blended by our team of the WBC champions. We advocate a more flexible experience for our customers by providing pickup and delivery options, while also locating our coffee shops in main shopping centers and office districts. luckin coffee is becoming the new trend of coffee retail brand.
                    </div>
                    <div className="banner">
                        <div className="oneBanner"></div>
                        <div className="twoBanner"></div>
                        <div className="threeBanner"></div>
                    </div>
                </div>
                {/* company */}
                <div className="company">
                    <div className="title"></div>
                    <div className="china">
                        <div>进场合作热线:<span>4000-100-100</span> </div>
                        <div>为大型企业、中高端写字楼提供专业咖啡配套。</div>
                        <div>欢迎各类咖啡厅转让。</div>
                    </div>
                    <div className="english">
                        It provides professional coffee for large enterprises and high end office buildings. All kinds of cafes are welcome to be transferred.
                    </div>
                    <div className="photo">
                        <div className="photo_one"></div>
                        <div className="photo_two"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Index;