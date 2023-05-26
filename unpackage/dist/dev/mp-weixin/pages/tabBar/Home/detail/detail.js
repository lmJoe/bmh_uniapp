"use strict";
var common_vendor = require("../../../../common/vendor.js");
var utils_request = require("../../../../utils/request.js");
var utils_untis = require("../../../../utils/untis.js");
require("../../../../utils/ajax.js");
require("../../../../utils/api.js");
const lazyLoad = () => "../../../../uni_modules/muqian-lazyLoad/components/muqian-lazyLoad/muqian-lazyLoad.js";
const videoItem = () => "../../../../components/video.js";
const _sfc_main = {
  components: {
    videoItem,
    lazyLoad
  },
  data() {
    return {
      Video_ID: "",
      data: "",
      listData: [],
      last_id: "",
      reload: false,
      status: "more",
      pageIndex: 1,
      pageSize: 10,
      adpid: "",
      channelId: "ad11e330-76ae-4c19-818c-6b7a133a5365",
      contentText: {
        contentdown: "\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A",
        contentrefresh: "\u52A0\u8F7D\u4E2D",
        contentnomore: "\u6CA1\u6709\u66F4\u591A"
      }
    };
  },
  mounted() {
    this.getVideoInfo();
  },
  onLoad(e) {
    this.Video_ID = e.id || "";
    this.adpid = this.$adpid;
    this.getVideoList();
  },
  onReachBottom() {
    this.status = "more";
    this.getVideoList();
  },
  methods: {
    getVideoInfo() {
      utils_request.getVideoInfo(this.Video_ID, (response) => {
        console.log(response);
        if (response.code == 1) {
          this.data = response.data;
          console.log(response.data);
          this.getvideourl(response.data.Video_ID);
        }
      });
    },
    getvideourl(Video_ID) {
    },
    getVideoList() {
      if (this.last_id) {
        this.status = "loading";
        this.minId = this.last_id;
        this.pageIndex = this.pageIndex + 1;
      }
      utils_request.getVideoList(this.pageIndex, this.pageSize, this.channelId, (response) => {
        if (response.code == 1) {
          response.data;
          let list = this.setTime(response.data);
          this.listData = this.reload ? list : this.listData.concat(list);
          this.last_id = list[list.length - 1].id;
          this.reload = false;
        }
      });
    },
    goDetail: function(e) {
      let detail = {
        author_name: e.NickName,
        cover: e.CoverImgs.replace("baomihua", "pomoho"),
        id: e.Video_ID,
        post_id: e.PlayId,
        published_at: utils_untis.changeHourMinutestr(e.Duration),
        title: e.Title
      };
      common_vendor.index.navigateTo({
        url: "../list2detail-detail/list2detail-detail?detailDate=" + encodeURIComponent(JSON.stringify(detail))
      });
    },
    setTime: function(items) {
      var newItems = [];
      items.forEach((e) => {
        newItems.push({
          author_name: e.NickName,
          cover: e.CoverImgs.replace("baomihua", "pomoho"),
          id: e.Video_ID,
          post_id: e.PlayId,
          published_at: utils_untis.changeHourMinutestr(e.Duration),
          title: e.Title
        });
      });
      return newItems;
    },
    aderror(e) {
      console.log("aderror: " + JSON.stringify(e.detail));
    }
  }
};
if (!Array) {
  const _component_video_item = common_vendor.resolveComponent("video-item");
  const _component_lazyLoad = common_vendor.resolveComponent("lazyLoad");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_component_video_item + _component_lazyLoad + _easycom_uni_load_more2)();
}
const _easycom_uni_load_more = () => "../../../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      data: $data.data
    }),
    b: common_vendor.o(($event) => $options.goDetail(_ctx.banner)),
    c: common_vendor.f($data.listData, (value, index, i0) => {
      return {
        a: "738af207-1-" + i0,
        b: common_vendor.p({
          src: value.cover,
          height: "160rpx",
          borderRadius: "",
          mode: "scaleToFill"
        }),
        c: common_vendor.t(value.title),
        d: common_vendor.t(value.author_name),
        e: common_vendor.t(value.published_at),
        f: common_vendor.o(($event) => $options.goDetail(value)),
        g: index
      };
    }),
    d: common_vendor.p({
      status: $data.status,
      ["icon-size"]: 16,
      ["content-text"]: $data.contentText
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-738af207"], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Home/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
