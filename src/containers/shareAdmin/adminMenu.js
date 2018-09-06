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
                {id:0,name:'车辆类型管理',href:'car'},
                {id:0,name:'车辆类型管理',href:'car'},
                {id:0,name:'车辆类型管理',href:'car'},
                {id:0,name:'车辆类型管理',href:'car'},
                {id:0,name:'车辆类型管理',href:'car'},
            ]
        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();

    }

    render(){
        return(
            <div className="share-admin-menu">
                <ul>
                    {this.state.menu.map((m,n)=>{
                        return (
                            <li key={n}>{m.name}</li>
                        )
                    })}

                </ul>

            </div>
        )

    }

}