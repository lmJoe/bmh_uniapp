"use strict";
var common_vendor = require("../common/vendor.js");
const userStore = common_vendor.defineStore("userStoreTemp", {
  state() {
    return {
      user: {},
      token: "",
      navId: "",
      tabBarIndex: 0,
      NavIdArr: []
    };
  },
  unistorage: true,
  actions: {
    setNavId(id) {
      this.navId = id;
    },
    setTabIndex(index) {
      this.tabBarIndex = index;
    },
    setUserInfo(user) {
      this.user = user;
    },
    updateUserName(userName) {
      this.user.userName = userName;
    },
    updateUserAvator(avator) {
      this.user.portrait = avator;
    },
    setNavIdArr(arr) {
      this.NavIdArr = arr;
    },
    setUserToken(token) {
      this.token = token;
    }
  }
});
exports.userStore = userStore;
