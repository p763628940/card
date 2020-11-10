<template>
    <div class="contents">
        <van-tabs v-model="active" animated>
            <van-tab title="挂失">
                <div class="tabcon">
                    <div class="con">
                        <div class="toptip">
                            当您的工卡丢失时，您可以参照以下两种方式办理自主挂失
                        </div>
                        <div class="gscon">
                            <div class="contit">在线挂失</div>
                            <div class="gscon_text_con">
                                <div class="gscon_text_item">
                                    <div class="gscon_text_iteml">员工号</div>
                                    <div class="gscon_text_itemr">{{userInfo.userId}}</div>
                                </div>
                                <div class="gscon_text_item">
                                    <div class="gscon_text_iteml">姓名</div>
                                    <div class="gscon_text_itemr">{{userInfo.userName}}</div>
                                </div>
                                <div class="gscon_text_item">
                                    <div class="gscon_text_iteml">身份证号</div>
                                    <div class="gscon_text_itemr">{{userInfo.userId}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="gscon_btn" @click="sendgs">提交</div>
                    </div>
                    <div class="con">
                        <div class="gscon gscon2">
                            <div class="contit">小海鸥自主挂失</div>
                            <div class="gscon_text">
                                <div class="inntitle">小海鸥自助机地址：</div>
                                <div class="inner_text">
                                    1.创牌北一楼ATM区小海鸥自助一体机；<br/>
                                    2.海尔云谷一楼小海鸥自助一体机；<br/>
                                    2.人力共享二楼区小海鸥自助一体机；<br/>
                                </div>
                            </div>
                            <div class="contit">小海鸥自助挂失办理路径：</div>
                            <div class="bz"></div>
                        </div>
                    </div>
                    <div class="tipbt">
                        <div class="tipbt_title">温馨提示</div>
                        <div class="tipbt_con">
                            1工卡挂失后，您的餐费将会被冻结 <br>
                            2找到工卡办理解挂后，员工卡方可正常使用
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="补卡">
                <div class="bktext_con">
                    <div class="bktext_con_tit">办理说明</div>
                    <div class="bktext_con_text">
                        1.办理挂失后，补卡费用15元从次月工资中扣除；<br>
                        2.本人持身份证到所在园区的共享中心现场办理；<br>
                        3.可到所在园区的小海鸥只能自助机办理。<br>
                    </div>
                </div>
                <div class="bktext_con">
                    <div class="bktext_con_tit">温馨提示</div>
                    <div class="bktext_con_text">
                        1.补办后员工卡上的餐费须在48小时后到餐厅人工充值处转移至新卡；<br>
                        2.原员工卡中的权限需要重新申请开通.
                    </div>
                </div>
                <div class="time_con">
                    <div class="time_con_title">
                        预约时间
                    </div>
                    <div class="time_con_box">
                        <div class="time_con_box_item">
                            <div class="time_con_box_iteml">预约时间</div>
                            <div class="time_con_box_itemr" @click="showPopup">
                                <div class="time_con_box_itemr_text">{{currentDate}}</div>
                                <div class="dateicon"></div>
                            </div>
                        </div>
                        <div class="time_con_box_item">
                            <div class="time_con_box_iteml">选择时段</div>
                            <div class="time_con_box_itemr">
                                <div class="time_con_box_itemr_text">请选择时间段</div>
                                <div class="timeicon"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gscon_btn">提交</div>

            </van-tab>
            <van-tab title="解挂">
                <div class="bktext_con">
                    <div class="bktext_con_tit">温馨提示</div>
                    <div class="bktext_con_text">
                        1找到员工卡且没有补办出新卡的情况下
                        2解挂后原员工卡上的餐费需要在48小时后到餐厅人工充值处转移
                        3原员工卡中的权限不需要重新申请开通
                    </div>
                </div>
                <div class="gscon gscon3" >
                    <div class="contit">自主解挂信息</div>
                    <div class="gscon_text_con">
                        <div class="gscon_text_item">
                            <div class="gscon_text_iteml">员工号</div>
                            <div class="gscon_text_itemr">2020202020</div>
                        </div>
                        <div class="gscon_text_item">
                            <div class="gscon_text_iteml">姓名</div>
                            <div class="gscon_text_itemr">祝福你</div>
                        </div>
                        <div class="gscon_text_item">
                            <div class="gscon_text_iteml">身份证号</div>
                            <div class="gscon_text_itemr">370283199112085237</div>
                        </div>
                        <div class="gscon_text_item">
                            <div class="gscon_text_iteml">手机号</div>
                            <div class="gscon_text_itemr">370283199112085237</div>
                        </div>
                        <div class="gscon_text_item">
                            <div class="gscon_text_iteml">性别</div>
                            <div class="gscon_text_itemr">370283199112085237</div>
                        </div>
                        <div class="gscon_text_item">
                            <div class="gscon_text_iteml">E-Mall</div>
                            <div class="gscon_text_itemr">370283199112085237</div>
                        </div>
                        <div class="gscon_text_item">
                            <div class="gscon_text_iteml">法人公司</div>
                            <div class="gscon_text_itemr">370283199112085237</div>
                        </div>
                        <div class="gscon_text_item">
                            <div class="gscon_text_iteml">人事单位</div>
                            <div class="gscon_text_itemr">370283199112085237</div>
                        </div>
                    </div>
                </div>
                <div class="gscon_btn" @click="cardJG">提交</div>
            </van-tab>
        </van-tabs>

        <van-popup v-model="show"  position="bottom">
            <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    title="选择年月日"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :formatter="formatter"
            />
        </van-popup>

    </div>
</template>
<script>
    import vueQr from 'vue-qr'
    import {MessageBox} from 'mint-ui';
    import unt from "../utils/unti"
    export default {
        name: 'login',
        components: {
            vueQr
        },
        data() {
            return {
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
                show: false
            }
        },
        created() {
            let _this = this
            unt.getuserInfs(_this,this.getallQr)
            //
            // if (result.data.userName != null && result.data.userName != '') {
            //     _this.$api.getUserInfo({jobNumber:this.userInfo.jobnumber}).then((res)=>{
            //         _this.setUserInfo(res)
            //         _this.setisDD(false)
            //         if(props){
            //             fun&&fun(...props)
            //         }else {
            //             fun&&fun()
            //         }
            //     })
            // } else {
            //     Haier.toast("用户名获取失败!");
            // }
        },
        computed: {
            colorDark() {
                let _this=this
                if (!this.areaCode) {
                    _this.witchColor='black';
                    return '#000';
                }
                if (this.detail.color == 1) {
                    _this.witchColor='green';
                    return '#007706'
                } else {
                    _this.witchColor='red';
                    return '#770008'
                }
            },
            imgsrc() {
                if(this.userInfo.userId){
                    return 'http://103.120.225.186:8080/workcard/ihaier/getFace?jobNumber='+ this.userInfo.userId
                }else {
                    return false
                }

                // return 'http://103.120.225.186:9003/hipass/ihaier/getFace?jobNumber=01515942'
            },
        },
        methods: {
            sendgs(){
                this.$api.lossFLCard({jobNumber:this.userInfo.userId}).then((res)=>{
                    console.log(res)
                })
            },
            cardJG(){
                this.$api.cardJG({jobNumber:this.userInfo.userId}).then((res)=>{
                    console.log(res)
                })
            },
            formatter(type, val) {
                if (type === 'month') {
                    return `${val}月`;
                } else if (type === 'day') {
                    return `${val}日`;
                }
                return val;
            },
            goFace() {
                if(this.isDD){
                    window.location.href = "https://hiface.haier.net/myface/newindex.html?showmenu=false";
                }else {
                    qing.call('gotoLightApp',{appId:'500000219',appName:'人脸识别'})
                }
            },
            showPopup() {
                this.show = true;
            },
            goScan() {
                if(unt.isYzjApp()){
                    XuntongJSBridge.call("scanQRCode",  {
                        "needResult":0
                    }, function(result) {
                    });
                }else {
                    this.$dd.biz.util.scan({
                        // type: String, // type 为 all、qrCode、barCode，默认是all。
                        onSuccess: function (data) {
                            window.location.href = data.text;
                        },
                        onFail: function (err) {
                        }
                    })
                }
            },
            goto(name,item){
                this.$router.push({ name: name })
            },
            getallQr(){
                Promise.all([this.$api.createPrintCode({jobNumber:this.userInfo.userId}), this.$api.getPayCode({jobNumber:this.userInfo.userId})]).then((values) => {
                    console.log(values);
                });
            },
            checktype(type){
                this.swiper.slideTo(type, 1000, false)
                this.checkindex=type
            }
            // imgsrc() {
            //     return 'http://103.120.225.186:8080/workcard/ihaier/getFace?jobNumber=' + this.userInfo.jobnumber
            //     // return 'http://103.120.225.186:9003/hipass/ihaier/getFace?jobNumber=01515942'
            // },
        },
        mounted() {
            console.log('Current Swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
        }
    };
</script>
<style>
    .van-picker__title{
        line-height: normal;
    }
    .van-picker__toolbar{
        height: 100px;
    }
.van-picker__confirm{
    font-size: 42px;
}
    .van-picker__cancel{
        font-size: 42px;
    }
    .van-tabs--line .van-tabs__wrap{
        width: 100vw;
        height: 127px;
    }
    .van-tab{
        line-height: normal;
        font-size: 44px;
    }
    .van-tabs__line{
        width: 100px;
        height: 6px;
        color: #0943ec;
        background-color: #0943ec;
    }
    .van-tab--active{
        font-weight: bold;
    }
</style>
<style scoped>
    .contents{
        background: #eeeeee;
        min-height: 100vh;
    }
    .toptip{
        background: #eeeeee;
        font-size: 20px;
        height: 94px;
        line-height: 94px;
        box-sizing: border-box;
        color: #acacac;
        padding: 0 40px;
    }
    .card_tit{
        font-size: 40px;
    }
    .tabcon{
        box-sizing: border-box;
        width: 100vw;
        display: flex;
        flex-direction: column;

    }
    .card_tit{
        width: 100%;
        text-align: center;
        font-size: 42px;
        font-weight: bold;
        height: 150px;
        line-height: 150px;
    }
    .gscon{
        background: #fff;
        box-shadow: 0 10px 20px #ccc;
        box-sizing: border-box;
        padding: 0 40px;
        padding-bottom: 10px;
    }
    .contit{
        height: 128px;
        line-height: 128px;
        font-size: 34px;
        font-weight: bold;
        color: #939393;
    }
    .gscon_text_item{
        display: flex;
        align-items: center;
        height: 108px;
        line-height: 108px;
        color: #626262;
    }
    .gscon_text_iteml{
        width: 244px;
        font-size: 22px;

    }
    .gscon_text_itemr{
        font-size: 30px;
        font-weight: bold;
    }
    .gscon_btn{
        width: 1000px;
        height: 120px;
        line-height: 120px;
        text-align: center;
        border-radius: 20px;
        color: #fff;
        font-size: 42px;
        background: #0f47ec;
        margin: 0 auto;
        margin-top: 50px;
    }
    .gscon2{
        margin-top: 80px;
        padding-bottom: 50px;
    }
    .inntitle{
        height: 80px;
        line-height: 80px;
        font-weight: bold;
        font-size: 20px;
        color: #626262;

    }
    .inner_text{
        font-size: 20px;
    }
    .bz{
        margin-left: 100px;
        background: url("../assets/img/bz.jpg") no-repeat center;
        width: 855px;
        height: 168px;
        background-size: 100% 100%;
    }
    .tipbt{
        height: 220px;
        box-sizing: border-box;
        padding-left: 40px;
        background: #fffdda;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .tipbt_title{
        font-size: 24px;
        font-weight: bold;
        height: 80px;
        line-height: 80px;
    }
    .tipbt_con{
        line-height: 44px;
        font-size: 16px;
    }

    .bktext_con{
        background: #fff;
        box-sizing: border-box;
        padding: 0 40px;
        padding-bottom: 40px;
    }

    .bktext_con_tit{
        font-size: 32px;
        color: #565656;
        font-weight: bold;
        padding-top: 40px;

    }
    .bktext_con_text{
        color: #565656;
        font-size: 20px;
        line-height: 50px;
        margin-top: 30px;
    }
    .time_con{
        background: #fff;
        box-sizing: border-box;
        padding: 0 40px;
        padding-bottom: 40px;
    }
    .time_con_title{
        height: 131px;
        line-height: 131px;
        font-size: 42px;
        font-weight: bold;
    }
    .time_con_box_item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 96px;
        margin-bottom: 33px;
    }
    .time_con_box_iteml{
        font-size: 20px;
        color: #626262;
    }
    .time_con_box_itemr{
        position: relative;
        font-size: 20px;
        width: 837px;
        height: 100px;
        box-sizing: border-box;
        border-radius: 20px;
        border: 1px solid #eee;
        line-height: 100px;
        padding-left: 40px;
        background: #f4f4f4;
    }
    .dateicon{
        background: url("../assets/img/dayicon.jpg") no-repeat center;
        background-size: 100% 100%;
        position: absolute;
        right: 30px;
        top:27px;
        width: 59px;
        height: 59px;
    }
    .timeicon{
        background: url("../assets/img/timeicon.jpg") no-repeat center;
        background-size: 100% 100%;
        position: absolute;
        right: 30px;
        top:27px;
        width: 59px;
        height: 59px;
    }
    .gscon3{
        padding-bottom: 40px;
    }
</style>
