import "vue";
import { i as isString } from "./shared.esm-bundler.js";
function requireNativePlugin(name) {
  return weex.requireModule(name);
}
function resolveEasycom(component, easycom) {
  return isString(component) ? easycom : component;
}
export { requireNativePlugin as a, resolveEasycom as r };
