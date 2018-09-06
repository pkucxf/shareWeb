import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import * as className from 'classnames';
import * as mobx from 'mobx';
import * as mobxReact from 'mobx-react';
import * as reactBootstrap from 'react-bootstrap';
import * as reactDatepicker from 'react-datepicker';
import $ from 'jquery';
import Config from './config';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css'
import './less/share.less';
import GlobalStore from './stores/GlobalStore';
import App from './containers/App';
import Bundle from './bundle.js';

import LoginContainer from 'bundle-loader?lazy&name=app-[name]!./containers/adminManage/Login';
import HomeContainer from 'bundle-loader?lazy&name=app-[name]!./containers/share/Home';
import RegisterContainer from 'bundle-loader?lazy&name=app-[name]!./containers/share/Register';
import CarContainer from 'bundle-loader?lazy&name=app-[name]!./containers/share/Car';
import OrderContainer from 'bundle-loader?lazy&name=app-[name]!./containers/share/Order';
import OrderListContainer from 'bundle-loader?lazy&name=app-[name]!./containers/share/OrderList';
import OrderDetailContainer from 'bundle-loader?lazy&name=app-[name]!./containers/share/OrderDetail';

const Login  = (props) => (<Bundle load={LoginContainer} {...props}>{ (Page) => <Page {...props} />}</Bundle>)
const Home  = (props) => (<Bundle load={HomeContainer} {...props}>{ (Page) => <Page {...props} />}</Bundle>)
const Register  = (props) => (<Bundle load={RegisterContainer} {...props}>{ (Page) => <Page {...props} />}</Bundle>)
const Car  = (props) => (<Bundle load={CarContainer} {...props}>{ (Page) => <Page {...props} />}</Bundle>)
const Order  = (props) => (<Bundle load={OrderContainer} {...props}>{ (Page) => <Page {...props} />}</Bundle>)
const OrderList  = (props) => (<Bundle load={OrderListContainer} {...props}>{ (Page) => <Page {...props} />}</Bundle>)
const OrderDetail  = (props) => (<Bundle load={OrderDetailContainer} {...props}>{ (Page) => <Page {...props} />}</Bundle>)

/*admin*/
import aHomeContainer from 'bundle-loader?lazy&name=app-[name]!./containers/shareAdmin/adminHome';
import aCarContainer from 'bundle-loader?lazy&name=app-[name]!./containers/shareAdmin/carType';

const aHome =  (props) => (<Bundle load={aHomeContainer} {...props}>{ (Page) => <Page {...props} />}</Bundle>)
const aCar =  (props) => (<Bundle load={aCarContainer} {...props}>{ (Page) => <Page {...props} />}</Bundle>)

const requireAuth = (nextState, replace, next) => {
  //切换路由时初始化环境
  GlobalStore.hideAlert();
  // 本地调试环境不进行auth
  if (process.env.NODE_ENV === 'development' || process.env.PROD_SERVER === "1.1.1.1:8888") {
    next();
    return;
  }
  //验证权限
  $.ajax({
    type: "GET",
    url: Config.base.islogin,
    success: data => {
      if (data.success) {
        next();
      } else {
        window.location = Config.base.index;
      }
    }
  });
}
// <Route path="/home" component={Home}/>
ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/car' component={Car}/>
        <Route path='/order' component={Order}/>
        <Route path='/orderList' component={OrderList}/>
        <Route path='/orderDetail' component={OrderDetail}/>

        <Route path ='/a/home' component={aHome} />
        <Route path ='/a/car' component={aCar} />
    </Route>
  </Router>,
  document.getElementById('root')
);
