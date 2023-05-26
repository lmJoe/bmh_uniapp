"use strict";
var common_vendor = require("../common/vendor.js");
var stores_counter = require("../stores/counter.js");
const popupItem = () => "./popup.js";
const userStoreTemp = stores_counter.userStore();
const _sfc_main = {
  components: {
    popupItem
  },
  data() {
    return {
      logImg: "../static/common/logo.png",
      wayIcon: "../static/common/icon3.png",
      weixin: "../static/common/icon4.png",
      closeImg: "../static/common/icon5.png",
      readNo: false,
      argeeShow: false,
      animationData: ""
    };
  },
  onUnload() {
    this.animationData = "";
  },
  onLoad() {
    this.animation = common_vendor.index.createAnimation();
  },
  mounted() {
    common_vendor.pathToBase64(this.logImg).then((base64) => {
      this.logImg = base64;
    }).catch((error) => {
      console.error(error);
    });
    common_vendor.pathToBase64(this.wayIcon).then((base64) => {
      this.wayIcon = base64;
    }).catch((error) => {
      console.error(error);
    });
    common_vendor.pathToBase64(this.weixin).then((base64) => {
      this.weixin = base64;
    }).catch((error) => {
      console.error(error);
    });
    common_vendor.pathToBase64(this.close).then((base64) => {
      this.close = base64;
    }).catch((error) => {
      console.error(error);
    });
  },
  methods: {
    closeBack() {
      common_vendor.index.navigateBack();
    },
    introPop(num) {
      this.argeeShow = true;
    },
    login() {
      if (!this.readNo) {
        this.animation.translate(5, 0).step({ duration: 30 }).translate(-5, 0).step({ duration: 30 }).translate(0, 0).step({ duration: 30 });
        this.animationData = this.animation.export();
      } else {
        userStoreTemp.setUserToken("123456");
        console.log("navId", userStoreTemp.token);
      }
    },
    checkboxChange() {
      this.readNo = !this.readNo;
    }
  }
};
if (!Array) {
  const _component_popup_Item = common_vendor.resolveComponent("popup-Item");
  const _easycom_uni_transition2 = common_vendor.resolveComponent("uni-transition");
  (_component_popup_Item + _easycom_uni_transition2)();
}
const _easycom_uni_transition = () => "../uni_modules/uni-transition/components/uni-transition/uni-transition.js";
if (!Math) {
  _easycom_uni_transition();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.logImg,
    b: common_vendor.o((...args) => $options.login && $options.login(...args)),
    c: $data.readNo,
    d: common_vendor.o(($event) => $options.introPop(1)),
    e: common_vendor.o(($event) => $options.introPop(2)),
    f: common_vendor.o((...args) => $options.checkboxChange && $options.checkboxChange(...args)),
    g: $data.animationData,
    h: $data.wayIcon,
    i: $data.closeImg,
    j: common_vendor.o((...args) => $options.closeBack && $options.closeBack(...args)),
    k: common_vendor.sr("ani", "27539ebe-0"),
    l: common_vendor.p({
      ["custom-class"]: "transition",
      ["mode-class"]: "fade",
      show: $data.argeeShow
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-27539ebe"], ["__file", "E:/gitproject/bmh_uniapp/components/login.vue"]]);
wx.createPage(MiniProgramPage);
