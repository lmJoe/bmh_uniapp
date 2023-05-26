import { f as formatAppLog } from "../../../uni-shared.es.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, renderSlot, createElementVNode, toDisplayString, resolveDynamicComponent, resolveComponent, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0$1, a as __easycom_1 } from "../../../uni-grid.js";
import { a as __easycom_0$2, _ as __easycom_1$1 } from "../../../uni-list.js";
import { p as pathToBase64 } from "../../../index.js";
import "../../../shared.esm-bundler.js";
var _style_0$1 = { "uni-card": { "": { "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "borderRadius": 4, "overflow": "hidden", "fontFamily": "Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif", "backgroundColor": "#ffffff", "flex": 1 } }, "uni-card__cover": { ".uni-card ": { "position": "relative", "marginTop": 10, "flexDirection": "row", "overflow": "hidden", "borderRadius": 4 } }, "uni-card__cover-image": { ".uni-card .uni-card__cover ": { "flex": 1 } }, "uni-card__header": { ".uni-card ": { "display": "flex", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#DCDCDC", "flexDirection": "row", "alignItems": "center", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "overflow": "hidden" } }, "uni-card__header-box": { ".uni-card .uni-card__header ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "uni-card__header-avatar": { ".uni-card .uni-card__header ": { "width": 40, "height": 40, "overflow": "hidden", "borderRadius": 5, "marginRight": 10 } }, "uni-card__header-avatar-image": { ".uni-card .uni-card__header .uni-card__header-avatar ": { "flex": 1, "width": 40, "height": 40 } }, "uni-card__header-content": { ".uni-card .uni-card__header ": { "flexDirection": "column", "justifyContent": "center", "flex": 1, "overflow": "hidden" } }, "uni-card__header-content-title": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 15, "color": "#3a3a3a" } }, "uni-card__header-content-subtitle": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 12, "marginTop": 5, "color": "#909399" } }, "uni-card__header-extra": { ".uni-card .uni-card__header ": { "lineHeight": 12 } }, "uni-card__header-extra-text": { ".uni-card .uni-card__header .uni-card__header-extra ": { "fontSize": 12, "color": "#909399" } }, "uni-card__content": { ".uni-card ": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "fontSize": 14, "color": "#6a6a6a", "lineHeight": 22 } }, "uni-card__actions": { ".uni-card ": { "fontSize": 12 } }, "uni-card--border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDCDC" } }, "uni-card--shadow": { "": { "position": "relative" } }, "uni-card--full": { "": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "borderLeftWidth": 0, "borderRadius": 0 } }, "uni-ellipsis": { "": { "lines": 1 } } };
const _sfc_main$1 = {
  name: "UniCard",
  emits: ["click"],
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    padding: {
      type: String,
      default: "10px"
    },
    margin: {
      type: String,
      default: "15px"
    },
    spacing: {
      type: String,
      default: "0 10px"
    },
    extra: {
      type: String,
      default: ""
    },
    cover: {
      type: String,
      default: ""
    },
    thumbnail: {
      type: String,
      default: ""
    },
    isFull: {
      type: Boolean,
      default: false
    },
    isShadow: {
      type: Boolean,
      default: true
    },
    shadow: {
      type: String,
      default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick(type) {
      this.$emit("click", type);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
    style: normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
  }, [
    createCommentVNode(" \u5C01\u9762 "),
    renderSlot(_ctx.$slots, "cover", {}, () => [
      $props.cover ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-card__cover"
      }, [
        createElementVNode("u-image", {
          class: "uni-card__cover-image",
          mode: "widthFix",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
          src: $props.cover
        }, null, 8, ["src"])
      ])) : createCommentVNode("v-if", true)
    ]),
    renderSlot(_ctx.$slots, "title", {}, () => [
      $props.title || $props.extra ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-card__header"
      }, [
        createCommentVNode(" \u5361\u7247\u6807\u9898 "),
        createElementVNode("view", {
          class: "uni-card__header-box",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
        }, [
          $props.thumbnail ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "uni-card__header-avatar"
          }, [
            createElementVNode("u-image", {
              class: "uni-card__header-avatar-image",
              src: $props.thumbnail,
              mode: "aspectFit"
            }, null, 8, ["src"])
          ])) : createCommentVNode("v-if", true),
          createElementVNode("view", { class: "uni-card__header-content" }, [
            createElementVNode("u-text", { class: "uni-card__header-content-title uni-ellipsis" }, toDisplayString($props.title), 1),
            $props.title && $props.subTitle ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: "uni-card__header-content-subtitle uni-ellipsis"
            }, toDisplayString($props.subTitle), 1)) : createCommentVNode("v-if", true)
          ])
        ]),
        createElementVNode("view", {
          class: "uni-card__header-extra",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
        }, [
          createElementVNode("u-text", { class: "uni-card__header-extra-text" }, toDisplayString($props.extra), 1)
        ])
      ])) : createCommentVNode("v-if", true)
    ]),
    createCommentVNode(" \u5361\u7247\u5185\u5BB9 "),
    createElementVNode("view", {
      class: "uni-card__content",
      style: normalizeStyle({ padding: $props.padding }),
      onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4),
    createElementVNode("view", {
      class: "uni-card__actions",
      onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
    }, [
      renderSlot(_ctx.$slots, "actions")
    ])
  ], 6);
}
var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
var _style_0 = { "mineModule": { "": { "backgroundColor": "#F9F9F9", "paddingTop": 0, "paddingRight": 0.9375, "paddingBottom": 0, "paddingLeft": 0.9375 } }, "minepersion": { ".mineModule .minepersonData ": { "width": "543rpx", "marginLeft": "39rpx" } }, "name": { ".mineModule .minepersonData .minepersion ": { "textAlign": "left", "paddingTop": "13rpx" } }, "mineGold": { ".mineModule .minepersonData .minepersion ": { "marginTop": "30rpx" }, ".uni-card .uni-card__content ": { "fontSize": "26rpx", "marginLeft": "150rpx" } }, "gold": { ".mineModule .minepersonData .minepersion .mineGold ": { "textAlign": "center", "color": "#777777", "fontSize": "26rpx" } }, "loginTips": { ".mineModule .minepersonData .minepersion ": { "fontSize": "44rpx", "color": "#222222" } }, "taskMudule1": { ".mineModule ": { "width": "694rpx", "marginTop": "51rpx", "backgroundColor": "#ffffff", "borderRadius": "12rpx", "boxShadow": "0px 0px 25rpx 0px #EDEDED", "paddingBottom": "39rpx" } }, "taskItem1": { ".mineModule .taskMudule1 ": { "position": "relative", "!width": "173.5rpx" } }, "image": { ".mineModule .taskMudule1 .taskItem1 ": { "width": "52rpx", "height": "52rpx", "position": "absolute", "top": "38rpx" }, ".mineModule .swiperBanner .swiper-item ": { "width": "694rpx", "height": "128rpx" } }, "title": { ".mineModule .taskMudule1 .taskItem1 ": { "fontSize": "22rpx", "color": "#333333", "position": "absolute", "top": "110rpx", "left": 0, "right": 0 } }, "swiperBanner": { ".mineModule ": { "width": "694rpx", "height": "128rpx", "marginTop": "36rpx" } }, "listModule": { ".mineModule ": { "marginTop": "36rpx", "boxShadow": "0px 0px 25px 0px #EDEDED", "borderRadius": 12 } }, "uni-card--full": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "backgroundColor": "rgba(0,0,0,0)" } }, "uni-card--shadow": { "": { "boxShadow": "none" } }, "uni-card--border": { "": { "borderTopWidth": 0, "borderBottomWidth": 0, "borderLeftWidth": 0, "borderRightWidth": 0 } }, "uni-card__header": { ".uni-card ": { "borderBottomWidth": 0, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "uni-card__header-avatar": { ".uni-card .uni-card__header ": { "width": "140rpx", "height": "140rpx", "borderRadius": 50, "marginRight": "39rpx" } }, "uni-card__header-avatar-image": { ".uni-card .uni-card__header .uni-card__header-avatar ": { "width": "140rpx", "height": "140rpx" } }, "uni-card__header-content-title": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": "44rpx", "color": "#111111" } }, "uni-grid--border": { "": { "borderLeftWidth": 0 } }, "uni-grid-item--border-top": { "": { "borderTopWidth": 0 } }, "uni-grid-item--border": { "": { "borderBottomWidth": 0, "borderRightWidth": 0 } } };
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
    pathToBase64(this.headImg).then((base64) => {
      this.headImg = base64;
    }).catch((error) => {
      formatAppLog("error", "at pages/tabBar/My/index.nvue:129", error);
    });
    for (let item in this.swiperList) {
      pathToBase64(this.swiperList[item].img).then((base64) => {
        this.swiperList[item].img = base64;
      }).catch((error) => {
        formatAppLog("error", "at pages/tabBar/My/index.nvue:137", error);
      });
    }
  },
  mounted() {
  },
  methods: {
    taskChange(e) {
      let {
        index: index2
      } = e.detail;
      let id = this.taskList[index2].id;
      uni.navigateTo({
        url: "?id=" + id
      });
    },
    onClick(e) {
      formatAppLog("log", "at pages/tabBar/My/index.nvue:156", "\u6267\u884Cclick\u4E8B\u4EF6", e.data);
      uni.showToast({
        title: "\u70B9\u51FB\u53CD\u9988"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_grid_item = resolveEasycom(resolveDynamicComponent("uni-grid-item"), __easycom_0$1);
  const _component_uni_grid = resolveEasycom(resolveDynamicComponent("uni-grid"), __easycom_1);
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_0$2);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_1$1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "mineModule" }, [
      createElementVNode("view", { class: "minepersonData" }, [
        createCommentVNode(` <uni-card :title="userName" :sub-title="'\u91D1\u5E01:'+totalGold+'w' + '\u4ECA\u65E5\u91D1\u5E01\uFF1A'+todayGold+'w'" :isFull="true" :thumbnail="headImg"> `),
        createVNode(_component_uni_card, {
          title: $data.userName,
          isFull: true,
          thumbnail: $data.headImg
        }, {
          default: withCtx(() => [
            createElementVNode("view", {
              class: "media-foot flex-row mineGold",
              style: { "flex-direction": "row" }
            }, [
              createElementVNode("view", {
                class: "media-info flex-row",
                style: { "flex-direction": "row" }
              }, [
                createElementVNode("view", { class: "gold" }, [
                  createElementVNode("u-text", null, "\u91D1\u5E01\uFF1A500w ")
                ]),
                createElementVNode("view", {
                  class: "gold",
                  style: { "margin-left": "26rpx" }
                }, [
                  createElementVNode("u-text", null, "\u4ECA\u65E5\u91D1\u5E01\uFF1A5100")
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["title", "thumbnail"]),
        createCommentVNode(' 		<view class="uni-flex uni-column minepersion">\r\n				<view class="loginTips">\r\n					\u70B9\u51FB\u767B\u5F55\r\n				</view>\r\n			</view> ')
      ]),
      createElementVNode("view", { class: "taskMudule1" }, [
        createVNode(_component_uni_grid, {
          column: 4,
          highlight: true,
          onChange: $options.taskChange
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.taskList, (item, index2) => {
              return openBlock(), createBlock(_component_uni_grid_item, {
                index: index2,
                key: item.id,
                class: "taskItem1"
              }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "grid-item-box" }, [
                    createElementVNode("u-image", {
                      class: "image",
                      src: item.iconImg
                    }, null, 8, ["src"]),
                    createElementVNode("u-text", { class: "title" }, toDisplayString(item.title), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["index"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["onChange"])
      ]),
      createElementVNode("view", { class: "uni-margin-wrap" }, [
        createVNode(_component_swiper, {
          class: "swiper swiperBanner",
          circular: "",
          "indicator-dots": _ctx.indicatorDots,
          autoplay: $data.autoplay,
          interval: $data.interval,
          duration: $data.duration
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.swiperList, (item, index2) => {
              return openBlock(), createBlock(_component_swiper_item, { key: index2 }, {
                default: withCtx(() => [
                  createElementVNode("view", {
                    class: "swiper-item",
                    to: item.link
                  }, [
                    createElementVNode("u-image", {
                      class: "image",
                      src: item.img
                    }, null, 8, ["src"])
                  ], 8, ["to"])
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        }, 8, ["indicator-dots", "autoplay", "interval", "duration"])
      ]),
      createVNode(_component_uni_list, {
        border: false,
        class: "listModule"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list_item, {
            border: false,
            to: `./chat`,
            title: "\u9080\u8BF7\u5165\u7FA4",
            showArrow: ""
          }, null, 8, ["to"]),
          createVNode(_component_uni_list_item, {
            border: false,
            to: `./chat`,
            title: "\u5730\u5740\u7BA1\u7406",
            showArrow: ""
          }, null, 8, ["to"]),
          createVNode(_component_uni_list_item, {
            border: false,
            to: `./chat`,
            title: "\u5E38\u89C1\u95EE\u9898",
            showArrow: ""
          }, null, 8, ["to"]),
          createVNode(_component_uni_list_item, {
            border: false,
            to: `./chat`,
            title: "\u53CD\u9988\u6295\u8BC9",
            showArrow: ""
          }, null, 8, ["to"]),
          createVNode(_component_uni_list_item, {
            border: false,
            to: `./chat`,
            title: "\u8BBE\u7F6E\u4E2D\u5FC3",
            showArrow: ""
          }, null, 8, ["to"])
        ]),
        _: 1
      })
    ])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/My/index.nvue"]]);
export { index as default };
