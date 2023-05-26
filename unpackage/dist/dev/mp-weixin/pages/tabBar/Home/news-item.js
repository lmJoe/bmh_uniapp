"use strict";
var common_vendor = require("../../../common/vendor.js");
const lazyLoad = () => "../../../uni_modules/muqian-lazyLoad/components/muqian-lazyLoad/muqian-lazyLoad.js";
const _sfc_main = {
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
if (!Array) {
  const _component_lazyLoad = common_vendor.resolveComponent("lazyLoad");
  _component_lazyLoad();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.options.Title
  }, $props.options.Title ? {
    b: common_vendor.t($props.options.Title),
    c: common_vendor.p({
      src: $props.options.CoverImgs,
      height: "380rpx",
      borderRadius: "8px",
      mode: "scaleToFill"
    }),
    d: common_vendor.t($props.options.Duration),
    e: common_vendor.p({
      src: $props.options.HeadImg,
      height: "55rpx",
      borderRadius: "50%",
      mode: "scaleToFill"
    }),
    f: common_vendor.t($props.options.NickName),
    g: common_vendor.o((...args) => $options.click && $options.click(...args))
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a3ffc5f6"], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Home/news-item.vue"]]);
wx.createComponent(Component);
