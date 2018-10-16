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
            data:[]
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

    getOrderList = () =>{
        this.hasLogin((data)=>{
            if(!data.userId){
                globalStore.showTipsModal("请先登录！","small")
                return ;
            }
            store.getOrder(data.userId,(data)=>{
                this.setState({data})
            })
        })
    }
    render(){
        let data = this.state.data ;
        return(
            <div className={this.props.show ? "":"hide"}>
                {data.length>0 ? data.map( (m,n)=>{
                    return(
                        <div className="share-order-list" key={n}>
                            <div className="share-order-list-left fl">
                                <img src={m.carTypes[0].img}/>
                            </div>
                            <div className="share-order-list-right fr">
                                <div className="row">
                                    <div className="col-md-2">车型：</div>
                                    <div className="col-md-4">{m.carTypes[0].carName}</div>
                                    <div className="col-md-2">总价：</div>
                                    <div className="col-md-4">{m.orderMoney}元   </div>

                                </div>
                            </div>
                        </div>
                    )
                }):""}


            </div>
        )

    }

}