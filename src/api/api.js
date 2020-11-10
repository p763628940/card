import {get, post} from './http'
const test =get('/test');
export default {
    login:post('/h5/login'), //登录(传authCode免登录)
    getCode:post('/h5/go/myGo'), //获取通行码
    getAllAreaParams:post('/h5/constant/findAll'), //获取地区全部参数
    GetManagerListOfArea:post('/h5/constant/findAuditorByAreaId'), //获取区域审批人列表
    GetManagerListOfArea2:post('/ihaier/getApproverId'), //获取区域审批人列表2
    findAuditorByAreaId:post('/h5/constant/findAuditorByAreaId'), //获取区域审批人列表 New
    requestForTimes:post('/h5/goApply/apply'), //请求通过次数
    agree:post('/h5/goApply/agree'), //同意
    reject:post('/h5/goApply/reject'), //驳回
    getdetails:post('/h5/goApply/getDetail'), //获取申请详情
    goApplyPage:post('/h5/goApply/page'), //申请分页
    getUserInfo:post('/workcard/ihaier/getUserInfo'),//通行url/hipassjava
    editAuthorizer:post('/manager/hpAuthorizer/editAuthorizer'), //授权
    cancleAuthorizer:post('/manager/hpAuthorizer/cancleAuthorizer') ,//取消授权
    getRandomNumber:get('/h5/constant/getRandomNumber'), //取消授权,
    user:get('/user') ,//取消授权,
    topics:post('/api/v2/topics') ,//取消授权,
    createPrintCode:post('/workcard/createPrint/createPrintCode') ,//获取打印码,
    getPayCode:post('/workcard/h5/go/getPayCode') ,//获取支付码,
    cardJG:post('/workcard/h5/go/cardJG') ,//原物理卡解挂,
    lossFLCard:post('/workcard/h5/go/lossFLCard') ,//原物理卡挂失,
    selectByInfoCode:post('/workcard/empcardfunctionconfig/selectByInfoCode') ,//根据工号查询对应的按钮权限,
    myUrl:post('/workcard/h5/go/myUrl') ,//根据工号查询对应的按钮权限,
    getPayStatus:post('/workcard/h5/go/getPayStatus') ,//根据工号查询对应的按钮权限,
}



