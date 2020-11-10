<template>
  <div class="about">


    <div style="font-size: 30px;background: #ff00ff" @click="getData">我要点击</div>
    <div style="font-size: 30px;background: #ff00ff" @click="getData2">post测试</div>
    <div v-for="item in listdata">
      <div>
        {{item.title}}
      </div>
      <div v-html="item.content">
      </div>

    </div>
  </div>
</template>

<script>
    import vueQr from 'vue-qr'
    export default {
        name: 'about',
        components: {
            vueQr
        },
        data() {
            return {
                listdata:[],
                id: -1,
                downloadData: {
                    url: 'wwww.baidu.com',
                    icon: '//n.sinaimg.cn/news/crawl/200/w1080h720/20200615/f946-iuzasxs3724871.jpg',
                }

            };
        },
        created() {

        },
        mounted() {
            // this.getData();
        },
        methods: {
            // 获取 easy-mock 的模拟数据
            //A0038335 单单
            //A0037835 大成哥
            //A0000206 chengzhi
            getData() {
                this.$api.user().then((res)=>{
                    console.log(res)
                })
            },
            getData2() {
                this.$api.topics({accesstoken:'dfafadsfsdafsdaf',title:'dsfddfaas',content:"hahahahdah"}).then((res)=>{
                    console.log(res)
                    this.listdata=res.data
                })
            },
        }
    };
</script>
<style scoped>
  .ewm{
    width: 300px;
    height: 300px;
    margin: 0 auto !important;
    display: block;
  }
  .about{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
  }
</style>
