import { r as resolveEasycom, _ as __easycom_2 } from "./uni-app.es.js";
import { openBlock, createElementBlock, renderSlot, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode, resolveDynamicComponent, resolveComponent, createElementVNode, createVNode, createBlock } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.js";
var _style_0$2 = { "uni-badge--x": { "": { "position": "relative" } }, "uni-badge--absolute": { "": { "position": "absolute" } }, "uni-badge--small": { "": { "transform": "scale(0.8)", "transformOrigin": "center center" } }, "uni-badge": { "": { "justifyContent": "center", "flexDirection": "row", "height": 20, "paddingTop": 0, "paddingRight": 4, "paddingBottom": 0, "paddingLeft": 4, "lineHeight": 18, "color": "#ffffff", "borderRadius": 100, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#ffffff", "textAlign": "center", "fontFamily": '"Helvetica Neue", Helvetica, sans-serif', "fontSize": 12 } }, "uni-badge--info": { "": { "color": "#ffffff", "backgroundColor": "#8f939c" } }, "uni-badge--primary": { "": { "backgroundColor": "#2979ff" } }, "uni-badge--success": { "": { "backgroundColor": "#18bc37" } }, "uni-badge--warning": { "": { "backgroundColor": "#f3a73f" } }, "uni-badge--error": { "": { "backgroundColor": "#e43d33" } }, "uni-badge--inverted": { "": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 0, "color": "#8f939c" } }, "uni-badge--info-inverted": { "": { "color": "#8f939c", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--primary-inverted": { "": { "color": "#2979ff", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--success-inverted": { "": { "color": "#18bc37", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--warning-inverted": { "": { "color": "#f3a73f", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--error-inverted": { "": { "color": "#e43d33", "backgroundColor": "rgba(0,0,0,0)" } } };
const _sfc_main$2 = {
  name: "UniBadge",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: "error"
    },
    inverted: {
      type: Boolean,
      default: false
    },
    isDot: {
      type: Boolean,
      default: false
    },
    maxNum: {
      type: Number,
      default: 99
    },
    absolute: {
      type: String,
      default: ""
    },
    offset: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    text: {
      type: [String, Number],
      default: ""
    },
    size: {
      type: String,
      default: "small"
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    width() {
      return String(this.text).length * 8 + 12;
    },
    classNames() {
      const {
        inverted,
        type,
        size,
        absolute
      } = this;
      return [
        inverted ? "uni-badge--" + type + "-inverted" : "",
        "uni-badge--" + type,
        "uni-badge--" + size,
        absolute ? "uni-badge--absolute" : ""
      ].join(" ");
    },
    positionStyle() {
      if (!this.absolute)
        return {};
      let w = this.width / 2, h = 10;
      if (this.isDot) {
        w = 5;
        h = 5;
      }
      const x = `${-w + this.offset[0]}px`;
      const y = `${-h + this.offset[1]}px`;
      const whiteList = {
        rightTop: {
          right: x,
          top: y
        },
        rightBottom: {
          right: x,
          bottom: y
        },
        leftBottom: {
          left: x,
          bottom: y
        },
        leftTop: {
          left: x,
          top: y
        }
      };
      const match = whiteList[this.absolute];
      return match ? match : whiteList["rightTop"];
    },
    dotStyle() {
      if (!this.isDot)
        return {};
      return {
        width: "10px",
        minWidth: "0",
        height: "10px",
        padding: "0",
        borderRadius: "10px"
      };
    },
    displayValue() {
      const {
        isDot,
        text,
        maxNum
      } = this;
      return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "uni-badge--x" }, [
    renderSlot(_ctx.$slots, "default"),
    $props.text ? (openBlock(), createElementBlock("u-text", {
      key: 0,
      class: normalizeClass([$options.classNames, "uni-badge"]),
      style: normalizeStyle([$options.positionStyle, $props.customStyle, $options.dotStyle]),
      onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
    }, toDisplayString($options.displayValue), 7)) : createCommentVNode("v-if", true)
  ]);
}
var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
var _style_0$1 = { "uni-list-item": { "": { "fontSize": 16, "position": "relative", "justifyContent": "space-between", "alignItems": "center", "backgroundColor": "#ffffff", "flexDirection": "row" } }, "uni-list-item--disabled": { "": { "opacity": 0.3 } }, "uni-list-item--hover": { "": { "backgroundColor": "#f1f1f1" } }, "uni-list-item__container": { "": { "position": "relative", "flexDirection": "row", "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flex": 1, "overflow": "hidden" } }, "container--right": { "": { "paddingRight": 0 } }, "uni-list--border": { "": { "position": "absolute", "top": 0, "right": 0, "left": 0, "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-list-item__content": { "": { "paddingRight": 8, "flex": 1, "color": "#3b4144", "flexDirection": "column", "justifyContent": "space-between", "overflow": "hidden" } }, "uni-list-item__content--center": { "": { "justifyContent": "center" } }, "uni-list-item__content-title": { "": { "fontSize": 14, "color": "#3b4144", "overflow": "hidden" } }, "uni-list-item__content-note": { "": { "marginTop": "6rpx", "color": "#999999", "fontSize": 12, "overflow": "hidden" } }, "uni-list-item__extra": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uni-list-item__header": { "": { "flexDirection": "row", "alignItems": "center" } }, "uni-list-item__icon": { "": { "marginRight": "18rpx", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uni-list-item__icon-img": { "": { "height": 26, "width": 26, "marginRight": 10 } }, "uni-icon-wrapper": { "": { "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "flex--direction": { "": { "flexDirection": "column" } }, "uni-list--lg": { "": { "height": 40, "width": 40 } }, "uni-list--base": { "": { "height": 26, "width": 26 } }, "uni-list--sm": { "": { "height": 20, "width": 20 } }, "uni-list-item__extra-text": { "": { "color": "#999999", "fontSize": 12 } }, "uni-ellipsis-1": { "": { "lines": 1, "textOverflow": "ellipsis" } }, "uni-ellipsis-2": { "": { "lines": 2, "textOverflow": "ellipsis" } } };
const _sfc_main$1 = {
  name: "UniListItem",
  emits: ["click", "switchChange"],
  props: {
    direction: {
      type: String,
      default: "row"
    },
    title: {
      type: String,
      default: ""
    },
    note: {
      type: String,
      default: ""
    },
    ellipsis: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: [Boolean, String],
      default: false
    },
    link: {
      type: [Boolean, String],
      default: false
    },
    to: {
      type: String,
      default: ""
    },
    showBadge: {
      type: [Boolean, String],
      default: false
    },
    showSwitch: {
      type: [Boolean, String],
      default: false
    },
    switchChecked: {
      type: [Boolean, String],
      default: false
    },
    badgeText: {
      type: String,
      default: ""
    },
    badgeType: {
      type: String,
      default: "success"
    },
    badgeStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    rightText: {
      type: String,
      default: ""
    },
    thumb: {
      type: String,
      default: ""
    },
    thumbSize: {
      type: String,
      default: "base"
    },
    showExtraIcon: {
      type: [Boolean, String],
      default: false
    },
    extraIcon: {
      type: Object,
      default() {
        return {
          type: "",
          color: "#000000",
          size: 20
        };
      }
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isFirstChild: false
    };
  },
  mounted() {
    this.list = this.getForm();
    if (this.list) {
      if (!this.list.firstChildAppend) {
        this.list.firstChildAppend = true;
        this.isFirstChild = true;
      }
    }
  },
  methods: {
    getForm(name = "uniList") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    },
    onClick() {
      if (this.to !== "") {
        this.openPage();
        return;
      }
      if (this.clickable || this.link) {
        this.$emit("click", {
          data: {}
        });
      }
    },
    onSwitchChange(e) {
      this.$emit("switchChange", e.detail);
    },
    openPage() {
      if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
        this.pageApi(this.link);
      } else {
        this.pageApi("navigateTo");
      }
    },
    pageApi(api) {
      let callback = {
        url: this.to,
        success: (res) => {
          this.$emit("click", {
            data: res
          });
        },
        fail: (err) => {
          this.$emit("click", {
            data: err
          });
        }
      };
      switch (api) {
        case "navigateTo":
          uni.navigateTo(callback);
          break;
        case "redirectTo":
          uni.redirectTo(callback);
          break;
        case "reLaunch":
          uni.reLaunch(callback);
          break;
        case "switchTab":
          uni.switchTab(callback);
          break;
        default:
          uni.navigateTo(callback);
      }
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_2);
  const _component_uni_badge = resolveEasycom(resolveDynamicComponent("uni-badge"), __easycom_1$1);
  const _component_switch = resolveComponent("switch");
  return openBlock(), createElementBlock("cell", null, [
    createElementVNode("view", {
      class: normalizeClass([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
      hoverClass: !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.isFirstChild ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: normalizeClass(["border--left", { "uni-list--border": $props.border }])
      }, null, 2)) : createCommentVNode("v-if", true),
      createElementVNode("view", {
        class: normalizeClass(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }])
      }, [
        renderSlot(_ctx.$slots, "header", {}, () => [
          createElementVNode("view", { class: "uni-list-item__header" }, [
            $props.thumb ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "uni-list-item__icon"
            }, [
              createElementVNode("u-image", {
                src: $props.thumb,
                class: normalizeClass(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
              }, null, 10, ["src"])
            ])) : $props.showExtraIcon ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: "uni-list-item__icon"
            }, [
              createVNode(_component_uni_icons, {
                color: $props.extraIcon.color,
                size: $props.extraIcon.size,
                type: $props.extraIcon.type
              }, null, 8, ["color", "size", "type"])
            ])) : createCommentVNode("v-if", true)
          ])
        ]),
        renderSlot(_ctx.$slots, "body", {}, () => [
          createElementVNode("view", {
            class: normalizeClass(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
          }, [
            $props.title ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: normalizeClass(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
            }, toDisplayString($props.title), 3)) : createCommentVNode("v-if", true),
            $props.note ? (openBlock(), createElementBlock("u-text", {
              key: 1,
              class: "uni-list-item__content-note"
            }, toDisplayString($props.note), 1)) : createCommentVNode("v-if", true)
          ], 2)
        ]),
        renderSlot(_ctx.$slots, "footer", {}, () => [
          $props.rightText || $props.showBadge || $props.showSwitch ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: normalizeClass(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
          }, [
            $props.rightText ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: "uni-list-item__extra-text"
            }, toDisplayString($props.rightText), 1)) : createCommentVNode("v-if", true),
            $props.showBadge ? (openBlock(), createBlock(_component_uni_badge, {
              key: 1,
              type: $props.badgeType,
              text: $props.badgeText,
              "custom-style": $props.badgeStyle
            }, null, 8, ["type", "text", "custom-style"])) : createCommentVNode("v-if", true),
            $props.showSwitch ? (openBlock(), createBlock(_component_switch, {
              key: 2,
              disabled: $props.disabled,
              checked: $props.switchChecked,
              onChange: $options.onSwitchChange
            }, null, 8, ["disabled", "checked", "onChange"])) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true)
        ])
      ], 2),
      $props.showArrow || $props.link ? (openBlock(), createBlock(_component_uni_icons, {
        key: 1,
        size: 16,
        class: "uni-icon-wrapper",
        color: "#bbb",
        type: "arrowright"
      })) : createCommentVNode("v-if", true)
    ], 10, ["hoverClass"])
  ]);
}
var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
var _style_0 = { "uni-list": { "": { "backgroundColor": "#ffffff", "position": "relative", "flexDirection": "column" } }, "uni-list--border": { "": { "position": "relative", "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5, "borderBottomColor": "#e5e5e5", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "zIndex": -1 } } };
const _sfc_main = {
  name: "uniList",
  "mp-weixin": {
    options: {
      multipleSlots: false
    }
  },
  props: {
    enableBackToTop: {
      type: [Boolean, String],
      default: false
    },
    scrollY: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  created() {
    this.firstChildAppend = false;
  },
  methods: {
    loadMore(e) {
      this.$emit("scrolltolower");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("list", {
    class: normalizeClass(["uni-list", { "uni-list--border": $props.border }]),
    enableBackToTop: $props.enableBackToTop,
    loadmoreoffset: "15"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, ["enableBackToTop"]);
}
var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
export { __easycom_1 as _, __easycom_0 as a };
