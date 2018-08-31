import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import Top from '../../components/share/Top';
@observer
export default class HomeActive extends React.Component {
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
            <div className="share-hot w1180 mb30">
                <div className="share-hot-top">
                    <div className="share-hot-title fl">
                        精彩活动
                    </div>
                </div>

                <div className="share-hot-content">

                </div>



            </div>

        )

    }

}