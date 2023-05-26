"use strict";
var common_vendor = require("../common/vendor.js");
const request = (url, data, option, method = "GET") => {
  return new Promise((resolve, reject) => {
    const token = common_vendor.index.getStorageSync("token");
    let header = {
      "Content-Type": option.ContentType
    };
    if (token) {
      header["Authorization"] = token;
    }
    common_vendor.index.request({
      url,
      data,
      method,
      header,
      success: (res) => {
        if (res.data.code == 200) {
          resolve(res.data);
          reject(res);
        } else if (res.data.code == "") {
          resolve(res.data);
          reject(res);
        } else if (res.statusCode == 200) {
          resolve(res.data);
          reject(res);
        } else {
          common_vendor.index.showToast({ title: res.data.message, icon: "none" });
        }
      },
      fail: (res) => {
        reject(res);
      }
    });
  });
};
exports.request = request;
