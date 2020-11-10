<template>
    <div class="carddetail">
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
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
                list: [],
                loading: false,
                finished: false,
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
            swiper() {
                return this.$refs.mySwiper.$swiper
            },
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
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }

                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);
            },
            // imgsrc() {
            //     return 'http://103.120.225.186:8080/workcard/ihaier/getFace?jobNumber=' + this.userInfo.jobnumber
            //     // return 'http://103.120.225.186:9003/hipass/ihaier/getFace?jobNumber=01515942'
            // },
        },
        mounted() {
        }
    };
</script>
<style scoped>
   .card_found{
    display: flex;
       flex-direction: column;
       align-items:  center;
       background: #f3f3f3;
       min-height: 100vh;
   }
    .yecard{
        width: 1040px;
        height: 508px;
        border-radius: 20px;
        box-shadow: 0 0 10px #ccc;
        margin-top: 55px;
        background: #fff;
    }
    .yecard_text{
        line-height: 50px;
        margin-top: 165px;
        font-size: 36px;
        color: #626262;
        text-align: center;

    }
    .yecardPrice{
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .yecardPricer{
        font-size: 78px;
        font-weight: bold;
        color: #e30102;
    }
    .yecardPricel{
        margin-top: 15px;
        color: #e30102;
        font-weight: bold;
    }
    .yecard_btn{
        width: 1040px;
        height: 114px;
        border-radius: 10px;
        text-align: center;
        color: #fff;
        font-size: 50px;
        font-weight: bold;
        line-height: 114px;
    }
    .btntype1{
        background: #1047ec;
        color: #fff;
        margin-top: 50px;

    }
    .btntype2{
        background: #fff;
        color: #1047ec;
        margin-top: 38px;
    }
</style>
