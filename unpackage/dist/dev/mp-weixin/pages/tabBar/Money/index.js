"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      taskImg1: "../../../static/gold/gold.png",
      taskImg2: "../../../static/gold/spin.png",
      taskImg3: "../../../static/gold/red.png",
      bgImg: "../../../static/gold/bg.png",
      listData: [
        {
          taskid: 1,
          title: "\u5168\u6C11\u5077\u91D1\u5E01",
          rewardGold: 300,
          intro: "\u6BCF\u5929\u90FD\u80FD\u201C\u5077\u201D\uFF0C\u70B9\u51FB\u7ACB\u8D5A",
          taskType: 1,
          goSeeText: "\u53BB\u770B\u770B",
          completeNum: 0,
          taskNum: 12
        },
        {
          taskid: 2,
          title: "\u5E78\u8FD0\u5927\u62BD\u5956",
          rewardGold: 0,
          intro: "\u70B9\u51FB\u62BD\u5956\uFF0C\u60CA\u559C\u7B49\u4F60\u6765",
          taskType: 2,
          goSeeText: "\u53BB\u62BD\u5956",
          proessValue: "",
          completeNum: 0,
          taskNum: 0
        },
        {
          taskid: 3,
          title: "\u7EA2\u5305\u6EDA\u6EDA\u6765",
          rewardGold: 0,
          intro: "\u5927\u5956\u7B49\u4F60\u9886\uFF0C\u7EA2\u5305\u6EDA\u6EDA\u6765",
          taskType: 2,
          goSeeText: "\u9886\u7EA2\u5305",
          proessValue: "",
          completeNum: 0,
          taskNum: 0
        },
        {
          taskid: 4,
          title: "\u89C2\u770B\u89C6\u9891",
          rewardGold: 5e3,
          intro: "\u89C2\u770B\u89C6\u9891\uFF0C\u6BCF\u65E5\u53EF\u8D5A5000\u91D1\u5E01",
          taskType: 1,
          goSeeText: "\u53BB\u770B\u770B",
          proessValue: "",
          completeNum: 0,
          taskNum: 60
        },
        {
          taskid: 5,
          title: "\u89C2\u770B\u5C0F\u89C6\u9891",
          rewardGold: 3e3,
          intro: "\u5237\u4E00\u5237\uFF0C\u6BCF\u65E5\u53EF\u8D5A3000\u91D1\u5E01",
          taskType: 1,
          goSeeText: "\u5237\u4E00\u5237",
          proessValue: "",
          completeNum: 0,
          taskNum: 60
        },
        {
          taskid: 6,
          title: "\u8BD5\u73A9\u5C0F\u6E38\u620F",
          rewardGold: 300,
          intro: "\u73A93\u5206\u949F\u6E38\u620F\u5373\u53EF\u83B7\u5F97\u91D1\u5E01\u5956\u52B1",
          taskType: 1,
          goSeeText: "\u73A9\u4E00\u73A9",
          proessValue: "",
          completeNum: 0,
          taskNum: 0
        },
        {
          taskid: 7,
          title: "\u5F00\u5B9D\u7BB1",
          rewardGold: 500,
          intro: "\u6BCF\u6B21\u6700\u591A\u53EF\u4EE5\u8D5A500\u91D1\u5E01",
          taskType: 1,
          goSeeText: "\u5F00\u5B9D\u7BB1",
          proessValue: "",
          completeNum: 0,
          taskNum: 0
        }
      ]
    };
  },
  mounted() {
    common_vendor.pathToBase64(this.taskImg1).then((base64) => {
      this.taskImg1 = base64;
    }).catch((error) => {
      console.error(error);
    });
    common_vendor.pathToBase64(this.taskImg2).then((base64) => {
      this.taskImg2 = base64;
    }).catch((error) => {
      console.error(error);
    });
    common_vendor.pathToBase64(this.taskImg3).then((base64) => {
      this.taskImg3 = base64;
    }).catch((error) => {
      console.error(error);
    });
    common_vendor.pathToBase64(this.bgImg).then((base64) => {
      this.bgImg = base64;
    }).catch((error) => {
      console.error(error);
    });
  },
  methods: {
    goPrompt() {
      common_vendor.index.navigateTo({
        url: "./sigin/sigin"
      });
    },
    login() {
      common_vendor.index.navigateTo({
        url: "../../../components/login"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.login && $options.login(...args)),
    b: common_vendor.o((...args) => $options.login && $options.login(...args)),
    c: common_vendor.o((...args) => $options.goPrompt && $options.goPrompt(...args)),
    d: `url(${$data.bgImg})`,
    e: common_vendor.f($data.listData, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.title),
        b: item.taskType == 1 ? $data.taskImg1 : item.taskid == 2 ? $data.taskImg2 : item.taskid == 3 ? $data.taskImg3 : "",
        c: item.taskType == 1
      }, item.taskType == 1 ? {
        d: common_vendor.t(item.rewardGold)
      } : {}, {
        e: item.taskType === 1 ? "#FFF2C7" : "transparent",
        f: common_vendor.t(item.intro),
        g: item.taskNum > 0
      }, item.taskNum > 0 ? {
        h: _ctx.progress,
        i: common_vendor.t(item.completeNum),
        j: common_vendor.t(item.taskNum)
      } : {}, {
        k: common_vendor.t(item.goSeeText),
        l: index
      });
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-179fcef3"], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Money/index.nvue"]]);
wx.createPage(MiniProgramPage);
