import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';

@observer
export default class CarList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();

    }

    componentDidMount = () =>{

    }


    render(){

        return(
            <div className="share-car">

                <div className="share-car-box">
                    <ul className="share-car-ul">
                        <li>
                            <div  className="share-car-img">
                                <img src="https://files.1hai.cn/group72/M00/3B/F2/rBQFIFuI08yAWH9sAADXncusMW4928.jpg?visitType=ext&sign=YzE2YjhlN2M4M2NiM2VlZjUwNGYyMTRiMjIzYjU0ZGQ="/>
                            </div>
                            <div className="share-car-intro">
                                <h5>大众朗逸或同组车型</h5>
                                <p>自动/5座</p>
                            </div>
                        </li>

                    </ul>

                </div>

            </div>
        )

    }

}