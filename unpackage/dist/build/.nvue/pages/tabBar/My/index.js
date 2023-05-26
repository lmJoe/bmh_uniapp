import { f as formatAppLog } from "../../../uni-shared.es.js";
import { _ as __easycom_0, a as __easycom_1 } from "../../../uni-grid.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { a as __easycom_0$1, _ as __easycom_1$1 } from "../../../uni-list.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import "../../../shared.esm-bundler.js";
var _style_0 = { "mineModule": { "": { "backgroundColor": "#F9F9F9", "paddingTop": 0, "paddingRight": 0.9375, "paddingBottom": 0, "paddingLeft": 0.9375 } }, "uni-card--full": { ".mineModule .minepersonData ": { "!boxShadow": "none", "borderTopWidth": 0, "borderBottomWidth": 0, "borderTopStyle": "solid", "borderBottomStyle": "solid" } }, "uni-card__header": { ".mineModule .minepersonData .uni-card ": { "borderBottomWidth": 0, "borderBottomStyle": "solid", "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "uni-card__header-avatar": { ".mineModule .minepersonData .uni-card .uni-card__header ": { "width": "140rpx", "height": "140rpx", "borderRadius": 50, "marginRight": "39rpx" } }, "uni-card__header-avatar-image": { ".mineModule .minepersonData .uni-card .uni-card__header .uni-card__header-avatar ": { "width": "140rpx", "height": "140rpx" } }, "uni-card__header-content-title": { ".mineModule .minepersonData .uni-card .uni-card__header .uni-card__header-content ": { "fontSize": "44rpx", "color": "#111111" } }, "mineGold": { ".mineModule .minepersonData .uni-card .uni-card__content ": { "fontSize": "26rpx", "marginLeft": "150rpx" }, ".mineModule .minepersonData .minepersion ": { "marginTop": "30rpx" } }, "minepersion": { ".mineModule .minepersonData ": { "width": "543rpx", "marginLeft": "39rpx" } }, "name": { ".mineModule .minepersonData .minepersion ": { "textAlign": "left", "paddingTop": "13rpx" } }, "gold": { ".mineModule .minepersonData .minepersion .mineGold ": { "textAlign": "center", "color": "#777777", "fontSize": "26rpx" } }, "loginTips": { ".mineModule .minepersonData .minepersion ": { "fontSize": "44rpx", "color": "#222222" } }, "taskMudule1": { ".mineModule ": { "width": "694rpx", "marginTop": "51rpx", "backgroundColor": "#ffffff", "borderRadius": "12rpx", "boxShadow": "0px 0px 25rpx 0px #EDEDED", "paddingBottom": "39rpx" } }, "uni-grid--border": { ".mineModule .taskMudule1 ": { "borderWidth": 0, "borderStyle": "solid" } }, "uni-grid-item--border-top": { ".mineModule .taskMudule1 ": { "borderWidth": 0, "borderStyle": "solid" } }, "uni-grid-item--border": { ".mineModule .taskMudule1 ": { "borderWidth": 0, "borderStyle": "solid" } }, "taskItem1": { ".mineModule .taskMudule1 ": { "display": "flex", "justifyContent": "center", "alignItems": "center", "textAlign": "center", "position": "relative", "!width": "173.5rpx" } }, "title": { ".mineModule .taskMudule1 .taskItem1 ": { "fontSize": "22rpx", "color": "#333333", "position": "absolute", "top": "110rpx", "left": 0, "right": 0 } }, "swiperBanner": { ".mineModule ": { "width": "694rpx", "height": "128rpx", "marginTop": "36rpx" } }, "listModule": { ".mineModule ": { "marginTop": "36rpx", "boxShadow": "0px 0px 25px 0px #EDEDED", "borderRadius": 12 } } };
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
          title: "\u6211\u7684\u94B1\u5305",
          iconImg: "../../../static/mine/icon2.png"
        },
        {
          id: 3,
          title: "\u597D\u7269\u5151\u6362",
          iconImg: "../../../static/mine/icon3.png"
        },
        {
          id: 4,
          title: "\u91D1\u5E01\u63D0\u73B0",
          iconImg: "../../../static/mine/icon4.png"
        },
        {
          id: 5,
          title: "\u9080\u8BF7\u6536\u5F92",
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
          title: "\u9762\u5BF9\u9762\u7EA2\u5305",
          iconImg: "../../../static/mine/icon8.png"
        }
      ]
    };
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
      formatAppLog("log", "at pages/tabBar/My/index.nvue:132", "\u6267\u884Cclick\u4E8B\u4EF6", e.data);
      uni.showToast({
        title: "\u70B9\u51FB\u53CD\u9988"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_grid_item = resolveEasycom(resolveDynamicComponent("uni-grid-item"), __easycom_0);
  const _component_uni_grid = resolveEasycom(resolveDynamicComponent("uni-grid"), __easycom_1);
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_0$1);
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
        createElementVNode("view", { class: "uni-flex uni-column minepersion" }, [
          createElementVNode("view", { class: "loginTips" }, [
            createElementVNode("u-text", null, " \u70B9\u51FB\u767B\u5F55 ")
          ])
        ])
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
                    createElementVNode("span", { class: "title" }, [
                      createElementVNode("u-text", null, toDisplayString(item.title), 1)
                    ])
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
            createVNode(_component_swiper_item, null, {
              default: withCtx(() => [
                createElementVNode("view", {
                  class: "swiper-item",
                  to: `./chat`
                }, [
                  createElementVNode("u-image", { src: "/static/mine/banner.png" })
                ], 8, ["to"])
              ]),
              _: 1
            }),
            createVNode(_component_swiper_item, null, {
              default: withCtx(() => [
                createElementVNode("view", {
                  class: "swiper-item",
                  to: `./chat`
                }, [
                  createElementVNode("u-image", { src: "/static/mine/banner.png" })
                ], 8, ["to"])
              ]),
              _: 1
            }),
            createVNode(_component_swiper_item, null, {
              default: withCtx(() => [
                createElementVNode("view", {
                  class: "swiper-item",
                  to: `./chat`
                }, [
                  createElementVNode("u-image", { src: "/static/mine/banner.png" })
                ], 8, ["to"])
              ]),
              _: 1
            })
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
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export { index as default };
