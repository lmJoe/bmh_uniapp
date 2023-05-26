"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      time: 5,
      QHeight: 0
    };
  },
  onLoad() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        let height = res.windowHeight - common_vendor.index.upx2px(0);
        this.QHeight = height;
      }
    });
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gitproject/bmh_uniapp/pages/prompt/promptPage.nvue"]]);
wx.createPage(MiniProgramPage);
