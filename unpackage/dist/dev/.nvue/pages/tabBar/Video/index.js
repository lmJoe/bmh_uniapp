import { f as formatAppLog } from "../../../uni-shared.es.js";
import { l as lazyLoad, a as getVideoList, c as changeHourMinutestr, b as getRandomArrayElements } from "../../../muqian-lazyLoad.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, createVNode, createCommentVNode, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import "../../../shared.esm-bundler.js";
var _style_0 = { "videoContainer": { "": { "fontSize": "14rpx", "lineHeight": "24rpx", "display": "flex", "flexDirection": "row" } }, "right": { ".videoContainer ": { "width": 49, "position": "relative" } }, "left": { ".videoContainer ": { "width": 49, "position": "relative", "marginRight": 2 } }, "pullImg": { ".videoContainer .right ": { "width": 100, "marginBottom": "10rpx" }, ".videoContainer .left ": { "width": 100, "marginBottom": "10rpx" } }, "msgInfo": { ".videoContainer .right ": { "position": "absolute", "bottom": "10rpx", "left": "22rpx", "width": 90, "color": "#ffffff", "fontSize": "28rpx", "lineHeight": "32rpx" }, ".videoContainer .left ": { "position": "absolute", "bottom": "10rpx", "left": "22rpx", "width": 90, "color": "#ffffff", "fontSize": "28rpx", "lineHeight": "32rpx" } }, "title": { ".videoContainer .right .msgInfo ": { "marginBottom": "10rpx" }, ".videoContainer .left .msgInfo ": { "marginBottom": "10rpx" } } };
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
    formatAppLog("log", "at pages/tabBar/Video/index.nvue:68", "onReachBottom");
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
    formatAppLog("log", "at pages/tabBar/Video/index.nvue:79", "onPullDownRefresh");
    this.pageIndex = 1;
    this.leftList = [];
    this.rightList = [];
    this.getVideoList();
  },
  methods: {
    getVideoList() {
      getVideoList(this.pageIndex, this.pageSize, "53ff9daa-a783-4da3-b8c0-587bae0c77ad", (response) => {
        if (response.code == 1) {
          let videoData = response.data;
          for (let i in videoData) {
            videoData[i].Duration = changeHourMinutestr(videoData[i].Duration);
            videoData[i].CoverImgs = videoData[i].CoverImgs.replace("baomihua", "pomoho");
            videoData[i].HeadImg = videoData[i].HeadImg.replace("baomihua", "pomoho");
            videoData[i].Link = getRandomArrayElements(this.videosuList, 1);
            uni.getImageInfo({
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
          uni.stopPullDownRefresh();
          formatAppLog("log", "at pages/tabBar/Video/index.nvue:120", "this.videoList", this.videoList);
          formatAppLog("log", "at pages/tabBar/Video/index.nvue:121", "this.leftList", this.leftList);
          formatAppLog("log", "at pages/tabBar/Video/index.nvue:122", "this.rightList", this.rightList);
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
      uni.navigateTo({
        url: "./smallVideo/smallVideo?id=" + item.PlayId
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_lazyLoad = resolveComponent("lazyLoad");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "videoContainer" }, [
      createElementVNode("view", { class: "left" }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.leftList, (item, index2) => {
          return openBlock(), createElementBlock("view", {
            class: "",
            key: index2,
            onClick: ($event) => $options.smallVideo(item)
          }, [
            createVNode(_component_lazyLoad, {
              class: "pullImg",
              src: item.CoverImgs,
              height: item.Imgheight,
              mode: "widthFix"
            }, null, 8, ["src", "height"]),
            createCommentVNode(' <image class="pullImg" v-for="(item,index) in leftList" :key="index" :src="item" alt="" mode="widthFix"></image> '),
            createElementVNode("view", { class: "msgInfo" }, [
              createElementVNode("u-text", { class: "title" }, toDisplayString(item.Title), 1)
            ])
          ], 8, ["onClick"]);
        }), 128))
      ]),
      createElementVNode("view", { class: "right" }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.rightList, (item, index2) => {
          return openBlock(), createElementBlock("view", {
            class: "",
            key: index2,
            onClick: ($event) => $options.smallVideo(item)
          }, [
            createVNode(_component_lazyLoad, {
              class: "pullImg",
              src: item.CoverImgs,
              height: item.Imgheight,
              mode: "widthFix"
            }, null, 8, ["src", "height"]),
            createCommentVNode(' <image class="pullImg" v-for="(item,index) in rightList" :key="index" :src="item" alt="" mode="widthFix"></image> '),
            createElementVNode("view", { class: "msgInfo" }, [
              createElementVNode("u-text", { class: "title" }, toDisplayString(item.Title), 1)
            ])
          ], 8, ["onClick"]);
        }), 128))
      ]),
      $data.showLoadMore ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-loadmore"
      }, [
        createElementVNode("u-text", null, toDisplayString($data.loadMoreText), 1)
      ])) : createCommentVNode("v-if", true)
    ])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Video/index.nvue"]]);
export { index as default };
