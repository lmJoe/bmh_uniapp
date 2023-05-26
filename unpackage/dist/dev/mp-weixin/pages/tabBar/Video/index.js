"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_request = require("../../../utils/request.js");
var utils_untis = require("../../../utils/untis.js");
require("../../../utils/ajax.js");
require("../../../utils/api.js");
const lazyLoad = () => "../../../uni_modules/muqian-lazyLoad/components/muqian-lazyLoad/muqian-lazyLoad.js";
const _sfc_main = {
  components: {
    lazyLoad
  },
  data() {
    return {
      leftList: [],
      rightList: [],
      leftH: 0,
      rightH: 0,
      videoList: [],
      loadMoreText: "\u52A0\u8F7D\u4E2D...",
      showLoadMore: false,
      max: 0,
      pageIndex: 1,
      pageSize: 10,
      videosuList: [
        "https://test-static01.pomoho.com/aaa.mp4",
        "https://test-static01.pomoho.com/videoSc/1.mp4",
        "https://test-static01.pomoho.com/videoSc/2.mp4",
        "https://test-static01.pomoho.com/videoSc/3.mp4",
        "https://test-static01.pomoho.com/videoSc/4.mp4",
        "https://test-static01.pomoho.com/videoSc/5.mp4",
        "https://test-static01.pomoho.com/videoSc/6.mp4",
        "https://test-static01.pomoho.com/videoSc/7.mp4"
      ]
    };
  },
  onLoad() {
    this.getVideoList();
  },
  onUnload() {
    this.max = 0, this.videoList = [], this.loadMoreText = "\u52A0\u8F7D\u66F4\u591A", this.showLoadMore = false;
  },
  onReachBottom() {
    console.log("onReachBottom");
    if (this.max > 40) {
      this.loadMoreText = "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86!";
      return;
    }
    this.showLoadMore = true;
    setTimeout(() => {
      this.setListData();
    }, 300);
  },
  onPullDownRefresh() {
    console.log("onPullDownRefresh");
    this.pageIndex = 1;
    this.leftList = [];
    this.rightList = [];
    this.getVideoList();
  },
  methods: {
    getVideoList() {
      utils_request.getVideoList(this.pageIndex, this.pageSize, "53ff9daa-a783-4da3-b8c0-587bae0c77ad", (response) => {
        if (response.code == 1) {
          let videoData = response.data;
          for (let i in videoData) {
            videoData[i].Duration = utils_untis.changeHourMinutestr(videoData[i].Duration);
            videoData[i].CoverImgs = videoData[i].CoverImgs.replace("baomihua", "pomoho");
            videoData[i].HeadImg = videoData[i].HeadImg.replace("baomihua", "pomoho");
            videoData[i].Link = utils_untis.getRandomArrayElements(this.videosuList, 1);
            common_vendor.index.getImageInfo({
              src: videoData[i].CoverImgs,
              success: (image) => {
                videoData[i].Imgheight = image.height + "rpx";
                videoData[i].Imgwidth = image.width + "rpx";
                let showH = 50 * image.height / image.width;
                if (this.leftH <= this.rightH) {
                  this.leftList.push(videoData[i]);
                  this.leftH += showH;
                } else {
                  this.rightList.push(videoData[i]);
                  this.rightH += showH;
                }
              }
            });
          }
          this.videoList = videoData;
          common_vendor.index.stopPullDownRefresh();
          console.log("this.videoList", this.videoList);
          console.log("this.leftList", this.leftList);
          console.log("this.rightList", this.rightList);
        }
      });
    },
    setListData() {
      setTimeout(() => {
        this.pageIndex = this.pageIndex + 1;
        this.getVideoList();
      }, 500);
    },
    smallVideo(item) {
      common_vendor.index.navigateTo({
        url: "./smallVideo/smallVideo?id=" + item.PlayId
      });
    }
  }
};
if (!Array) {
  const _component_lazyLoad = common_vendor.resolveComponent("lazyLoad");
  _component_lazyLoad();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.leftList, (item, index, i0) => {
      return {
        a: "69fc6f50-0-" + i0,
        b: common_vendor.p({
          src: item.CoverImgs,
          height: item.Imgheight,
          mode: "widthFix"
        }),
        c: common_vendor.t(item.Title),
        d: index,
        e: common_vendor.o(($event) => $options.smallVideo(item))
      };
    }),
    b: common_vendor.f($data.rightList, (item, index, i0) => {
      return {
        a: "69fc6f50-1-" + i0,
        b: common_vendor.p({
          src: item.CoverImgs,
          height: item.Imgheight,
          mode: "widthFix"
        }),
        c: common_vendor.t(item.Title),
        d: index,
        e: common_vendor.o(($event) => $options.smallVideo(item))
      };
    }),
    c: $data.showLoadMore
  }, $data.showLoadMore ? {
    d: common_vendor.t($data.loadMoreText)
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-69fc6f50"], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Video/index.nvue"]]);
wx.createPage(MiniProgramPage);
