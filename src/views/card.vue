<template>
    <div class="contents">
        <div class="top">
            <div class="haierlogo" v-if="isA"></div>
            <div v-if="!isA"></div>
            <div class="top_r">
                <div v-for="(item,index) in titleData" :key="index" class="top_r_item" @click="gourl(item)">
                    <span>
                          {{item.text}}
                    </span>
                    <div class="top_r_itemline" v-if="index<4">
                    </div>
                </div>
            </div>
        </div>
        <div class="card_con">
            <div class="face" @click="preFace">
                <img :src="imgsrc" alt="" @error="setCango">
            </div>
            <div class="name_con">
                <span class="name_conl">{{userInfo.userName}}</span>
                <span class="name_conr">{{userInfo.namePinYin}}</span>
            </div>
            <div class="nu">
                No.{{userInfo.userId}}
            </div>
            <div class="tipbar" v-if="userInfo.userName">{{spname(userInfo.userOU)||'暂无'}}</div>
            <div class="tipbar">{{userInfo.depName||'暂无'}}</div>
            <div class="mySwiper_box">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <!--//餐饮-->
                    <swiper-slide
                            v-for="(item,index) in roullData"
                            :key="index"
                            style="cursor: pointer"
                    >
                        <div class="swiperimg_box">
                            <div class="swiperimgbox" @click="showimg(index)">
                                <div class="zz" v-if="!item.url">
                                    <div class="zzimg"></div>
                                    <div class="zztext">建设中</div>
                                </div>
                                <vue-qr v-if="item.url"
                                        class="swiperimg"
                                        :text="item.url"
                                        :margin="10"
                                        :colorDark="colorDark"
                                        colorLight="#fff"
                                        :logoScale="0.3"
                                        :size="200"
                                        :callback="test"
                                        :qid="index"
                                >
                                </vue-qr>
                            </div>

                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <!--<div class="mySwiper_box mySwiper_box2">-->
            <!--<swiper ref="mySwiper2" :options="swiperOptions2">-->
            <!--<swiper-slide>-->
            <!--<img class="swiperimg2"  alt="">-->
            <!--</swiper-slide>-->
            <!--<swiper-slide>-->
            <!--<img class="swiperimg2"  alt="">-->
            <!--</swiper-slide>-->
            <!--<swiper-slide>-->
            <!--<img class="swiperimg2"  alt="">-->
            <!--</swiper-slide>-->
            <!--<div class="swiper-pagination" slot="pagination"></div>-->
            <!--</swiper>-->
            <!--</div>-->
            <div class="roll_con">
                <div class="roll_con_item "
                     v-for="(item,index) in roullData"
                     :class="['item'+(index+1),checkindex==index ? 'roll_con_item_active':'']"
                     @click="checktype(index)">{{item.name}}
                </div>
                <!--<div class="roll_con_item item2" @click="checktype(1)" v-bind>通行</div>-->
                <!--<div class="roll_con_item item3" @click="checktype(2)" v-bind:class="[checkindex==2 ? 'roll_con_item_active':'']">打印</div>-->
                <!--<div class="roll_con_item item4"  @click="checktype(3)"  v-bind:class="[checkindex==3 ? 'roll_con_item_active':'']">工卡</div>-->
                <!--<div class="roll_con_item item5" @click="checktype(4)" v-bind:class="[checkindex==4 ? 'roll_con_item_active':'']">加油</div>-->
                <!--<div class="roll_con_item item6" @click="checktype(5)" v-bind:class="[checkindex==5 ? 'roll_con_item_active':'']">缴费</div>-->
                <!--<div class="roll_con_item item7" @click="checktype(6)" v-bind:class="[checkindex==6 ? 'roll_con_item_active':'']">购物</div>-->
            </div>
            <div class="btm">
                <div class="btm_item">
                    <div class="btm_item_l phone"></div>
                    <div class="btm_item_r">{{userInfo.phone||'暂无'}}</div>
                </div>
                <div class="btm_item btm_item2">
                    <div class="btm_item_l mail"></div>
                    <div class="btm_item_r">{{userInfo.haierMail||userInfo.usermail||'暂无'}}</div>
                </div>
            </div>
        </div>
        <van-image-preview v-model="show"
                           :images="images"
                           :show-index="false"
                           :closeable="true"
        >
            <template v-slot:index></template>
            <template v-slot:cover>
                <div class="mytext">
                    {{roullData[checkindex].name+'专用 二维码'}}
                </div>
            </template>
        </van-image-preview>
        <van-image-preview v-model="faceshow"
                           :images="faceImg"
                           :show-index="false"
                           :closeable="true"
        >
            <template v-slot:index></template>
            <template v-slot:cover>
                <div class="changeface" @click="goFace">
                    修改头像
                </div>
            </template>
        </van-image-preview>
        <div class="zhezhao" v-if="showzhehao"></div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import vueQr from 'vue-qr'
    import {MessageBox} from 'mint-ui';
    import unt from "../utils/unti"
    import {ImagePreview} from 'vant';
    import baseUrl from '../../config/baseUrl'
    import { Dialog } from 'vant';

    export default {
        name: 'login',
        components: {
            vueQr,
            [ImagePreview.Component.name]: ImagePreview.Component,
        },
        data() {
            return {
                activeitem:{},
                activeindex:'',
                payCode:'',
                showzhehao:false,
                // A1 工卡
                // A2 打印
                // A3 餐饮
                // A4 通行
                qrCode1: '',//餐饮
                qrCode2: '',//通行
                qrCode3: '',//打印 and工卡
                // 预览
                show: false,
                index: 0,
                images: [],
                faceshow: false,
                faceImg: [],
                cango: true,
                checkindex: 3,
                imgurls:{},
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    // Some Swiper option/callback...
                    on: {
                        slideChange: () => {
                            // 通过$refs获取对应的swiper对象
                            let swiper = this.$refs.mySwiper.$swiper;
                            let i = swiper.activeIndex;
                            this.checkindex = i
                        },
                        // click: (thiss, e) => {
                        //     let img = e.path[0].currentSrc;
                        //     if (img) {
                        //         this.images = [img];
                        //         this.show = true;
                        //     }
                        //
                        // },
                    },
                },
                roullData: [
                    // {text:'餐饮',qrurl:'ss'},
                    // {text:'通行'},
                    // {text:'打印'},
                    // {text:'工卡'},
                    // {text:'加油'},
                    // {text:'缴费'},
                    // {text:'购物'},
                ],
                titleData: [
                    {text: '挂失', url: 'https://hrssc.haier.net/app/scene/ygCard'},
                    {text: '解挂', url: 'https://hrssc.haier.net/app/scene/ygCard'},
                    {text: '补卡', url: 'https://hrssc.haier.net/app/scene/ygCard'},
                    {text: '查询', url: '', type: 4},
                    {text: '充值', url: 'http://newlapp.haier.net:9096/ihaierMobile/ccb/index.html?t=201912101529'},
                ]
            };
        },
        created() {
            // this.$api.getUserInfo({jobNumber:'20025311'}).then((res)=>{
            //     console.log(res)
            // })
            qing.call('setWebViewTitle',{'title':'工卡'})
            if (this.$dd.env.platform === "notInDingTalk"&& !unt.isYzjApp()) {
                this.showzhehao = true
                MessageBox({
                    title: "友情提示",
                    message: "该应用只能在iHaier客户端访问！",
                    confirmButtonText: '去下载'
                }).then(action => {
                    window.location.href = "https://openapi.haier.net/mock/load.html";
                });
                return
            }
            let _this = this
            unt.getuserInfs(_this, this.getallQr)
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
            //
            // this.getallQr()
            // this.getallQr()
        },
        computed: {
            isA(){
                if(!this.userInfo.userId){
                    return false
                }
                if(this.userInfo.userId.search('A')!=-1){
                    return false
                }else {
                    return true
                }
            },
            swiper() {
                return this.$refs.mySwiper.$swiper
            },
            colorDark() {
                let _this = this
                if (!this.areaCode) {
                    _this.witchColor = 'black';
                    return '#000';
                }
                if (this.detail.color == 1) {
                    _this.witchColor = 'green';
                    return '#007706'
                } else {
                    _this.witchColor = 'red';
                    return '#770008'
                }
            },
            imgsrc() {
                if (this.userInfo.userId) {
                    return baseUrl + '/workcard/ihaier/getFace?jobNumber=' + this.userInfo.userId
                } else {
                    return false
                }

                // return 'http://103.120.225.186:9003/hipass/ihaier/getFace?jobNumber=01515942'
            },
        },
        methods: {
            test(dataUrl,id){
                this.imgurls['img'+id]=dataUrl
            },
            spname(data) {
                let arrstr = data.split("/");
                if(arrstr.length<=3){
                    return arrstr[arrstr.length-2]
                }else {
                    return arrstr[arrstr.length-3]
                }
            },
            getPayStatus(){
                console.log(this.payCode)
                if(this.payCode){
                    let data ={
                        jobNumber:this.userInfo.userId,
                        payCode: encodeURIComponent(this.payCode)
                    }
                    this.$api.getPayStatus(data).then((res)=>{
                        let payStatus =res.code
                        if(payStatus==201||payStatus==200){
                            this.getPayCode(this.activeitem,this.activeindex)
                        }
                        if(payStatus==301){
                        clearInterval(this.t)
                            Dialog.alert({
                                title: '提示',
                                message: '余额不足',
                            }).then(() => {
                                // on close
                            });
                        }
                    })
                }
            },

            getallQr() {
                this.$api.selectByInfoCode({jobNumber: this.userInfo.userId}).then((res) => {
                    this.roullData = res
                    this.swiper.slideTo(3, 1000, false)

                    this.roullData.forEach((item, index) => {
                        if (item.code == 'A1') {
                            this.createPrintCode(item, index)
                        }
                        if (item.code == 'A2') {
                            this.createPrintCode(item, index)
                        }
                        if (item.code == 'A3') {

                            this.getPayCode(item, index)
                        }
                        if (item.code == 'A4') {
                            this.geturl(item, index)

                        }
                    })
                    this.t=setInterval(()=>{
                        this.getPayStatus()
                    },2000)

                })
            },
            setCango() {
                this.cango = false
            },
            preFace() {
                if (this.cango) {
                    this.faceshow = true
                    this.faceImg = [this.imgsrc]
                } else {
                    this.goFace()
                }
            },
            ImagePreviewing(img) {
                ImagePreview([
                    img
                ]);
            },
            showimg(index) {

                let img = this.imgurls['img'+index];
                    if (img) {
                        this.images = [img];
                        this.show = true;
                    }
            },
            gourl(item) {
                if (item.type == 4) {
                    qing.call('gotoLightApp', {appId: '10296', appName: '团膳体验云'})
                    return
                }
                window.location.href = item.url
            },
            goFace() {
                if (this.isDD) {
                    window.location.href = "https://hiface.haier.net/myface/newindex.html?showmenu=false";
                } else {
                    qing.call('gotoLightApp', {appId: '500000219', appName: '人脸识别'})
                }
            },
            goScan() {
                if (unt.isYzjApp()) {
                    XuntongJSBridge.call("scanQRCode", {
                        "needResult": 0
                    }, function (result) {
                    });
                } else {
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
            goto(name, item) {
                this.$router.push({name: name})
            },
            // 打印二维码
            createPrintCode(item, index) {

                this.$api.createPrintCode({jobNumber: this.userInfo.userId}).then((res) => {
                    item.url = res
                    this.roullData.splice(index,1,item)
                    console.log(this.roullData)
                })

            },
            //通行二维码
            geturl(item, index) {
                this.$api.myUrl({validTime: 500, entryTimes: 10, jobNumber: this.userInfo.userId})
                    .then((res) => {
                        item.url = res.url
                        this.roullData.splice(index,1,item)
                    }).catch((err) => {
                    Toast(err);
                })
            },
            //餐厅二维码
            getPayCode(item, index) {
                this.$api.getPayCode({jobNumber: this.userInfo.userId}).then((res) => {
                    item.url = res;
                    this.activeitem =item
                    this.activeindex=index
                    this.payCode=res
                    this.roullData.splice(activeindex,1,activeitem)

                })
            },
            checktype(type) {
                this.checkindex = type
                console.log(this.roullData[type])
                this.swiper.slideTo(type, 1000, false)
            }
            // imgsrc() {
            //     return 'http://103.120.225.186:8080/workcard/ihaier/getFace?jobNumber=' + this.userInfo.jobnumber
            //     // return 'http://103.120.225.186:9003/hipass/ihaier/getFace?jobNumber=01515942'
            // },
        },
        mounted() {
        }
    };
</script>
<style>
    .mint-msgbox-wrapper{
        z-index: 999;
    }
    .van-image-preview__close-icon {
        font-size: 80px;
    }

    .van-image-preview__index {
        display: none;
    }
    .mint-msgbox-title{
        font-size: 2.422vw;
    }
    .mint-msgbox-message{
        line-height: 14.2vw;
    }
    .mint-msgbox-btns{
        height: 9.5vw;
    }
    .mint-msgbox-header{
        padding: 4.333vw 0 0;
    }
    .van-dialog{
     width: 70vw;
    }
    .van-dialog__message--has-title{
        padding-top: 0;
    }
    .van-dialog__header{
        line-height: normal;
        font-size: 50px;
    }
    .van-dialog__message{
        font-size: 39px;
        line-height: 13.889vw;
    }
    .van-button--large{
    height: 10.333vw;
        line-height: 10.333vw;
        font-size: 38px;
        padding-bottom: 20px;
    }
    .van-button__text{
        color:#0c45ed;
    }
</style>
<style scoped>
    .mySwiper_box2 .swiper-container {
        height: 300px;
    }
    .top_r_item {
        color: #fff;
        font-size: 30px;
        align-items: center;
        display: flex;
        text-decoration: underline;
    }
    .zhezhao {
        position: fixed;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.8;
        top: 0;
        left: 0;
        z-index: 2;

    }
    .contents {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0 40px;
        background-color: #ffffff;
        background-image: linear-gradient(#0c45ed, #fff);
    }

    .top {
        display: flex;
        align-items: center;
        padding-top: 70px;
        justify-content: space-between;
    }

    .face img {
        display: block;
        width: 464px;
        height: 464px;
        top: calc(50% - 1.7rem);
        left: calc(50% - 1.8rem);
        object-fit: cover;
        border-radius: 50%;
        border: 20px solid #fff;
        background-size: 464px 464px;
        margin: 0 auto;
        margin-top: -232px;
        background: url("../assets/facebg.png") no-repeat center;
        background-size: 100% 100%;
    }

    .haierlogo {
        background: url("../assets/img/logo.png") no-repeat center;
        width: 221px;
        height: 66px;
        background-size: 100% 100%;
    }

    .top_r {
        display: flex;
        justify-content: space-around;
    }

    .card_con {
        background: url("../assets/img/bg.png") no-repeat center;
        width: 992px;
        height: 1584px;
        background-size: 100% 100%;
        margin: 0 auto;
        margin-top: 326px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .name_con {
        margin: 0 auto;
        margin-top: 50px;
        width: 464px;
        text-align: center;
        position: relative;
    }

    .name_conl {
        font-size: 74px;
        font-weight: bold;
    }

    .name_conr {
        position: absolute;
        right: -100px;
        top: 0;
        font-size: 30px;
        line-height: 100px;
        height: 100px;
    }

    .nu {
        display: flex;
        margin-top: 40px;
        align-items: center;
        justify-content: center;
    }

    .tipbar {
        min-width: 388px;
        height: 66px;
        background: #0943ed;
        text-align: center;
        line-height: 66px;
        color: #fff;
        margin-top: 20px;
        border-radius: 33px;
        padding: 0 30px;
    }

    .swiperimgbox {
        width: 400px;
        height: 400px;
        margin: 0 auto;
        display: block;
        position: relative;
    }

    .swiperimg_box {
        width: 992px;
        height: 400px;
    }

    .mySwiper_box {
        width: 992px;
        height: 400px;
        overflow: hidden;
        margin-top: 40px;
    }

    .swiperimg2 {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #00b1ff;
        color: #fff;
    }

    .btm {
        color: #fff;
        margin-top: 80px;
    }

    .btm_item {
        display: flex;
        align-items: center;
    }

    .phone {
        background: url("../assets/img/phoneicon.png") no-repeat center;
        width: 35px;
        height: 35px;
        background-size: 100% 100%;
        margin-right: 20px;
    }

    .mail {
        background: url('../assets/img/mailIcon.png') no-repeat center;
        width: 40px;
        height: 30px;
        background-size: 100% 100%;
        margin-right: 20px;
    }

    .roll_con {
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
        height: 238px;
        align-items: center;
        margin-top: -70px;
        background: rgba(0,0,0,0);
        z-index: 100;
    }

    .roll_con_item {
        width: 116px;
        height: 116px;
        border-radius: 50%;
        background: #0943ed;
        opacity: 0.7;
        text-align: center;
        color: #fff;
        line-height: 116px;
        font-size: 35px;
    }

    .roll_con_item_active {
        width: 190px;
        height: 190px;
        border-radius: 50%;
        background: #0943ed;
        opacity: 1;
        line-height: 190px;
        font-size: 50px;
    }

    .item1 {
        margin-top: 24vw;
        /*transform: rotate(-20deg);*/
    }

    .item2 {
        margin-top: 15.876vw;
        /*transform: rotate(-10deg);*/
    }

    .item3 {
        margin-top: 10.454vw;
        /*transform: rotate(-5deg);*/
    }

    .item5 {
        margin-top: 10.454vw;
        /*transform: rotate(5deg);*/
    }

    .item6 {
        margin-top: 15.876vw;
        /*transform: rotate(10deg);*/
    }

    .item7 {
        margin-top: 24vw;
        /*transform: rotate(20deg);*/
    }

    .item4 {
        margin-top: 5.135vw;
    }

    .top_r_itemline {
        margin-left: 30px;
        margin-right: 30px;
        width: 4px;
        height: 30px;
        background: #fff;
    }

    .btm_item2 {
        margin-top: 30px;
    }

    .mytext {
        width: 800px;
        height: 120px;
        line-height: 120px;
        text-align: center;
        color: #fff;
        background: blue;
        position: fixed;
        bottom: 20px;
        left: 50%;
        margin-left: -400px;
        border-radius: 20px;
        font-size: 40px;
    }

    .changeface {
        width: 800px;
        height: 120px;
        line-height: 120px;
        text-align: center;
        color: #fff;
        background: blue;
        position: fixed;
        bottom: 20px;
        left: 50%;
        margin-left: -400px;
        border-radius: 20px;
        font-size: 40px;
    }

    .zz {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 400px;
        opacity: 0.8;
        font-size: 50px;
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .zzimg{
        width: 300px;
        height: 300px;
        background: url("../assets/img/bud.png") no-repeat center;
        background-size: 100% 100%;
    }
    .zztext{
        text-align: center;
        height: 100px;
        line-height: 100px;
        color: #ccc;
        font-size: 40px;
    }

</style>
