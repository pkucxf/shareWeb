import React from 'react';
import {Modal, Button,Pagination} from 'react-bootstrap';
import _ from 'lodash';
import Config from '@/config';
import globalStore from '@/stores/GlobalStore';
import FileUpload from '../material/Upload';

export default class ModalView extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            modalObj:{}
        }
    }


    componentWillReceiveProps(props){
        this.setState({
            modalObj:props.data
        })

    }

    setInput =(obj,e)=>{
        let modalObj = this.state.modalObj;
        modalObj[obj] = e.target.value ;
        this.setState({
            modalObj
        })

    }

    setTime =(obj,value, formattedValue)=>{
        let modalObj = this.state.modalObj;
        modalObj[obj] = formattedValue ;
        this.setState({
            modalObj
        })
    }

    close =()=>{
        this.props.closeModal();
    }

    uploadSuccess =(obj ,data )=>{
        let modalObj = this.state.modalObj;
        modalObj[obj] = data.data ;
        this.setState({
            modalObj
        })

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