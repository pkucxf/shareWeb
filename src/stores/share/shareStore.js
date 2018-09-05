import {observable, computed, action} from 'mobx';
import Config from '../../config';
import Utils from '../../common/utils'
import  GlobalStore from '../GlobalStore';
import $ from 'jquery';

export default class  adminManageStore{

    globalStore = GlobalStore;

    //用户注册
    @observable userRegResult = {};
    @action userReg (param , callback ){
        this.globalStore.hideAlert();
        let that = this ;
        $.ajax({
            type: "POST",
            url: 'http://127.0.0.1:9090/web/register',
            data: JSON.stringify(param),
            contentType: "application/json",
            success: data => {
                if (data.code == 0 ) {
                    this.userRegResult = Object.assign({},data)
                    if (typeof callback == "function") {
                        callback(data.data);
                    }
                } else {
                    that.globalStore.showError(data.error ? data.error : "查询失败")
                }
            },
            error: (xhr, status, err) => {
                this.globalStore.showError('数据请求失败,错误信息:' + err.toString());
            }
        })
    }

    //用户登录
    @action userLogin(param,callback){
        this.globalStore.hideAlert();
        let that = this ;
        $.ajax({
            type: "POST",
            url: 'http://127.0.0.1:9090/web/login',
            data:JSON.stringify(param) ,
            contentType: "application/json",
            success: data => {
                if (data.code == 0 ) {
                    if(typeof callback == "function"){
                        callback(data)
                    }
                } else {
                    that.globalStore.showError(data.msg ? data.msg : "登陆失败，账户或密码错误")
                }
            },
            error: (xhr, status, err) => {
                this.globalStore.showError('数据请求失败,错误信息:' + err.toString());
            }
        })
    }

    //获取首页展示数据

    @action getIndex(callback){
        this.globalStore.hideAlert();
        let that = this ;
        $.ajax({
            type: "GET",
            url: Config.adminManage.getIndex,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success: data => {
                if (data.code == 0 ) {
                    if(typeof callback == "function"){
                        callback(data.data)
                    }

                } else {
                    that.globalStore.showError(data.error ? data.error : "查询失败")
                }
            },
            error: (xhr, status, err) => {
                this.globalStore.showError('数据请求失败,错误信息:' + err.toString());
            }
        })

    }

    //获取素材
    @observable ListMaterial = [];
    @action getListMaterial(param,callback){
        this.globalStore.hideAlert();
        let that = this ;
        $.ajax({
            type: "GET",
            url: Config.adminManage.material.listMaterial+'?type='+param,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success: data => {
                if (data.code == 0 ) {
                    if(typeof callback == "function"){
                        callback(data.data)
                    }
                    let result = data.data ;
                    result.map((m)=>{
                        m.gmtCreate  = Utils.formatDate(m.gmtCreate)
                        m.gmtModified  = Utils.formatDate(m.gmtModified)
                    })

                    this.ListMaterial = Object.assign([],data.data)
                } else {
                    that.globalStore.showError(data.error ? data.error : "查询失败")
                }
            },
            error: (xhr, status, err) => {
                this.globalStore.showError('数据请求失败,错误信息:' + err.toString());
            }
        })

    }

    //保存素材
    @action saveMaterial(param,callback){
        this.globalStore.hideAlert();
        let params = {
            img:param.img ,
            type:param.type ,
            remarks:param.remarks,
            sortNo:param.sortNo
        };
        let that = this ;
        $.ajax({
            type: "POST",
            url: Config.adminManage.material.insertMaterial,
            dataType: "json",
            data:params,
            contentType: "application/x-www-form-urlencoded",
            success: data => {
                if (data.code == 0 ) {
                    if(typeof callback == "function"){
                        callback(data.data)
                    }
                    that.globalStore.showInfo("保存成功！")
                } else {
                    that.globalStore.showError(data.error ? data.error : "查询失败")
                }
            },
            error: (xhr, status, err) => {
                this.globalStore.showError('数据请求失败,错误信息:' + err.toString());
            }
        })

    }







}