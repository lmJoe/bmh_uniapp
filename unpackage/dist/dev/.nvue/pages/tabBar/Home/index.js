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
import { f as formatAppLog } from "../../../uni-shared.es.js";
import { defineStore } from "pinia";
import { l as lazyLoad, g as getChannelList, a as getVideoList, c as changeHourMinutestr } from "../../../muqian-lazyLoad.js";
import { resolveComponent, openBlock, createElementBlock, createCommentVNode, createElementVNode, toDisplayString, createVNode, Fragment, renderList, normalizeClass, withCtx, createBlock, normalizeStyle } from "vue";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import "../../../shared.esm-bundler.js";
const userStore = defineStore("userStoreTemp", {
  state() {
    return {
      user: {},
      token: {},
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
    setTabIndex(index2) {
      this.tabBarIndex = index2;
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
    }
  }
});
var _style_0$1 = { "view": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "flex-col": { "": { "flexDirection": "column" } }, "media-item": { "": { "position": "relative", "flex": 1, "flexDirection": "column", "paddingTop": "20rpx", "paddingRight": "30rpx", "paddingBottom": "21rpx", "paddingLeft": "30rpx" } }, "media-item-line": { "": { "position": "absolute", "left": "30rpx", "right": "30rpx", "bottom": 0, "height": "1rpx", "backgroundColor": "#ebebeb" } }, "media-title": { "": { "flex": 1, "lines": 3, "textOverflow": "ellipsis", "fontSize": "30rpx", "color": "#ffffff" } }, "image-section": { "": { "flexDirection": "row", "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "image-list1": { "": { "width": "690rpx", "height": "380rpx", "backgroundColor": "#dedede", "borderRadius": "8rpx" } }, "media-info": { "": { "flexDirection": "row", "alignItems": "center" } }, "info-text": { "": { "marginRight": "20rpx", "color": "#999999", "fontSize": "24rpx" } }, "headImg": { "": { "!width": "55rpx", "height": "55rpx", "borderRadius": 50, "marginRight": "20rpx" } }, "media-foot": { "": { "marginTop": "25rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "playerIcon": { "": { "width": "83rpx", "height": "83rpx", "position": "absolute" } }, "videoTitle": { "": { "width": 100, "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "position": "absolute", "top": "0rpx", "left": 0, "zIndex": 10, "backgroundImage": "linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,0))", "borderTopLeftRadius": "8rpx", "borderTopRightRadius": "8rpx" } }, "costTime": { "": { "position": "absolute", "bottom": "20rpx", "right": "7rpx", "backgroundColor": "rgba(0,0,0,0.2)", "paddingTop": "10rpx", "paddingRight": "14rpx", "paddingBottom": "10rpx", "paddingLeft": "14rpx", "fontSize": "24rpx", "color": "#ffffff" } } };
const _sfc_main$1 = {
  components: {
    lazyLoad
  },
  props: {
    options: {
      type: Object,
      default: function(e) {
        return {};
      }
    }
  },
  methods: {
    click() {
      this.$emit("click");
    },
    close(e) {
      this.$emit("close");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_lazyLoad = resolveComponent("lazyLoad");
  return $props.options.Title ? (openBlock(), createElementBlock("view", {
    key: 0,
    class: "media-item view",
    hoverClass: "media-item-hover",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
  }, [
    createCommentVNode(" TODO \u5728\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u4E0B \u9700\u8981\u7528 style \u8986\u76D6\u6807\u7B7E\u7684\u9ED8\u8BA4\u6837\u5F0F "),
    createElementVNode("view", { class: "view videoModule" }, [
      createElementVNode("u-text", { class: "media-title videoTitle" }, toDisplayString($props.options.Title), 1),
      createElementVNode("view", { class: "image-section flex-row" }, [
        createVNode(_component_lazyLoad, {
          src: $props.options.CoverImgs,
          class: "flex poster image-list1",
          height: "380rpx",
          borderRadius: "8px",
          mode: "scaleToFill"
        }, null, 8, ["src"]),
        createElementVNode("u-image", {
          class: "playerIcon",
          src: "/static/home/playicon.png"
        })
      ]),
      createElementVNode("u-text", { class: "info-text costTime" }, toDisplayString($props.options.Duration), 1)
    ]),
    createElementVNode("view", { class: "media-foot flex-row" }, [
      createElementVNode("view", { class: "media-info flex-row" }, [
        createVNode(_component_lazyLoad, {
          class: "headImg",
          src: $props.options.HeadImg,
          height: "55rpx",
          borderRadius: "50%",
          mode: "scaleToFill"
        }, null, 8, ["src"]),
        createElementVNode("u-text", { class: "info-text" }, toDisplayString($props.options.NickName), 1),
        createElementVNode("u-text", { class: "info-text" }, "276\u6761\u8BC4\u8BBA")
      ])
    ]),
    createElementVNode("view", {
      class: "media-item-line",
      style: { "position": "absolute" }
    })
  ])) : createCommentVNode("v-if", true);
}
var mediaItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Home/news-item.vue"]]);
var _style_0 = { "tabs": { "": { "flex": 1, "flexDirection": "column", "overflow": "hidden", "backgroundColor": "#ffffff" } }, "scroll-h": { "": { "width": "750rpx", "height": "80rpx", "flexDirection": "row" } }, "line-h": { "": { "height": "1rpx", "backgroundColor": "#cccccc" } }, "uni-tab-item": { "": { "flexWrap": "nowrap", "paddingLeft": "31rpx", "paddingRight": "31rpx" } }, "uni-tab-item-title": { "": { "fontWeight": "bold", "color": "#202020", "fontSize": "32rpx", "height": "80rpx", "lineHeight": "80rpx", "flexWrap": "nowrap" } }, "uni-tab-item-title-active": { "": { "color": "#EA1C24", "fontSize": "38rpx" } }, "swiper-box": { "": { "flex": 1 } }, "swiper-item": { "": { "flex": 1, "flexDirection": "row" } }, "scroll-v": { "": { "flex": 1, "flexDirection": "column", "width": 100 } }, "update-tips": { "": { "position": "absolute", "left": 0, "top": 41, "right": 0, "paddingTop": 5, "paddingBottom": 5, "backgroundColor": "#FDDD9B", "alignItems": "center", "justifyContent": "center", "textAlign": "center" } }, "update-tips-text": { "": { "fontSize": 14, "color": "#ffffff" } }, "refresh": { "": { "width": 100, "height": 64, "justifyContent": "center" } }, "refresh-view": { "": { "flexDirection": "row", "flexWrap": "nowrap", "alignItems": "center", "justifyContent": "center" } }, "refresh-icon": { "": { "width": 30, "height": 30, "transitionDuration": 500, "transitionProperty": "transform", "transform": "rotate(0deg)", "transformOrigin": "15px 15px" } }, "refresh-icon-active": { "": { "transform": "rotate(180deg)" } }, "loading-icon": { "": { "width": 20, "height": 20, "marginRight": 5, "color": "#999999" } }, "loading-text": { "": { "marginLeft": 2, "fontSize": 16, "color": "#999999" } }, "loading-more": { "": { "alignItems": "center", "justifyContent": "center", "paddingTop": 10, "paddingBottom": 10, "textAlign": "center" } }, "loading-more-text": { "": { "fontSize": "28rpx", "color": "#999999" } }, "@TRANSITION": { "refresh-icon": { "duration": 500, "property": "transform" } } };
const MAX_CACHE_DATA = 100;
const MAX_CACHE_PAGE = 3;
const userStoreTemp = userStore();
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
    formatAppLog("log", "at pages/tabBar/Home/index.nvue:91", "onPullDownRefresh");
    uni.stopPullDownRefresh();
  },
  methods: {
    getChannelList() {
      getChannelList((response) => {
        if (response.code == 1) {
          let tabBars = response.data;
          tabBars = tabBars.map((item, index2) => {
            return __spreadProps(__spreadValues({}, item), {
              id: "ID" + index2
            });
          });
          this.tabBars = tabBars;
          this.channelId = response.data[0].Channel_Id;
          userStoreTemp.setNavId(response.data[0].Channel_Id);
          formatAppLog("log", "at pages/tabBar/Home/index.nvue:108", "response", this.tabBars);
          formatAppLog("log", "at pages/tabBar/Home/index.nvue:109", "navId", userStoreTemp.navId);
        }
      });
    },
    getList(index2) {
      formatAppLog("log", "at pages/tabBar/Home/index.nvue:120", index2);
      getVideoList(this.pageIndex, this.pageSize, this.channelId, (response) => {
        formatAppLog("log", "at pages/tabBar/Home/index.nvue:122", response);
        if (response.code == 1) {
          let videoData = response.data;
          for (let i in videoData) {
            videoData[i].Duration = changeHourMinutestr(videoData[i].Duration);
            videoData[i].CoverImgs = videoData[i].CoverImgs.replace("baomihua", "pomoho");
            videoData[i].HeadImg = videoData[i].HeadImg.replace("baomihua", "pomoho");
          }
          let activeTab = this.newsList[index2];
          activeTab.data = activeTab.data.concat(videoData);
          formatAppLog("log", "at pages/tabBar/Home/index.nvue:132", "this.newsList", this.newsList);
        }
      });
    },
    goDetail(e) {
      if (this.navigateFlag) {
        return;
      }
      this.navigateFlag = true;
      uni.navigateTo({
        url: "./detail/detail?id=" + e.Video_ID
      });
      setTimeout(() => {
        this.navigateFlag = false;
      }, 200);
    },
    close(index1, index2) {
      uni.showModal({
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
      let index2 = e.target.dataset.current || e.currentTarget.dataset.current;
      this.switchTab(index2);
    },
    ontabchange(e) {
      let index2 = e.target.current || e.detail.current;
      this.switchTab(index2);
    },
    switchTab(index2) {
      if (this.newsList[index2].data.length === 0) {
        for (let i in this.tabBars) {
          if (Number(i) == index2) {
            this.channelId = this.tabBars[i].Channel_Id;
            this.getList(index2);
          }
        }
      }
      if (this.tabIndex === index2) {
        return;
      }
      if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {
        let isExist = this.cacheTab.indexOf(this.tabIndex);
        if (isExist < 0) {
          this.cacheTab.push(this.tabIndex);
        }
      }
      this.tabIndex = index2;
      this.scrollInto = this.tabBars[index2].id;
      formatAppLog("log", "at pages/tabBar/Home/index.nvue:198", "this.scrollInto", this.scrollInto);
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_media_item = resolveComponent("media-item");
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "tabs" }, [
      createElementVNode("scroll-view", {
        id: "tab-bar",
        class: "scroll-h",
        scrollX: true,
        showScrollbar: false,
        scrollIntoView: $data.scrollInto
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.tabBars, (tab, index2) => {
          return openBlock(), createElementBlock("view", {
            key: tab.Channel_Id,
            class: "uni-tab-item",
            id: tab.id,
            "data-current": index2,
            onClick: _cache[0] || (_cache[0] = (...args) => $options.ontabtap && $options.ontabtap(...args))
          }, [
            createElementVNode("u-text", {
              class: normalizeClass(["uni-tab-item-title", $data.tabIndex == index2 ? "uni-tab-item-title-active" : ""])
            }, toDisplayString(tab.ChannelName), 3)
          ], 8, ["id", "data-current"]);
        }), 128))
      ], 8, ["scrollIntoView"]),
      createElementVNode("view", { class: "line-h" }),
      createVNode(_component_swiper, {
        current: $data.tabIndex,
        class: "swiper-box",
        style: { "flex": "1" },
        duration: 300,
        onChange: $options.ontabchange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.newsList, (tab, index1) => {
            return openBlock(), createBlock(_component_swiper_item, {
              class: "swiper-item",
              key: index1
            }, {
              default: withCtx(() => [
                createElementVNode("list", {
                  class: "scroll-v list",
                  enableBackToTop: "true",
                  scrollY: "",
                  loadmoreoffset: "15",
                  onLoadmore: ($event) => $options.loadMore(index1)
                }, [
                  createElementVNode("refresh", {
                    class: "refresh",
                    onRefresh: ($event) => $options.onrefresh(index1),
                    onPullingdown: _cache[1] || (_cache[1] = (...args) => $options.onpullingdown && $options.onpullingdown(...args)),
                    display: tab.refreshing ? "show" : "hide"
                  }, [
                    createElementVNode("div", { class: "refresh-view" }, [
                      createElementVNode("u-image", {
                        class: normalizeClass(["refresh-icon", { "refresh-icon-active": tab.refreshFlag }]),
                        src: _ctx.refreshIcon,
                        style: normalizeStyle({ width: tab.refreshing || $data.pulling ? 0 : "30px" })
                      }, null, 14, ["src"]),
                      tab.refreshing ? (openBlock(), createElementBlock("loading-indicator", {
                        key: 0,
                        class: "loading-icon",
                        animating: "true"
                      })) : createCommentVNode("v-if", true),
                      createElementVNode("u-text", { class: "loading-text" }, toDisplayString(tab.refreshText), 1)
                    ])
                  ], 40, ["onRefresh", "display"]),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(tab.data, (newsitem, index2) => {
                    return openBlock(), createElementBlock("cell", {
                      key: newsitem.id
                    }, [
                      createVNode(_component_media_item, {
                        options: newsitem,
                        onClick: ($event) => $options.goDetail(newsitem)
                      }, null, 8, ["options", "onClick"])
                    ]);
                  }), 128)),
                  tab.isLoading || tab.data.length > 4 ? (openBlock(), createElementBlock("cell", {
                    key: 0,
                    class: "loading-more"
                  }, [
                    createElementVNode("u-text", { class: "loading-more-text" }, toDisplayString(tab.loadingText), 1)
                  ])) : createCommentVNode("v-if", true)
                ], 40, ["onLoadmore"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      }, 8, ["current", "onChange"])
    ])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Home/index.nvue"]]);
export { index as default };
