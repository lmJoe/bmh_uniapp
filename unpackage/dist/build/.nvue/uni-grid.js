import { openBlock, createElementBlock, normalizeStyle, createElementVNode, normalizeClass, renderSlot, createCommentVNode } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.js";
import { a as requireNativePlugin } from "./uni-app.es.js";
var _style_0$1 = { "uni-grid-item__box": { "": { "position": "relative", "flex": 1, "flexDirection": "column" } }, "uni-grid-item--border": { "": { "position": "relative", "borderBottomColor": "#D2D2D2", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "borderRightColor": "#D2D2D2", "borderRightStyle": "solid", "borderRightWidth": 0.5 } }, "uni-grid-item--border-top": { "": { "position": "relative", "borderTopColor": "#D2D2D2", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-highlight": { "": { "backgroundColor:active": "#f1f1f1" } } };
const _sfc_main$1 = {
  name: "UniGridItem",
  inject: ["grid"],
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      column: 0,
      showBorder: true,
      square: true,
      highlight: true,
      left: 0,
      top: 0,
      openNum: 2,
      width: 0,
      borderColor: "#e5e5e5"
    };
  },
  created() {
    this.column = this.grid.column;
    this.showBorder = this.grid.showBorder;
    this.square = this.grid.square;
    this.highlight = this.grid.highlight;
    this.top = this.hor === 0 ? this.grid.hor : this.hor;
    this.left = this.ver === 0 ? this.grid.ver : this.ver;
    this.borderColor = this.grid.borderColor;
    this.grid.children.push(this);
    this.width = this.grid.width;
  },
  beforeDestroy() {
    this.grid.children.forEach((item, index) => {
      if (item === this) {
        this.grid.children.splice(index, 1);
      }
    });
  },
  methods: {
    _onClick() {
      this.grid.change({
        detail: {
          index: this.index
        }
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.width ? (openBlock(), createElementBlock("view", {
    key: 0,
    style: normalizeStyle("width:" + $data.width + ";" + ($data.square ? "height:" + $data.width : "")),
    class: "uni-grid-item"
  }, [
    createElementVNode("view", {
      class: normalizeClass([{ "uni-grid-item--border": $data.showBorder, "uni-grid-item--border-top": $data.showBorder && $props.index < $data.column, "uni-highlight": $data.highlight }, "uni-grid-item__box"]),
      style: normalizeStyle({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 6)
  ], 4)) : createCommentVNode("", true);
}
var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
var _style_0 = { "uni-grid-wrap": { "": { "flex": 1, "flexDirection": "column" } }, "uni-grid": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "uni-grid--border": { "": { "position": "relative", "borderLeftColor": "#D2D2D2", "borderLeftStyle": "solid", "borderLeftWidth": 0.5 } } };
const dom = requireNativePlugin("dom");
const _sfc_main = {
  name: "UniGrid",
  emits: ["change"],
  props: {
    column: {
      type: Number,
      default: 3
    },
    showBorder: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: "#D2D2D2"
    },
    square: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      grid: this
    };
  },
  data() {
    const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      elId,
      width: 0
    };
  },
  created() {
    this.children = [];
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      setTimeout(() => {
        this._getSize((width) => {
          this.children.forEach((item, index) => {
            item.width = width;
          });
        });
      }, 50);
    },
    change(e) {
      this.$emit("change", e);
    },
    _getSize(fn) {
      dom.getComponentRect(this.$refs["uni-grid"], (ret) => {
        this.width = parseInt((ret.size.width - 1) / this.column) + "px";
        fn(this.width);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "uni-grid-wrap" }, [
    createElementVNode("view", {
      id: $data.elId,
      ref: "uni-grid",
      class: normalizeClass(["uni-grid", { "uni-grid--border": $props.showBorder }]),
      style: normalizeStyle({ "border-left-color": $props.borderColor })
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 14, ["id"])
  ]);
}
var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export { __easycom_0 as _, __easycom_1 as a };
