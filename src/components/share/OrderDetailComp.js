import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import Top from '../../components/share/Top';
@observer
export default class OrderDetailComp extends React.Component {
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
            <div className="share-detail w1180 mb30">

                <div className="share-detail-left">

                </div>
                <div className="share-detail-right">

                </div>

            </div>

        )

    }

}