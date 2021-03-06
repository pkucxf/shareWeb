import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import _ from  'lodash';
import Util from '../../common/utils';
import {Button,Modal} from 'react-bootstrap';
import Top from '../../components/share/Top';
import Foot from '../../components/share/Foot';
import StoreList from '../../components/share/StoreList';
import Nav from "../../components/share/Nav";

@observer
export default class Store extends React.Component {
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

    render(){
        return(
            <div className="share-box">
                <Nav nav={3}/>
                <StoreList/>
                <Foot/>

            </div>
        )

    }

}