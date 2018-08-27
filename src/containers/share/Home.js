import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import _ from  'lodash';
import Util from '../../common/utils';
import {Button,Modal} from 'react-bootstrap';
import localforage from 'localforage';
import Banner from '../../components/share/Banner';

@observer
export default class Home extends React.Component {
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
            <div className="share-box">
                <Banner />
            </div>
        )

    }

}