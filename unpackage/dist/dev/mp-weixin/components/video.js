"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    data: Array
  },
  data() {
    return {
      src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v",
      fil: true,
      barrageMsg: "",
      danmuList: [
        {
          text: "\u7B2C 1s \u51FA\u73B0\u7684\u5F39\u5E55",
          color: "#ff0000",
          time: 1
        },
        {
          text: "\u7B2C 3s \u51FA\u73B0\u7684\u5F39\u5E55",
          color: "#ff00ff",
          time: 3
        }
      ]
    };
  },
  created() {
    this.myVideo = common_vendor.index.createVideoContext("videoContext");
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
    sendDanmu: function() {
      this.myVideo.sendDanmu({
        text: this.barrageMsg,
        color: this.getRandomColor()
      });
      this.barrageMsg = "";
    },
    getRandomColor: function() {
      const rgb = [];
      for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16);
        color = color.length == 1 ? "0" + color : color;
        rgb.push(color);
      }
      return "#" + rgb.join("");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src,
    b: _ctx.CoverImgs,
    c: $data.danmuList,
    d: common_vendor.o((...args) => _ctx.onstart && _ctx.onstart(...args)),
    e: common_vendor.o((...args) => _ctx.onpause && _ctx.onpause(...args)),
    f: common_vendor.o((...args) => _ctx.onfinish && _ctx.onfinish(...args)),
    g: common_vendor.o((...args) => _ctx.onfail && _ctx.onfail(...args)),
    h: common_vendor.o((...args) => _ctx.waiting && _ctx.waiting(...args)),
    i: common_vendor.o((...args) => $options.timeupdate && $options.timeupdate(...args)),
    j: common_vendor.o((...args) => _ctx.fullscreenchange && _ctx.fullscreenchange(...args)),
    k: $data.barrageMsg,
    l: common_vendor.o(($event) => $data.barrageMsg = $event.detail.value),
    m: common_vendor.o((...args) => $options.sendDanmu && $options.sendDanmu(...args)),
    n: common_vendor.t($props.data.Title),
    o: $props.data.HeadImg,
    p: common_vendor.t($props.data.UserName),
    q: common_vendor.t($props.data.PlayNum),
    r: common_vendor.t($props.data.LikeNum),
    s: common_vendor.o((...args) => $options.likeClick && $options.likeClick(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-457e2a60"], ["__file", "E:/gitproject/bmh_uniapp/components/video.vue"]]);
wx.createComponent(Component);
