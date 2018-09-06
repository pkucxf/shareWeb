import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import _ from  'lodash';
import Util from '../../common/utils';
import {Button,Modal} from 'react-bootstrap';
import localforage from 'localforage';
import Menu from '../../containers/shareAdmin/adminMenu';
import CarType from '../../containers/shareAdmin/carType';

@observer
export default class adminHome extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();

    }

    render(){
        return(
            <div className="share-admin-box">
                <div className="share-admin-head">
                    xxx
                </div>
                <div className="share-admin-body">
                    <Menu/>
                    <div className="share-admin-content">
                        <CarType/>
                    </div>
                </div>

            </div>
        )

    }

}