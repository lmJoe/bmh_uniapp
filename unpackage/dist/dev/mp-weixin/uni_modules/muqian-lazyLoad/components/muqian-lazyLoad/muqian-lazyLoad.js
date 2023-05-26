"use strict";
var common_vendor = require("../../../../common/vendor.js");
var loadingImage = "/uni_modules/muqian-lazyLoad/static/loading.png";
var loadFailImage = "/uni_modules/muqian-lazyLoad/static/loadFail.png";
let loadTimer = null;
const _sfc_main = {
  name: "muqian-lazyLoad",
  props: {
    borderRadius: {
      type: String,
      default: "0"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    src: {
      type: String,
      default: ""
    },
    minTimeOut: {
      type: String || Number,
      default: "300"
    },
    showDistance: {
      type: Object,
      default: () => {
      }
    },
    effect: {
      type: String,
      default: "linear"
    },
    duration: {
      type: String || Number,
      default: "300"
    },
    loadSrc: {
      type: String,
      default: loadingImage
    },
    errorSrc: {
      type: String,
      default: loadFailImage
    }
  },
  data() {
    return {
      status: 0,
      isShow: false
    };
  },
  watch: {
    src() {
      if (!this.isShow)
        return;
      this.status = 0;
      this.isShow = false;
      this.$nextTick(() => {
        this.status = 1;
      });
    }
  },
  destroyed() {
    this.$emit("destroyed");
  },
  methods: {
    load() {
      if (this.minTimeOut == 0) {
        this.isShow = true;
      } else {
        let newTimer = new Date().getTime() - loadTimer;
        if (newTimer < this.minTimeOut) {
          setTimeout(() => {
            this.isShow = true;
          }, this.minTimeOut - newTimer);
        } else {
          this.isShow = true;
        }
      }
      setTimeout(() => {
        this.$emit("showSuccess");
      }, this.duration);
    },
    error() {
      this.status = 2;
      this.isShow = true;
    },
    init() {
      let intersectionObserver = common_vendor.index.createIntersectionObserver(this);
      let load = false;
      intersectionObserver.relativeToViewport(this.showDistance).observe(".muqain-load", (res) => {
        if (!load && res.intersectionRatio == 0) {
          load = true;
          return;
        }
        this.$emit("show");
        load = true;
        this.status = 1;
        loadTimer = new Date().getTime();
        intersectionObserver.disconnect();
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.loadSrc,
    b: common_vendor.o((...args) => $options.init && $options.init(...args)),
    c: $data.isShow ? "0" : "1",
    d: $props.borderRadius,
    e: $props.width,
    f: $props.height,
    g: `opacity ${$props.duration / 1e3}s ${$props.effect}`,
    h: $data.status == 1
  }, $data.status == 1 ? {
    i: common_vendor.o((...args) => $options.load && $options.load(...args)),
    j: common_vendor.o((...args) => $options.error && $options.error(...args)),
    k: $props.src,
    l: $data.isShow ? "1" : "0",
    m: $props.borderRadius,
    n: $props.width,
    o: $props.height,
    p: `opacity ${$props.duration / 1e3}s ${$props.effect}`
  } : {}, {
    q: $data.status == 2
  }, $data.status == 2 ? {
    r: $props.errorSrc,
    s: $data.isShow ? "1" : "0",
    t: $props.borderRadius,
    v: $props.width,
    w: $props.height,
    x: `opacity ${$props.duration / 1e3}s ${$props.effect}`
  } : {}, {
    y: $props.width,
    z: $props.height
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-35be8e74"], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/muqian-lazyLoad/components/muqian-lazyLoad/muqian-lazyLoad.vue"]]);
wx.createComponent(Component);
