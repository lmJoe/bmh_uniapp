var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { f as formatAppLog } from "../../../uni-shared.es.js";
import { defineStore } from "pinia";
import { openBlock, createElementBlock, normalizeStyle, createElementVNode, createCommentVNode, resolveComponent, toDisplayString, createVNode, Fragment, renderList, normalizeClass, withCtx, createBlock } from "vue";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import "../../../shared.esm-bundler.js";
const userStore = defineStore("userStoreTemp", {
  state() {
    return {
      user: {},
      token: {},
      navId: "",
      tabBarIndex: 0
    };
  },
  unistorage: true,
  actions: {
    setNavId(id) {
      this.navId = id;
    },
    setTabIndex(index2) {
      this.tabBarIndex = index2;
    },
    setUserInfo(user) {
      this.user = user;
    },
    updateUserName(userName) {
      this.user.userName = userName;
    },
    updateUserAvator(avator) {
      this.user.portrait = avator;
    }
  }
});
const request = (url, data, option, method2 = "GET") => {
  return new Promise((resolve, reject) => {
    const token = uni.getStorageSync("token");
    let header = {
      "Content-Type": option.ContentType
    };
    if (token) {
      header["Authorization"] = token;
    }
    uni.request({
      url,
      data,
      method: method2,
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
          uni.showToast({ title: res.data.message, icon: "none" });
        }
      },
      fail: (res) => {
        reject(res);
      }
    });
  });
};
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
const getRandomNum = (minnum, maxnum) => {
  var choice = maxnum - minnum + 1;
  return Math.floor(Math.random() * choice + minnum);
};
const changeHourMinutestr = (str) => {
  if (str !== "0" && str !== "" && str !== null) {
    return (Math.floor(str / 60).toString().length < 2 ? "0" + Math.floor(str / 60).toString() : Math.floor(str / 60).toString()) + ":" + ((str % 60).toString().length < 2 ? "0" + parseInt((str % 60).toString()) : parseInt((str % 60).toString()));
  } else {
    return "";
  }
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var md5 = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function(module) {
  (function() {
    var ERROR = "input is invalid type";
    var WINDOW = typeof window === "object";
    var root = WINDOW ? window : {};
    if (root.JS_MD5_NO_WINDOW) {
      WINDOW = false;
    }
    var WEB_WORKER = !WINDOW && typeof self === "object";
    var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
    if (NODE_JS) {
      root = commonjsGlobal;
    } else if (WEB_WORKER) {
      root = self;
    }
    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && true && module.exports;
    var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
    var HEX_CHARS = "0123456789abcdef".split("");
    var EXTRA = [128, 32768, 8388608, -2147483648];
    var SHIFT = [0, 8, 16, 24];
    var OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"];
    var BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    var blocks = [], buffer8;
    if (ARRAY_BUFFER) {
      var buffer = new ArrayBuffer(68);
      buffer8 = new Uint8Array(buffer);
      blocks = new Uint32Array(buffer);
    }
    if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
      Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
      };
    }
    if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
      ArrayBuffer.isView = function(obj) {
        return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
      };
    }
    var createOutputMethod = function(outputType) {
      return function(message) {
        return new Md5(true).update(message)[outputType]();
      };
    };
    var createMethod = function() {
      var method2 = createOutputMethod("hex");
      if (NODE_JS) {
        method2 = nodeWrap(method2);
      }
      method2.create = function() {
        return new Md5();
      };
      method2.update = function(message) {
        return method2.create().update(message);
      };
      for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
        var type = OUTPUT_TYPES[i];
        method2[type] = createOutputMethod(type);
      }
      return method2;
    };
    var nodeWrap = function(method) {
      var crypto = eval("require('crypto')");
      var Buffer = eval("require('buffer').Buffer");
      var nodeMethod = function(message) {
        if (typeof message === "string") {
          return crypto.createHash("md5").update(message, "utf8").digest("hex");
        } else {
          if (message === null || message === void 0) {
            throw ERROR;
          } else if (message.constructor === ArrayBuffer) {
            message = new Uint8Array(message);
          }
        }
        if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
          return crypto.createHash("md5").update(new Buffer(message)).digest("hex");
        } else {
          return method(message);
        }
      };
      return nodeMethod;
    };
    function Md5(sharedMemory) {
      if (sharedMemory) {
        blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
        this.blocks = blocks;
        this.buffer8 = buffer8;
      } else {
        if (ARRAY_BUFFER) {
          var buffer2 = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(buffer2);
          this.blocks = new Uint32Array(buffer2);
        } else {
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
      }
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
      this.finalized = this.hashed = false;
      this.first = true;
    }
    Md5.prototype.update = function(message) {
      if (this.finalized) {
        return;
      }
      var notString, type = typeof message;
      if (type !== "string") {
        if (type === "object") {
          if (message === null) {
            throw ERROR;
          } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
            message = new Uint8Array(message);
          } else if (!Array.isArray(message)) {
            if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
              throw ERROR;
            }
          }
        } else {
          throw ERROR;
        }
        notString = true;
      }
      var code, index2 = 0, i, length = message.length, blocks2 = this.blocks;
      var buffer82 = this.buffer8;
      while (index2 < length) {
        if (this.hashed) {
          this.hashed = false;
          blocks2[0] = blocks2[16];
          blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        if (notString) {
          if (ARRAY_BUFFER) {
            for (i = this.start; index2 < length && i < 64; ++index2) {
              buffer82[i++] = message[index2];
            }
          } else {
            for (i = this.start; index2 < length && i < 64; ++index2) {
              blocks2[i >> 2] |= message[index2] << SHIFT[i++ & 3];
            }
          }
        } else {
          if (ARRAY_BUFFER) {
            for (i = this.start; index2 < length && i < 64; ++index2) {
              code = message.charCodeAt(index2);
              if (code < 128) {
                buffer82[i++] = code;
              } else if (code < 2048) {
                buffer82[i++] = 192 | code >> 6;
                buffer82[i++] = 128 | code & 63;
              } else if (code < 55296 || code >= 57344) {
                buffer82[i++] = 224 | code >> 12;
                buffer82[i++] = 128 | code >> 6 & 63;
                buffer82[i++] = 128 | code & 63;
              } else {
                code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index2) & 1023);
                buffer82[i++] = 240 | code >> 18;
                buffer82[i++] = 128 | code >> 12 & 63;
                buffer82[i++] = 128 | code >> 6 & 63;
                buffer82[i++] = 128 | code & 63;
              }
            }
          } else {
            for (i = this.start; index2 < length && i < 64; ++index2) {
              code = message.charCodeAt(index2);
              if (code < 128) {
                blocks2[i >> 2] |= code << SHIFT[i++ & 3];
              } else if (code < 2048) {
                blocks2[i >> 2] |= (192 | code >> 6) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else if (code < 55296 || code >= 57344) {
                blocks2[i >> 2] |= (224 | code >> 12) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else {
                code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index2) & 1023);
                blocks2[i >> 2] |= (240 | code >> 18) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code >> 12 & 63) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              }
            }
          }
        }
        this.lastByteIndex = i;
        this.bytes += i - this.start;
        if (i >= 64) {
          this.start = i - 64;
          this.hash();
          this.hashed = true;
        } else {
          this.start = i;
        }
      }
      if (this.bytes > 4294967295) {
        this.hBytes += this.bytes / 4294967296 << 0;
        this.bytes = this.bytes % 4294967296;
      }
      return this;
    };
    Md5.prototype.finalize = function() {
      if (this.finalized) {
        return;
      }
      this.finalized = true;
      var blocks2 = this.blocks, i = this.lastByteIndex;
      blocks2[i >> 2] |= EXTRA[i & 3];
      if (i >= 56) {
        if (!this.hashed) {
          this.hash();
        }
        blocks2[0] = blocks2[16];
        blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
      }
      blocks2[14] = this.bytes << 3;
      blocks2[15] = this.hBytes << 3 | this.bytes >>> 29;
      this.hash();
    };
    Md5.prototype.hash = function() {
      var a, b, c, d, bc, da, blocks2 = this.blocks;
      if (this.first) {
        a = blocks2[0] - 680876937;
        a = (a << 7 | a >>> 25) - 271733879 << 0;
        d = (-1732584194 ^ a & 2004318071) + blocks2[1] - 117830708;
        d = (d << 12 | d >>> 20) + a << 0;
        c = (-271733879 ^ d & (a ^ -271733879)) + blocks2[2] - 1126478375;
        c = (c << 17 | c >>> 15) + d << 0;
        b = (a ^ c & (d ^ a)) + blocks2[3] - 1316259209;
        b = (b << 22 | b >>> 10) + c << 0;
      } else {
        a = this.h0;
        b = this.h1;
        c = this.h2;
        d = this.h3;
        a += (d ^ b & (c ^ d)) + blocks2[0] - 680876936;
        a = (a << 7 | a >>> 25) + b << 0;
        d += (c ^ a & (b ^ c)) + blocks2[1] - 389564586;
        d = (d << 12 | d >>> 20) + a << 0;
        c += (b ^ d & (a ^ b)) + blocks2[2] + 606105819;
        c = (c << 17 | c >>> 15) + d << 0;
        b += (a ^ c & (d ^ a)) + blocks2[3] - 1044525330;
        b = (b << 22 | b >>> 10) + c << 0;
      }
      a += (d ^ b & (c ^ d)) + blocks2[4] - 176418897;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks2[5] + 1200080426;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks2[6] - 1473231341;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks2[7] - 45705983;
      b = (b << 22 | b >>> 10) + c << 0;
      a += (d ^ b & (c ^ d)) + blocks2[8] + 1770035416;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks2[9] - 1958414417;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks2[10] - 42063;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks2[11] - 1990404162;
      b = (b << 22 | b >>> 10) + c << 0;
      a += (d ^ b & (c ^ d)) + blocks2[12] + 1804603682;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks2[13] - 40341101;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks2[14] - 1502002290;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks2[15] + 1236535329;
      b = (b << 22 | b >>> 10) + c << 0;
      a += (c ^ d & (b ^ c)) + blocks2[1] - 165796510;
      a = (a << 5 | a >>> 27) + b << 0;
      d += (b ^ c & (a ^ b)) + blocks2[6] - 1069501632;
      d = (d << 9 | d >>> 23) + a << 0;
      c += (a ^ b & (d ^ a)) + blocks2[11] + 643717713;
      c = (c << 14 | c >>> 18) + d << 0;
      b += (d ^ a & (c ^ d)) + blocks2[0] - 373897302;
      b = (b << 20 | b >>> 12) + c << 0;
      a += (c ^ d & (b ^ c)) + blocks2[5] - 701558691;
      a = (a << 5 | a >>> 27) + b << 0;
      d += (b ^ c & (a ^ b)) + blocks2[10] + 38016083;
      d = (d << 9 | d >>> 23) + a << 0;
      c += (a ^ b & (d ^ a)) + blocks2[15] - 660478335;
      c = (c << 14 | c >>> 18) + d << 0;
      b += (d ^ a & (c ^ d)) + blocks2[4] - 405537848;
      b = (b << 20 | b >>> 12) + c << 0;
      a += (c ^ d & (b ^ c)) + blocks2[9] + 568446438;
      a = (a << 5 | a >>> 27) + b << 0;
      d += (b ^ c & (a ^ b)) + blocks2[14] - 1019803690;
      d = (d << 9 | d >>> 23) + a << 0;
      c += (a ^ b & (d ^ a)) + blocks2[3] - 187363961;
      c = (c << 14 | c >>> 18) + d << 0;
      b += (d ^ a & (c ^ d)) + blocks2[8] + 1163531501;
      b = (b << 20 | b >>> 12) + c << 0;
      a += (c ^ d & (b ^ c)) + blocks2[13] - 1444681467;
      a = (a << 5 | a >>> 27) + b << 0;
      d += (b ^ c & (a ^ b)) + blocks2[2] - 51403784;
      d = (d << 9 | d >>> 23) + a << 0;
      c += (a ^ b & (d ^ a)) + blocks2[7] + 1735328473;
      c = (c << 14 | c >>> 18) + d << 0;
      b += (d ^ a & (c ^ d)) + blocks2[12] - 1926607734;
      b = (b << 20 | b >>> 12) + c << 0;
      bc = b ^ c;
      a += (bc ^ d) + blocks2[5] - 378558;
      a = (a << 4 | a >>> 28) + b << 0;
      d += (bc ^ a) + blocks2[8] - 2022574463;
      d = (d << 11 | d >>> 21) + a << 0;
      da = d ^ a;
      c += (da ^ b) + blocks2[11] + 1839030562;
      c = (c << 16 | c >>> 16) + d << 0;
      b += (da ^ c) + blocks2[14] - 35309556;
      b = (b << 23 | b >>> 9) + c << 0;
      bc = b ^ c;
      a += (bc ^ d) + blocks2[1] - 1530992060;
      a = (a << 4 | a >>> 28) + b << 0;
      d += (bc ^ a) + blocks2[4] + 1272893353;
      d = (d << 11 | d >>> 21) + a << 0;
      da = d ^ a;
      c += (da ^ b) + blocks2[7] - 155497632;
      c = (c << 16 | c >>> 16) + d << 0;
      b += (da ^ c) + blocks2[10] - 1094730640;
      b = (b << 23 | b >>> 9) + c << 0;
      bc = b ^ c;
      a += (bc ^ d) + blocks2[13] + 681279174;
      a = (a << 4 | a >>> 28) + b << 0;
      d += (bc ^ a) + blocks2[0] - 358537222;
      d = (d << 11 | d >>> 21) + a << 0;
      da = d ^ a;
      c += (da ^ b) + blocks2[3] - 722521979;
      c = (c << 16 | c >>> 16) + d << 0;
      b += (da ^ c) + blocks2[6] + 76029189;
      b = (b << 23 | b >>> 9) + c << 0;
      bc = b ^ c;
      a += (bc ^ d) + blocks2[9] - 640364487;
      a = (a << 4 | a >>> 28) + b << 0;
      d += (bc ^ a) + blocks2[12] - 421815835;
      d = (d << 11 | d >>> 21) + a << 0;
      da = d ^ a;
      c += (da ^ b) + blocks2[15] + 530742520;
      c = (c << 16 | c >>> 16) + d << 0;
      b += (da ^ c) + blocks2[2] - 995338651;
      b = (b << 23 | b >>> 9) + c << 0;
      a += (c ^ (b | ~d)) + blocks2[0] - 198630844;
      a = (a << 6 | a >>> 26) + b << 0;
      d += (b ^ (a | ~c)) + blocks2[7] + 1126891415;
      d = (d << 10 | d >>> 22) + a << 0;
      c += (a ^ (d | ~b)) + blocks2[14] - 1416354905;
      c = (c << 15 | c >>> 17) + d << 0;
      b += (d ^ (c | ~a)) + blocks2[5] - 57434055;
      b = (b << 21 | b >>> 11) + c << 0;
      a += (c ^ (b | ~d)) + blocks2[12] + 1700485571;
      a = (a << 6 | a >>> 26) + b << 0;
      d += (b ^ (a | ~c)) + blocks2[3] - 1894986606;
      d = (d << 10 | d >>> 22) + a << 0;
      c += (a ^ (d | ~b)) + blocks2[10] - 1051523;
      c = (c << 15 | c >>> 17) + d << 0;
      b += (d ^ (c | ~a)) + blocks2[1] - 2054922799;
      b = (b << 21 | b >>> 11) + c << 0;
      a += (c ^ (b | ~d)) + blocks2[8] + 1873313359;
      a = (a << 6 | a >>> 26) + b << 0;
      d += (b ^ (a | ~c)) + blocks2[15] - 30611744;
      d = (d << 10 | d >>> 22) + a << 0;
      c += (a ^ (d | ~b)) + blocks2[6] - 1560198380;
      c = (c << 15 | c >>> 17) + d << 0;
      b += (d ^ (c | ~a)) + blocks2[13] + 1309151649;
      b = (b << 21 | b >>> 11) + c << 0;
      a += (c ^ (b | ~d)) + blocks2[4] - 145523070;
      a = (a << 6 | a >>> 26) + b << 0;
      d += (b ^ (a | ~c)) + blocks2[11] - 1120210379;
      d = (d << 10 | d >>> 22) + a << 0;
      c += (a ^ (d | ~b)) + blocks2[2] + 718787259;
      c = (c << 15 | c >>> 17) + d << 0;
      b += (d ^ (c | ~a)) + blocks2[9] - 343485551;
      b = (b << 21 | b >>> 11) + c << 0;
      if (this.first) {
        this.h0 = a + 1732584193 << 0;
        this.h1 = b - 271733879 << 0;
        this.h2 = c - 1732584194 << 0;
        this.h3 = d + 271733878 << 0;
        this.first = false;
      } else {
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
      }
    };
    Md5.prototype.hex = function() {
      this.finalize();
      var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
      return HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15];
    };
    Md5.prototype.toString = Md5.prototype.hex;
    Md5.prototype.digest = function() {
      this.finalize();
      var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
      return [
        h0 & 255,
        h0 >> 8 & 255,
        h0 >> 16 & 255,
        h0 >> 24 & 255,
        h1 & 255,
        h1 >> 8 & 255,
        h1 >> 16 & 255,
        h1 >> 24 & 255,
        h2 & 255,
        h2 >> 8 & 255,
        h2 >> 16 & 255,
        h2 >> 24 & 255,
        h3 & 255,
        h3 >> 8 & 255,
        h3 >> 16 & 255,
        h3 >> 24 & 255
      ];
    };
    Md5.prototype.array = Md5.prototype.digest;
    Md5.prototype.arrayBuffer = function() {
      this.finalize();
      var buffer2 = new ArrayBuffer(16);
      var blocks2 = new Uint32Array(buffer2);
      blocks2[0] = this.h0;
      blocks2[1] = this.h1;
      blocks2[2] = this.h2;
      blocks2[3] = this.h3;
      return buffer2;
    };
    Md5.prototype.buffer = Md5.prototype.arrayBuffer;
    Md5.prototype.base64 = function() {
      var v1, v2, v3, base64Str = "", bytes = this.array();
      for (var i = 0; i < 15; ) {
        v1 = bytes[i++];
        v2 = bytes[i++];
        v3 = bytes[i++];
        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
      }
      v1 = bytes[i];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + "==";
      return base64Str;
    };
    var exports = createMethod();
    if (COMMON_JS) {
      module.exports = exports;
    } else {
      root.md5 = exports;
    }
  })();
})(md5);
var Md5 = md5.exports;
function getChannelList(callback) {
  let data = {
    appKey: URL.appkey
  };
  let header = {
    ContentType: "application/x-www-form-urlencoded"
  };
  request(URL.getChannelList, data, header, "POST").then((res) => {
    callback(res);
  }).catch((res) => {
    uni.showToast({ title: res, icon: "none" });
  });
}
function getVideoList(pageIndex, pageSize, channelId, callback) {
  uni.showLoading({
    title: "\u52A0\u8F7D\u4E2D..."
  });
  let ts = parseInt(new Date().getTime() / 1e3);
  let rd = getRandomNum(5, 50);
  var data = {
    appKey: URL.appkey,
    pageSize,
    pageIndex,
    channelId,
    ts,
    rd,
    tk: Md5(`${ts}_${rd}_${URL.appkey}_${pageSize}`).toUpperCase()
  };
  let header = {
    ContentType: "application/x-www-form-urlencoded"
  };
  request(URL.getVideoList, data, header, "POST").then((res) => {
    uni.hideLoading();
    callback(res);
  }).catch((res) => {
    uni.hideLoading();
    uni.showToast({ title: res, icon: "none" });
  });
}
var loadingImage = "/uni_modules/muqian-lazyLoad/static/loading.png";
var loadFailImage = "/uni_modules/muqian-lazyLoad/static/loadFail.png";
var _style_0$2 = { "muqian-content": { "": { "overflow": "hidden", "position": "relative" } }, "muqian-image": { ".muqian-content ": { "willChange": "transform" } }, "muqain-load": { ".muqian-content ": { "position": "absolute", "left": 0, "top": 0 } } };
let loadTimer = null;
const _sfc_main$2 = {
  name: "muqian-lazyLoad",
  props: {
    borderRadius: {
      type: String,
      default: "0"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    src: {
      type: String,
      default: ""
    },
    minTimeOut: {
      type: String || Number,
      default: "300"
    },
    showDistance: {
      type: Object,
      default: () => {
      }
    },
    effect: {
      type: String,
      default: "linear"
    },
    duration: {
      type: String || Number,
      default: "300"
    },
    loadSrc: {
      type: String,
      default: loadingImage
    },
    errorSrc: {
      type: String,
      default: loadFailImage
    }
  },
  data() {
    return {
      status: 0,
      isShow: false
    };
  },
  watch: {
    src() {
      if (!this.isShow)
        return;
      this.status = 0;
      this.isShow = false;
      this.$nextTick(() => {
        this.status = 1;
      });
    }
  },
  destroyed() {
    this.$emit("destroyed");
  },
  methods: {
    load() {
      if (this.minTimeOut == 0) {
        this.isShow = true;
      } else {
        let newTimer = new Date().getTime() - loadTimer;
        if (newTimer < this.minTimeOut) {
          setTimeout(() => {
            this.isShow = true;
          }, this.minTimeOut - newTimer);
        } else {
          this.isShow = true;
        }
      }
      setTimeout(() => {
        this.$emit("showSuccess");
      }, this.duration);
    },
    error() {
      this.status = 2;
      this.isShow = true;
    },
    init() {
      let intersectionObserver = uni.createIntersectionObserver(this);
      let load = false;
      intersectionObserver.relativeToViewport(this.showDistance).observe(".muqain-load", (res) => {
        if (!load && res.intersectionRatio == 0) {
          load = true;
          return;
        }
        this.$emit("show");
        load = true;
        this.status = 1;
        loadTimer = new Date().getTime();
        intersectionObserver.disconnect();
      });
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "muqian-content",
    style: normalizeStyle({
      width: $props.width,
      height: $props.height
    })
  }, [
    createElementVNode("u-image", {
      src: $props.loadSrc,
      class: "muqian-image muqain-load",
      onLoad: _cache[0] || (_cache[0] = (...args) => $options.init && $options.init(...args)),
      mode: "aspectFill",
      style: normalizeStyle({
        opacity: $data.isShow ? "0" : "1",
        borderRadius: $props.borderRadius,
        width: $props.width,
        height: $props.height,
        transition: `opacity ${$props.duration / 1e3}s ${$props.effect}`
      })
    }, null, 44, ["src"]),
    $data.status == 1 ? (openBlock(), createElementBlock("u-image", {
      key: 0,
      class: "muqian-image",
      onLoad: _cache[1] || (_cache[1] = (...args) => $options.load && $options.load(...args)),
      onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args)),
      src: $props.src,
      mode: "aspectFill",
      style: normalizeStyle({
        opacity: $data.isShow ? "1" : "0",
        borderRadius: $props.borderRadius,
        width: $props.width,
        height: $props.height,
        transition: `opacity ${$props.duration / 1e3}s ${$props.effect}`
      })
    }, null, 44, ["src"])) : createCommentVNode("", true),
    $data.status == 2 ? (openBlock(), createElementBlock("u-image", {
      key: 1,
      class: "muqian-image",
      src: $props.errorSrc,
      mode: "aspectFill",
      style: normalizeStyle({
        opacity: $data.isShow ? "1" : "0",
        borderRadius: $props.borderRadius,
        width: $props.width,
        height: $props.height,
        transition: `opacity ${$props.duration / 1e3}s ${$props.effect}`
      })
    }, null, 12, ["src"])) : createCommentVNode("", true)
  ], 4);
}
var lazyLoad = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]]]);
var _style_0$1 = { "view": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "flex-col": { "": { "flexDirection": "column" } }, "list-cell": { "": { "width": "750rpx", "paddingTop": 0, "paddingRight": "30rpx", "paddingBottom": 0, "paddingLeft": "30rpx" } }, "uni-list-cell-hover": { "": { "backgroundColor": "#eeeeee" } }, "media-item": { "": { "position": "relative", "flex": 1, "flexDirection": "column", "paddingTop": "20rpx", "paddingRight": "30rpx", "paddingBottom": "21rpx", "paddingLeft": "30rpx" } }, "media-item-hover": { "": { "backgroundColor": "#eeeeee" } }, "media-item-line": { "": { "position": "absolute", "left": "30rpx", "right": "30rpx", "bottom": 0, "height": "1rpx", "backgroundColor": "#ebebeb" } }, "media-image-right": { "": { "flexDirection": "row" } }, "media-image-left": { "": { "flexDirection": "row-reverse" } }, "media-title": { "": { "flex": 1, "lines": 3, "textOverflow": "ellipsis", "fontSize": "30rpx", "color": "#ffffff" } }, "media-title2": { "": { "flex": 1, "marginTop": "6rpx", "lineHeight": "40rpx" } }, "image-section": { "": { "flexDirection": "row", "justifyContent": "space-between" } }, "image-section-right": { "": { "marginTop": "0rpx", "marginLeft": "10rpx", "width": "225rpx", "height": "146rpx" } }, "image-section-left": { "": { "marginTop": "0rpx", "marginRight": "10rpx", "width": "225rpx", "height": "146rpx" } }, "image-list1": { "": { "width": "690rpx", "height": "380rpx", "backgroundColor": "#dedede", "borderRadius": "8rpx" } }, "image-list2": { "": { "width": "225rpx", "height": "146rpx" } }, "image-list3": { "": { "width": "225rpx", "height": "146rpx" } }, "media-info": { "": { "flexDirection": "row", "alignItems": "center" } }, "info-text": { "": { "marginRight": "20rpx", "color": "#999999", "fontSize": "24rpx" } }, "headImg": { "": { "!width": "55rpx", "height": "55rpx", "borderRadius": 50, "marginRight": "20rpx" } }, "media-foot": { "": { "marginTop": "25rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "max-close-view": { "": { "position": "relative", "alignItems": "center", "flexDirection": "row", "width": "40rpx", "height": "30rpx", "lineHeight": "30rpx", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#aaaaaa", "borderRadius": 4, "justifyContent": "center", "textAlign": "center" } }, "close-l": { "": { "position": "absolute", "width": "18rpx", "height": "1rpx", "backgroundColor": "#aaaaaa" } }, "close-h": { "": { "transform": "rotate(45deg)" } }, "close-v": { "": { "transform": "rotate(-45deg)" } }, "playerIcon": { "": { "width": "83rpx", "height": "83rpx", "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0 } }, "videoTitle": { "": { "width": 100, "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "position": "absolute", "top": "0rpx", "left": 0, "zIndex": 10, "backgroundImage": "linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,0))", "borderTopLeftRadius": "8rpx", "borderTopRightRadius": "8rpx" } }, "costTime": { "": { "position": "absolute", "bottom": "20rpx", "right": "7rpx", "backgroundColor": "rgba(0,0,0,0.2)", "paddingTop": "10rpx", "paddingRight": "14rpx", "paddingBottom": "10rpx", "paddingLeft": "14rpx", "fontSize": "24rpx", "color": "#ffffff" } } };
const _sfc_main$1 = {
  components: {
    lazyLoad
  },
  props: {
    options: {
      type: Object,
      default: function(e) {
        return {};
      }
    }
  },
  methods: {
    click() {
      this.$emit("click");
    },
    close(e) {
      this.$emit("close");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_lazyLoad = resolveComponent("lazyLoad");
  return $props.options.Title ? (openBlock(), createElementBlock("view", {
    key: 0,
    class: "media-item view",
    hoverClass: "media-item-hover",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
  }, [
    createElementVNode("view", { class: "view videoModule" }, [
      createElementVNode("u-text", { class: "media-title videoTitle" }, toDisplayString($props.options.Title), 1),
      createElementVNode("view", { class: "image-section flex-row" }, [
        createVNode(_component_lazyLoad, {
          src: $props.options.CoverImgs,
          class: "flex poster image-list1",
          height: "380rpx",
          borderRadius: "8px",
          mode: "scaleToFill"
        }, null, 8, ["src"]),
        createElementVNode("u-image", {
          class: "playerIcon",
          src: "/static/home/playicon.png"
        })
      ]),
      createElementVNode("u-text", { class: "info-text costTime" }, toDisplayString($props.options.Duration), 1)
    ]),
    createElementVNode("view", { class: "media-foot flex-row" }, [
      createElementVNode("view", { class: "media-info flex-row" }, [
        createVNode(_component_lazyLoad, {
          class: "headImg",
          src: $props.options.HeadImg,
          height: "55rpx",
          borderRadius: "50%",
          mode: "scaleToFill"
        }, null, 8, ["src"]),
        createElementVNode("u-text", { class: "info-text" }, toDisplayString($props.options.NickName), 1),
        createElementVNode("u-text", { class: "info-text" }, "276\u6761\u8BC4\u8BBA")
      ])
    ]),
    createElementVNode("view", {
      class: "media-item-line",
      style: { "position": "absolute" }
    })
  ])) : createCommentVNode("", true);
}
var mediaItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
var _style_0 = { "tabs": { "": { "flex": 1, "flexDirection": "column", "overflow": "hidden", "backgroundColor": "#ffffff" } }, "scroll-h": { "": { "width": "750rpx", "height": "80rpx", "flexDirection": "row" } }, "line-h": { "": { "height": "1rpx", "backgroundColor": "#cccccc" } }, "uni-tab-item": { "": { "flexWrap": "nowrap", "paddingLeft": "31rpx", "paddingRight": "31rpx" } }, "uni-tab-item-title": { "": { "fontWeight": "bold", "color": "#202020", "fontSize": "32rpx", "height": "80rpx", "lineHeight": "80rpx", "flexWrap": "nowrap" } }, "uni-tab-item-title-active": { "": { "color": "#EA1C24", "fontSize": "38rpx" } }, "swiper-box": { "": { "flex": 1 } }, "swiper-item": { "": { "flex": 1, "flexDirection": "row" } }, "scroll-v": { "": { "flex": 1, "flexDirection": "column", "width": 100 } }, "update-tips": { "": { "position": "absolute", "left": 0, "top": 41, "right": 0, "paddingTop": 5, "paddingBottom": 5, "backgroundColor": "#FDDD9B", "alignItems": "center", "justifyContent": "center", "textAlign": "center" } }, "update-tips-text": { "": { "fontSize": 14, "color": "#ffffff" } }, "refresh": { "": { "width": 100, "height": 64, "justifyContent": "center" } }, "refresh-view": { "": { "flexDirection": "row", "flexWrap": "nowrap", "alignItems": "center", "justifyContent": "center" } }, "refresh-icon": { "": { "width": 30, "height": 30, "transitionDuration": 500, "transitionProperty": "transform", "transform": "rotate(0deg)", "transformOrigin": "15px 15px" } }, "refresh-icon-active": { "": { "transform": "rotate(180deg)" } }, "loading-icon": { "": { "width": 20, "height": 20, "marginRight": 5, "color": "#999999" } }, "loading-text": { "": { "marginLeft": 2, "fontSize": 16, "color": "#999999" } }, "loading-more": { "": { "alignItems": "center", "justifyContent": "center", "paddingTop": 10, "paddingBottom": 10, "textAlign": "center" } }, "loading-more-text": { "": { "fontSize": "28rpx", "color": "#999999" } }, "@TRANSITION": { "refresh-icon": { "duration": 500, "property": "transform" } } };
const MAX_CACHE_DATA = 100;
const MAX_CACHE_PAGE = 3;
const userStoreTemp = userStore();
const _sfc_main = {
  components: {
    mediaItem
  },
  data() {
    return {
      newsList: [],
      cacheTab: [],
      tabIndex: 0,
      tabBars: [],
      scrollInto: "",
      showTips: false,
      navigateFlag: false,
      pulling: false,
      pageIndex: 1,
      pageSize: 10,
      channelId: ""
    };
  },
  onLoad() {
    setTimeout(() => {
      this.tabBars.forEach((tabBar) => {
        this.newsList.push({
          data: [],
          isLoading: false,
          refreshText: "",
          loadingText: "\u52A0\u8F7D\u66F4\u591A..."
        });
      });
      this.getList(0);
    }, 1e3);
  },
  mounted() {
    this.getChannelList();
  },
  methods: {
    getChannelList() {
      getChannelList((response) => {
        if (response.code == 1) {
          let tabBars = response.data;
          tabBars = tabBars.map((item, index2) => {
            return __spreadProps(__spreadValues({}, item), {
              id: "ID" + index2
            });
          });
          this.tabBars = tabBars;
          this.channelId = response.data[0].Channel_Id;
          userStoreTemp.setNavId(response.data[0].Channel_Id);
          formatAppLog("log", "at pages/tabBar/Home/index.nvue:105", "response", this.tabBars);
        }
      });
    },
    getList(index2) {
      formatAppLog("log", "at pages/tabBar/Home/index.nvue:110", index2);
      getVideoList(this.pageIndex, this.pageSize, this.channelId, (response) => {
        formatAppLog("log", "at pages/tabBar/Home/index.nvue:112", response);
        if (response.code == 1) {
          let videoData = response.data;
          for (let i in videoData) {
            videoData[i].Duration = changeHourMinutestr(videoData[i].Duration);
          }
          let activeTab = this.newsList[index2];
          activeTab.data = activeTab.data.concat(videoData);
          formatAppLog("log", "at pages/tabBar/Home/index.nvue:121", "this.newsList", this.newsList);
        }
      });
    },
    goDetail(e) {
      if (this.navigateFlag) {
        return;
      }
      this.navigateFlag = true;
      uni.navigateTo({
        url: "./detail/detail?id=" + e.Video_ID
      });
      setTimeout(() => {
        this.navigateFlag = false;
      }, 200);
    },
    close(index1, index2) {
      uni.showModal({
        content: "\u662F\u5426\u5220\u9664\u672C\u6761\u4FE1\u606F\uFF1F",
        success: (res) => {
          if (res.confirm) {
            this.newsList[index1].data.splice(index2, 1);
          }
        }
      });
    },
    loadMore(e) {
      setTimeout(() => {
        this.pageIndex = this.pageIndex + 1;
        this.getList(this.tabIndex);
      }, 500);
    },
    ontabtap(e) {
      let index2 = e.target.dataset.current || e.currentTarget.dataset.current;
      this.switchTab(index2);
    },
    ontabchange(e) {
      let index2 = e.target.current || e.detail.current;
      this.switchTab(index2);
    },
    switchTab(index2) {
      if (this.newsList[index2].data.length === 0) {
        for (let i in this.tabBars) {
          if (Number(i) == index2) {
            this.channelId = this.tabBars[i].Channel_Id;
            this.getList(index2);
          }
        }
      }
      if (this.tabIndex === index2) {
        return;
      }
      if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {
        let isExist = this.cacheTab.indexOf(this.tabIndex);
        if (isExist < 0) {
          this.cacheTab.push(this.tabIndex);
        }
      }
      this.tabIndex = index2;
      this.scrollInto = this.tabBars[index2].id;
      formatAppLog("log", "at pages/tabBar/Home/index.nvue:188", "this.scrollInto", this.scrollInto);
      if (this.cacheTab.length > MAX_CACHE_PAGE) {
        let cacheIndex = this.cacheTab[0];
        this.clearTabData(cacheIndex);
        this.cacheTab.splice(0, 1);
      }
    },
    clearTabData(e) {
      this.newsList[e].data.length = 0;
      this.newsList[e].loadingText = "\u52A0\u8F7D\u66F4\u591A...";
    },
    refreshData() {
    },
    onrefresh(e) {
      var tab = this.newsList[this.tabIndex];
      if (!tab.refreshFlag) {
        return;
      }
      tab.refreshing = true;
      tab.refreshText = "\u6B63\u5728\u5237\u65B0...";
      setTimeout(() => {
        this.refreshData();
        this.pulling = true;
        tab.refreshing = false;
        tab.refreshFlag = false;
        tab.refreshText = "\u5DF2\u5237\u65B0";
        setTimeout(() => {
          this.pulling = false;
        }, 500);
      }, 2e3);
    },
    onpullingdown(e) {
      var tab = this.newsList[this.tabIndex];
      if (tab.refreshing || this.pulling) {
        return;
      }
      if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {
        tab.refreshFlag = true;
        tab.refreshText = "\u91CA\u653E\u7ACB\u5373\u5237\u65B0";
      } else {
        tab.refreshFlag = false;
        tab.refreshText = "\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0";
      }
    },
    newGuid() {
      let s4 = function() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
      };
      return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_media_item = resolveComponent("media-item");
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "tabs" }, [
      createElementVNode("scroll-view", {
        id: "tab-bar",
        class: "scroll-h",
        scrollX: true,
        showScrollbar: false,
        scrollIntoView: $data.scrollInto
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.tabBars, (tab, index2) => {
          return openBlock(), createElementBlock("view", {
            key: tab.Channel_Id,
            class: "uni-tab-item",
            id: tab.id,
            "data-current": index2,
            onClick: _cache[0] || (_cache[0] = (...args) => $options.ontabtap && $options.ontabtap(...args))
          }, [
            createElementVNode("u-text", {
              class: normalizeClass(["uni-tab-item-title", $data.tabIndex == index2 ? "uni-tab-item-title-active" : ""])
            }, toDisplayString(tab.ChannelName), 3)
          ], 8, ["id", "data-current"]);
        }), 128))
      ], 8, ["scrollIntoView"]),
      createElementVNode("view", { class: "line-h" }),
      createVNode(_component_swiper, {
        current: $data.tabIndex,
        class: "swiper-box",
        style: { "flex": "1" },
        duration: 300,
        onChange: $options.ontabchange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.newsList, (tab, index1) => {
            return openBlock(), createBlock(_component_swiper_item, {
              class: "swiper-item",
              key: index1
            }, {
              default: withCtx(() => [
                createElementVNode("list", {
                  class: "scroll-v list",
                  enableBackToTop: "true",
                  scrollY: "",
                  loadmoreoffset: "15",
                  onLoadmore: ($event) => $options.loadMore(index1)
                }, [
                  createElementVNode("refresh", {
                    class: "refresh",
                    onRefresh: ($event) => $options.onrefresh(index1),
                    onPullingdown: _cache[1] || (_cache[1] = (...args) => $options.onpullingdown && $options.onpullingdown(...args)),
                    display: tab.refreshing ? "show" : "hide"
                  }, [
                    createElementVNode("div", { class: "refresh-view" }, [
                      createElementVNode("u-image", {
                        class: normalizeClass(["refresh-icon", { "refresh-icon-active": tab.refreshFlag }]),
                        src: _ctx.refreshIcon,
                        style: normalizeStyle({ width: tab.refreshing || $data.pulling ? 0 : "30px" })
                      }, null, 14, ["src"]),
                      tab.refreshing ? (openBlock(), createElementBlock("loading-indicator", {
                        key: 0,
                        class: "loading-icon",
                        animating: "true"
                      })) : createCommentVNode("", true),
                      createElementVNode("u-text", { class: "loading-text" }, toDisplayString(tab.refreshText), 1)
                    ])
                  ], 40, ["onRefresh", "display"]),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(tab.data, (newsitem, index2) => {
                    return openBlock(), createElementBlock("cell", {
                      key: newsitem.id
                    }, [
                      createVNode(_component_media_item, {
                        options: newsitem,
                        onClick: ($event) => $options.goDetail(newsitem)
                      }, null, 8, ["options", "onClick"])
                    ]);
                  }), 128)),
                  tab.isLoading || tab.data.length > 4 ? (openBlock(), createElementBlock("cell", {
                    key: 0,
                    class: "loading-more"
                  }, [
                    createElementVNode("u-text", { class: "loading-more-text" }, toDisplayString(tab.loadingText), 1)
                  ])) : createCommentVNode("", true)
                ], 40, ["onLoadmore"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      }, 8, ["current", "onChange"])
    ])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export { index as default };
