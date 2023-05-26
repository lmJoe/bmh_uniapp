"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userName: "\u5F6D\u4E8E\u664F\u5973\u670B\u53CB",
      totalGold: 500,
      todayGold: 100,
      background: ["color1", "color2", "color3"],
      autoplay: true,
      interval: 2e3,
      duration: 1e3,
      headImg: "../../../static/mine/1.webp",
      headImgList: [
        "../../../static/mine/1.webp",
        "../../../static/mine/2.webp",
        "../../../static/mine/3.webp",
        "../../../static/mine/4.webp",
        "../../../static/mine/5.avif"
      ],
      taskList: [
        {
          id: 1,
          title: "\u9762\u5BF9\u9762\u7EA2\u5305",
          iconImg: "../../../static/mine/icon1.png"
        },
        {
          id: 2,
          title: "\u9080\u8BF7\u6536\u5F92",
          iconImg: "../../../static/mine/icon2.png"
        },
        {
          id: 3,
          title: "\u6211\u7684\u94B1\u5305",
          iconImg: "../../../static/mine/icon3.png"
        },
        {
          id: 4,
          title: "\u63D0\u73B0\u5151\u6362",
          iconImg: "../../../static/mine/icon4.png"
        },
        {
          id: 5,
          title: "\u5168\u6C11\u5077\u91D1\u5E01",
          iconImg: "../../../static/mine/icon5.png"
        },
        {
          id: 6,
          title: "\u5E78\u8FD0\u5927\u8F6C\u76D8",
          iconImg: "../../../static/mine/icon6.png"
        },
        {
          id: 7,
          title: "\u597D\u7269\u5927\u62BD\u5956",
          iconImg: "../../../static/mine/icon7.png"
        },
        {
          id: 8,
          title: "\u91D1\u5E01\u798F\u5229\u793E",
          iconImg: "../../../static/mine/icon8.png"
        }
      ],
      swiperList: [
        {
          link: "./",
          img: "../../../static/mine/banner.png"
        },
        {
          link: "./",
          img: "../../../static/mine/banner.png"
        },
        {
          link: "./",
          img: "../../../static/mine/banner.png"
        }
      ]
    };
  },
  onLoad() {
    common_vendor.pathToBase64(this.headImg).then((base64) => {
      this.headImg = base64;
    }).catch((error) => {
      console.error(error);
    });
    for (let item in this.swiperList) {
      common_vendor.pathToBase64(this.swiperList[item].img).then((base64) => {
        this.swiperList[item].img = base64;
      }).catch((error) => {
        console.error(error);
      });
    }
  },
  mounted() {
  },
  methods: {
    taskChange(e) {
      let {
        index
      } = e.detail;
      let id = this.taskList[index].id;
      common_vendor.index.navigateTo({
        url: "?id=" + id
      });
    },
    onClick(e) {
      console.log("\u6267\u884Cclick\u4E8B\u4EF6", e.data);
      common_vendor.index.showToast({
        title: "\u70B9\u51FB\u53CD\u9988"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_grid_item = () => "../../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.headImg,
    b: common_vendor.t($data.userName),
    c: common_vendor.f($data.taskList, (item, index, i0) => {
      return {
        a: item.iconImg,
        b: common_vendor.t(item.title),
        c: item.id,
        d: "004b27e7-1-" + i0 + ",004b27e7-0",
        e: common_vendor.p({
          index
        })
      };
    }),
    d: common_vendor.o($options.taskChange),
    e: common_vendor.p({
      column: 4,
      highlight: true
    }),
    f: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: item.img,
        b: item.link,
        c: index
      };
    }),
    g: _ctx.indicatorDots,
    h: $data.autoplay,
    i: $data.interval,
    j: $data.duration,
    k: common_vendor.p({
      border: false,
      to: `./chat`,
      title: "\u9080\u8BF7\u5165\u7FA4",
      showArrow: true
    }),
    l: common_vendor.p({
      border: false,
      to: `./chat`,
      title: "\u5730\u5740\u7BA1\u7406",
      showArrow: true
    }),
    m: common_vendor.p({
      border: false,
      to: `./chat`,
      title: "\u5E38\u89C1\u95EE\u9898",
      showArrow: true
    }),
    n: common_vendor.p({
      border: false,
      to: `./chat`,
      title: "\u53CD\u9988\u6295\u8BC9",
      showArrow: true
    }),
    o: common_vendor.p({
      border: false,
      to: `./chat`,
      title: "\u8BBE\u7F6E\u4E2D\u5FC3",
      showArrow: true
    }),
    p: common_vendor.p({
      border: false
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-004b27e7"], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/My/index.nvue"]]);
wx.createPage(MiniProgramPage);
