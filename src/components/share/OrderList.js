import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import ShareStore  from '../../stores/share/shareStore';
const  store = new ShareStore();
@observer
export default class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount =()=>{
        globalStore.hideAlert();
    }

    componentDidMount = () =>{

    }

    render(){
        return(
            <div className={this.props.show ? "":"hide"}>

            </div>
        )

    }

}