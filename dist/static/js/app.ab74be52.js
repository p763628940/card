(function(e){function t(t){for(var n,a,c=t[0],i=t[1],f=t[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,f||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function c(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0cfb23":"7d4e2a31","chunk-d3f05e52":"b46d20e6","chunk-ec23cbcc":"567e50ea"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-d3f05e52":1,"chunk-ec23cbcc":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+"."+{"chunk-2d0cfb23":"31d6cfe0","chunk-d3f05e52":"16d9fb09","chunk-ec23cbcc":"8f338aaf"}[e]+".css",s=i.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var f=o[c],u=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(u===n||u===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){f=d[c],u=f.getAttribute("data-href");if(u===n||u===s)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],l.parentNode.removeChild(l),r(o)},l.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=o);var f,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var d=new Error;f=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:u})}),12e4);u.onerror=u.onload=f,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],u=f.push.bind(f);f.push=t,f=f.slice();for(var d=0;d<f.length;d++)t(f[d]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"40f7":function(e,t,r){"use strict";var n="http://127.0.0.1:7001/";switch("production"){case"development":n="http://hritnew.haier.net";break;case"dev":n="http://c3412q4391.zicp.vip:32979";break;case"try":n="http://www.cnblogs.com/XHappyness/";break;case"production":n="http://hritnew.haier.net";break}t["a"]=n},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("db4d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o={name:"app"},c=o,i=(r("034f"),r("2877")),f=Object(i["a"])(c,a,s,!1,null,null,null),u=f.exports,d=r("8c4f");n["default"].use(d["a"]);var l=new d["a"]({base:"",routes:[{path:"/",redirect:"/card"},{path:"/card",name:"card",component:function(){return Promise.all([r.e("chunk-2d0cfb23"),r.e("chunk-ec23cbcc")]).then(r.bind(null,"337f"))},meta:{title:"工卡"}},{path:"/test",name:"test",component:function(){return Promise.all([r.e("chunk-2d0cfb23"),r.e("chunk-d3f05e52")]).then(r.bind(null,"f820"))},meta:{title:"About"}}]}),b=r("2f62");n["default"].use(b["a"]);var p=new b["a"].Store({state:{userInfo:{},isAffair:!1,setbar:"applyPassport",showbar:!0,detailsId:"",isDD:!1},mutations:{setshowbar:function(e,t){e.showbar=t},setUserInfo:function(e,t){e.userInfo=t},setUserInfoIsAuthorize:function(e,t){e.userInfo.isAuthorize=t},setisAffair:function(e,t){e.isAffair=t},setSetbar:function(e,t){e.setbar=t},setDetais:function(e,t){e.detailsId=t},setisDD:function(e,t){e.isDD=t}},actions:{}}),j=r("bc3a"),h=r.n(j),m=r("40f7"),g=r("76a0");r("4328");n["default"].component(g["Toast"].name,g["Toast"]),h.a.defaults.baseURL=m["a"];function y(e){return function(t){return h.a.get(e,{params:t}).then((function(e){var t=e.data,r=t.code,n=t.data,a=t.msg;if("200"===r)return n;Object(g["Toast"])(a)})).catch((function(e){console.log("dsfsdsadf"),console.log(e)}))}}function v(e){return function(t){return new Promise((function(r,n){h.a.post(e,t).then((function(e){var t=e.data,a=t.code,s=t.data,o=t.msg,c=t.listData;"200"===a?r(s||c):(g["Indicator"].close(),Object(g["Toast"])(o),n(s))})).catch((function(e){n(e)}))}))}}h.a.interceptors.request.use((function(e){return e.headers["Content-Type"]="application/json;charset=utf-8","post"===e.method&&(e.data=JSON.stringify(e.data)),e}),(function(e){return Promise.reject(e)})),h.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));y("/test");var k={login:v("/h5/login"),getCode:v("/h5/go/myGo"),getAllAreaParams:v("/h5/constant/findAll"),GetManagerListOfArea:v("/h5/constant/findAuditorByAreaId"),GetManagerListOfArea2:v("/ihaier/getApproverId"),findAuditorByAreaId:v("/h5/constant/findAuditorByAreaId"),requestForTimes:v("/h5/goApply/apply"),agree:v("/h5/goApply/agree"),reject:v("/h5/goApply/reject"),getdetails:v("/h5/goApply/getDetail"),goApplyPage:v("/h5/goApply/page"),getUserInfo:v("/workcard/ihaier/getUserInfo"),editAuthorizer:v("/manager/hpAuthorizer/editAuthorizer"),cancleAuthorizer:v("/manager/hpAuthorizer/cancleAuthorizer"),getRandomNumber:y("/h5/constant/getRandomNumber"),user:y("/user"),topics:v("/api/v2/topics"),createPrintCode:v("/workcard/createPrint/createPrintCode"),getPayCode:v("/workcard/h5/go/getPayCode"),cardJG:v("/workcard/h5/go/cardJG"),lossFLCard:v("/workcard/h5/go/lossFLCard"),selectByInfoCode:v("/workcard/empcardfunctionconfig/selectByInfoCode"),myUrl:v("/workcard/h5/go/myUrl"),getPayStatus:v("/workcard/h5/go/getPayStatus")},w=(r("aa35"),r("7876")),A=r.n(w),O=r("c1df"),I=r.n(O),P=r("7212"),z=r.n(P),S=(r("bbe3"),r("b970")),C=(r("157a"),r("2c18"));n["default"].component(g["Picker"].name,g["Picker"]),n["default"].component(g["Tabbar"].name,g["Tabbar"]),n["default"].component(g["TabItem"].name,g["TabItem"]),n["default"].component(g["Toast"]);var D=r("8ca3");function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}n["default"].use(z.a),n["default"].use(S["a"]),n["default"].use(A.a),n["default"].mixin({computed:U({},Object(b["c"])(["userInfo","isAffair","setbar","showbar","detailsId","isDD"])),methods:U({},Object(b["b"])(["setUserInfo","setisAffair","setSetbar","setshowbar","setDetais","setUserInfoIsAuthorize","setisDD"]))}),n["default"].config.productionTip=!1,n["default"].prototype.$moment=I.a,n["default"].prototype.$api=k,n["default"].prototype.$dd=C,n["default"].prototype.$unt=D["a"],new n["default"]({router:l,store:p,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,r){},"8ca3":function(e,t,r){"use strict";var n=r("2c18"),a={docMainUrl:"",corpId:"ding98186c440907a0f5bc961a6cb783455b"},s=a;function o(){return new Promise((function(e,t){n["runtime"].permission.requestAuthCode({corpId:s.corpId,onSuccess:function(t){e(t)},onFail:function(e){t(e)}})}))}var c={getAuthCode:o};function i(e){return l(e)||d(e)||u(e)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return b(e)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e){return e?(sessionStorage.setItem("comein",e),e):e?void 0:sessionStorage.getItem("comein")}function j(){return!!navigator.userAgent.match(/Qing\/.*;(iOS|iPhone|Android).*/)}function h(e,t,r){e.userInfo.userId?r?t&&t.apply(void 0,i(r)):t&&t():j()?(qing.call("rotateUI",{orientation:"portrait"}),XuntongJSBridge.call("getPersonInfo",{},(function(n){null!=n.data.userName&&""!=n.data.userName?e.$api.getUserInfo({jobNumber:n.data.userName}).then((function(n){e.setUserInfo(n),e.setisDD(!1),r?t&&t.apply(void 0,i(r)):t&&t()})):Haier.toast("用户名获取失败!")}))):c.getAuthCode().then((function(t){return e.$api.login({authCode:t.code})})).then((function(n){e.setisDD(!0),e.setUserInfo(n),r?t&&t.apply(void 0,i(r)):t&&t()})).catch((function(e){}))}function m(){sessionStorage.setItem("comein","")}t["a"]={getComeIN:p,ClearComeIN:m,getuserInfs:h,isYzjApp:j}}});