import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import ShareStore  from '../../stores/share/shareStore';
import {Button} from 'react-bootstrap';
const  store = new ShareStore();
@observer
export default class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            carInfo:{},
            storeInfo:{},
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
        let carId = this.props.routerParam.carId;
        store.getCarInfo(carId,(data)=>{
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

    render(){
        let carInfo = this.state.carInfo, storeInfo  = this.state.storeInfo;
        return(
            <div className="share-detail w1180 mb30">
                <div className="share-detail-date row">
                    <div className="col-md-2">请选择租期</div>
                    <div className="col-md-5">

                    </div>
                </div>

                <div className="share-detail-left">
                    <div className="fl share-detail-left-img ">
                        <img src={carInfo.img}/>
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
                                <span>{carInfo.carProduce}座</span>
                            </div>
                            <div className="col-md-6">
                                <label>档位类型：</label>
                                <span>{carInfo.def0}驱</span>
                            </div>
                        </div>
                        <div className="row">
                            <label>店铺地址：</label>
                            <span>{storeInfo.storeAddressProvince}{storeInfo.storeAddressCity}{storeInfo.storeAddressArea}{storeInfo.storeAddress}</span>
                        </div>
                        <div className="row">
                            <label>店铺电话：</label>
                            <span>{storeInfo.storePhone}</span>
                        </div>
                        <div>
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