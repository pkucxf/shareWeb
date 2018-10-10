//调用java api的url

var serverUrl = process.env.SERVER;
if(window.SERVICESURL!=''){
  serverUrl = window.SERVICESURL
}
var Config = {
    share:{
        register:serverUrl + 'web/register',
        login:serverUrl + 'web/login',
        getCar:serverUrl+'car/getCarList',
        getStore:serverUrl + 'store/getStoreList'
    },
    shareAdmin:{
        getUserInfo:serverUrl +'admin/getUserInfo',
        delUserInfo:serverUrl +'admin/delUser',
        updateUserInfo:serverUrl+'admin/updateUser',
        getCarType:serverUrl+'admin/getCarType',
        saveCarType:serverUrl + 'admin/addCarType',
        delCarType:serverUrl + 'admin/delCarType',
        updateCarType:serverUrl + 'admin/updateCarType',
        getStore:serverUrl + 'admin/getStore',
        saveStore:serverUrl+'admin/addStore',
        delStore:serverUrl +'admin/delStore',
        getCarAndStore:serverUrl + 'admin/getCarAndStore',
        saveCarAndStore:serverUrl+ 'admin/addCarAndStore',
        getCarList:serverUrl + 'admin/getCarList',
        getStoreList:serverUrl + 'admin/getStoreList',

    },
    common:{
        upload:serverUrl + 'common/upload', //单文件上传
    }





};

export default Config;
