"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../../common/vendor.js");
var stores_counter = require("../../../stores/counter.js");
var utils_request = require("../../../utils/request.js");
var utils_untis = require("../../../utils/untis.js");
require("../../../utils/ajax.js");
require("../../../utils/api.js");
const mediaItem = () => "./news-item.js";
const MAX_CACHE_DATA = 100;
const MAX_CACHE_PAGE = 3;
const userStoreTemp = stores_counter.userStore();
const _sfc_main = {
  components: {
    mediaItem
  },
  data() {
    return {
      newsList: [],
      cacheTab: [],
      tabIndex: 0,
      tabBars: [],
      scrollInto: "",
      showTips: false,
      navigateFlag: false,
      pulling: false,
      pageIndex: 1,
      pageSize: 10,
      channelId: ""
    };
  },
  onLoad() {
    setTimeout(() => {
      this.tabBars.forEach((tabBar) => {
        this.newsList.push({
          data: [],
          isLoading: false,
          refreshText: "",
          loadingText: "\u52A0\u8F7D\u66F4\u591A..."
        });
      });
      this.getList(0);
    }, 1e3);
  },
  mounted() {
    this.getChannelList();
  },
  onPullDownRefresh() {
    console.log("onPullDownRefresh");
    common_vendor.index.stopPullDownRefresh();
  },
  methods: {
    getChannelList() {
      utils_request.getChannelList((response) => {
        if (response.code == 1) {
          let tabBars = response.data;
          tabBars = tabBars.map((item, index) => {
            return __spreadProps(__spreadValues({}, item), {
              id: "ID" + index
            });
          });
          this.tabBars = tabBars;
          this.channelId = response.data[0].Channel_Id;
          userStoreTemp.setNavId(response.data[0].Channel_Id);
          console.log("response", this.tabBars);
          console.log("navId", userStoreTemp.navId);
        }
      });
    },
    getList(index) {
      console.log(index);
      utils_request.getVideoList(this.pageIndex, this.pageSize, this.channelId, (response) => {
        console.log(response);
        if (response.code == 1) {
          let videoData = response.data;
          for (let i in videoData) {
            videoData[i].Duration = utils_untis.changeHourMinutestr(videoData[i].Duration);
            videoData[i].CoverImgs = videoData[i].CoverImgs.replace("baomihua", "pomoho");
            videoData[i].HeadImg = videoData[i].HeadImg.replace("baomihua", "pomoho");
          }
          let activeTab = this.newsList[index];
          activeTab.data = activeTab.data.concat(videoData);
          console.log("this.newsList", this.newsList);
        }
      });
    },
    goDetail(e) {
      if (this.navigateFlag) {
        return;
      }
      this.navigateFlag = true;
      common_vendor.index.navigateTo({
        url: "./detail/detail?id=" + e.Video_ID
      });
      setTimeout(() => {
        this.navigateFlag = false;
      }, 200);
    },
    close(index1, index2) {
      common_vendor.index.showModal({
        content: "\u662F\u5426\u5220\u9664\u672C\u6761\u4FE1\u606F\uFF1F",
        success: (res) => {
          if (res.confirm) {
            this.newsList[index1].data.splice(index2, 1);
          }
        }
      });
    },
    loadMore(e) {
      setTimeout(() => {
        this.pageIndex = this.pageIndex + 1;
        this.getList(this.tabIndex);
      }, 500);
    },
    ontabtap(e) {
      let index = e.target.dataset.current || e.currentTarget.dataset.current;
      this.switchTab(index);
    },
    ontabchange(e) {
      let index = e.target.current || e.detail.current;
      this.switchTab(index);
    },
    switchTab(index) {
      if (this.newsList[index].data.length === 0) {
        for (let i in this.tabBars) {
          if (Number(i) == index) {
            this.channelId = this.tabBars[i].Channel_Id;
            this.getList(index);
          }
        }
      }
      if (this.tabIndex === index) {
        return;
      }
      if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {
        let isExist = this.cacheTab.indexOf(this.tabIndex);
        if (isExist < 0) {
          this.cacheTab.push(this.tabIndex);
        }
      }
      this.tabIndex = index;
      this.scrollInto = this.tabBars[index].id;
      console.log("this.scrollInto", this.scrollInto);
      if (this.cacheTab.length > MAX_CACHE_PAGE) {
        let cacheIndex = this.cacheTab[0];
        this.clearTabData(cacheIndex);
        this.cacheTab.splice(0, 1);
      }
    },
    clearTabData(e) {
      this.newsList[e].data.length = 0;
      this.newsList[e].loadingText = "\u52A0\u8F7D\u66F4\u591A...";
    },
    refreshData() {
    },
    onrefresh(e) {
      var tab = this.newsList[this.tabIndex];
      if (!tab.refreshFlag) {
        return;
      }
      tab.refreshing = true;
      tab.refreshText = "\u6B63\u5728\u5237\u65B0...";
      setTimeout(() => {
        this.refreshData();
        this.pulling = true;
        tab.refreshing = false;
        tab.refreshFlag = false;
        tab.refreshText = "\u5DF2\u5237\u65B0";
        setTimeout(() => {
          this.pulling = false;
        }, 500);
      }, 2e3);
    },
    onpullingdown(e) {
      var tab = this.newsList[this.tabIndex];
      if (tab.refreshing || this.pulling) {
        return;
      }
      if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {
        tab.refreshFlag = true;
        tab.refreshText = "\u91CA\u653E\u7ACB\u5373\u5237\u65B0";
      } else {
        tab.refreshFlag = false;
        tab.refreshText = "\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0";
      }
    },
    newGuid() {
      let s4 = function() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
      };
      return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
    }
  }
};
if (!Array) {
  const _component_media_item = common_vendor.resolveComponent("media-item");
  _component_media_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabBars, (tab, index, i0) => {
      return {
        a: common_vendor.t(tab.ChannelName),
        b: common_vendor.n($data.tabIndex == index ? "uni-tab-item-title-active" : ""),
        c: tab.Channel_Id,
        d: tab.id,
        e: index,
        f: common_vendor.o((...args) => $options.ontabtap && $options.ontabtap(...args), tab.Channel_Id)
      };
    }),
    b: $data.scrollInto,
    c: common_vendor.f($data.newsList, (tab, index1, i0) => {
      return common_vendor.e({
        a: common_vendor.f(tab.data, (newsitem, index2, i1) => {
          return {
            a: common_vendor.o(($event) => $options.goDetail(newsitem)),
            b: "60afb258-0-" + i0 + "-" + i1,
            c: common_vendor.p({
              options: newsitem
            }),
            d: newsitem.id
          };
        }),
        b: tab.isLoading || tab.data.length > 4
      }, tab.isLoading || tab.data.length > 4 ? {
        c: common_vendor.t(tab.loadingText)
      } : {}, {
        d: common_vendor.o(($event) => $options.loadMore(index1)),
        e: index1
      });
    }),
    d: $data.tabIndex,
    e: common_vendor.o((...args) => $options.ontabchange && $options.ontabchange(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-60afb258"], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Home/index.nvue"]]);
wx.createPage(MiniProgramPage);
