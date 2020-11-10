<template>
    <div class="contents">
        <div class="contents_inner">
            <div class="backgroundImg">
                <div class="top">
                    <div class="topl">
                        <div class="name">{{userInfo.name}}</div>
                        <div class="decs">{{userInfo.depName?userInfo.depName:'海尔集团'}}</div>
                        <div class="noBox">
                            <div class="noBoxL">NO:{{userInfo.jobnumber}}</div>
                            <div class="noBoxr">
                                <div class="noBoxr_img"></div><div> :</div>
                                <div class="noBoxr_text">{{userInfo.phone||'暂无'}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="topr">
                        <img v-if="imgsrc"  :src="imgsrc" class="face" alt="" @click="goFace">
                        <img v-if="!imgsrc"  :src="imgsrc" class="face" alt="" @click="goFace">
                        <div class="xy"> <span class="xyl">信用等级:</span> <span class="xyr">A</span></div>
                    </div>
                </div>
                <div class="bottoms">
                    <div class="bottoms_item  bottoms_item1" @click="goScan()">
                    </div>
                    <div class="bottoms_item bottoms_item2 ma_item" @click="goto('passCode')">
                    </div>
                    <div class="bottoms_item bottoms_item3">
                    </div>
                    <div class="bottoms_item bottoms_item4 ma_item">
                    </div>
                </div>
            </div>
        </div>
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
            };
        },
        created() {
            let _this = this
            unt.getuserInfs(_this)
        },
        mounted() {
            // this.getData();
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
                if(this.userInfo.jobnumber){
                    return 'https://hicar.haier.net/hipassjava/ihaier/getFace?jobNumber=' + this.userInfo.jobnumber
                }else {
                    return false
                }

                // return 'http://103.120.225.186:9003/hipass/ihaier/getFace?jobNumber=01515942'
            },
        },
        methods: {
            goFace() {
                if(this.isDD){
                    window.location.href = "https://hiface.haier.net/myface/newindex.html?showmenu=false";
                }else {
                    qing.call('gotoLightApp',{appId:'500000219',appName:'人脸识别'})
                }
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
            }

        },
    };
</script>
<style scoped>
    .contents {
        background: #f2f4f5;
        width: 375px;
        min-height:100vh;
    }
    .contents_inner{
        min-height: calc(100vh - 80px);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .backgroundImg {
        background: url("../assets/img/newBackGround.png") no-repeat center;
        width: 370px;
        height:583px;
        background-size: 100% 100%;
        position: absolute;
    }
    .topl{
        margin-top: 10px;
    }
    .top{
        display: flex;
        margin-top: 63px;
        margin-left: 36px;
        color: #fff;
        width: 300px;
        justify-content: space-between;
        font-weight: 400;
    }
    .name{
        font-size:30px;
        height: 30px;
        line-height: 30px;
        font-weight: bold;
    }
    .decs{
        font-weight:400;
        color:rgba(255,255,255,1);
        height:10px;
        font-size:10px;
        margin-top: 24px;
    }
    .noBox{
        display: flex;
        align-items: center;
        margin-top: 10px;
        height: 10px;
        line-height: 10px;
        font-size: 10px;
    }
    .noBoxL{
        margin-right: 20px;
    }
    .noBoxr{
        display: flex;
        align-items: center;
    }
    .noBoxr_img{
        background: url("../phone_icon.png")no-repeat center;
        background-size: 100% 100%;
        width: 6.9px;
        height: 9.57px;
    }
    .noBoxr_text{
        margin-left: 4px;
        font-size: 10px;
    }
    .topr{
        position: relative;
    }
    .face{
        display: block;
        width: 89px;
        height: 89px;
        top: calc(50% - 1.7rem);
        left: calc(50% - 1.8rem);
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid #FFD4A9;
        background: url("../assets/facebg.png") no-repeat center;
        background-size: 90px 90px;
    }
    .xy{
        position: absolute;
        width: 94px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: url("../home_bg_top.png") no-repeat center;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        bottom: 3px;
        left: 0;
    }
    .xyl{
        color:#614400;
        font-size: 10px;
    }
    .xyr{
        color:#614400;
        font-size: 12px;
        margin-left: 3px;

    }
    .bottoms{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width:352px;
        height:343px;
        background:rgba(255,255,255,1);
        opacity:1;
        border-radius:10px;
        margin: 0 auto;
        margin-right: 3%;
        margin-top: 39px;
        justify-content: center;
        box-sizing: border-box;
        padding-top: 29px;
    }
    .bottoms_item{
        width: 140px;
        height: 140px;
    }
    .ma_item{
        margin-left: 16px;
        margin-bottom: 3px;
    }
    .bottoms_item1{
        background: url("../assets/home_icon1.png");
        background-size: 100% 100%;
    }
    .bottoms_item2{
        background: url("../assets/home_icon2.png");
        background-size: 100% 100%;
    }
    .bottoms_item3{
        background: url("../assets/img/home_icon5.png");
        background-size: 100% 100%;
    }
    .bottoms_item4{
        background: url("../assets/home_icon4.png");
        background-size: 100% 100%;
    }
</style>
