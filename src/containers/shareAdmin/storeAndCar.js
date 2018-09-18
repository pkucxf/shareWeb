import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import _ from  'lodash';
import Util from '../../common/utils';
import {Button,Modal} from 'react-bootstrap';
import localforage from 'localforage';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ModalView from "@/components/adminManage/material/ModalView";
import shareAdminStore from '../../stores/share/shareAdminStore'
import HeadBox from "../../components/shareAdmin/adminHead";
import Menu from "../../components/shareAdmin/adminMenu";
const adminStore = new shareAdminStore();
@observer
export default class storeAndCar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            rowsName: [{code:'id',name:'id',hidden:true},{code:'storeId',name:'',hidden:true },{code:'storeName',name:'店铺名称',add:true },
                {code:'carName',name:'车辆名称',add:true,type:'select' }, {code:'carNum',name:'车辆数量',add:true},
            ],
            tableData:[],
            carList:[]
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
        adminStore.getCarAndStore(param,(res)=>{
            this.setState({
                tableData:res
            })
        })

        adminStore.getCarList((res)=>{
            this.setState({
                carList:res
            })
        })
    }

    dataFormat = (code,type,rows,cell)=>{
        if(type == "select"){
            return (
                <span>{rows}</span>
            )
        }else
            return (
                <span>{rows}</span>
            )

    }
    addRows =()=>{
        let tableData  = this.state.tableData ;
        let obj  = {id:new Date().getTime(),"storeId":'',"storeName":'',"carName":'',"carNum":''};
        tableData.push(obj);
        this.setState({tableData})

      /*  this.setState({
            show:true,
            operationType:'add',
            operationData:{}
        })*/

    }
    afterSaveRows =(row, cellName, cellValue) =>{
        var r =  row,
            cellName,
            cellValue
    }
    previewRows = (rows)=>{
        this.setState({
            show:true ,
            operationData:rows,
            operationType:'preview'
        })

    }
    editRows = (rows)=>{
        this.setState({
            show:true ,
            operationData:rows,
            operationType:'edit'
        })
    }
    deleteRows =(rows)=>{
        globalStore.showTipsModal("是否删除","small",()=>{},()=>{
            adminStore.delCarType(rows,()=>{
                this.initTable()
            });
        })

    }
    closeModal = ()=>{
        this.setState({
            show:false
        })
    }



    saveModal = (data)=>{
        if(this.state.operationType =="add"){
            adminStore.saveCarType(data,()=>{
                this.closeModal();
                this.initTable();
            })

        }else{
            adminStore.updateCoinPrice(data,()=>{
                this.closeModal();
            })
        }
    }

    render(){
        const  options ={
            noDataText:"暂无数据"
        }
        const cellEditProp = {
            mode: 'click',
            blurToSave: true,
            afterSaveRowsCell:this.afterSaveRows
        };

        return(
            <div className="share-admin-box">
                <HeadBox />
                <div className="share-admin-body">
                    <Menu menu={this.state.menu} />
                    <div className="share-admin-content">
                        <h2 className="share-admin-title">{this.props.name}</h2>
                        <div className="fr mb10">
                            <Button bsStyle="info" onClick={this.addRows}>新增</Button>
                        </div>
                        <BootstrapTable data={this.state.tableData} striped hover options={options} cellEdit={cellEditProp} >
                            <TableHeaderColumn isKey dataField='id' hidden>Product ID</TableHeaderColumn>


                            {this.state.rowsName.map((m,n)=>{
                                if(!m.hidden ){
                                    if(m.type == 'select'){
                                        return (
                                            <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: this.state.carList } } } >车辆名称</TableHeaderColumn>
                                        )
                                    }else{
                                        return (
                                            <TableHeaderColumn dataField={m.code} dataFormat={this.dataFormat.bind(this,m.code,m.type)}>{m.name}</TableHeaderColumn>
                                        )
                                    }

                                }
                            })}

                            <TableHeaderColumn editable = {false} dataFormat = {
                                (cell,row)=>{
                                    return(
                                        <div className="a-operation-box">
                                           {/* <span className="mr10 glyphicon glyphicon-eye-open" onClick={this.previewRows.bind(this,row)} title="查看"></span>
                                            <span className="mr10 glyphicon glyphicon-edit" onClick={this.editRows.bind(this,row)} title="编辑"></span>*/}
                                            <span onClick={this.deleteRows.bind(this,row)} className="glyphicon glyphicon-trash" title="删除"></span>
                                        </div>
                                    )
                                }
                            }>操作</TableHeaderColumn>
                        </BootstrapTable>
                        <ModalView show= {this.state.show} saveModal = {this.saveModal} closeModal={this.closeModal} rowsName ={this.state.rowsName} data={this.state.operationData} type={this.state.operationType}/>
                    </div>
                </div>
            </div>
        )

    }

}