import { _ as __easycom_1, a as __easycom_0 } from "../../../uni-list.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import "../../../shared.esm-bundler.js";
var _style_0 = { "messagePage": { "": { "backgroundColor": "#ffffff" } }, "messageBox": { ".messagePage .messageList1 .item ": { "width": "486rpx" }, ".messagePage .messageList2 .item ": { "width": "486rpx" } }, "messageTitle": { ".messagePage .messageList1 .item .messageBox ": { "marginLeft": "24rpx", "color": "#222222", "fontSize": "32rpx", "fontWeight": "bold", "marginTop": "3rpx" }, ".messagePage .messageList2 .item .messageBox ": { "marginLeft": "24rpx", "color": "#222222", "fontSize": "32rpx", "fontWeight": "bold", "marginTop": "3rpx" } }, "messageIntro": { ".messagePage .messageList1 .item .messageBox ": { "marginLeft": "24rpx", "color": "#999999", "fontSize": "26rpx", "marginTop": "15rpx", "lines": 1, "textOverflow": "ellipsis" }, ".messagePage .messageList2 .item .messageBox ": { "marginLeft": "24rpx", "color": "#999999", "fontSize": "26rpx", "marginTop": "15rpx" } }, "rightText": { ".messagePage .messageList1 .item ": { "width": "110rpx" }, ".messagePage .messageList2 .item ": { "width": "110rpx" } }, "messagetime": { ".messagePage .messageList1 .item .rightText ": { "fontSize": "24rpx", "color": "#999999", "textAlign": "right" }, ".messagePage .messageList2 .item .rightText ": { "fontSize": "24rpx", "color": "#999999", "textAlign": "right" } }, "messagenum": { ".messagePage .messageList1 .item .rightText ": { "width": "40rpx", "height": "40rpx", "lineHeight": "40rpx", "backgroundColor": "#FD453C", "color": "#ffffff", "fontSize": "24rpx", "borderRadius": 50, "textAlign": "center", "marginTop": "18rpx", "marginRight": 0, "marginBottom": 0, "marginLeft": "70rpx" }, ".messagePage .messageList2 .item .rightText ": { "width": "40rpx", "height": "40rpx", "lineHeight": "40rpx", "backgroundColor": "#FD453C", "color": "#ffffff", "fontSize": "24rpx", "borderRadius": 50, "textAlign": "center", "marginTop": "18rpx", "marginRight": 0, "marginBottom": 0, "marginLeft": "70rpx" } }, "uni-list--border-bottom": { ".messagePage .messageList1 ": { "height": 0 } }, "uni-list": { ".messagePage ": { "height:after": 0 } } };
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
      uni.navigateTo({
        url: "./fans/fans?id="
      });
    },
    goSystem() {
      uni.navigateTo({
        url: "./fans/fans"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_0);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "messagePage" }, [
      createVNode(_component_uni_list, { class: "messageList1" }, {
        default: withCtx(() => [
          createVNode(_component_uni_list_item, {
            class: "item",
            clickable: true,
            onClick: $options.goFans
          }, {
            header: withCtx(() => [
              createElementVNode("view", { class: "slot-box" }, [
                createElementVNode("u-image", {
                  class: "slot-image",
                  style: { "width": "96rpx", "height": "96rpx" },
                  src: $data.fansImg,
                  mode: "widthFix"
                }, null, 8, ["src"])
              ])
            ]),
            body: withCtx(() => [
              createElementVNode("view", { class: "messageBox" }, [
                createElementVNode("u-text", { class: "slot-box slot-text messageTitle" }, "\u7C89\u4E1D"),
                createElementVNode("u-text", { class: "slot-box slot-text messageIntro" }, "\u7528\u6237 \u5C0F\u8349\u8393 \u5173\u6CE8\u4E86\u4F60")
              ])
            ]),
            footer: withCtx(() => [
              createElementVNode("view", { class: "rightText" }, [
                createElementVNode("u-text", { class: "slot-box slot-text messagetime" }, "\u521A\u521A"),
                createElementVNode("u-text", { class: "slot-box slot-text messagenum" }, "1")
              ])
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_uni_list_item, {
            class: "item",
            clickable: true,
            onClick: $options.goSystem
          }, {
            header: withCtx(() => [
              createElementVNode("view", { class: "slot-box" }, [
                createElementVNode("u-image", {
                  class: "slot-image",
                  style: { "width": "96rpx", "height": "96rpx" },
                  src: $data.SystemImg,
                  mode: "widthFix"
                }, null, 8, ["src"])
              ])
            ]),
            body: withCtx(() => [
              createElementVNode("view", { class: "messageBox" }, [
                createElementVNode("u-text", { class: "slot-box slot-text messageTitle" }, "\u7CFB\u7EDF\u901A\u77E5"),
                createElementVNode("u-text", { class: "slot-box slot-text messageIntro" }, "\u4EB2\u7231\u7684\u7528\u6237\uFF0C\u60A8\u53D1\u5E03\u7684\u89C6\u9891\u300A\u6211\u7231\u6211\u5BB6\u300B...")
              ])
            ]),
            footer: withCtx(() => [
              createElementVNode("view", { class: "rightText" }, [
                createElementVNode("u-text", { class: "slot-box slot-text messagetime" }, "1\u5206\u949F\u524D"),
                createElementVNode("u-text", { class: "slot-box slot-text messagenum" }, "1")
              ])
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_list, { class: "messageList2" }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.messageList, (item, index2) => {
            return openBlock(), createBlock(_component_uni_list_item, { class: "item" }, {
              header: withCtx(() => [
                createElementVNode("view", { class: "slot-box" }, [
                  createElementVNode("u-image", {
                    class: "slot-image",
                    style: { "width": "96rpx", "height": "96rpx" },
                    src: $data.MessageImg,
                    mode: "widthFix"
                  }, null, 8, ["src"])
                ])
              ]),
              body: withCtx(() => [
                createElementVNode("view", { class: "messageBox" }, [
                  createElementVNode("u-text", { class: "slot-box slot-text messageTitle" }, toDisplayString(item.title), 1),
                  createElementVNode("u-text", { class: "slot-box slot-text messageIntro" }, toDisplayString(item.message), 1)
                ])
              ]),
              footer: withCtx(() => [
                createElementVNode("view", { class: "rightText" }, [
                  createElementVNode("u-text", { class: "slot-box slot-text messagetime" }, toDisplayString(item.time), 1)
                ])
              ]),
              _: 2
            }, 1024);
          }), 256))
        ]),
        _: 1
      })
    ])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Game/index.nvue"]]);
export { index as default };
