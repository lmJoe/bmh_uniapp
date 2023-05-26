"use strict";
var common_vendor = require("../../../../common/vendor.js");
var utils_untis = require("../../../../utils/untis.js");
const _sfc_main = {
  data() {
    return {
      src: "https://test-static01.pomoho.com/videoSc/1.mp4",
      fil: true,
      title: "\u6BCF\u6708\u7ED9\u4F603\u4E07\u4F4F\u5728\u5927\u5C71\u91CC5\u5E74\u6CA1\u6709\u624B\u673A\u6CA1\u6709\u7F51",
      HeadImg: "https://test-static01.pomoho.com/videoSc/1.webp",
      UserName: "\u840C\u65B0\u5C0F\u53EF\u7231",
      attentYes: "https://test-static01.pomoho.com/videoSc/icon1.png",
      attentNo: "https://test-static01.pomoho.com/videoSc/icon2.png",
      checked: false,
      contentText: {
        contentDefault: "\u5173\u6CE8",
        contentFav: "\u5DF2\u5173\u6CE8"
      },
      inputValue: "",
      likeNum: 12e3,
      likeColor: false,
      likeShow: false,
      likeImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABB5JREFUeF7tmk2IHEUUx39v8Ct4yCWCCEICG4VNQEQj+IkoKC47M7sriseA4AcxBkH8iCFGZBVdBNlEMRE/Dl5EQjLVSyRgiESiB5NL4tEIEjzF016M6zpPpnZ23STdUzU9Nd0zPVPXfv3e//36VdXr6hYGfMiA588QwLACBpzAcAoMeAEMF8GOp4A+wvVcyyiwCWEUZRMlFlAuIFxAOSKGk2krTcs8BoxQYiPKCMLfK77hBAv8JN8yn9Z/agBaZQxlApgE1jkEnAPmgM/FcMYlVitMoTwOTCFc57BfQDhKnQMS2RhtjbYBaIU9YBO/ra1IS8Z/AXupMytz/HH5/VpmHOFV4L4UvkGIgBmp8YPv/d4AbKmvYR/KVl/niXbC7yjTYvi0YaNlNlBidyDf/6DsEsP7Pjq9AGjVzu0DwL0+Ttuw+Qo4D7zexj2+pt+I4UmXsROAVqgAn3nMc1esPK47IbQEoGPcyFV2Po3koT5QzMbC+3SSr9YAqsyibA8kJE83VTGYOAGJAOz+KxzJU3XA2CfFxO8syQAqnADuDygib1fPirEL+SUjFoCO8zAlvstbceD4p8Vwpx+AKtMoOwMLyN+d8JTU+Hq1kPgKqPCL7e2LNz4SwwstAegkm/mXs8XL3WZ0RsylLfwVFdDs9d8sKACY52r5nsXl/AYPgHKDRPw5uABgoxh+HWQAW8RwagigSWDQ1oBF5lnTehEc525K/FjQXeBnMdzl0wg1jqtuKhwEYb/UeM4HwH7gmcIBUMqXH5zGt8IT3EH9/5WyECCESGr2dMv9Ntiw0ArFqoKYp9/IM/k8YIL11DkOrC9ABRwSw1RcHq2PxMpsRfiizwGco8SjcpjGx5krhs+p8D5gW99CEKakxqEk/U4AzfXgGPBQH0J4S4z9kpU4vABYCGWOIzzYRxB2i+Ftl15vAH0FQdglNaZdybfcBZJu7oNK2CmGd32STwWgpytBeU0i3vNNPjWAHoXwihhm2km+IwA9BuFlMXzQbvIdA+gJCMpLEvFhmuSDAMgVgrBDasymTT4YgJwgbBdDo0vtaLTVB7giZbZFKtsk4mOXHp/rYQHsocRpjnW5Y3xeDJ/4JOdjExSAnQpPcA0XOdolCLGfuH0STbIJDsBCWPp5ci4ohIBlvxpGVwA0K2EtFzkcBILyokTs7eRJZ1oBy8G0zDqEg8ADqcV3uM+74natAlYgLP1p1oBwj0tMzPXUHZ5vrK4DsNOhys2ohbDFVxgpXmy8fa8yzARAs1Ha0JwOtzuFKm9IxDtOuwAGmQGwECa5hUUOImxuod3rJCdA7tZFpgCa02GUOjMIYzFJOM/wQiW+7CdzACuL49Jv97cCa4HfUE5JxJehE3T5yw2AS1hW14cAsiLdq3GGFdCrTyYrXQNfAf8BAiQVULKAgloAAAAASUVORK5CYII="
    };
  },
  created() {
    this.myVideo = common_vendor.index.createVideoContext("videoContext");
    this.likeNum = utils_untis.numFormat(this.likeNum);
  },
  onReady: function(res) {
  },
  methods: {
    likeClick() {
    },
    timeupdate(e) {
    },
    play() {
      this.myVideo.play();
      this.myVideo.requestFullScreen();
    },
    pause() {
      this.myVideo.pause();
    },
    seek() {
      this.myVideo.seek(20);
    },
    stop() {
      this.myVideo.stop();
    },
    fullScreen() {
      this.myVideo.requestFullScreen({
        direction: 90
      });
    },
    fullscreenchange(e) {
      if (!e.detail.fullScreen) {
        this.myVideo.pause();
      }
    },
    favClick(index) {
      this.checked = !this.checked;
      this.$forceUpdate();
    },
    onKeyInput(event) {
      this.inputValue = event.detail.value;
    },
    actionsClick(text) {
      let letter = this.likeNum.replace(/[^a-zA-Z]/g, "");
      let mult = letter == "w" ? 1e4 : 1e3;
      this.likeColor = !this.likeColor;
      this.likeNum = utils_untis.numFormat(Number(this.likeNum.replace(/[a-zA-Z]+/g, "")) * mult + 1);
      if (this.likeColor) {
        this.likeShow = true;
        this.modeClass = "fade";
        setTimeout(() => {
          this.likeShow = false;
        }, 500);
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_fav2 = common_vendor.resolveComponent("uni-fav");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_transition2 = common_vendor.resolveComponent("uni-transition");
  (_easycom_uni_fav2 + _easycom_uni_icons2 + _easycom_uni_transition2)();
}
const _easycom_uni_fav = () => "../../../../uni_modules/uni-fav/components/uni-fav/uni-fav.js";
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_transition = () => "../../../../uni_modules/uni-transition/components/uni-transition/uni-transition.js";
if (!Math) {
  (_easycom_uni_fav + _easycom_uni_icons + _easycom_uni_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src,
    b: _ctx.CoverImgs,
    c: common_vendor.o((...args) => _ctx.onstart && _ctx.onstart(...args)),
    d: common_vendor.o((...args) => _ctx.onpause && _ctx.onpause(...args)),
    e: common_vendor.o((...args) => _ctx.onfinish && _ctx.onfinish(...args)),
    f: common_vendor.o((...args) => _ctx.onfail && _ctx.onfail(...args)),
    g: common_vendor.o((...args) => _ctx.waiting && _ctx.waiting(...args)),
    h: common_vendor.o((...args) => $options.timeupdate && $options.timeupdate(...args)),
    i: common_vendor.o((...args) => $options.fullscreenchange && $options.fullscreenchange(...args)),
    j: $data.HeadImg,
    k: common_vendor.t($data.UserName),
    l: common_vendor.o($options.favClick),
    m: common_vendor.p({
      checked: $data.checked,
      star: false,
      ["fg-color"]: "#ffffff",
      ["bg-color"]: "#F55D58",
      ["bg-color-checked"]: "#F55D58",
      ["content-text"]: $data.contentText,
      circle: true
    }),
    n: common_vendor.t($data.title),
    o: common_vendor.o((...args) => $options.onKeyInput && $options.onKeyInput(...args)),
    p: common_vendor.p({
      type: "chat",
      color: "#ffffff",
      size: "25"
    }),
    q: common_vendor.o(($event) => $options.actionsClick("\u5206\u4EAB")),
    r: common_vendor.p({
      type: "heart-filled",
      color: $data.likeColor ? "#f55d58" : "#fff",
      size: "25"
    }),
    s: common_vendor.t($data.likeNum),
    t: common_vendor.o(($event) => $options.actionsClick("\u5206\u4EAB")),
    v: $data.likeImg,
    w: common_vendor.sr("ani", "678be5ba-3"),
    x: common_vendor.p({
      ["custom-class"]: "transition",
      ["mode-class"]: "fade",
      show: $data.likeShow
    }),
    y: common_vendor.p({
      customPrefix: "customicons",
      type: "fanhui",
      color: "#5e6d82",
      size: "22"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-678be5ba"], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Video/smallVideo/smallVideo.vue"]]);
wx.createPage(MiniProgramPage);
