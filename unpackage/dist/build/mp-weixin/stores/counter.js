"use strict";const e=require("../common/vendor.js").defineStore("userStoreTemp",{state:()=>({user:{},token:{},navId:"",tabBarIndex:0,NavIdArr:[]}),unistorage:!0,actions:{setNavId(e){this.navId=e},setTabIndex(e){this.tabBarIndex=e},setUserInfo(e){this.user=e},updateUserName(e){this.user.userName=e},updateUserAvator(e){this.user.portrait=e},setNavIdArr(e){this.NavIdArr=e}}});exports.userStore=e;
