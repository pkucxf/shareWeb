import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import _ from  'lodash';
import Util from '../../common/utils';
import {Button,Modal} from 'react-bootstrap';
import localforage from 'localforage';

@observer
export default class carType extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            menu:[
                {id:0,name:'用户管理',href:'car'},
                {id:1,name:'车辆类型管理',href:'car'},
                {id:2,name:'店铺管理',href:'car'},
                {id:3,name:'订单管理',href:'car'},
            ]
        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();

    }
    changeMenu = (param,name) =>{
        this.props.changeMenu(param,name);
    }

    render(){
        return(
            <div className="share-admin-menu">
                <ul>
                    {this.state.menu.map((m,n)=>{
                        return (
                            <li key={n} title={m.name} className={this.props.menu == m.id ? "active":""} onClick={this.changeMenu.bind(this,m.id,m.name)}><i className="glyphicon glyphicon-tasks mr10"></i>{m.name}</li>
                        )
                    })}

                </ul>

            </div>
        )

    }

}