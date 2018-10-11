import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import ShareStore  from '../../stores/share/shareStore';
import {Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import DrivingList from "@/components/share/DrivingList";
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
const  store = new ShareStore();
@observer
export default class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            carInfo:{},
            storeInfo:{},
            startDate:"",
            endDate:""
        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();

        this.getCarInfo();
        this.getStoreInfo();
    }

    componentDidMount = () =>{

    }

    componentWillReceiveProps=(props)=>{
        props
    }

    getCarInfo = () =>{
        let carId = this.props.routerParam.carId , id =  this.props.routerParam.id;;
        store.getCarInfo(carId,id,(data)=>{
            this.setState({
                carInfo:data
            })
        })
    }

    getStoreInfo = () =>{
        let storeId = this.props.routerParam.storeId;
        store.getStoreInfo(storeId,(data)=>{
            this.setState({
                storeInfo:data
            })
        })
    }

    handleChange =(index,date)=>{
        if(index==0)
            this.setState({
                startDate:date
            })
        else{
            this.setState({
                endDate:date
            })
        }

    }
    handleDate = () =>{
        let startDate = this.state.startDate ,endDate =  this.state.endDate ;
        if(endDate<startDate){
            this.setState({
                endDate:startDate
            })
        }

        let result  = endDate - startDate;
        result


    }
    render(){
        let carInfo = this.state.carInfo, storeInfo  = this.state.storeInfo;
        return(
            <div className="share-detail w1180 mb30">
                <div className="share-detail-date">
                    <div className="fl mr10">请选择租期：</div>
                    <div className="fl mr10">
                        <DatePicker showTimeSelect
                                    selected={this.state.startDate}
                                    onChange={this.handleChange.bind(this,0)}
                                    timeFormat="HH:mm"
                                    className={"share-date-style"}
                                    timeIntervals={15}
                                    dateFormat="LLL"
                                    locale="zh_cn"
                                    placeholderText ="请选择开始时间"
                                    timeCaption="时间" />

                    </div>
                    <div className="fl mr10">-</div>
                    <div  className="fl mr10">
                        <DatePicker showTimeSelect
                                    selected={this.state.endDate}
                                    onChange={this.handleChange.bind(this,1)}
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    className={"share-date-style"}
                                    dateFormat="LLL"
                                    locale="zh_cn"
                                    placeholderText ="请选择结束时间"
                                    timeCaption="时间" />
                    </div>
                    <div className="fl">
                        <Button onClick={this.handleDate}>确认</Button>
                    </div>

                </div>

                <div className="share-detail-left">
                    <div className="fl share-detail-left-img ">
                        <img src={carInfo.img}/>
                        <p>
                            {carInfo.def1}元/天
                        </p>
                    </div>
                    <div className="share-detail-left-info">
                        <h5>{carInfo.carName}</h5>
                        <div className="row">
                            <div className="col-md-6">
                               <label>座位：</label>
                                <span>{carInfo.carSeat}座</span>
                            </div>
                            <div className="col-md-6">
                                <label>驱动类型：</label>
                                <span>{carInfo.carDrive}驱</span>
                            </div>
                            <div className="col-md-6">
                                <label>产地：</label>
                                <span>{carInfo.carProduce}</span>
                            </div>
                            <div className="col-md-6">
                                <label>档位类型：</label>
                                <span>{carInfo.def0}</span>
                            </div>
                        </div>
                        <div className="">
                            <label>店铺地址：</label>
                            <span>{storeInfo.storeAddressProvince}{storeInfo.storeAddressCity}{storeInfo.storeAddressArea}{storeInfo.storeAddress}</span>
                        </div>
                        <div className="">
                            <label>店铺电话：</label>
                            <span>{storeInfo.storePhone}</span>
                        </div>
                        <div className="share-detail-other">
                            <p>订单说明：</p>
                            <span> 不限公里数，超时费按车辆租赁费及门店服务费均价÷6收取实际超期小时费 (部分0元活动订单，按照40元/小时进行收取)。</span>
                        </div>
                    </div>
                </div>
                <div className="share-detail-right">

                </div>

            </div>

        )

    }

}