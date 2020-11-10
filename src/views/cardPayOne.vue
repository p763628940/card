<template>
    <div class="cardPayOne">
     <div class="cardPayOne_top">
         <div class="cardPayOne_top_tit">充值缴费说明</div>
         <div class="cardPayOne_top_con">
             <div class="cardPayOne_top_con_item">
                 1.此充值只能使用建行银行卡
             </div>
             <div class="cardPayOne_top_con_item">
                 2.此充值可在全国各地海尔工业园（不含各地中心小微）消费。海尔内部员工无管理费，非海尔内部员工管理费为32%；
             </div>
             <div class="cardPayOne_top_con_item">
                 3.外部合作伙伴充值请使用987开头的8位员工卡号;
             </div>
             <div class="cardPayOne_top_con_item">
                 4.单笔充值最少限额10元，扣款成功后，您需持卡到餐厅的补助机上刷卡操作。补助机提示充值成功后，相应金额方可写入卡中
             </div>
             <div class="cardPayOne_top_con_item">
                 如在系统中充值异常，请在工作日（周一至周五9：00-17：30），联系以下电话：<span>充值成功未到账问题联系餐卡运维：0532-88038166；充值过程报错请联系建行：13953222902</span>
             </div>
         </div>
     </div>
        <div class="cardPaybtn">确定</div>
        <div class="cardPaybtn cardPaybtn2">返回</div>

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
  .cardPayOne{
      min-height: 100vh;
      width: 100%;background: #f3f3f3;
      display: flex;
      flex-direction: column;
      align-items: center;

  }
    .cardPayOne_top{
        margin-top: 50px;
        width: 1033px;
        border-radius: 20px;
        background: #fff;
        padding:50px 90px;
        box-sizing: border-box;
        padding-top: 0;
        box-shadow: 0 0 10px #ccc;

    }
    .cardPayOne_top_tit{
        height: 140px;
        line-height: 140px;
        font-size: 42px;
        color: #808080;
        text-align: center;
    }
    .cardPayOne_top_con_item{
        color: #575757;
        font-size: 20px;
        margin-top: 30px;
    }

    .cardPaybtn{
        width: 1033px;
        height: 114px;
        line-height: 120px;
        text-align: center;
        border-radius: 20px;
        color: #fff;
        font-size: 42px;
        background: #0f47ec;
        margin: 0 auto;
        margin-top: 50px;
    }
    .cardPaybtn2{
        background: #fff;
        color: #0f47ec;
    }

</style>
