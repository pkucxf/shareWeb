import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import ShareStore  from '../../stores/share/shareStore';
const  store = new ShareStore();
@observer
export default class DrivingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carList: []
        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();
        this.getDrivingList();
    }

    componentDidMount = () =>{

    }

    getDrivingList = () =>{
        store.getDrivingList({},(carList)=>{
            this.setState({
                carList
            })
        })
    }


    render(){
        let carList = this.state.carList ;
        return(
            <div className="share-car">


            </div>
        )

    }

}