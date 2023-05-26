"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/prompt/promptPage.js";
  "./pages/tabBar/Home/index.js";
  "./pages/tabBar/Video/index.js";
  "./pages/tabBar/Money/index.js";
  "./pages/tabBar/Game/index.js";
  "./pages/tabBar/My/index.js";
  "./components/login.js";
  "./components/guide.js";
  "./pages/tabBar/Home/detail/detail.js";
  "./pages/tabBar/Game/fans/fans.js";
  "./pages/tabBar/Money/sigin/sigin.js";
  "./pages/tabBar/Video/smallVideo/smallVideo.js";
}
const _sfc_main = {
  onLaunch: function() {
    setTimeout(() => {
      common_vendor.index.switchTab({
        url: `/pages/tabBar/Home/index`,
        success: () => {
        }
      });
    }, 1e3);
    console.log("App onLaunch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/gitproject/bmh_uniapp/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  const store = common_vendor.createPinia();
  store.use(common_vendor.createUnistorage());
  app.use(store);
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
