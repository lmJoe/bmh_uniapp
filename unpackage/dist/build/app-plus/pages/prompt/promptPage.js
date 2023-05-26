"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(()=>{var u=Object.create;var c=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var y=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var d=(e,t,o,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of m(t))!h.call(e,r)&&r!==o&&c(e,r,{get:()=>t[r],enumerable:!(s=g(t,r))||s.enumerable});return e};var w=(e,t,o)=>(o=e!=null?u(f(e)):{},d(t||!e||!e.__esModule?c(o,"default",{value:e,enumerable:!0}):o,e));var _=y((k,l)=>{l.exports=Vue});var p=w(_());var i=(e,t)=>{let o=e.__vccOpts||e;for(let[s,r]of t)o[s]=r;return o};var v={content:{"":{width:100,height:100}}},b={data(){return{time:5,QHeight:0}},onLoad(){uni.getSystemInfo({success:e=>{let t=e.windowHeight-uni.upx2px(0);this.QHeight=t}})},methods:{}};function x(e,t,o,s,r,$){return(0,p.openBlock)(),(0,p.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}})}var a=i(b,[["render",x],["styles",[v]]]);var n=plus.webview.currentWebview();if(n){let e=parseInt(n.id),t="pages/prompt/promptPage",o={};try{o=JSON.parse(n.__query__)}catch(r){}a.mpType="page";let s=Vue.createPageApp(a,{$store:getApp({allowDefault:!0}).$store,__pageId:e,__pagePath:t,__pageQuery:o});s.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...a.styles||[]])),s.mount("#root")}})();
