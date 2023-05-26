"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      iconImg1: "../../../../static/siginIn/icon1.png",
      iconImg2: "../../../../static/siginIn/icon2.png",
      bgImg: "../../../../static/siginIn/bg.png",
      statusBarHeight: 0,
      navBarHeight: 82 + 11,
      siginList: [
        { status: 1, num: 48, time: 1 },
        { status: 1, num: 58, time: 2 },
        { status: 1, num: 78, time: 3 },
        { status: 1, num: 88, time: 4 },
        { status: 1, num: 58, time: 5 },
        { status: 1, num: 68, time: 6 },
        { status: 1, num: 129, time: 7 },
        { status: 1, num: 58, time: 8 },
        { status: 1, num: 68, time: 9 },
        { status: 1, num: 78, time: 10 },
        { status: 1, num: 98, time: 11 },
        { status: 1, num: 58, time: 12 },
        { status: 1, num: 68, time: 13 },
        { status: 1, num: 108, time: 14 },
        { status: 1, num: 68, time: 15 },
        { status: 1, num: 88, time: 16 },
        { status: 1, num: 78, time: 17 },
        { status: 1, num: 68, time: 18 },
        { status: 1, num: 88, time: 19 },
        { status: 1, num: 108, time: 20 },
        { status: 1, num: 138, time: 21 },
        { status: 1, num: 108, time: 22 },
        { status: 1, num: 98, time: 23 },
        { status: 1, num: 88, time: 24 },
        { status: 1, num: 108, time: 25 },
        { status: 1, num: 78, time: 26 },
        { status: 1, num: 98, time: 27 },
        { status: 1, num: 138, time: 28 },
        { status: 1, num: 158, time: 29 },
        { status: 1, num: 288, time: 30 }
      ],
      siginShow: false
    };
  },
  props: {},
  created() {
    common_vendor.pathToBase64(this.iconImg1).then((base64) => {
      this.iconImg1 = base64;
    }).catch((error) => {
      console.error(error);
    });
    common_vendor.pathToBase64(this.iconImg2).then((base64) => {
      this.iconImg2 = base64;
    }).catch((error) => {
      console.error(error);
    });
    common_vendor.pathToBase64(this.bgImg).then((base64) => {
      this.bgImg = base64;
    }).catch((error) => {
      console.error(error);
    });
    this.statusBarHeight = common_vendor.index.getSystemInfoSync()["statusBarHeight"];
  },
  methods: {
    sigin(e) {
      let {
        index
      } = e.detail;
      this.siginList[index].status = 2;
      this.siginShow = true;
    },
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    closePop() {
      this.siginShow = false;
    },
    seeVideo() {
      common_vendor.index.switchTab({
        url: `/pages/tabBar/Home/index`,
        success: () => {
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_transition2 = common_vendor.resolveComponent("uni-transition");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_icons2 + _easycom_uni_transition2)();
}
const _easycom_uni_grid_item = () => "../../../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_transition = () => "../../../../uni_modules/uni-transition/components/uni-transition/uni-transition.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_icons + _easycom_uni_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.statusBarHeight + "px",
    b: common_vendor.o((...args) => $options.navigateBack && $options.navigateBack(...args)),
    c: common_vendor.f($data.siginList, (item, index, i0) => {
      return {
        a: item.status == 1 ? $data.iconImg1 : $data.iconImg2,
        b: common_vendor.t(item.num),
        c: item.status == 1 ? "#B00000" : "#888887",
        d: common_vendor.t(item.time),
        e: item.status == 1 ? "#222222" : "#AAAAAA",
        f: index,
        g: "136c0970-1-" + i0 + ",136c0970-0",
        h: common_vendor.p({
          index
        })
      };
    }),
    d: common_vendor.o($options.sigin),
    e: common_vendor.p({
      column: 7,
      highlight: true
    }),
    f: common_vendor.o((...args) => $options.seeVideo && $options.seeVideo(...args)),
    g: common_vendor.o($options.closePop),
    h: common_vendor.p({
      type: "close",
      color: "#dedede",
      size: "30"
    }),
    i: common_vendor.sr("ani", "136c0970-2"),
    j: common_vendor.p({
      ["custom-class"]: "transition",
      ["mode-class"]: "fade",
      show: $data.siginShow
    }),
    k: `url(${$data.bgImg})`
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-136c0970"], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Money/sigin/sigin.nvue"]]);
wx.createPage(MiniProgramPage);
