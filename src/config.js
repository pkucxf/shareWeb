//调用java api的url

var serverUrl = process.env.SERVER;
if(window.SERVICESURL!=''){
  serverUrl = window.SERVICESURL
}
var Config = {
    serverUrl:'http://127.0.0.1:9090/',
    share:{
        register:serverUrl + 'web/register'
    },


    adminManage:{
        userLogin:serverUrl + 'user/login', // 用户登录
        getIndex :serverUrl+ 'admin/getIndex',
        material:{
            listMaterial:serverUrl+'material/listMaterial' ,
            getMaterial:serverUrl+'material/getMaterial' ,
            deleteMaterial:serverUrl+'material/deleteMaterial' ,
            insertMaterial:serverUrl+'material/insertMaterial' ,
            updateMaterial:serverUrl+'material/updateMaterial' ,
        },
         coinPrice:{
             getCoinPriceList:serverUrl+'coinPrice/getCoinPriceList' ,
             getCoinPrice:serverUrl+'coinPrice/getCoinPrice' ,
             deleteCoinPrice:serverUrl+'coinPrice/deleteCoinPrice' ,
             insertCoinPrice:serverUrl+'coinPrice/insertCoinPrice' ,
             updateCoinPrice:serverUrl+'coinPrice/updateCoinPrice' ,
         },
         sourceDocumentsList:serverUrl+'source/sourceDocumentsList',
         userList:serverUrl + 'appUser/userList',
         freezeUser:serverUrl +'appUser/freezeUser',
         record:{
             listTransactionRecordByType:serverUrl+'record/listTransactionRecordByType',
             checkBuyCoin:serverUrl+'record/checkBuyCoin',
             checkBuyInvitation:serverUrl+'record/checkBuyInvitation',
             checkWithdrawDeposit:serverUrl +'record/checkWithdrawDeposit'
         },
         upload:serverUrl+'upload/picUpload',
         app:{
             getParameter:serverUrl +'parameter/getParameter',
             updateParameter:serverUrl + 'parameter/updateParameter'

         }
     }


};

export default Config;
