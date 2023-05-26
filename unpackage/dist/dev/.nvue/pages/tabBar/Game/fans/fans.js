import { a as __easycom_0, _ as __easycom_1 } from "../../../../uni-list.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString, normalizeClass } from "vue";
import { r as resolveEasycom } from "../../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../../plugin-vue_export-helper.js";
import "../../../../shared.esm-bundler.js";
var _style_0 = { "messagePage": { "": { "backgroundColor": "#ffffff" } }, "uni-list-item__container": { ".messagePage .messageList .item ": { "paddingTop": "26rpx", "paddingRight": "30rpx", "paddingBottom": "26rpx", "paddingLeft": "30rpx" } }, "messageBox": { ".messagePage .messageList .item ": { "width": "450rpx", "justifyContent": "center" } }, "messageTitle": { ".messagePage .messageList .item .messageBox ": { "marginLeft": "24rpx", "color": "#222222", "fontSize": "32rpx", "fontWeight": "bold", "marginTop": "3rpx" } }, "rightText": { ".messagePage .messageList .item ": { "width": "140rpx", "justifyContent": "center" } }, "messagetime": { ".messagePage .messageList .item .rightText ": { "height": "50rpx", "lineHeight": "50rpx", "fontSize": "26rpx", "color": "#EA1C24", "textAlign": "center", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#EA1C24", "borderRadius": "50rpx" } }, "messagetime1": { ".messagePage .messageList .item .rightText ": { "height": "50rpx", "lineHeight": "50rpx", "fontSize": "26rpx", "textAlign": "center", "borderRadius": "50rpx", "color": "#BDBDBD", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#BDBDBD" } }, "uni-list--border-bottom": { ".messagePage .messageList ": { "height": 0 } } };
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
          uni.showToast({
            title: `\u5173\u6CE8\u6210\u529F`,
            icon: "none"
          });
          break;
        case 2:
          e.status = 3;
          uni.showToast({
            title: `\u4E92\u76F8\u5173\u6CE8\u6210\u529F`,
            icon: "none"
          });
          break;
        case 3:
          uni.showModal({
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
      createVNode(_component_uni_list, { class: "messageList" }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.messageList, (item, index) => {
            return openBlock(), createBlock(_component_uni_list_item, { class: "item" }, {
              header: withCtx(() => [
                createElementVNode("view", { class: "slot-box" }, [
                  createElementVNode("u-image", {
                    class: "slot-image",
                    style: { "width": "96rpx", "height": "96rpx", "border-radius": "50%" },
                    src: item.headImg,
                    mode: "widthFix"
                  }, null, 8, ["src"])
                ])
              ]),
              body: withCtx(() => [
                createElementVNode("view", { class: "messageBox" }, [
                  createElementVNode("u-text", { class: "slot-box slot-text messageTitle" }, toDisplayString(item.name), 1)
                ])
              ]),
              footer: withCtx(() => [
                createElementVNode("view", {
                  class: "rightText",
                  onClick: ($event) => $options.rightBtn(item)
                }, [
                  createElementVNode("u-text", {
                    class: normalizeClass([item.status == 3 ? "messagetime1" : "messagetime", "slot-box", "slot-text"])
                  }, toDisplayString(item.status == 1 ? "\u5173\u6CE8" : item.status == 2 ? "\u56DE\u5173" : item.status == 3 ? "\u76F8\u4E92\u5173\u6CE8" : ""), 3)
                ], 8, ["onClick"])
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
var fans = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Game/fans/fans.nvue"]]);
export { fans as default };
