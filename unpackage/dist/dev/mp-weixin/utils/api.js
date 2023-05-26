"use strict";
const DOMAIN_PREFIX = "https://push-common.pomoho.com:8081";
const DOMAIN_VIDEOURL = "http://play.pomoho.com";
const WX_API_BASE = DOMAIN_PREFIX;
const WX_API_BASE_VIDEOUR = DOMAIN_VIDEOURL;
var URL = {
  appkey: "39FB7E4E4A3C4ED7835CB6527DB89FE9",
  cId: 19,
  ai: "7917765ad5c8416999c4d31c1f56aa41",
  getVideoList: WX_API_BASE + "/api/cds/getVideoPageList",
  getChannelList: WX_API_BASE + "/api/cds/getShowChannelList",
  getVideoInfo: WX_API_BASE + "/api/video/getVideoInfo",
  getContentList: WX_API_BASE + "/api/cms/getContentList",
  getvideourl: WX_API_BASE_VIDEOUR + "/getvideourl.aspx"
};
exports.URL = URL;
