import React from 'react';
import {Modal, Button,Pagination} from 'react-bootstrap';
import _ from 'lodash';
import Config from '@/config';
import globalStore from '@/stores/GlobalStore';
import FileUpload from '../material/Upload';
import Select from 'react-select';

export default class ModalView extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            modalObj:{},
            carList:[{id:'',carName:'',carNum:''}],
        }
    }


    componentWillReceiveProps(props){
        this.setState({
            modalObj:props.data
        })
    }

    close =()=>{
        this.props.closeModal();
    }

    saveModal =()=>{
        this.props.saveModal(this.state.modalObj)
    }

    render(){
        const {data} = this.props ;

        return(
            <Modal show={this.props.show} bsSize="large" onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.type == "add"?"新增":(this.props.type =="edit"?"编辑":"查看")}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="row">
                        <div className="col-md-2">店铺名称：</div>
                        <div className="col-md-4">
                            <Select options={data[3].selectData} isMulti={false}    className="basic-multi-select"
                                    classNamePrefix="select"
                            />
                        </div>

                        <table>
                            <th>
                                <td>序号</td>
                                <td>车辆名称</td>
                                <td>数量</td>
                                <td>操作</td>
                            </th>
                            <tr>
                                <td></td>
                            </tr>
                        </table>

                    </div>

                    <div>

                        {/*{this.props.rowsName.map((m,n)=>{
                            if(m.add){
                                m.type == 'select' ? (
                                    <div>
                                        <Select options={m.selectData} isMulti={false}    className="basic-multi-select"
                                                classNamePrefix="select" onChange={this.handleChange.bind(this,m.code)}
                                        />
                                 </div>
                                ):(<input/>)

                            }
                            }
                            )
                        }*/}
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.close}>取消</Button>
                    {this.props.type == "preview"?"":(
                        <Button bsStyle="primary" onClick={this.saveModal}>保存</Button>
                    )}
                </Modal.Footer>

            </Modal>
        )
    }
}