(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/index"],{"088c":function(t,e,n){"use strict";var a=n("3feb"),i=n.n(a);i.a},"2f2c":function(t,e,n){"use strict";var a=n("5f38"),i=n.n(a);i.a},"3feb":function(t,e,n){},"424c":function(t,e,n){"use strict";n.r(e);var a=n("f9d1"),i=n("8d70");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("088c");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"19ade3e2",null,!1,a["a"],o);e["default"]=c.exports},"49b5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){Promise.all([n.e("common/vendor"),n.e("uni_modules/muqian-lazyLoad/components/muqian-lazyLoad/muqian-lazyLoad")]).then(function(){return resolve(n("9796"))}.bind(null,n)).catch(n.oe)},i={components:{lazyLoad:a},props:{options:{type:Object,default:function(t){return{}}}},methods:{click:function(){this.$emit("click")},close:function(t){this.$emit("close")}}};e.default=i},5590:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"5f38":function(t,e,n){},"655d":function(t,e,n){"use strict";(function(t){n("f0d3");a(n("66fd"));var e=a(n("ae03"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"8d70":function(t,e,n){"use strict";n.r(e);var a=n("49b5"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},ad8d:function(t,e,n){},ae03:function(t,e,n){"use strict";n.r(e);var a=n("5590"),i=n("e742");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("c07a"),n("2f2c");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"eb62f320",null,!1,a["a"],o);e["default"]=c.exports},c07a:function(t,e,n){"use strict";var a=n("ad8d"),i=n.n(a);i.a},e742:function(t,e,n){"use strict";n.r(e);var a=n("e7fe"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},e7fe:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("3642"),i=n("5e11"),r=o(n("424c"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=100,l=3,d={components:{mediaItem:r.default},data:function(){return{newsList:[],cacheTab:[],tabIndex:0,tabBars:[],scrollInto:"",showTips:!1,navigateFlag:!1,pulling:!1,pageIndex:1,pageSize:10,channelId:""}},onLoad:function(){var t=this;setTimeout((function(){t.tabBars.forEach((function(e){t.newsList.push({data:[],isLoading:!1,refreshText:"",loadingText:"加载更多..."})})),t.getList(0)}),1e3)},mounted:function(){this.getChannelList()},onPullDownRefresh:function(){console.log("onPullDownRefresh"),t.stopPullDownRefresh()},methods:{getChannelList:function(){var t=this;(0,a.getChannelList)((function(e){if(1==e.code){var n=e.data;n=n.map((function(t,e){return c(c({},t),{},{id:"ID"+e})})),t.tabBars=n,t.channelId=e.data[0].Channel_Id}}))},getList:function(t){var e=this;console.log(t),(0,a.getVideoList)(this.pageIndex,this.pageSize,this.channelId,(function(n){if(console.log(n),1==n.code){var a=n.data;for(var r in a)a[r].Duration=(0,i.changeHourMinutestr)(a[r].Duration),a[r].CoverImgs=a[r].CoverImgs.replace("baomihua","pomoho"),a[r].HeadImg=a[r].HeadImg.replace("baomihua","pomoho");var o=e.newsList[t];o.data=o.data.concat(a),console.log("this.newsList",e.newsList)}}))},goDetail:function(e){var n=this;this.navigateFlag||(this.navigateFlag=!0,t.navigateTo({url:"../../mainHome/pages/detail?id="+e.Video_ID}),setTimeout((function(){n.navigateFlag=!1}),200))},close:function(e,n){var a=this;t.showModal({content:"是否删除本条信息？",success:function(t){t.confirm&&a.newsList[e].data.splice(n,1)}})},loadMore:function(t){var e=this;setTimeout((function(){e.pageIndex=e.pageIndex+1,e.getList(e.tabIndex)}),500)},ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(e)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},switchTab:function(t){if(0===this.newsList[t].data.length)for(var e in this.tabBars)Number(e)==t&&(this.channelId=this.tabBars[e].Channel_Id,this.getList(t));if(this.tabIndex!==t){if(this.newsList[this.tabIndex].data.length>f){var n=this.cacheTab.indexOf(this.tabIndex);n<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto=this.tabBars[t].id,console.log("this.scrollInto",this.scrollInto),this.cacheTab.length>l){var a=this.cacheTab[0];this.clearTabData(a),this.cacheTab.splice(0,1)}}},clearTabData:function(t){this.newsList[t].data.length=0,this.newsList[t].loadingText="加载更多..."},refreshData:function(){},onrefresh:function(t){var e=this,n=this.newsList[this.tabIndex];n.refreshFlag&&(n.refreshing=!0,n.refreshText="正在刷新...",setTimeout((function(){e.refreshData(),e.pulling=!0,n.refreshing=!1,n.refreshFlag=!1,n.refreshText="已刷新",setTimeout((function(){e.pulling=!1}),500)}),2e3))},onpullingdown:function(t){var e=this.newsList[this.tabIndex];e.refreshing||this.pulling||(Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(e.refreshFlag=!0,e.refreshText="释放立即刷新"):(e.refreshFlag=!1,e.refreshText="下拉可以刷新"))},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()}}};e.default=d}).call(this,n("543d")["default"])},f9d1:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]}},[["655d","common/runtime","common/vendor"]]]);