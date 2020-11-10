import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          redirect: '/card'
      },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/card',
      name: 'card',
      component: () => import('./views/card.vue'),
        meta:{
            title: '工卡'
        }
    },
    // {
    //   path: '/cardCx',
    //   name: 'cardCx',
    //   component: () => import('./views/cardCx.vue'),
    //     meta:{
    //         title: '登录'
    //     }
    // },
    // {
    //   path: '/cardFound',
    //   name: 'cardFound',
    //   component: () => import('./views/cardFound.vue'),
    //     meta:{
    //         title: '登录'
    //     }
    // },
    // {
    //   path: '/carddetail',
    //   name: 'carddetail',
    //   component: () => import('./views/carddetail.vue'),
    //     meta:{
    //         title: '登录'
    //     }
    // },
    // {
    //   path: '/cardPayOne',
    //   name: 'cardPayOne',
    //   component: () => import('./views/cardPayOne.vue'),
    //     meta:{
    //         title: '登录'
    //     }
    // },
    // {
    //   path: '/cardPaytwo',
    //   name: 'cardPaytwo',
    //   component: () => import('./views/cardPaytwo.vue'),
    //     meta:{
    //         title: '登录'
    //     }
    // },
    // {
    //   path: '/cardPayThree',
    //   name: 'cardPayThree',
    //   component: () => import('./views/cardPayThree.vue'),
    //     meta:{
    //         title: '登录'
    //     }
    // },
    // {
    //   path: '/cardPayFour',
    //   name: 'cardPayFour',
    //   component: () => import('./views/cardPayFour.vue'),
    //     meta:{
    //         title: '登录'
    //     }
    // },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: () => import('./views/Home.vue'),
    //     meta:{
    //         title: 'HiPass'
    //     }
    // },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/About.vue'),
        meta:{
            title: 'About'
        }
    },
    // {
    //   path: '/CheckList',
    //   name: 'CheckList',
    //   component: () => import('./views/CheckList.vue'),
    //     meta:{
    //         title: 'HiPass'
    //     }
    // },
    // {
    //   path: '/ApplyList',
    //   name: 'ApplyList',
    //   component: () => import('./views/ApplyList.vue'),
    //     meta:{
    //         title: 'HiPass'
    //     }
    // },
    // {
    //   path: '/GoDetails',
    //   name: 'GoDetails',
    //   component: () => import('./views/GoDetails.vue'),
    //   meta:{
    //     title: 'HiPass'
    //   }
    // },
    // {
    //   path: '/iHaierDetails',
    //   name: 'iHaierDetails',
    //   component: () => import('./views/iHaierDetails.vue'),
    //   meta:{
    //     title: 'HiPass'
    //   }
    // },
    // {
    //   path: '/applyPassport',
    //   name: 'applyPassport',
    //   component: () => import('./views/applyPassport.vue'),
    //   meta:{
    //     title: 'HiPass'
    //   }
    // },
    // {
    //   path: '/examine',
    //   name: 'examine',
    //   component: () => import('./views/examine.vue'),
    //   meta:{
    //     title: 'HiPass'
    //   }
    // },
    // {
    //   path: '/passCode',
    //   name: 'passCode',
    //   component: () => import('./views/passCode.vue'),
    //   meta:{
    //     title: 'HiPass'
    //   }
    // },
    // {
    //   path: '/followingDetails',
    //   name: 'followingDetails',
    //   component: () => import('./views/followingDetails.vue'),
    //   meta:{
    //     title: 'HiPass',
    //     keepAlive: true,
    //   }
    // },
    // {
    //   path: '/iHaierDetails',
    //   name: 'iHaierDetails',
    //   component: () => import('./views/iHaierDetails.vue'),
    //   meta:{
    //     title: 'HiPass'
    //   }
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
