import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import _ from  'lodash';
import Util from '../../common/utils';
import {Button,Modal} from 'react-bootstrap';
import Top from '../../components/share/Top';

@observer
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            registerParam:{

            }
        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();

    }
    setInput = (type , e )=>{
        let registerParam= this.state.registerParam;
        registerParam[type] = $(e.currentTarget).val();
        this.setState({
            registerParam
        })
        //TODO  密码校验

    }
    handleRegister =()=>{


    }

    render(){
        return(
            <div className="share-box">
                <Top/>
                <div className="row share-register w1180">
                    <div className="share-register-left form-horizontal col-md-8 mt50">
                        <div className="form-group">
                            <label className="col-sm-2 control-label">用户名：</label>
                            <div className="col-sm-6">
                                <input type="text" onClick={this.setInput.bind(this,"name")} className="form-control" placeholder="请输入用户名"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">密码：</label>
                            <div className="col-sm-6">
                                <input type="password" onClick={this.setInput.bind(this,"password")} className="form-control" placeholder="请输入密码"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">确认密码：</label>
                            <div className="col-sm-6">
                                 <input type="password" onClick={this.setInput.bind(this,"password1")} className="form-control" placeholder="请再次输入密码"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">手机号：</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" onClick={this.setInput.bind(this,"phone")} placeholder="请输入7-12位验证码"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">联系地址：</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" onClick={this.setInput.bind(this,"address")} placeholder="请输入用户名"/>
                            </div>
                        </div>
                        <div className="share-register-button">
                            <button className="btn btn-warning" onClick={this.handleRegister}>注 册</button>
                        </div>

                        <div className="share-register-go">
                            已有账号，<a href="javascript:;">直接登录</a>
                        </div>

                    </div>
                    <div className="share-register-right col-md-4 mt50">
                        <div className="share-register-msg">
                            <dl>
                                <dt>注册送豪礼</dt>
                                <dd>注册即可获得</dd>
                                <dd>
                                    <span className="glyphicon glyphicon-fire mr15 red"></span>
                                    <span>1000元代金券</span>
                                </dd>
                                <dd>
                                    <span className="glyphicon glyphicon-fire mr15 red"></span>
                                    <span>5倍积分</span>
                                </dd>
                                <dd>
                                    <span className="glyphicon glyphicon-fire mr15 red"></span>
                                    <span>1000元代金券</span>
                                </dd>

                            </dl>

                        </div>

                    </div>

                </div>

            </div>
        )

    }

}