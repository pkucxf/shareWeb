import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import ShareStore  from '../../stores/share/shareStore';
import {Link,hashHistory} from 'react-router';
const store = new ShareStore();
@observer
export default class HomeHotCar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data:[]
        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();
        this.getDrivingList();

    }

    componentDidMount = () =>{

    }

    getDrivingList = () =>{
        store.getDrivingList({},(data)=>{
            this.setState({
                data
            })
        })
    }


    render(){

        return(
            <div className="share-hot w1180 mb30">
                <div className="share-hot-top">
                    <div className="share-hot-title fl">
                        热租车型
                        <span>
                            <i className="red">百余款</i>
                            车型任您选，劲爆优惠天天推荐
                        </span>
                    </div>
                </div>

                <div className="share-hot-content">
                    <div className="fl share-hot-left">
                        <img src="http://www.1hai.cn/Content/Index/images/hotcar_banner.jpg"></img>
                    </div>
                    <div className="fl share-hot-right">
                        {this.state.data.map((m,n)=>{
                            if(n < 4 ){
                                return(
                                    <div className="fl share-hot-list" key={n}>
                                        <Link to={"/order/" + m.storeId + "/" + m.carId  + "/"+ m.id}>
                                            <div className="share-hot-head">
                                                <span className="fl share-icon-hot"> </span>
                                                <div className="share-hot-detail fl">
                                                    <h4>{m.carName}</h4>
                                                    <h6> 时尚、奢侈、豪华</h6>
                                                </div>
                                                <div className="share-hot-price fr">
                                                    <span>￥{m.def0}</span>/天
                                                </div>
                                            </div>
                                            <div className="share-hot-car">
                                                <img src={m.carImg}></img>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                        })}

                    </div>
                </div>


            </div>

        )

    }

}