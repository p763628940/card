import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {mapState, mapMutations} from 'vuex'
import api from './api/api'
import 'mint-ui/lib/style.css'
import VueWechatTitle from 'vue-wechat-title'
import moment from 'moment';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import * as dd from 'dingtalk-jsapi'
import { Checklist } from 'mint-ui';
import islogin from './utils/mintImport'
import unt from './utils/unti'
Vue.use(VueWechatTitle)
Vue.mixin({
    computed: {
        ...mapState([
            'userInfo',
            'isAffair',
            'setbar',
            'showbar',
            'detailsId',
            'isDD',
        ]),
    },
    methods: {
        ...mapMutations([
            'setUserInfo',
            'setisAffair',
            'setSetbar',
            'setshowbar',
            'setDetais',
            'setUserInfoIsAuthorize',
            'setisDD',
        ]),
    }
});
Vue.config.productionTip = false
Vue.prototype.$moment = moment;
Vue.prototype.$api = api;
Vue.prototype.$dd = dd;
Vue.prototype.$unt = unt;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
