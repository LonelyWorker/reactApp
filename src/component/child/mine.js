import React, { Component } from 'react';
import '../../css/mine.css';
class Mine extends Component{
    constructor(){
        super();
        this.state={
            list:['商业模式', '品牌主张', '进场合作', '加入我们']
        }
    }
    render(){
        return(
            <div id="mine">
                <div className="banner"></div>
                <div className="list">
                    <div className="row tab">
                        {
                            this.state.list.map((item, key) => {
                                return <div className="col-3 oLi">{item}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Mine;