"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      noagreeShow: true
    };
  },
  methods: {
    noAgree() {
      this.noagreeShow = false;
    },
    agree() {
    }
  }
};
if (!Array) {
  const _easycom_uni_link2 = common_vendor.resolveComponent("uni-link");
  _easycom_uni_link2();
}
const _easycom_uni_link = () => "../uni_modules/uni-link/components/uni-link/uni-link.js";
if (!Math) {
  _easycom_uni_link();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.noagreeShow
  }, $data.noagreeShow ? {} : {}, {
    b: $data.noagreeShow
  }, $data.noagreeShow ? {} : {}, {
    c: $data.noagreeShow
  }, $data.noagreeShow ? {} : {}, {
    d: $data.noagreeShow
  }, $data.noagreeShow ? {} : {}, {
    e: $data.noagreeShow == false
  }, $data.noagreeShow == false ? {} : {}, {
    f: $data.noagreeShow == false
  }, $data.noagreeShow == false ? {} : {}, {
    g: common_vendor.p({
      href: "javascript:;",
      text: "\u300A\u7206\u7C73\u82B1\u89C6\u9891APP\u7528\u6237\u534F\u8BAE\u300B",
      showUnderLine: "false",
      color: "#2476C2",
      ["font-size"]: "12"
    }),
    h: common_vendor.p({
      href: "javascript:;",
      text: "\u300A\u7206\u7C73\u82B1\u89C6\u9891APP\u9690\u79C1\u534F\u8BAE\u300B",
      showUnderLine: "false",
      color: "#2476C2",
      ["font-size"]: "12"
    }),
    i: common_vendor.o((...args) => $options.noAgree && $options.noAgree(...args)),
    j: common_vendor.o((...args) => $options.agree && $options.agree(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6913c681"], ["__file", "E:/gitproject/bmh_uniapp/components/popup.vue"]]);
wx.createComponent(Component);
