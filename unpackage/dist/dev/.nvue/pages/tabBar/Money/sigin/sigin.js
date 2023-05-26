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
import { f as formatAppLog } from "../../../../uni-shared.es.js";
import { _ as __easycom_0, a as __easycom_1 } from "../../../../uni-grid.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createCommentVNode, resolveDynamicComponent, resolveComponent, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString, createTextVNode } from "vue";
import { a as requireNativePlugin, r as resolveEasycom, _ as __easycom_2 } from "../../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../../plugin-vue_export-helper.js";
import { p as pathToBase64 } from "../../../../index.js";
import "../../../../shared.esm-bundler.js";
const nvueAnimation = requireNativePlugin("animation");
class MPAnimation {
  constructor(options, _this) {
    this.options = options;
    this.animation = uni.createAnimation(options);
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  _nvuePushAnimates(type, args) {
    let aniObj = this.currentStepAnimates[this.next];
    let styles = {};
    if (!aniObj) {
      styles = {
        styles: {},
        config: {}
      };
    } else {
      styles = aniObj;
    }
    if (animateTypes1.includes(type)) {
      if (!styles.styles.transform) {
        styles.styles.transform = "";
      }
      let unit = "";
      if (type === "rotate") {
        unit = "deg";
      }
      styles.styles.transform += `${type}(${args + unit}) `;
    } else {
      styles.styles[type] = `${args}`;
    }
    this.currentStepAnimates[this.next] = styles;
  }
  _animateRun(styles = {}, config = {}) {
    let ref = this.$.$refs["ani"].ref;
    if (!ref)
      return;
    return new Promise((resolve, reject) => {
      nvueAnimation.transition(ref, __spreadValues({
        styles
      }, config), (res) => {
        resolve();
      });
    });
  }
  _nvueNextAnimate(animates, step = 0, fn) {
    let obj = animates[step];
    if (obj) {
      let {
        styles,
        config
      } = obj;
      this._animateRun(styles, config).then(() => {
        step += 1;
        this._nvueNextAnimate(animates, step, fn);
      });
    } else {
      this.currentStepAnimates = {};
      typeof fn === "function" && fn();
      this.isEnd = true;
    }
  }
  step(config = {}) {
    this.currentStepAnimates[this.next].config = Object.assign({}, this.options, config);
    this.currentStepAnimates[this.next].styles.transformOrigin = this.currentStepAnimates[this.next].config.transformOrigin;
    this.next++;
    return this;
  }
  run(fn) {
    this.isEnd = false;
    let ref = this.$.$refs["ani"] && this.$.$refs["ani"].ref;
    if (!ref)
      return;
    this._nvueNextAnimate(this.currentStepAnimates, 0, fn);
    this.next = 0;
  }
}
const animateTypes1 = [
  "matrix",
  "matrix3d",
  "rotate",
  "rotate3d",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scale3d",
  "scaleX",
  "scaleY",
  "scaleZ",
  "skew",
  "skewX",
  "skewY",
  "translate",
  "translate3d",
  "translateX",
  "translateY",
  "translateZ"
];
const animateTypes2 = ["opacity", "backgroundColor"];
const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
  MPAnimation.prototype[type] = function(...args) {
    this._nvuePushAnimates(type, args);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this)
    return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
const _sfc_main$1 = {
  name: "uniTransition",
  emits: ["click", "change"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    modeClass: {
      type: [Array, String],
      default() {
        return "fade";
      }
    },
    duration: {
      type: Number,
      default: 300
    },
    styles: {
      type: Object,
      default() {
        return {};
      }
    },
    customClass: {
      type: String,
      default: ""
    },
    onceRender: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false,
      transform: "",
      opacity: 1,
      animationData: {},
      durationTime: 300,
      config: {}
    };
  },
  watch: {
    show: {
      handler(newVal) {
        if (newVal) {
          this.open();
        } else {
          if (this.isShow) {
            this.close();
          }
        }
      },
      immediate: true
    }
  },
  computed: {
    stylesObject() {
      let styles = __spreadProps(__spreadValues({}, this.styles), {
        "transition-duration": this.duration / 1e3 + "s"
      });
      let transform = "";
      for (let i in styles) {
        let line = this.toLine(i);
        transform += line + ":" + styles[i] + ";";
      }
      return transform;
    },
    transformStyles() {
      return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
    }
  },
  created() {
    this.config = {
      duration: this.duration,
      timingFunction: "ease",
      transformOrigin: "50% 50%",
      delay: 0
    };
    this.durationTime = this.duration;
  },
  methods: {
    init(obj = {}) {
      if (obj.duration) {
        this.durationTime = obj.duration;
      }
      this.animation = createAnimation(Object.assign(this.config, obj), this);
    },
    onClick() {
      this.$emit("click", {
        detail: this.isShow
      });
    },
    step(obj, config = {}) {
      if (!this.animation)
        return;
      for (let i in obj) {
        try {
          if (typeof obj[i] === "object") {
            this.animation[i](...obj[i]);
          } else {
            this.animation[i](obj[i]);
          }
        } catch (e) {
          formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:143", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
        }
      }
      this.animation.step(config);
      return this;
    },
    run(fn) {
      if (!this.animation)
        return;
      this.animation.run(fn);
    },
    open() {
      clearTimeout(this.timer);
      this.transform = "";
      this.isShow = true;
      let { opacity, transform } = this.styleInit(false);
      if (typeof opacity !== "undefined") {
        this.opacity = opacity;
      }
      this.transform = transform;
      this.$nextTick(() => {
        this.timer = setTimeout(() => {
          this.animation = createAnimation(this.config, this);
          this.tranfromInit(false).step();
          this.animation.run();
          this.$emit("change", {
            detail: this.isShow
          });
        }, 20);
      });
    },
    close(type) {
      if (!this.animation)
        return;
      this.tranfromInit(true).step().run(() => {
        this.isShow = false;
        this.animationData = null;
        this.animation = null;
        let { opacity, transform } = this.styleInit(false);
        this.opacity = opacity || 1;
        this.transform = transform;
        this.$emit("change", {
          detail: this.isShow
        });
      });
    },
    styleInit(type) {
      let styles = {
        transform: ""
      };
      let buildStyle = (type2, mode) => {
        if (mode === "fade") {
          styles.opacity = this.animationType(type2)[mode];
        } else {
          styles.transform += this.animationType(type2)[mode] + " ";
        }
      };
      if (typeof this.modeClass === "string") {
        buildStyle(type, this.modeClass);
      } else {
        this.modeClass.forEach((mode) => {
          buildStyle(type, mode);
        });
      }
      return styles;
    },
    tranfromInit(type) {
      let buildTranfrom = (type2, mode) => {
        let aniNum = null;
        if (mode === "fade") {
          aniNum = type2 ? 0 : 1;
        } else {
          aniNum = type2 ? "-100%" : "0";
          if (mode === "zoom-in") {
            aniNum = type2 ? 0.8 : 1;
          }
          if (mode === "zoom-out") {
            aniNum = type2 ? 1.2 : 1;
          }
          if (mode === "slide-right") {
            aniNum = type2 ? "100%" : "0";
          }
          if (mode === "slide-bottom") {
            aniNum = type2 ? "100%" : "0";
          }
        }
        this.animation[this.animationMode()[mode]](aniNum);
      };
      if (typeof this.modeClass === "string") {
        buildTranfrom(type, this.modeClass);
      } else {
        this.modeClass.forEach((mode) => {
          buildTranfrom(type, mode);
        });
      }
      return this.animation;
    },
    animationType(type) {
      return {
        fade: type ? 1 : 0,
        "slide-top": `translateY(${type ? "0" : "-100%"})`,
        "slide-right": `translateX(${type ? "0" : "100%"})`,
        "slide-bottom": `translateY(${type ? "0" : "100%"})`,
        "slide-left": `translateX(${type ? "0" : "-100%"})`,
        "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
        "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
      };
    },
    animationMode() {
      return {
        fade: "opacity",
        "slide-top": "translateY",
        "slide-right": "translateX",
        "slide-bottom": "translateY",
        "slide-left": "translateX",
        "zoom-in": "scale",
        "zoom-out": "scale"
      };
    },
    toLine(name) {
      return name.replace(/([A-Z])/g, "-$1").toLowerCase();
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.isShow || $props.onceRender ? (openBlock(), createElementBlock("view", {
    key: 0,
    ref: "ani",
    animation: $data.animationData,
    class: normalizeClass($props.customClass),
    style: normalizeStyle($options.transformStyles),
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 14, ["animation"])) : createCommentVNode("v-if", true);
}
var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
var _style_0 = { "siginBg": { "": { "width": 100, "height": "733rpx" } }, "navBar": { ".siginBg .navBarBox ": { "height": "85rpx", "display": "flex", "flexDirection": "row", "justifyContent": "flex-start", "alignItems": "center", "paddingTop": 0, "paddingRight": "30rpx", "paddingBottom": 0, "paddingLeft": "30rpx" } }, "title": { ".siginBg .navBarBox .navBar ": { "fontSize": "34rpx", "color": "#FFFFFF", "marginLeft": "254rpx" }, ".siginBg .siginContainer .siginRule ": { "fontSize": "26rpx", "color": "#222222", "marginBottom": "28rpx" } }, "siginContainer": { ".siginBg ": { "display": "flex", "alignItems": "center" } }, "siginBox": { ".siginBg .siginContainer ": { "width": "686rpx", "height": "735rpx", "backgroundColor": "#ffffff", "borderRadius": "16rpx", "boxShadow": "0px 3rpx 20rpx 0px #F4F4F4", "marginTop": "350rpx", "paddingTop": "45rpx", "paddingRight": "27rpx", "paddingBottom": "45rpx", "paddingLeft": "27rpx" } }, "siginRule": { ".siginBg .siginContainer ": { "marginTop": "45rpx", "marginBottom": "41rpx" } }, "text": { ".siginBg .siginContainer .siginRule ": { "fontSize": "22rpx", "color": "#666666", "marginBottom": "23rpx" } }, "siginPopBg": { ".siginBg .siginContainer ": { "width": 100, "height": 100, "backgroundColor": "rgba(0,0,0,0.5)", "position": "fixed", "top": 0, "left": 0, "zIndex": 100, "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "siginPopBox": { ".siginBg .siginContainer .siginPopBg ": { "width": "560rpx", "height": "386rpx", "backgroundColor": "#ffffff", "borderRadius": "24rpx", "display": "flex", "alignItems": "center" } }, "popImg": { ".siginBg .siginContainer .siginPopBg .siginPopBox ": { "position": "absolute", "top": "-80rpx", "width": "253rpx", "height": "183rpx" } }, "siginPop": { ".siginBg .siginContainer .siginPopBg .siginPopBox ": { "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "167rpx" } }, "button": { ".siginBg .siginContainer .siginPopBg .siginPopBox ": { "backgroundColor": "#FF4B45", "color": "#ffffff", "fontSize": "30rpx", "borderRadius": "50rpx", "position": "absolute", "bottom": "56rpx", "width": "400rpx", "height": "74rpx" } }, "closePop": { ".siginBg .siginContainer .siginPopBg .siginPopBox ": { "position": "absolute", "top": "15rpx", "right": "15rpx" } }, "uni-grid--border": { "": { "borderLeftWidth": 0, "display": "flex", "alignItems": "center" } }, "uni-grid-item--border-top": { "": { "borderTopWidth": 0 } }, "uni-grid-item--border": { "": { "borderBottomWidth": 0, "borderRightWidth": 0 } }, "uni-grid-item": { "": { "marginBottom": "41rpx" } }, "grid-item-box": { ".uni-grid-item ": { "display": "flex", "alignItems": "center", "justifyContent": "center" } }, "iconBox": { ".uni-grid-item .grid-item-box ": { "position": "relative", "width": "62rpx", "height": "62rpx", "display": "flex", "alignItems": "center", "justifyContent": "center" } }, "num": { ".uni-grid-item .grid-item-box ": { "position": "absolute", "fontSize": "22rpx", "color": "#B00000" } }, "time": { ".uni-grid-item .grid-item-box ": { "marginTop": "9rpx", "fontSize": "22rpx", "color": "#222222", "textAlign": "center" } } };
const _sfc_main = {
  data() {
    return {
      iconImg1: "../../../../static/siginIn/icon1.png",
      iconImg2: "../../../../static/siginIn/icon2.png",
      bgImg: "../../../../static/siginIn/bg.png",
      statusBarHeight: 0,
      navBarHeight: 82 + 11,
      siginList: [
        { status: 1, num: 48, time: 1 },
        { status: 1, num: 58, time: 2 },
        { status: 1, num: 78, time: 3 },
        { status: 1, num: 88, time: 4 },
        { status: 1, num: 58, time: 5 },
        { status: 1, num: 68, time: 6 },
        { status: 1, num: 129, time: 7 },
        { status: 1, num: 58, time: 8 },
        { status: 1, num: 68, time: 9 },
        { status: 1, num: 78, time: 10 },
        { status: 1, num: 98, time: 11 },
        { status: 1, num: 58, time: 12 },
        { status: 1, num: 68, time: 13 },
        { status: 1, num: 108, time: 14 },
        { status: 1, num: 68, time: 15 },
        { status: 1, num: 88, time: 16 },
        { status: 1, num: 78, time: 17 },
        { status: 1, num: 68, time: 18 },
        { status: 1, num: 88, time: 19 },
        { status: 1, num: 108, time: 20 },
        { status: 1, num: 138, time: 21 },
        { status: 1, num: 108, time: 22 },
        { status: 1, num: 98, time: 23 },
        { status: 1, num: 88, time: 24 },
        { status: 1, num: 108, time: 25 },
        { status: 1, num: 78, time: 26 },
        { status: 1, num: 98, time: 27 },
        { status: 1, num: 138, time: 28 },
        { status: 1, num: 158, time: 29 },
        { status: 1, num: 288, time: 30 }
      ],
      siginShow: false
    };
  },
  props: {},
  created() {
    pathToBase64(this.iconImg1).then((base64) => {
      this.iconImg1 = base64;
    }).catch((error) => {
      formatAppLog("error", "at pages/tabBar/Money/sigin/sigin.nvue:88", error);
    });
    pathToBase64(this.iconImg2).then((base64) => {
      this.iconImg2 = base64;
    }).catch((error) => {
      formatAppLog("error", "at pages/tabBar/Money/sigin/sigin.nvue:95", error);
    });
    pathToBase64(this.bgImg).then((base64) => {
      this.bgImg = base64;
    }).catch((error) => {
      formatAppLog("error", "at pages/tabBar/Money/sigin/sigin.nvue:102", error);
    });
    this.statusBarHeight = uni.getSystemInfoSync()["statusBarHeight"];
  },
  methods: {
    sigin(e) {
      let {
        index
      } = e.detail;
      this.siginList[index].status = 2;
      this.siginShow = true;
    },
    navigateBack() {
      uni.navigateBack();
    },
    closePop() {
      this.siginShow = false;
    },
    seeVideo() {
      uni.switchTab({
        url: `/pages/tabBar/Home/index`,
        success: () => {
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_grid_item = resolveEasycom(resolveDynamicComponent("uni-grid-item"), __easycom_0);
  const _component_uni_grid = resolveEasycom(resolveDynamicComponent("uni-grid"), __easycom_1);
  const _component_button = resolveComponent("button");
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_2);
  const _component_uni_transition = resolveEasycom(resolveDynamicComponent("uni-transition"), __easycom_3);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", {
      class: "siginBg",
      style: normalizeStyle({
        "background-image": `url(${$data.bgImg})`,
        "background-repeat": "no-repeat",
        "background-size": "100%",
        "background-position": "center top"
      })
    }, [
      createElementVNode("view", { class: "navBarBox" }, [
        createCommentVNode(" \u72B6\u6001\u680F\u5360\u4F4D "),
        createElementVNode("view", {
          class: "statusBar",
          style: normalizeStyle({ paddingTop: $data.statusBarHeight + "px" })
        }, null, 4),
        createCommentVNode(" \u771F\u6B63\u7684\u5BFC\u822A\u680F\u5185\u5BB9 "),
        createElementVNode("view", { class: "navBar" }, [
          createElementVNode("view", {
            class: "fanhui",
            style: { "width": "24rpx" },
            onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateBack && $options.navigateBack(...args))
          }, [
            createElementVNode("u-image", {
              style: { "width": "24rpx", "height": "40rpx" },
              src: "/static/common/icon.png"
            })
          ]),
          createElementVNode("u-text", { class: "title" }, "\u7B7E\u5230\u8BE6\u60C5")
        ])
      ]),
      createElementVNode("view", { class: "siginContainer" }, [
        createCommentVNode(" \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F "),
        createCommentVNode(" \u9875\u9762\u5185\u5BB9 "),
        createElementVNode("view", { class: "siginBox" }, [
          createVNode(_component_uni_grid, {
            column: 7,
            highlight: true,
            onChange: $options.sigin
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.siginList, (item, index) => {
                return openBlock(), createBlock(_component_uni_grid_item, {
                  index,
                  key: index
                }, {
                  default: withCtx(() => [
                    createElementVNode("view", { class: "grid-item-box" }, [
                      createElementVNode("view", { class: "iconBox" }, [
                        createElementVNode("u-image", {
                          src: item.status == 1 ? $data.iconImg1 : $data.iconImg2,
                          style: { "width": "60rpx", "height": "60rpx" }
                        }, null, 8, ["src"]),
                        createElementVNode("u-text", {
                          class: "num",
                          style: normalizeStyle({ color: item.status == 1 ? "#B00000" : "#888887" })
                        }, toDisplayString(item.num), 5)
                      ]),
                      createElementVNode("u-text", {
                        class: "time",
                        style: normalizeStyle({ color: item.status == 1 ? "#222222" : "#AAAAAA" })
                      }, toDisplayString(item.time) + "\u5929", 5)
                    ])
                  ]),
                  _: 2
                }, 1032, ["index"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["onChange"])
        ]),
        createElementVNode("view", { class: "siginRule" }, [
          createElementVNode("u-text", { class: "title" }, "\u7B7E\u5230\u89C4\u5219"),
          createElementVNode("u-text", { class: "text" }, "1.\u6BCF\u65E5\u7B7E\u5230\u5B8C\u6210\uFF0C\u5373\u53EF\u83B7\u5F97\u5F53\u65E5\u91D1\u5E01\u3002"),
          createElementVNode("u-text", { class: "text" }, "2.\u8FDE\u7EED\u7B7E\u523030\u5929\u4E3A\u4E00\u4E2A\u5468\u671F\uFF0C\u8FDE\u7EED\u7B7E\u5230\u5929\u6570\u8D8A\u591A\uFF0C\u83B7\u5F97\u91D1\u5E01\u8D8A\u591A\u3002"),
          createElementVNode("u-text", { class: "text" }, "3.\u65AD\u7B7E\u56DE\u5230\u7B2C\u4E00\u5929\u91CD\u65B0\u8BB0\u5F55\u3002")
        ]),
        createVNode(_component_uni_transition, {
          ref: "ani",
          class: "siginPopBg",
          "custom-class": "transition",
          "mode-class": "fade",
          show: $data.siginShow
        }, {
          default: withCtx(() => [
            createElementVNode("view", { class: "siginPopBox" }, [
              createElementVNode("u-image", {
                class: "popImg",
                src: "https://test-static01.pomoho.com/videoSc/qiandao.png"
              }),
              createElementVNode("view", { class: "siginPop" }, [
                createElementVNode("u-text", { class: "" }, "\u5DF2\u8FDE\u7EED\u7B7E\u52301\u5929\uFF0C\u83B7\u5F9748\u91D1\u5E01")
              ]),
              createVNode(_component_button, {
                class: "button",
                type: "primary",
                onClick: $options.seeVideo
              }, {
                default: withCtx(() => [
                  createTextVNode("\u770B\u89C6\u9891\u518D\u988650\u91D1\u5E01")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_uni_icons, {
                class: "closePop",
                type: "close",
                color: "#dedede",
                size: "30",
                onClick: $options.closePop
              }, null, 8, ["onClick"])
            ])
          ]),
          _: 1
        }, 8, ["show"])
      ])
    ], 4)
  ]);
}
var sigin = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Money/sigin/sigin.nvue"]]);
export { sigin as default };
