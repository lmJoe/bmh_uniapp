import "./chunk-ZHFIC5LR.js";

// E:/gitproject/bmh_uniapp/node_modules/vue-jsonp/dist/index.esm.js
function e(t2, n2) {
  t2 = t2.replace(/=/g, "");
  var o2 = [];
  switch (n2.constructor) {
    case String:
    case Number:
    case Boolean:
      o2.push(encodeURIComponent(t2) + "=" + encodeURIComponent(n2));
      break;
    case Array:
      n2.forEach(function(n3) {
        o2 = o2.concat(e(t2 + "[]=", n3));
      });
      break;
    case Object:
      Object.keys(n2).forEach(function(r) {
        var a = n2[r];
        o2 = o2.concat(e(t2 + "[" + r + "]", a));
      });
  }
  return o2;
}
function t(e2) {
  var n2 = [];
  return e2.forEach(function(e3) {
    typeof e3 == "string" ? n2.push(e3) : n2 = n2.concat(t(e3));
  }), n2;
}
var n = { install: function(e2) {
  e2.prototype.$jsonp = o;
} };
function o(n2, o2, r) {
  if (o2 === void 0 && (o2 = {}), typeof n2 != "string")
    throw new Error('[Vue-jsonp] Type of param "url" is not string.');
  if (typeof o2 != "object" || !o2)
    throw new Error("[Vue-jsonp] Invalid params, should be an object.");
  return r = typeof r == "number" ? r : 5e3, new Promise(function(a, c) {
    var u = typeof o2.callbackQuery == "string" ? o2.callbackQuery : "callback", i = typeof o2.callbackName == "string" ? o2.callbackName : "jsonp_" + (Math.floor(1e5 * Math.random()) * Date.now()).toString(16);
    o2[u] = i, delete o2.callbackQuery, delete o2.callbackName;
    var s = [];
    Object.keys(o2).forEach(function(t2) {
      s = s.concat(e(t2, o2[t2]));
    });
    var l = t(s).join("&"), f = function() {
      p(), clearTimeout(m), c({ status: 400, statusText: "Bad Request" });
    }, p = function() {
      b.removeEventListener("error", f);
    }, d = function() {
      document.body.removeChild(b), delete window[i];
    }, m = null;
    r > -1 && (m = setTimeout(function() {
      p(), d(), c({ statusText: "Request Timeout", status: 408 });
    }, r)), window[i] = function(e2) {
      clearTimeout(m), p(), d(), a(e2);
    };
    var b = document.createElement("script");
    b.addEventListener("error", f), b.src = n2 + (/\?/.test(n2) ? "&" : "?") + l, document.body.appendChild(b);
  });
}
export {
  n as VueJsonp,
  o as jsonp
};
/**
 * Vue Jsonp.
 * # Carry Your World #
 *
 * @author: LancerComet
 * @license: MIT
 */
//# sourceMappingURL=vue-jsonp.js.map
