(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mainHome/pages/detail"],{"246c":function(t,e,n){"use strict";n.r(e);var o=n("336c"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},3004:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={uniLoadMore:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-load-more/components/uni-load-more/uni-load-more")]).then(n.bind(null,"6078"))}},i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"32e6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{data:Array},data:function(){return{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v",fil:!0,barrageMsg:"",danmuList:[{text:"第 1s 出现的弹幕",color:"#ff0000",time:1},{text:"第 3s 出现的弹幕",color:"#ff00ff",time:3}]}},created:function(){this.myVideo=t.createVideoContext("videoContext")},onReady:function(t){},methods:{likeClick:function(){},timeupdate:function(t){},play:function(){this.myVideo.play()},pause:function(){this.myVideo.pause()},seek:function(){this.myVideo.seek(20)},stop:function(){this.myVideo.stop()},fullScreen:function(){this.myVideo.requestFullScreen({direction:90})},sendDanmu:function(){this.myVideo.sendDanmu({text:this.barrageMsg,color:this.getRandomColor()}),this.barrageMsg=""},getRandomColor:function(){for(var t=[],e=0;e<3;++e){var n=Math.floor(256*Math.random()).toString(16);n=1==n.length?"0"+n:n,t.push(n)}return"#"+t.join("")}}};e.default=n}).call(this,n("543d")["default"])},"336c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("3642"),i=u(n("deeb")),a=n("5e11");function u(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([n.e("common/vendor"),n.e("uni_modules/muqian-lazyLoad/components/muqian-lazyLoad/muqian-lazyLoad")]).then(function(){return resolve(n("9796"))}.bind(null,n)).catch(n.oe)},r={components:{videoItem:i.default,lazyLoad:d},data:function(){return{Video_ID:"",data:"",listData:[],last_id:"",reload:!1,status:"more",pageIndex:1,pageSize:10,adpid:"",channelId:"ad11e330-76ae-4c19-818c-6b7a133a5365",contentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有更多"}}},mounted:function(){this.getVideoInfo()},onLoad:function(t){this.Video_ID=t.id||"",this.adpid=this.$adpid,this.getVideoList()},onReachBottom:function(){this.status="more",this.getVideoList()},methods:{getVideoInfo:function(){var t=this;(0,o.getVideoInfo)(this.Video_ID,(function(e){console.log(e),1==e.code&&(t.data=e.data,console.log(e.data),t.getvideourl(e.data.Video_ID))}))},getvideourl:function(t){},getVideoList:function(){var t=this;this.last_id&&(this.status="loading",this.minId=this.last_id,this.pageIndex=this.pageIndex+1),(0,o.getVideoList)(this.pageIndex,this.pageSize,this.channelId,(function(e){if(1==e.code){e.data;var n=t.setTime(e.data);t.listData=t.reload?n:t.listData.concat(n),t.last_id=n[n.length-1].id,t.reload=!1}}))},goDetail:function(e){var n={author_name:e.NickName,cover:e.CoverImgs.replace("baomihua","pomoho"),id:e.Video_ID,post_id:e.PlayId,published_at:(0,a.changeHourMinutestr)(e.Duration),title:e.Title};t.navigateTo({url:"../list2detail-detail/list2detail-detail?detailDate="+encodeURIComponent(JSON.stringify(n))})},setTime:function(t){var e=[];return t.forEach((function(t){e.push({author_name:t.NickName,cover:t.CoverImgs.replace("baomihua","pomoho"),id:t.Video_ID,post_id:t.PlayId,published_at:(0,a.changeHourMinutestr)(t.Duration),title:t.Title})})),e},aderror:function(t){console.log("aderror: "+JSON.stringify(t.detail))}}};e.default=r}).call(this,n("543d")["default"])},"368e":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"3adb":function(t,e,n){"use strict";n.r(e);var o=n("32e6"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"3d4e":function(t,e,n){"use strict";n.r(e);var o=n("3004"),i=n("246c");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("be24");var u,d=n("f0c5"),r=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"7e3d9e80",null,!1,o["a"],u);e["default"]=r.exports},7433:function(t,e,n){"use strict";(function(t){n("f0d3");o(n("66fd"));var e=o(n("3d4e"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},9472:function(t,e,n){"use strict";var o=n("c80c"),i=n.n(o);i.a},be24:function(t,e,n){"use strict";var o=n("e433"),i=n.n(o);i.a},c80c:function(t,e,n){},deeb:function(t,e,n){"use strict";n.r(e);var o=n("368e"),i=n("3adb");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("9472");var u,d=n("f0c5"),r=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"2a0d87a0",null,!1,o["a"],u);e["default"]=r.exports},e433:function(t,e,n){}},[["7433","common/runtime","common/vendor"]]]);