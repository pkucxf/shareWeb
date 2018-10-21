import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import ShareStore  from '../../stores/share/shareStore';
import localforage from 'localforage';
const  store = new ShareStore();
@observer
export default class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{},
            data:[],
            menu:[{id:0,name:"全部"},{id:1,name:"已确认订单"},{id:2,name:"待确认订单"}],
            active:0
        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();
        this.getOrderList();
    }

    componentDidMount = () =>{

    }

    hasLogin = (callback) =>{
        localforage.getItem("u").then((user)=>{
            if(user){
                this.setState({user},()=>{
                    if(typeof  callback == "function"){
                        callback(user);
                    }
                })
            }else{
                this.setState({user:{}})
            }
        });
    }

    getOrderList = (payStatu) =>{
        payStatu = payStatu ? payStatu : 0 ;
        this.hasLogin((data)=>{
            if(!data.userId){
                globalStore.showTipsModal("请先登录！","small")
                return ;
            }
            store.getOrder(data.userId,payStatu,(data)=>{
                this.setState({data})
            })
        })
    }
    handleChange = (active) =>{
        this.setState({active})
        this.getOrderList(active)
    }
    render(){
        let data = this.state.data ;
        return(
            <div className={this.props.show ? "":"hide"}>
                <div className="share-order-ul share-order-ul-1">
                    <ul>
                        {this.state.menu.map((m,n)=>{
                            return(
                                <li key={n} className={this.state.active == n  ? "active":""} onClick={this.handleChange.bind(this,m.id)}>{m.name}</li>
                            )
                        })}

                    </ul>

                </div>
                {data.length>0 ? data.map( (m,n)=>{
                    return(
                        <div className="share-order-list" key={n}>
                            <div className="share-order-list-left fl">
                                {m.payStatu == 0 ?(<div className="share-order-icon"></div>) :""}
                                {m.payStatu == 1  ?(<div className="share-order-icon1"></div>) :""}
                                <img src={m.carTypes[0].img}/>
                            </div>
                            <div className="share-order-list-right fr">
                                <div className="row mt10 mb10">
                                    <div className="col-md-2"><label>车型：</label></div>
                                    <div className="col-md-4">{m.carTypes[0].carName}</div>
                                    <div className="col-md-2"><label>总价：</label></div>
                                    <div className="col-md-4">{m.orderMoney}元   </div>
                                </div>
                                <div className="row mb10">
                                    <div className="col-md-2"><label>起止日期：</label></div>
                                    <div className="col-md-4">{m.startTime}</div>
                                    <div className="col-md-2"><label>结束日期：</label></div>
                                    <div className="col-md-4">{m.endTime}</div>
                                </div>
                                <div className="row mb10">
                                    <div className="col-md-2"><label>店铺地址：</label></div>
                                    <div className="col-md-4">{m.storeInfos[0].storeAddressProvince}{m.storeInfos[0].storeAddressArea}{m.storeInfos[0].storeAddress}</div>
                                    <div className="col-md-2"><label>联系电话：</label></div>
                                    <div className="col-md-4">{m.storeInfos[0].phone}</div>
                                </div>
                            </div>
                        </div>
                    )
                }):""}


            </div>
        )

    }

}