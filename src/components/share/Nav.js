import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';

@observer
export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            navList:[
                {id:0,name:'首页',url:''},
                {id:1,name:'自驾租车',url:''},
                {id:2,name:'车型查询',url:''},
                {id:3,name:'营业网点',url:''},
                {id:4,name:'企业服务',url:''},
                {id:5,name:'接送服务',url:''},
                {id:6,name:'精彩活动',url:''},
                ]
        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();

    }

    componentDidMount = () =>{

    }

    changeNav = (e) =>{
        let el = $(e.currentTarget);
        el.siblings().removeClass("active");
        el.addClass("active")

    }

    render(){

        return(
            <div className="share-head">
                <div className="share-head-top">
                    <div className="share-top-left fl">
                        <a href="javascript:;">登录</a>
                        <a href="javascript:;">注册</a>
                    </div>

                    <div className="share-top-right fr">
                        <a href="javascript:;">帮助中心</a>
                        <a href="javascript:;">400-0000-8888</a>
                        <a href="javascript:;">微信</a>
                    </div>


                </div>

                <div className="w1180 h50">
                    <a href="javascript:;" className="logo"></a>
                </div>
                <div className="share-nav">
                    <ul>
                        {this.state.navList.map((m,n)=>{
                            return(
                                <li key={n} onClick={this.changeNav} className={n==0?'active':''}>
                                    <a href="javascript:;">{m.name}</a>
                                </li>
                            )
                        })}
                    </ul>

                </div>

            </div>

        )

    }

}