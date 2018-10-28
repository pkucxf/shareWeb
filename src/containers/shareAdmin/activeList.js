import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import _ from  'lodash';
import Util from '../../common/utils';
import {Button,Modal} from 'react-bootstrap';
import localforage from 'localforage';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import shareAdminStore from '../../stores/share/shareAdminStore'
import Menu from "../../components/shareAdmin/adminMenu";
import HeadBox from '../../components/shareAdmin/adminHead';
import Ueditor from  '../../common/components/UEditor/Editor.jsx'

const adminStore = new shareAdminStore();
@observer
export default class userList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={

            tableData:[]
        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();
        this.initTable();

    }

    initTable = () =>{
        let param= {
            pageNo:0,
            pageSize:10
        }
    }

    dataFormat = (type,rows,cell)=>{
        return (
            <span>{rows}</span>
        )
    }





    saveModal = (data)=>{
    }

    render(){
        const  options ={
            noDataText:"暂无数据"
        }
        return(
            <div className="share-admin-box">
                <HeadBox />
                <div className="share-admin-body">
                    <Menu menu={this.state.menu} />
                    <div className="share-admin-content">
                        <Ueditor  id="content" height="500" />
                    </div>
                </div>

            </div>
        )

    }

}