"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/shared.esm-bundler.js
  Object.freeze({});
  Object.freeze([]);
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/uni-shared.es.js
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/index.js
  function getLocalFilePath(path) {
    if (path.indexOf("_www") === 0 || path.indexOf("_doc") === 0 || path.indexOf("_documents") === 0 || path.indexOf("_downloads") === 0) {
      return path;
    }
    if (path.indexOf("file://") === 0) {
      return path;
    }
    if (path.indexOf("/storage/emulated/0/") === 0) {
      return path;
    }
    if (path.indexOf("/") === 0) {
      var localFilePath = plus.io.convertAbsoluteFileSystem(path);
      if (localFilePath !== path) {
        return localFilePath;
      } else {
        path = path.substr(1);
      }
    }
    return "_www/" + path;
  }
  function pathToBase64(path) {
    return new Promise(function(resolve, reject) {
      if (typeof window === "object" && "document" in window) {
        if (typeof FileReader === "function") {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", path, true);
          xhr.responseType = "blob";
          xhr.onload = function() {
            if (this.status === 200) {
              let fileReader = new FileReader();
              fileReader.onload = function(e) {
                resolve(e.target.result);
              };
              fileReader.onerror = reject;
              fileReader.readAsDataURL(this.response);
            }
          };
          xhr.onerror = reject;
          xhr.send();
          return;
        }
        var canvas = document.createElement("canvas");
        var c2x = canvas.getContext("2d");
        var img = new Image();
        img.onload = function() {
          canvas.width = img.width;
          canvas.height = img.height;
          c2x.drawImage(img, 0, 0);
          resolve(canvas.toDataURL());
          canvas.height = canvas.width = 0;
        };
        img.onerror = reject;
        img.src = path;
        return;
      }
      if (typeof plus === "object") {
        plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function(entry) {
          entry.file(function(file) {
            var fileReader = new plus.io.FileReader();
            fileReader.onload = function(data) {
              resolve(data.target.result);
            };
            fileReader.onerror = function(error) {
              reject(error);
            };
            fileReader.readAsDataURL(file);
          }, function(error) {
            reject(error);
          });
        }, function(error) {
          reject(error);
        });
        return;
      }
      if (typeof wx === "object" && wx.canIUse("getFileSystemManager")) {
        wx.getFileSystemManager().readFile({
          filePath: path,
          encoding: "base64",
          success: function(res) {
            resolve("data:image/png;base64," + res.data);
          },
          fail: function(error) {
            reject(error);
          }
        });
        return;
      }
      reject(new Error("not support"));
    });
  }

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/pages/tabBar/Money/index.js
  var import_vue = __toESM(require_vue());

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/pages/tabBar/Money/index.js
  var _style_0 = { "moneyTop": { ".MoneyPage ": { "width": 100, "height": "363rpx", "alignItems": "center", "position": "relative" } }, "headDom": { ".MoneyPage .moneyTop ": { "marginTop": "72rpx" } }, "uni-header-image": { ".MoneyPage .moneyTop .headDom ": { "width": "112rpx", "height": "112rpx" } }, "headTip": { ".MoneyPage .moneyTop ": { "fontSize": "32rpx", "color": "#2D1E01", "textAlign": "center", "marginTop": "21rpx" } }, "signPrompt": { ".MoneyPage .moneyTop ": { "marginTop": "34rpx", "backgroundColor": "#ffffff", "width": "686rpx", "borderRadius": "16rpx", "boxShadow": "0rpx 3rpx 13rpx 0px #F2F2F2", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center", "paddingTop": "38rpx", "paddingRight": "31rpx", "paddingBottom": "38rpx", "paddingLeft": "31rpx", "fontSize": "30rpx", "color": "#222222", "zIndex": 5 } }, "goPrompt": { ".MoneyPage .moneyTop .signPrompt ": { "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center", "fontSize": "24rpx", "color": "#999999" } }, "jiantou": { ".MoneyPage .moneyTop .signPrompt .goPrompt ": { "width": "12rpx", "height": "24rpx", "marginLeft": "10rpx" } }, "goldtaskList": { ".MoneyPage ": { "marginBottom": "45rpx", "paddingTop": "64rpx", "paddingRight": "22rpx", "paddingBottom": 0, "paddingLeft": "22rpx", "backgroundColor": "#ffffff" } }, "listTitle": { ".MoneyPage .goldtaskList ": { "fontSize": "32rpx", "color": "#222222", "paddingTop": 0, "paddingRight": "7rpx", "paddingBottom": "35rpx", "paddingLeft": 0 } }, "list": { ".MoneyPage .goldtaskList ": { "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center", "paddingTop": "34rpx", "paddingRight": "11rpx", "paddingBottom": "32rpx", "paddingLeft": "11rpx", "borderBottomWidth": "1rpx", "borderBottomStyle": "solid", "borderBottomColor": "#EAEAEA" } }, "titleIntro": { ".MoneyPage .goldtaskList .list .listIntro ": { "fontSize": "24rpx", "color": "#999999" } }, "goldBox": { ".MoneyPage .goldtaskList .list .listIntro ": { "display": "flex", "flexDirection": "row", "alignItems": "center", "fontSize": "24rpx", "borderRadius": "50rpx", "paddingRight": "13rpx", "height": "34rpx" } }, "progress": { ".MoneyPage .goldtaskList .list .listIntro ": { "marginTop": "23rpx", "position": "relative", "width": "180rpx" } }, "progressValue": { ".MoneyPage .goldtaskList .list .listIntro .progress ": { "width": 100, "position": "absolute", "top": 0, "left": 35, "right": 0, "fontSize": "18rpx" } }, "GoSee": { ".MoneyPage .goldtaskList .list ": { "width": "134rpx", "height": "56rpx", "lineHeight": "56rpx", "fontSize": "26rpx", "color": "#FF4B45", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#FF4B45", "borderRadius": "50rpx", "textAlign": "center" } }, "uni-progress-bar": { "": { "borderRadius": "15rpx", "width": "180rpx", "height": "22rpx" } }, "uni-progress-inner-bar": { "": { "borderTopLeftRadius": "15rpx", "borderTopRightRadius": "0rpx", "borderBottomRightRadius": "0rpx", "borderBottomLeftRadius": "15rpx", "paddingLeft": 0 } }, "uni-list-item__container": { "": { "flexDirection": "column" } } };
  var _sfc_main = {
    data() {
      return {
        taskImg1: "../../../static/gold/gold.png",
        taskImg2: "../../../static/gold/spin.png",
        taskImg3: "../../../static/gold/red.png",
        bgImg: "../../../static/gold/bg.png",
        listData: [
          {
            taskid: 1,
            title: "\u5168\u6C11\u5077\u91D1\u5E01",
            rewardGold: 300,
            intro: "\u6BCF\u5929\u90FD\u80FD\u201C\u5077\u201D\uFF0C\u70B9\u51FB\u7ACB\u8D5A",
            taskType: 1,
            goSeeText: "\u53BB\u770B\u770B",
            completeNum: 0,
            taskNum: 12
          },
          {
            taskid: 2,
            title: "\u5E78\u8FD0\u5927\u62BD\u5956",
            rewardGold: 0,
            intro: "\u70B9\u51FB\u62BD\u5956\uFF0C\u60CA\u559C\u7B49\u4F60\u6765",
            taskType: 2,
            goSeeText: "\u53BB\u62BD\u5956",
            proessValue: "",
            completeNum: 0,
            taskNum: 0
          },
          {
            taskid: 3,
            title: "\u7EA2\u5305\u6EDA\u6EDA\u6765",
            rewardGold: 0,
            intro: "\u5927\u5956\u7B49\u4F60\u9886\uFF0C\u7EA2\u5305\u6EDA\u6EDA\u6765",
            taskType: 2,
            goSeeText: "\u9886\u7EA2\u5305",
            proessValue: "",
            completeNum: 0,
            taskNum: 0
          },
          {
            taskid: 4,
            title: "\u89C2\u770B\u89C6\u9891",
            rewardGold: 5e3,
            intro: "\u89C2\u770B\u89C6\u9891\uFF0C\u6BCF\u65E5\u53EF\u8D5A5000\u91D1\u5E01",
            taskType: 1,
            goSeeText: "\u53BB\u770B\u770B",
            proessValue: "",
            completeNum: 0,
            taskNum: 60
          },
          {
            taskid: 5,
            title: "\u89C2\u770B\u5C0F\u89C6\u9891",
            rewardGold: 3e3,
            intro: "\u5237\u4E00\u5237\uFF0C\u6BCF\u65E5\u53EF\u8D5A3000\u91D1\u5E01",
            taskType: 1,
            goSeeText: "\u5237\u4E00\u5237",
            proessValue: "",
            completeNum: 0,
            taskNum: 60
          },
          {
            taskid: 6,
            title: "\u8BD5\u73A9\u5C0F\u6E38\u620F",
            rewardGold: 300,
            intro: "\u73A93\u5206\u949F\u6E38\u620F\u5373\u53EF\u83B7\u5F97\u91D1\u5E01\u5956\u52B1",
            taskType: 1,
            goSeeText: "\u73A9\u4E00\u73A9",
            proessValue: "",
            completeNum: 0,
            taskNum: 0
          },
          {
            taskid: 7,
            title: "\u5F00\u5B9D\u7BB1",
            rewardGold: 500,
            intro: "\u6BCF\u6B21\u6700\u591A\u53EF\u4EE5\u8D5A500\u91D1\u5E01",
            taskType: 1,
            goSeeText: "\u5F00\u5B9D\u7BB1",
            proessValue: "",
            completeNum: 0,
            taskNum: 0
          }
        ]
      };
    },
    mounted() {
      pathToBase64(this.taskImg1).then((base64) => {
        this.taskImg1 = base64;
      }).catch((error) => {
        formatAppLog("error", "at pages/tabBar/Money/index.nvue:144", error);
      });
      pathToBase64(this.taskImg2).then((base64) => {
        this.taskImg2 = base64;
      }).catch((error) => {
        formatAppLog("error", "at pages/tabBar/Money/index.nvue:151", error);
      });
      pathToBase64(this.taskImg3).then((base64) => {
        this.taskImg3 = base64;
      }).catch((error) => {
        formatAppLog("error", "at pages/tabBar/Money/index.nvue:158", error);
      });
      pathToBase64(this.bgImg).then((base64) => {
        this.bgImg = base64;
      }).catch((error) => {
        formatAppLog("error", "at pages/tabBar/Money/index.nvue:165", error);
      });
    },
    methods: {
      goPrompt() {
        uni.navigateTo({
          url: "./sigin/sigin"
        });
      },
      login() {
        uni.navigateTo({
          url: "../../../components/login"
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_progress = (0, import_vue.resolveComponent)("progress");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "MoneyPage" }, [
        (0, import_vue.createElementVNode)("view", {
          class: "moneyTop",
          style: (0, import_vue.normalizeStyle)({
            "background-image": `url(${$data.bgImg})`,
            "background-color": "rgb(255,255,255)",
            "background-repeat": "no-repeat",
            "background-size": "100%",
            "background-position": "center center"
          })
        }, [
          (0, import_vue.createElementVNode)("view", {
            class: "uni-header-logo headDom",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.login && $options.login(...args))
          }, [
            (0, import_vue.createElementVNode)("u-image", {
              class: "uni-header-image",
              src: "/static/gold/head.png"
            })
          ]),
          (0, import_vue.createElementVNode)("u-text", {
            class: "headTip",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.login && $options.login(...args))
          }, "\u767B\u5F55\u8D5A\u91D1\u5E01"),
          (0, import_vue.createElementVNode)("view", { class: "signPrompt" }, [
            (0, import_vue.createElementVNode)("view", { class: "text" }, [
              (0, import_vue.createElementVNode)("u-text", null, "\u4ECA\u65E5\u672A\u7B7E\u5230")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "text goPrompt",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.goPrompt && $options.goPrompt(...args))
            }, [
              (0, import_vue.createElementVNode)("u-text", null, "\u53BB\u7B7E\u5230"),
              (0, import_vue.createElementVNode)("u-image", {
                class: "jiantou",
                src: "/static/gold/icon1.png"
              })
            ])
          ])
        ], 4),
        (0, import_vue.createElementVNode)("view", { class: "goldtaskList" }, [
          (0, import_vue.createElementVNode)("view", { class: "listTitle" }, [
            (0, import_vue.createElementVNode)("u-text", null, "\u65E5\u5E38\u4EFB\u52A1")
          ]),
          ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(import_vue.Fragment, null, (0, import_vue.renderList)($data.listData, (item, index2) => {
            return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
              class: "list",
              key: index2
            }, [
              (0, import_vue.createElementVNode)("view", { class: "listIntro" }, [
                (0, import_vue.createElementVNode)("view", { style: { "display": "flex", "flex-direction": "row", "margin-bottom": "20rpx", "align-items": "center" } }, [
                  (0, import_vue.createElementVNode)("u-text", { style: { "font-size": "32rpx", "color": "#222222", "margin-right": "28rpx" } }, (0, import_vue.toDisplayString)(item.title), 1),
                  (0, import_vue.createElementVNode)("view", {
                    class: "goldBox",
                    style: (0, import_vue.normalizeStyle)({ background: item.taskType === 1 ? "#FFF2C7" : "transparent" })
                  }, [
                    (0, import_vue.createElementVNode)("u-image", {
                      class: "slot-image",
                      style: { "width": "36rpx", "height": "36rpx" },
                      src: item.taskType == 1 ? $data.taskImg1 : item.taskid == 2 ? $data.taskImg2 : item.taskid == 3 ? $data.taskImg3 : "",
                      mode: "widthFix"
                    }, null, 8, ["src"]),
                    item.taskType == 1 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
                      key: 0,
                      style: { "color": "#F87B00" }
                    }, "+" + (0, import_vue.toDisplayString)(item.rewardGold), 1)) : (0, import_vue.createCommentVNode)("v-if", true)
                  ], 4)
                ]),
                (0, import_vue.createElementVNode)("u-text", { class: "slot-box slot-text titleIntro" }, (0, import_vue.toDisplayString)(item.intro), 1),
                item.taskNum > 0 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                  key: 0,
                  class: "progress-box progress"
                }, [
                  (0, import_vue.createVNode)(_component_progress, {
                    percent: _ctx.progress,
                    activeColor: "#FF4B45",
                    "stroke-width": "11",
                    backgroundColor: "#F9EDED",
                    "border-radius": "100",
                    active: "true",
                    "active-mode": "forwards"
                  }, null, 8, ["percent"]),
                  (0, import_vue.createElementVNode)("u-text", { class: "progressValue" }, (0, import_vue.toDisplayString)(item.completeNum) + "/" + (0, import_vue.toDisplayString)(item.taskNum), 1)
                ])) : (0, import_vue.createCommentVNode)("v-if", true)
              ]),
              (0, import_vue.createElementVNode)("view", { class: "GoSee" }, [
                (0, import_vue.createElementVNode)("u-text", null, (0, import_vue.toDisplayString)(item.goSeeText), 1)
              ])
            ]);
          }), 128))
        ])
      ])
    ]);
  }
  var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Money/index.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/tabBar/Money/index";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    index.mpType = "page";
    const app = Vue.createPageApp(index, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...index.styles || []]));
    app.mount("#root");
  }
})();
