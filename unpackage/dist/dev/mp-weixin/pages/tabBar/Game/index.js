"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      fansImg: "../../../static/message/fans.png",
      SystemImg: "../../../static/message/system.png",
      MessageImg: "../../../static/message/message.png",
      messageList: [
        {
          title: "\u4E92\u52A8\u6D88\u606F",
          message: "\u7528\u6237 \u4E03\u6708\u5B89\u751F @\u4F60",
          time: "5\u5206\u949F"
        },
        {
          title: "\u4E92\u52A8\u6D88\u606F",
          message: "\u7528\u6237 \u4E03\u6708\u5B89\u751F \u8BC4\u8BBA\u4E86\u4F60\u7684\u89C6\u9891",
          time: "10\u5206\u949F"
        },
        {
          title: "\u4E92\u52A8\u6D88\u606F",
          message: "\u7528\u6237 \u4E03\u6708\u5B89\u751F \u56DE\u590D\u4E86\u4F60\u7684\u8BC4\u8BBA",
          time: "28\u5206\u949F"
        }
      ]
    };
  },
  methods: {
    goFans() {
      common_vendor.index.navigateTo({
        url: "./fans/fans?id="
      });
    },
    goSystem() {
      common_vendor.index.navigateTo({
        url: "./fans/fans"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.fansImg,
    b: common_vendor.o($options.goFans),
    c: common_vendor.p({
      clickable: true
    }),
    d: $data.SystemImg,
    e: common_vendor.o($options.goSystem),
    f: common_vendor.p({
      clickable: true
    }),
    g: common_vendor.f($data.messageList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.message),
        c: common_vendor.t(item.time),
        d: "1babb5e1-4-" + i0 + ",1babb5e1-3"
      };
    }),
    h: $data.MessageImg
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1babb5e1"], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Game/index.nvue"]]);
wx.createPage(MiniProgramPage);
