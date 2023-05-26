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
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/shared.esm-bundler.js
  Object.freeze({});
  Object.freeze([]);
  var isString = (val) => typeof val === "string";
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

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/pages/tabBar/My/index.js
  var import_vue4 = __toESM(require_vue());

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  var iconUrl = "/uni_modules/uni-icons/components/uni-icons/uniicons.ttf";
  var _style_0 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
  var getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uniicons",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
      style: (0, import_vue.normalizeStyle)({ color: $props.color, "font-size": $options.iconSize }),
      class: "uni-icons",
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, (0, import_vue.toDisplayString)($options.unicode), 5);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/uni-grid.js
  var import_vue2 = __toESM(require_vue());
  var _style_0$1 = { "uni-grid-item__box": { "": { "position": "relative", "flex": 1, "flexDirection": "column" } }, "uni-grid-item--border": { "": { "position": "relative", "borderBottomColor": "#D2D2D2", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "borderRightColor": "#D2D2D2", "borderRightStyle": "solid", "borderRightWidth": 0.5 } }, "uni-grid-item--border-top": { "": { "position": "relative", "borderTopColor": "#D2D2D2", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-highlight": { "": { "backgroundColor:active": "#f1f1f1" } } };
  var _sfc_main$1 = {
    name: "UniGridItem",
    inject: ["grid"],
    props: {
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        column: 0,
        showBorder: true,
        square: true,
        highlight: true,
        left: 0,
        top: 0,
        openNum: 2,
        width: 0,
        borderColor: "#e5e5e5"
      };
    },
    created() {
      this.column = this.grid.column;
      this.showBorder = this.grid.showBorder;
      this.square = this.grid.square;
      this.highlight = this.grid.highlight;
      this.top = this.hor === 0 ? this.grid.hor : this.hor;
      this.left = this.ver === 0 ? this.grid.ver : this.ver;
      this.borderColor = this.grid.borderColor;
      this.grid.children.push(this);
      this.width = this.grid.width;
    },
    beforeDestroy() {
      this.grid.children.forEach((item, index2) => {
        if (item === this) {
          this.grid.children.splice(index2, 1);
        }
      });
    },
    methods: {
      _onClick() {
        this.grid.change({
          detail: {
            index: this.index
          }
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.width ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
      key: 0,
      style: (0, import_vue2.normalizeStyle)("width:" + $data.width + ";" + ($data.square ? "height:" + $data.width : "")),
      class: "uni-grid-item"
    }, [
      (0, import_vue2.createElementVNode)("view", {
        class: (0, import_vue2.normalizeClass)([{ "uni-grid-item--border": $data.showBorder, "uni-grid-item--border-top": $data.showBorder && $props.index < $data.column, "uni-highlight": $data.highlight }, "uni-grid-item__box"]),
        style: (0, import_vue2.normalizeStyle)({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      }, [
        (0, import_vue2.renderSlot)(_ctx.$slots, "default")
      ], 6)
    ], 4)) : (0, import_vue2.createCommentVNode)("v-if", true);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue"]]);
  var _style_02 = { "uni-grid-wrap": { "": { "flex": 1, "flexDirection": "column" } }, "uni-grid": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "uni-grid--border": { "": { "position": "relative", "borderLeftColor": "#D2D2D2", "borderLeftStyle": "solid", "borderLeftWidth": 0.5 } } };
  var dom = requireNativePlugin("dom");
  var _sfc_main2 = {
    name: "UniGrid",
    emits: ["change"],
    props: {
      column: {
        type: Number,
        default: 3
      },
      showBorder: {
        type: Boolean,
        default: true
      },
      borderColor: {
        type: String,
        default: "#D2D2D2"
      },
      square: {
        type: Boolean,
        default: true
      },
      highlight: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        grid: this
      };
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        elId,
        width: 0
      };
    },
    created() {
      this.children = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
      });
    },
    methods: {
      init() {
        setTimeout(() => {
          this._getSize((width) => {
            this.children.forEach((item, index2) => {
              item.width = width;
            });
          });
        }, 50);
      },
      change(e) {
        this.$emit("change", e);
      },
      _getSize(fn) {
        dom.getComponentRect(this.$refs["uni-grid"], (ret) => {
          this.width = parseInt((ret.size.width - 1) / this.column) + "px";
          fn(this.width);
        });
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", { class: "uni-grid-wrap" }, [
      (0, import_vue2.createElementVNode)("view", {
        id: $data.elId,
        ref: "uni-grid",
        class: (0, import_vue2.normalizeClass)(["uni-grid", { "uni-grid--border": $props.showBorder }]),
        style: (0, import_vue2.normalizeStyle)({ "border-left-color": $props.borderColor })
      }, [
        (0, import_vue2.renderSlot)(_ctx.$slots, "default")
      ], 14, ["id"])
    ]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/uni-grid/components/uni-grid/uni-grid.vue"]]);

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/uni-list.js
  var import_vue3 = __toESM(require_vue());
  var _style_0$2 = { "uni-badge--x": { "": { "position": "relative" } }, "uni-badge--absolute": { "": { "position": "absolute" } }, "uni-badge--small": { "": { "transform": "scale(0.8)", "transformOrigin": "center center" } }, "uni-badge": { "": { "justifyContent": "center", "flexDirection": "row", "height": 20, "paddingTop": 0, "paddingRight": 4, "paddingBottom": 0, "paddingLeft": 4, "lineHeight": 18, "color": "#ffffff", "borderRadius": 100, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#ffffff", "textAlign": "center", "fontFamily": '"Helvetica Neue", Helvetica, sans-serif', "fontSize": 12 } }, "uni-badge--info": { "": { "color": "#ffffff", "backgroundColor": "#8f939c" } }, "uni-badge--primary": { "": { "backgroundColor": "#2979ff" } }, "uni-badge--success": { "": { "backgroundColor": "#18bc37" } }, "uni-badge--warning": { "": { "backgroundColor": "#f3a73f" } }, "uni-badge--error": { "": { "backgroundColor": "#e43d33" } }, "uni-badge--inverted": { "": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 0, "color": "#8f939c" } }, "uni-badge--info-inverted": { "": { "color": "#8f939c", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--primary-inverted": { "": { "color": "#2979ff", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--success-inverted": { "": { "color": "#18bc37", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--warning-inverted": { "": { "color": "#f3a73f", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--error-inverted": { "": { "color": "#e43d33", "backgroundColor": "rgba(0,0,0,0)" } } };
  var _sfc_main$2 = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w = this.width / 2, h = 10;
        if (this.isDot) {
          w = 5;
          h = 5;
        }
        const x = `${-w + this.offset[0]}px`;
        const y = `${-h + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x,
            top: y
          },
          rightBottom: {
            right: x,
            bottom: y
          },
          leftBottom: {
            left: x,
            bottom: y
          },
          leftTop: {
            left: x,
            top: y
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          minWidth: "0",
          height: "10px",
          padding: "0",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", { class: "uni-badge--x" }, [
      (0, import_vue3.renderSlot)(_ctx.$slots, "default"),
      $props.text ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-text", {
        key: 0,
        class: (0, import_vue3.normalizeClass)([$options.classNames, "uni-badge"]),
        style: (0, import_vue3.normalizeStyle)([$options.positionStyle, $props.customStyle, $options.dotStyle]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
      }, (0, import_vue3.toDisplayString)($options.displayValue), 7)) : (0, import_vue3.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  var _style_0$12 = { "uni-list-item": { "": { "fontSize": 16, "position": "relative", "justifyContent": "space-between", "alignItems": "center", "backgroundColor": "#ffffff", "flexDirection": "row" } }, "uni-list-item--disabled": { "": { "opacity": 0.3 } }, "uni-list-item--hover": { "": { "backgroundColor": "#f1f1f1" } }, "uni-list-item__container": { "": { "position": "relative", "flexDirection": "row", "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flex": 1, "overflow": "hidden" } }, "container--right": { "": { "paddingRight": 0 } }, "uni-list--border": { "": { "position": "absolute", "top": 0, "right": 0, "left": 0, "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-list-item__content": { "": { "paddingRight": 8, "flex": 1, "color": "#3b4144", "flexDirection": "column", "justifyContent": "space-between", "overflow": "hidden" } }, "uni-list-item__content--center": { "": { "justifyContent": "center" } }, "uni-list-item__content-title": { "": { "fontSize": 14, "color": "#3b4144", "overflow": "hidden" } }, "uni-list-item__content-note": { "": { "marginTop": "6rpx", "color": "#999999", "fontSize": 12, "overflow": "hidden" } }, "uni-list-item__extra": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uni-list-item__header": { "": { "flexDirection": "row", "alignItems": "center" } }, "uni-list-item__icon": { "": { "marginRight": "18rpx", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uni-list-item__icon-img": { "": { "height": 26, "width": 26, "marginRight": 10 } }, "uni-icon-wrapper": { "": { "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "flex--direction": { "": { "flexDirection": "column" } }, "uni-list--lg": { "": { "height": 40, "width": 40 } }, "uni-list--base": { "": { "height": 26, "width": 26 } }, "uni-list--sm": { "": { "height": 20, "width": 20 } }, "uni-list-item__extra-text": { "": { "color": "#999999", "fontSize": 12 } }, "uni-ellipsis-1": { "": { "lines": 1, "textOverflow": "ellipsis" } }, "uni-ellipsis-2": { "": { "lines": 2, "textOverflow": "ellipsis" } } };
  var _sfc_main$12 = {
    name: "UniListItem",
    emits: ["click", "switchChange"],
    props: {
      direction: {
        type: String,
        default: "row"
      },
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      ellipsis: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: [Boolean, String],
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      showBadge: {
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        type: String,
        default: ""
      },
      badgeType: {
        type: String,
        default: "success"
      },
      badgeStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      rightText: {
        type: String,
        default: ""
      },
      thumb: {
        type: String,
        default: ""
      },
      thumbSize: {
        type: String,
        default: "base"
      },
      showExtraIcon: {
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "",
            color: "#000000",
            size: 20
          };
        }
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        isFirstChild: false
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
      }
    },
    methods: {
      getForm(name = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      onSwitchChange(e) {
        this.$emit("switchChange", e.detail);
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback = {
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback);
            break;
          case "redirectTo":
            uni.redirectTo(callback);
            break;
          case "reLaunch":
            uni.reLaunch(callback);
            break;
          case "switchTab":
            uni.switchTab(callback);
            break;
          default:
            uni.navigateTo(callback);
        }
      }
    }
  };
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue3.resolveDynamicComponent)("uni-icons"), __easycom_2);
    const _component_uni_badge = resolveEasycom((0, import_vue3.resolveDynamicComponent)("uni-badge"), __easycom_1$1);
    const _component_switch = (0, import_vue3.resolveComponent)("switch");
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("cell", null, [
      (0, import_vue3.createElementVNode)("view", {
        class: (0, import_vue3.normalizeClass)([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
        hoverClass: !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        !$data.isFirstChild ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
          key: 0,
          class: (0, import_vue3.normalizeClass)(["border--left", { "uni-list--border": $props.border }])
        }, null, 2)) : (0, import_vue3.createCommentVNode)("v-if", true),
        (0, import_vue3.createElementVNode)("view", {
          class: (0, import_vue3.normalizeClass)(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }])
        }, [
          (0, import_vue3.renderSlot)(_ctx.$slots, "header", {}, () => [
            (0, import_vue3.createElementVNode)("view", { class: "uni-list-item__header" }, [
              $props.thumb ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                key: 0,
                class: "uni-list-item__icon"
              }, [
                (0, import_vue3.createElementVNode)("u-image", {
                  src: $props.thumb,
                  class: (0, import_vue3.normalizeClass)(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
                }, null, 10, ["src"])
              ])) : $props.showExtraIcon ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                key: 1,
                class: "uni-list-item__icon"
              }, [
                (0, import_vue3.createVNode)(_component_uni_icons, {
                  color: $props.extraIcon.color,
                  size: $props.extraIcon.size,
                  type: $props.extraIcon.type
                }, null, 8, ["color", "size", "type"])
              ])) : (0, import_vue3.createCommentVNode)("v-if", true)
            ])
          ]),
          (0, import_vue3.renderSlot)(_ctx.$slots, "body", {}, () => [
            (0, import_vue3.createElementVNode)("view", {
              class: (0, import_vue3.normalizeClass)(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
            }, [
              $props.title ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-text", {
                key: 0,
                class: (0, import_vue3.normalizeClass)(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
              }, (0, import_vue3.toDisplayString)($props.title), 3)) : (0, import_vue3.createCommentVNode)("v-if", true),
              $props.note ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-text", {
                key: 1,
                class: "uni-list-item__content-note"
              }, (0, import_vue3.toDisplayString)($props.note), 1)) : (0, import_vue3.createCommentVNode)("v-if", true)
            ], 2)
          ]),
          (0, import_vue3.renderSlot)(_ctx.$slots, "footer", {}, () => [
            $props.rightText || $props.showBadge || $props.showSwitch ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
              key: 0,
              class: (0, import_vue3.normalizeClass)(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
            }, [
              $props.rightText ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-text", {
                key: 0,
                class: "uni-list-item__extra-text"
              }, (0, import_vue3.toDisplayString)($props.rightText), 1)) : (0, import_vue3.createCommentVNode)("v-if", true),
              $props.showBadge ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_uni_badge, {
                key: 1,
                type: $props.badgeType,
                text: $props.badgeText,
                "custom-style": $props.badgeStyle
              }, null, 8, ["type", "text", "custom-style"])) : (0, import_vue3.createCommentVNode)("v-if", true),
              $props.showSwitch ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_switch, {
                key: 2,
                disabled: $props.disabled,
                checked: $props.switchChecked,
                onChange: $options.onSwitchChange
              }, null, 8, ["disabled", "checked", "onChange"])) : (0, import_vue3.createCommentVNode)("v-if", true)
            ], 2)) : (0, import_vue3.createCommentVNode)("v-if", true)
          ])
        ], 2),
        $props.showArrow || $props.link ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_uni_icons, {
          key: 1,
          size: 16,
          class: "uni-icon-wrapper",
          color: "#bbb",
          type: "arrowright"
        })) : (0, import_vue3.createCommentVNode)("v-if", true)
      ], 10, ["hoverClass"])
    ]);
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12], ["styles", [_style_0$12]], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  var _style_03 = { "uni-list": { "": { "backgroundColor": "#ffffff", "position": "relative", "flexDirection": "column" } }, "uni-list--border": { "": { "position": "relative", "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5, "borderBottomColor": "#e5e5e5", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "zIndex": -1 } } };
  var _sfc_main3 = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e) {
        this.$emit("scrolltolower");
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("list", {
      class: (0, import_vue3.normalizeClass)(["uni-list", { "uni-list--border": $props.border }]),
      enableBackToTop: $props.enableBackToTop,
      loadmoreoffset: "15"
    }, [
      (0, import_vue3.renderSlot)(_ctx.$slots, "default")
    ], 10, ["enableBackToTop"]);
  }
  var __easycom_12 = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/index.js
  function getLocalFilePath(path) {
    if (path.indexOf("_www") === 0 || path.indexOf("_doc") === 0 || path.indexOf("_documents") === 0 || path.indexOf("_downloads") === 0) {
      return path;
    }
    if (path.indexOf("file://") === 0) {
      return path;
    }
    if (path.indexOf("/storage/emulated/0/") === 0) {
      return path;
    }
    if (path.indexOf("/") === 0) {
      var localFilePath = plus.io.convertAbsoluteFileSystem(path);
      if (localFilePath !== path) {
        return localFilePath;
      } else {
        path = path.substr(1);
      }
    }
    return "_www/" + path;
  }
  function pathToBase64(path) {
    return new Promise(function(resolve, reject) {
      if (typeof window === "object" && "document" in window) {
        if (typeof FileReader === "function") {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", path, true);
          xhr.responseType = "blob";
          xhr.onload = function() {
            if (this.status === 200) {
              let fileReader = new FileReader();
              fileReader.onload = function(e) {
                resolve(e.target.result);
              };
              fileReader.onerror = reject;
              fileReader.readAsDataURL(this.response);
            }
          };
          xhr.onerror = reject;
          xhr.send();
          return;
        }
        var canvas = document.createElement("canvas");
        var c2x = canvas.getContext("2d");
        var img = new Image();
        img.onload = function() {
          canvas.width = img.width;
          canvas.height = img.height;
          c2x.drawImage(img, 0, 0);
          resolve(canvas.toDataURL());
          canvas.height = canvas.width = 0;
        };
        img.onerror = reject;
        img.src = path;
        return;
      }
      if (typeof plus === "object") {
        plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function(entry) {
          entry.file(function(file) {
            var fileReader = new plus.io.FileReader();
            fileReader.onload = function(data) {
              resolve(data.target.result);
            };
            fileReader.onerror = function(error) {
              reject(error);
            };
            fileReader.readAsDataURL(file);
          }, function(error) {
            reject(error);
          });
        }, function(error) {
          reject(error);
        });
        return;
      }
      if (typeof wx === "object" && wx.canIUse("getFileSystemManager")) {
        wx.getFileSystemManager().readFile({
          filePath: path,
          encoding: "base64",
          success: function(res) {
            resolve("data:image/png;base64," + res.data);
          },
          fail: function(error) {
            reject(error);
          }
        });
        return;
      }
      reject(new Error("not support"));
    });
  }

  // E:/gitproject/bmh_uniapp/unpackage/dist/dev/.nvue/pages/tabBar/My/index.js
  var _style_0$13 = { "uni-card": { "": { "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "borderRadius": 4, "overflow": "hidden", "fontFamily": "Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif", "backgroundColor": "#ffffff", "flex": 1 } }, "uni-card__cover": { ".uni-card ": { "position": "relative", "marginTop": 10, "flexDirection": "row", "overflow": "hidden", "borderRadius": 4 } }, "uni-card__cover-image": { ".uni-card .uni-card__cover ": { "flex": 1 } }, "uni-card__header": { ".uni-card ": { "display": "flex", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#DCDCDC", "flexDirection": "row", "alignItems": "center", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "overflow": "hidden" } }, "uni-card__header-box": { ".uni-card .uni-card__header ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "uni-card__header-avatar": { ".uni-card .uni-card__header ": { "width": 40, "height": 40, "overflow": "hidden", "borderRadius": 5, "marginRight": 10 } }, "uni-card__header-avatar-image": { ".uni-card .uni-card__header .uni-card__header-avatar ": { "flex": 1, "width": 40, "height": 40 } }, "uni-card__header-content": { ".uni-card .uni-card__header ": { "flexDirection": "column", "justifyContent": "center", "flex": 1, "overflow": "hidden" } }, "uni-card__header-content-title": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 15, "color": "#3a3a3a" } }, "uni-card__header-content-subtitle": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 12, "marginTop": 5, "color": "#909399" } }, "uni-card__header-extra": { ".uni-card .uni-card__header ": { "lineHeight": 12 } }, "uni-card__header-extra-text": { ".uni-card .uni-card__header .uni-card__header-extra ": { "fontSize": 12, "color": "#909399" } }, "uni-card__content": { ".uni-card ": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "fontSize": 14, "color": "#6a6a6a", "lineHeight": 22 } }, "uni-card__actions": { ".uni-card ": { "fontSize": 12 } }, "uni-card--border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDCDC" } }, "uni-card--shadow": { "": { "position": "relative" } }, "uni-card--full": { "": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "borderLeftWidth": 0, "borderRadius": 0 } }, "uni-ellipsis": { "": { "lines": 1 } } };
  var _sfc_main$13 = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        type: Boolean,
        default: false
      },
      isShadow: {
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
      class: (0, import_vue4.normalizeClass)(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
      style: (0, import_vue4.normalizeStyle)({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
    }, [
      (0, import_vue4.createCommentVNode)(" \u5C01\u9762 "),
      (0, import_vue4.renderSlot)(_ctx.$slots, "cover", {}, () => [
        $props.cover ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
          key: 0,
          class: "uni-card__cover"
        }, [
          (0, import_vue4.createElementVNode)("u-image", {
            class: "uni-card__cover-image",
            mode: "widthFix",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
            src: $props.cover
          }, null, 8, ["src"])
        ])) : (0, import_vue4.createCommentVNode)("v-if", true)
      ]),
      (0, import_vue4.renderSlot)(_ctx.$slots, "title", {}, () => [
        $props.title || $props.extra ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
          key: 0,
          class: "uni-card__header"
        }, [
          (0, import_vue4.createCommentVNode)(" \u5361\u7247\u6807\u9898 "),
          (0, import_vue4.createElementVNode)("view", {
            class: "uni-card__header-box",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
          }, [
            $props.thumbnail ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
              key: 0,
              class: "uni-card__header-avatar"
            }, [
              (0, import_vue4.createElementVNode)("u-image", {
                class: "uni-card__header-avatar-image",
                src: $props.thumbnail,
                mode: "aspectFit"
              }, null, 8, ["src"])
            ])) : (0, import_vue4.createCommentVNode)("v-if", true),
            (0, import_vue4.createElementVNode)("view", { class: "uni-card__header-content" }, [
              (0, import_vue4.createElementVNode)("u-text", { class: "uni-card__header-content-title uni-ellipsis" }, (0, import_vue4.toDisplayString)($props.title), 1),
              $props.title && $props.subTitle ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("u-text", {
                key: 0,
                class: "uni-card__header-content-subtitle uni-ellipsis"
              }, (0, import_vue4.toDisplayString)($props.subTitle), 1)) : (0, import_vue4.createCommentVNode)("v-if", true)
            ])
          ]),
          (0, import_vue4.createElementVNode)("view", {
            class: "uni-card__header-extra",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
          }, [
            (0, import_vue4.createElementVNode)("u-text", { class: "uni-card__header-extra-text" }, (0, import_vue4.toDisplayString)($props.extra), 1)
          ])
        ])) : (0, import_vue4.createCommentVNode)("v-if", true)
      ]),
      (0, import_vue4.createCommentVNode)(" \u5361\u7247\u5185\u5BB9 "),
      (0, import_vue4.createElementVNode)("view", {
        class: "uni-card__content",
        style: (0, import_vue4.normalizeStyle)({ padding: $props.padding }),
        onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
      }, [
        (0, import_vue4.renderSlot)(_ctx.$slots, "default")
      ], 4),
      (0, import_vue4.createElementVNode)("view", {
        class: "uni-card__actions",
        onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
      }, [
        (0, import_vue4.renderSlot)(_ctx.$slots, "actions")
      ])
    ], 6);
  }
  var __easycom_03 = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$13], ["styles", [_style_0$13]], ["__file", "E:/gitproject/bmh_uniapp/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  var _style_04 = { "mineModule": { "": { "backgroundColor": "#F9F9F9", "paddingTop": 0, "paddingRight": 0.9375, "paddingBottom": 0, "paddingLeft": 0.9375 } }, "minepersion": { ".mineModule .minepersonData ": { "width": "543rpx", "marginLeft": "39rpx" } }, "name": { ".mineModule .minepersonData .minepersion ": { "textAlign": "left", "paddingTop": "13rpx" } }, "mineGold": { ".mineModule .minepersonData .minepersion ": { "marginTop": "30rpx" }, ".uni-card .uni-card__content ": { "fontSize": "26rpx", "marginLeft": "150rpx" } }, "gold": { ".mineModule .minepersonData .minepersion .mineGold ": { "textAlign": "center", "color": "#777777", "fontSize": "26rpx" } }, "loginTips": { ".mineModule .minepersonData .minepersion ": { "fontSize": "44rpx", "color": "#222222" } }, "taskMudule1": { ".mineModule ": { "width": "694rpx", "marginTop": "51rpx", "backgroundColor": "#ffffff", "borderRadius": "12rpx", "boxShadow": "0px 0px 25rpx 0px #EDEDED", "paddingBottom": "39rpx" } }, "taskItem1": { ".mineModule .taskMudule1 ": { "position": "relative", "!width": "173.5rpx" } }, "image": { ".mineModule .taskMudule1 .taskItem1 ": { "width": "52rpx", "height": "52rpx", "position": "absolute", "top": "38rpx" }, ".mineModule .swiperBanner .swiper-item ": { "width": "694rpx", "height": "128rpx" } }, "title": { ".mineModule .taskMudule1 .taskItem1 ": { "fontSize": "22rpx", "color": "#333333", "position": "absolute", "top": "110rpx", "left": 0, "right": 0 } }, "swiperBanner": { ".mineModule ": { "width": "694rpx", "height": "128rpx", "marginTop": "36rpx" } }, "listModule": { ".mineModule ": { "marginTop": "36rpx", "boxShadow": "0px 0px 25px 0px #EDEDED", "borderRadius": 12 } }, "uni-card--full": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "backgroundColor": "rgba(0,0,0,0)" } }, "uni-card--shadow": { "": { "boxShadow": "none" } }, "uni-card--border": { "": { "borderTopWidth": 0, "borderBottomWidth": 0, "borderLeftWidth": 0, "borderRightWidth": 0 } }, "uni-card__header": { ".uni-card ": { "borderBottomWidth": 0, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "uni-card__header-avatar": { ".uni-card .uni-card__header ": { "width": "140rpx", "height": "140rpx", "borderRadius": 50, "marginRight": "39rpx" } }, "uni-card__header-avatar-image": { ".uni-card .uni-card__header .uni-card__header-avatar ": { "width": "140rpx", "height": "140rpx" } }, "uni-card__header-content-title": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": "44rpx", "color": "#111111" } }, "uni-grid--border": { "": { "borderLeftWidth": 0 } }, "uni-grid-item--border-top": { "": { "borderTopWidth": 0 } }, "uni-grid-item--border": { "": { "borderBottomWidth": 0, "borderRightWidth": 0 } } };
  var _sfc_main4 = {
    data() {
      return {
        userName: "\u5F6D\u4E8E\u664F\u5973\u670B\u53CB",
        totalGold: 500,
        todayGold: 100,
        background: ["color1", "color2", "color3"],
        autoplay: true,
        interval: 2e3,
        duration: 1e3,
        headImg: "../../../static/mine/1.webp",
        headImgList: [
          "../../../static/mine/1.webp",
          "../../../static/mine/2.webp",
          "../../../static/mine/3.webp",
          "../../../static/mine/4.webp",
          "../../../static/mine/5.avif"
        ],
        taskList: [
          {
            id: 1,
            title: "\u9762\u5BF9\u9762\u7EA2\u5305",
            iconImg: "../../../static/mine/icon1.png"
          },
          {
            id: 2,
            title: "\u9080\u8BF7\u6536\u5F92",
            iconImg: "../../../static/mine/icon2.png"
          },
          {
            id: 3,
            title: "\u6211\u7684\u94B1\u5305",
            iconImg: "../../../static/mine/icon3.png"
          },
          {
            id: 4,
            title: "\u63D0\u73B0\u5151\u6362",
            iconImg: "../../../static/mine/icon4.png"
          },
          {
            id: 5,
            title: "\u5168\u6C11\u5077\u91D1\u5E01",
            iconImg: "../../../static/mine/icon5.png"
          },
          {
            id: 6,
            title: "\u5E78\u8FD0\u5927\u8F6C\u76D8",
            iconImg: "../../../static/mine/icon6.png"
          },
          {
            id: 7,
            title: "\u597D\u7269\u5927\u62BD\u5956",
            iconImg: "../../../static/mine/icon7.png"
          },
          {
            id: 8,
            title: "\u91D1\u5E01\u798F\u5229\u793E",
            iconImg: "../../../static/mine/icon8.png"
          }
        ],
        swiperList: [
          {
            link: "./",
            img: "../../../static/mine/banner.png"
          },
          {
            link: "./",
            img: "../../../static/mine/banner.png"
          },
          {
            link: "./",
            img: "../../../static/mine/banner.png"
          }
        ]
      };
    },
    onLoad() {
      pathToBase64(this.headImg).then((base64) => {
        this.headImg = base64;
      }).catch((error) => {
        formatAppLog("error", "at pages/tabBar/My/index.nvue:129", error);
      });
      for (let item in this.swiperList) {
        pathToBase64(this.swiperList[item].img).then((base64) => {
          this.swiperList[item].img = base64;
        }).catch((error) => {
          formatAppLog("error", "at pages/tabBar/My/index.nvue:137", error);
        });
      }
    },
    mounted() {
    },
    methods: {
      taskChange(e) {
        let {
          index: index2
        } = e.detail;
        let id = this.taskList[index2].id;
        uni.navigateTo({
          url: "?id=" + id
        });
      },
      onClick(e) {
        formatAppLog("log", "at pages/tabBar/My/index.nvue:156", "\u6267\u884Cclick\u4E8B\u4EF6", e.data);
        uni.showToast({
          title: "\u70B9\u51FB\u53CD\u9988"
        });
      }
    }
  };
  function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_card = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-card"), __easycom_03);
    const _component_uni_grid_item = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-grid-item"), __easycom_0);
    const _component_uni_grid = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-grid"), __easycom_1);
    const _component_swiper_item = (0, import_vue4.resolveComponent)("swiper-item");
    const _component_swiper = (0, import_vue4.resolveComponent)("swiper");
    const _component_uni_list_item = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-list-item"), __easycom_02);
    const _component_uni_list = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-list"), __easycom_12);
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue4.createElementVNode)("view", { class: "mineModule" }, [
        (0, import_vue4.createElementVNode)("view", { class: "minepersonData" }, [
          (0, import_vue4.createCommentVNode)(` <uni-card :title="userName" :sub-title="'\u91D1\u5E01:'+totalGold+'w' + '\u4ECA\u65E5\u91D1\u5E01\uFF1A'+todayGold+'w'" :isFull="true" :thumbnail="headImg"> `),
          (0, import_vue4.createVNode)(_component_uni_card, {
            title: $data.userName,
            isFull: true,
            thumbnail: $data.headImg
          }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createElementVNode)("view", {
                class: "media-foot flex-row mineGold",
                style: { "flex-direction": "row" }
              }, [
                (0, import_vue4.createElementVNode)("view", {
                  class: "media-info flex-row",
                  style: { "flex-direction": "row" }
                }, [
                  (0, import_vue4.createElementVNode)("view", { class: "gold" }, [
                    (0, import_vue4.createElementVNode)("u-text", null, "\u91D1\u5E01\uFF1A500w ")
                  ]),
                  (0, import_vue4.createElementVNode)("view", {
                    class: "gold",
                    style: { "margin-left": "26rpx" }
                  }, [
                    (0, import_vue4.createElementVNode)("u-text", null, "\u4ECA\u65E5\u91D1\u5E01\uFF1A5100")
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["title", "thumbnail"]),
          (0, import_vue4.createCommentVNode)(' 		<view class="uni-flex uni-column minepersion">\r\n				<view class="loginTips">\r\n					\u70B9\u51FB\u767B\u5F55\r\n				</view>\r\n			</view> ')
        ]),
        (0, import_vue4.createElementVNode)("view", { class: "taskMudule1" }, [
          (0, import_vue4.createVNode)(_component_uni_grid, {
            column: 4,
            highlight: true,
            onChange: $options.taskChange
          }, {
            default: (0, import_vue4.withCtx)(() => [
              ((0, import_vue4.openBlock)(true), (0, import_vue4.createElementBlock)(import_vue4.Fragment, null, (0, import_vue4.renderList)($data.taskList, (item, index2) => {
                return (0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_uni_grid_item, {
                  index: index2,
                  key: item.id,
                  class: "taskItem1"
                }, {
                  default: (0, import_vue4.withCtx)(() => [
                    (0, import_vue4.createElementVNode)("view", { class: "grid-item-box" }, [
                      (0, import_vue4.createElementVNode)("u-image", {
                        class: "image",
                        src: item.iconImg
                      }, null, 8, ["src"]),
                      (0, import_vue4.createElementVNode)("u-text", { class: "title" }, (0, import_vue4.toDisplayString)(item.title), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["index"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["onChange"])
        ]),
        (0, import_vue4.createElementVNode)("view", { class: "uni-margin-wrap" }, [
          (0, import_vue4.createVNode)(_component_swiper, {
            class: "swiper swiperBanner",
            circular: "",
            "indicator-dots": _ctx.indicatorDots,
            autoplay: $data.autoplay,
            interval: $data.interval,
            duration: $data.duration
          }, {
            default: (0, import_vue4.withCtx)(() => [
              ((0, import_vue4.openBlock)(true), (0, import_vue4.createElementBlock)(import_vue4.Fragment, null, (0, import_vue4.renderList)($data.swiperList, (item, index2) => {
                return (0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_swiper_item, { key: index2 }, {
                  default: (0, import_vue4.withCtx)(() => [
                    (0, import_vue4.createElementVNode)("view", {
                      class: "swiper-item",
                      to: item.link
                    }, [
                      (0, import_vue4.createElementVNode)("u-image", {
                        class: "image",
                        src: item.img
                      }, null, 8, ["src"])
                    ], 8, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["indicator-dots", "autoplay", "interval", "duration"])
        ]),
        (0, import_vue4.createVNode)(_component_uni_list, {
          border: false,
          class: "listModule"
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_list_item, {
              border: false,
              to: `./chat`,
              title: "\u9080\u8BF7\u5165\u7FA4",
              showArrow: ""
            }, null, 8, ["to"]),
            (0, import_vue4.createVNode)(_component_uni_list_item, {
              border: false,
              to: `./chat`,
              title: "\u5730\u5740\u7BA1\u7406",
              showArrow: ""
            }, null, 8, ["to"]),
            (0, import_vue4.createVNode)(_component_uni_list_item, {
              border: false,
              to: `./chat`,
              title: "\u5E38\u89C1\u95EE\u9898",
              showArrow: ""
            }, null, 8, ["to"]),
            (0, import_vue4.createVNode)(_component_uni_list_item, {
              border: false,
              to: `./chat`,
              title: "\u53CD\u9988\u6295\u8BC9",
              showArrow: ""
            }, null, 8, ["to"]),
            (0, import_vue4.createVNode)(_component_uni_list_item, {
              border: false,
              to: `./chat`,
              title: "\u8BBE\u7F6E\u4E2D\u5FC3",
              showArrow: ""
            }, null, 8, ["to"])
          ]),
          _: 1
        })
      ])
    ]);
  }
  var index = /* @__PURE__ */ _export_sfc(_sfc_main4, [["render", _sfc_render4], ["styles", [_style_04]], ["__file", "E:/gitproject/bmh_uniapp/pages/tabBar/My/index.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/tabBar/My/index";
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
