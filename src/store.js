import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      userInfo:{
          // userId:'A0038337',
          // userOU:'姚远方',
          // depName:'姚远方',
          // userId:'A0037835',
          // userId:'a0038334',
          //    userId:'19011390',
          // userName:'张崇阳',
          // userId:'A0032378',
          // name:'张志杰',
          // depName:'海尔集团',‘
          // phone:'156545565',
          // name:'董方旭',
          // jobnumber:'01515942',
          //
          // jobnumber:'A0037835',
          // phone:'156545565',
          // name:'张重阳',
          // userLevel:'09',
          // jobnumber:'a0038335',
          // name:'袁单单',
          // userLevel:9,
          // remark:1,
          // jobnumber:'a0000206',
          // name:'吴承志',
      },
      isAffair:false,
      setbar:'applyPassport',
      showbar:true,
      detailsId:'',
      isDD:false
  },
  mutations: {
      setshowbar(state,data){
          state.showbar = data;
      },
      setUserInfo(state,data){
          state.userInfo = data;
      },
      setUserInfoIsAuthorize(state,data){
          state.userInfo.isAuthorize = data;
      },
      setisAffair (state, data) {
          state.isAffair = data
      },setSetbar(state,data){
          state.setbar=data
      },setDetais(state,data){
          state.detailsId=data
      },setisDD(state,data){
          state.isDD=data
      }

  },
  actions: {
  }
})
