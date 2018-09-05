import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import Login from '../../components/share/Login';
@observer
    export default class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            show:false
        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();

    }

    componentDidMount = () =>{

    }
    showLogin = ()=>{
        this.setState({
            show:true
        })
    }


    render(){

        return(
            <div className="share-head">
                <div className="share-head-box">
                    <div className="share-head-top">
                        <div className="share-top-left fl">
                            <a href="javascript:;" onClick={this.showLogin}>登录</a>
                            <a href="#/register">注册</a>
                        </div>

                        <div className="share-top-right fr">
                            <a href="javascript:;">帮助中心</a>
                            <a href="javascript:;">400-0000-8888</a>
                            <a href="javascript:;">微信</a>
                        </div>
                    </div>
                </div>
                <div className="w1180 h50">
                    <a href="javascript:;" className="logo"></a>
                </div>
                <Login show={this.state.show}/>
            </div>

        )

    }

}