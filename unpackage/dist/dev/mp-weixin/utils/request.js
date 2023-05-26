"use strict";
var common_vendor = require("../common/vendor.js");
var utils_ajax = require("./ajax.js");
var utils_api = require("./api.js");
var utils_untis = require("./untis.js");
function getChannelList(callback) {
  let data = {
    appKey: utils_api.URL.appkey
  };
  let header = {
    ContentType: "application/x-www-form-urlencoded"
  };
  utils_ajax.request(utils_api.URL.getChannelList, data, header, "POST").then((res) => {
    callback(res);
  }).catch((res) => {
    common_vendor.index.showToast({ title: res, icon: "none" });
  });
}
function getVideoList(pageIndex, pageSize, channelId, callback) {
  common_vendor.index.showLoading({
    title: "\u52A0\u8F7D\u4E2D..."
  });
  let ts = parseInt(new Date().getTime() / 1e3);
  let rd = utils_untis.getRandomNum(5, 50);
  var data = {
    appKey: utils_api.URL.appkey,
    pageSize,
    pageIndex,
    channelId,
    ts,
    rd,
    tk: common_vendor.Md5(`${ts}_${rd}_${utils_api.URL.appkey}_${pageSize}`).toUpperCase()
  };
  let header = {
    ContentType: "application/x-www-form-urlencoded"
  };
  utils_ajax.request(utils_api.URL.getVideoList, data, header, "POST").then((res) => {
    common_vendor.index.hideLoading();
    callback(res);
  }).catch((res) => {
    common_vendor.index.hideLoading();
    common_vendor.index.showToast({ title: res, icon: "none" });
  });
}
function getVideoInfo(videoId, callback) {
  common_vendor.index.showLoading({
    title: "\u52A0\u8F7D\u4E2D..."
  });
  let ts = parseInt(new Date().getTime());
  var data = {
    videoId,
    date: ts
  };
  let header = {
    ContentType: "application/x-www-form-urlencoded"
  };
  utils_ajax.request(utils_api.URL.getVideoInfo, data, header, "GET").then((res) => {
    common_vendor.index.hideLoading();
    callback(res);
  }).catch((res) => {
    common_vendor.index.hideLoading();
    common_vendor.index.showToast({ title: res, icon: "none" });
  });
}
exports.getChannelList = getChannelList;
exports.getVideoInfo = getVideoInfo;
exports.getVideoList = getVideoList;
