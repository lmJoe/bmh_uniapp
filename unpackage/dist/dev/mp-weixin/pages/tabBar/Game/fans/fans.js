"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      messageList: [
        {
          id: 1,
          name: "\u97F3\u793E\u5927\u7206\u70B8",
          headImg: "../../../../static/mine/1.webp",
          status: 2
        },
        {
          id: 2,
          name: "\u738B\u6653\u521D",
          headImg: "../../../../static/mine/2.webp",
          status: 2
        },
        {
          id: 3,
          name: "Asen",
          headImg: "../../../../static/mine/3.webp",
          status: 3
        },
        {
          id: 4,
          name: "GHJKS\u9F13\u638C",
          headImg: "../../../../static/mine/4.webp",
          status: 1
        },
        {
          id: 5,
          name: "\u8981\u76F8\u4FE1\u5149",
          headImg: "../../../../static/mine/3.webp",
          status: 1
        },
        {
          id: 6,
          name: "\u738B\u6653\u521D",
          headImg: "../../../../static/mine/1.webp",
          status: 1
        },
        {
          id: 7,
          name: "\u4ECA\u5929\u548C\u660E\u5929",
          headImg: "../../../../static/mine/3.webp",
          status: 1
        }
      ]
    };
  },
  methods: {
    rightBtn(e) {
      switch (e.status) {
        case 1:
          e.status = 3;
          common_vendor.index.showToast({
            title: `\u5173\u6CE8\u6210\u529F`,
            icon: "none"
          });
          break;
        case 2:
          e.status = 3;
          common_vendor.index.showToast({
            title: `\u4E92\u76F8\u5173\u6CE8\u6210\u529F`,
            icon: "none"
          });
          break;
        case 3:
          common_vendor.index.showModal({
            content: "\u786E\u8BA4\u53D6\u6D88\u5173\u6CE8\uFF1F",
            confirmText: "\u53D6\u6D88\u5173\u6CE8",
            cancelText: "\u7EE7\u7EED\u5173\u6CE8",
            success: function(res) {
              if (res.confirm) {
                e.status = 2;
              } else if (res.cancel) {
                e.status = 3;
              }
            }
          });
          break;
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.messageList, (item, index, i0) => {
      return {
        a: item.headImg,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.status == 1 ? "\u5173\u6CE8" : item.status == 2 ? "\u56DE\u5173" : item.status == 3 ? "\u76F8\u4E92\u5173\u6CE8" : ""),
        d: common_vendor.n(item.status == 3 ? "messagetime1" : "messagetime"),
        e: common_vendor.o(($event) => $options.rightBtn(item)),
        f: "5af34cb8-1-" + i0 + ",5af34cb8-0"
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5af34cb8"], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Game/fans/fans.nvue"]]);
wx.createPage(MiniProgramPage);
