"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports[Symbol.toStringTag]="Module";var e=require("./common/vendor.js");Math;const o={onLaunch:function(){setTimeout((()=>{e.index.switchTab({url:"/pages/tabBar/Home/index",success:()=>{}})}),1e3),console.log("App onLaunch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};function n(){const n=e.createSSRApp(o),t=e.createPinia();return t.use(e.createUnistorage()),n.use(t),{app:n,Pinia:e.Pinia}}n().app.mount("#app"),exports.createApp=n;
