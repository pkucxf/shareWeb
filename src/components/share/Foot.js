import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';

@observer
export default class Foot extends React.Component {
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
            <div className="share-head">


            </div>

        )

    }

}