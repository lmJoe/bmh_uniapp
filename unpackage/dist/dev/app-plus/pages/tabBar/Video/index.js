"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports2, module2) {
      module2.exports = Vue;
    }
  });

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/shared.esm-bundler.js
  Object.freeze({});
  Object.freeze([]);
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/uni-shared.es.js
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/muqian-lazyLoad.js
  var import_vue = __toESM(require_vue());

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/muqian-lazyLoad.js
  var request = (url, data, option, method2 = "GET") => {
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
  var getRandomArrayElements = (arr, count) => {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index2;
    while (i-- > min) {
      index2 = Math.floor((i + 1) * Math.random());
      temp = shuffled[index2];
      shuffled[index2] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  };
  var getRandomNum = (minnum, maxnum) => {
    var choice = maxnum - minnum + 1;
    return Math.floor(Math.random() * choice + minnum);
  };
  var changeHourMinutestr = (str) => {
    if (str !== "0" && str !== "" && str !== null) {
      return (Math.floor(str / 60).toString().length < 2 ? "0" + Math.floor(str / 60).toString() : Math.floor(str / 60).toString()) + ":" + ((str % 60).toString().length < 2 ? "0" + parseInt((str % 60).toString()) : parseInt((str % 60).toString()));
    } else {
      return "";
    }
  };
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var md5 = { exports: {} };
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
  var Md52 = md5.exports;
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
      tk: Md52(`${ts}_${rd}_${URL.appkey}_${pageSize}`).toUpperCase()
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
  var _style_0 = { "muqian-content": { "": { "overflow": "hidden", "position": "relative" } }, "muqain-load": { ".muqian-content ": { "position": "absolute", "left": 0, "top": 0 } } };
  var loadTimer = null;
  var _sfc_main = {
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
      class: "muqian-content",
      style: (0, import_vue.normalizeStyle)({
        width: $props.width,
        height: $props.height
      })
    }, [
      (0, import_vue.createCommentVNode)(" \u52A0\u8F7D\u4E2D "),
      (0, import_vue.createElementVNode)("u-image", {
        src: $props.loadSrc,
        class: "muqian-image muqain-load",
        onLoad: _cache[0] || (_cache[0] = (...args) => $options.init && $options.init(...args)),
        mode: "aspectFill",
        style: (0, import_vue.normalizeStyle)({
          opacity: $data.isShow ? "0" : "1",
          borderRadius: $props.borderRadius,
          width: $props.width,
          height: $props.height,
          transition: `opacity ${$props.duration / 1e3}s ${$props.effect}`
        })
      }, null, 44, ["src"]),
      (0, import_vue.createCommentVNode)(" \u52A0\u8F7D\u6210\u529F "),
      $data.status == 1 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-image", {
        key: 0,
        class: "muqian-image",
        onLoad: _cache[1] || (_cache[1] = (...args) => $options.load && $options.load(...args)),
        onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args)),
        src: $props.src,
        mode: "aspectFill",
        style: (0, import_vue.normalizeStyle)({
          opacity: $data.isShow ? "1" : "0",
          borderRadius: $props.borderRadius,
          width: $props.width,
          height: $props.height,
          transition: `opacity ${$props.duration / 1e3}s ${$props.effect}`
        })
      }, null, 44, ["src"])) : (0, import_vue.createCommentVNode)("v-if", true),
      (0, import_vue.createCommentVNode)(" \u52A0\u8F7D\u5931\u8D25 "),
      $data.status == 2 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-image", {
        key: 1,
        class: "muqian-image",
        src: $props.errorSrc,
        mode: "aspectFill",
        style: (0, import_vue.normalizeStyle)({
          opacity: $data.isShow ? "1" : "0",
          borderRadius: $props.borderRadius,
          width: $props.width,
          height: $props.height,
          transition: `opacity ${$props.duration / 1e3}s ${$props.effect}`
        })
      }, null, 12, ["src"])) : (0, import_vue.createCommentVNode)("v-if", true)
    ], 4);
  }
  var lazyLoad = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/muqian-lazyLoad/components/muqian-lazyLoad/muqian-lazyLoad.vue"]]);

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/pages/tabBar/Video/index.js
  var import_vue2 = __toESM(require_vue());
  var _style_02 = { "videoContainer": { "": { "fontSize": "14rpx", "lineHeight": "24rpx", "display": "flex", "flexDirection": "row" } }, "right": { ".videoContainer ": { "width": 49, "position": "relative" } }, "left": { ".videoContainer ": { "width": 49, "position": "relative", "marginRight": 2 } }, "pullImg": { ".videoContainer .right ": { "width": 100, "marginBottom": "10rpx" }, ".videoContainer .left ": { "width": 100, "marginBottom": "10rpx" } }, "msgInfo": { ".videoContainer .right ": { "position": "absolute", "bottom": "10rpx", "left": "22rpx", "width": 90, "color": "#ffffff", "fontSize": "28rpx", "lineHeight": "32rpx" }, ".videoContainer .left ": { "position": "absolute", "bottom": "10rpx", "left": "22rpx", "width": 90, "color": "#ffffff", "fontSize": "28rpx", "lineHeight": "32rpx" } }, "title": { ".videoContainer .right .msgInfo ": { "marginBottom": "10rpx" }, ".videoContainer .left .msgInfo ": { "marginBottom": "10rpx" } } };
  var _sfc_main2 = {
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
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_lazyLoad = (0, import_vue2.resolveComponent)("lazyLoad");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "videoContainer" }, [
        (0, import_vue2.createElementVNode)("view", { class: "left" }, [
          ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(import_vue2.Fragment, null, (0, import_vue2.renderList)($data.leftList, (item, index2) => {
            return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
              class: "",
              key: index2,
              onClick: ($event) => $options.smallVideo(item)
            }, [
              (0, import_vue2.createVNode)(_component_lazyLoad, {
                class: "pullImg",
                src: item.CoverImgs,
                height: item.Imgheight,
                mode: "widthFix"
              }, null, 8, ["src", "height"]),
              (0, import_vue2.createCommentVNode)(' <image class="pullImg" v-for="(item,index) in leftList" :key="index" :src="item" alt="" mode="widthFix"></image> '),
              (0, import_vue2.createElementVNode)("view", { class: "msgInfo" }, [
                (0, import_vue2.createElementVNode)("u-text", { class: "title" }, (0, import_vue2.toDisplayString)(item.Title), 1)
              ])
            ], 8, ["onClick"]);
          }), 128))
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "right" }, [
          ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(import_vue2.Fragment, null, (0, import_vue2.renderList)($data.rightList, (item, index2) => {
            return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
              class: "",
              key: index2,
              onClick: ($event) => $options.smallVideo(item)
            }, [
              (0, import_vue2.createVNode)(_component_lazyLoad, {
                class: "pullImg",
                src: item.CoverImgs,
                height: item.Imgheight,
                mode: "widthFix"
              }, null, 8, ["src", "height"]),
              (0, import_vue2.createCommentVNode)(' <image class="pullImg" v-for="(item,index) in rightList" :key="index" :src="item" alt="" mode="widthFix"></image> '),
              (0, import_vue2.createElementVNode)("view", { class: "msgInfo" }, [
                (0, import_vue2.createElementVNode)("u-text", { class: "title" }, (0, import_vue2.toDisplayString)(item.Title), 1)
              ])
            ], 8, ["onClick"]);
          }), 128))
        ]),
        $data.showLoadMore ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
          key: 0,
          class: "uni-loadmore"
        }, [
          (0, import_vue2.createElementVNode)("u-text", null, (0, import_vue2.toDisplayString)($data.loadMoreText), 1)
        ])) : (0, import_vue2.createCommentVNode)("v-if", true)
      ])
    ]);
  }
  var index = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/Video/index.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/tabBar/Video/index";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    index.mpType = "page";
    const app = Vue.createPageApp(index, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...index.styles || []]));
    app.mount("#root");
  }
})();
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
